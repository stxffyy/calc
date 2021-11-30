import React, { useState } from 'react'
import './Calculator.css'

import CalculatorInput from "../CalculatorInput";
import Buttons from '../Buttons'

const Calculator = () => {
 
  const [firstNumber, setFirstNumber] = useState('')
  const [secondNumber, setSecondNumber] = useState('')
  const [operator, setOperator] = useState('')
  const [result, setResult] = useState('')

  const [calcOperator, setCalcOperator] = useState(false)
  const [isSecondOperator, setSecondOperator] = useState(true)
  const [firstClick, setFirstClick] = useState(false)
  const [firstCalc, setFirstCalc] = useState(false)

  const [calc, setCalc] = useState({
    'firstNumber': '',
    'calcOperator': '',
    'secondNumber': '',
    'lastNumber': ''
  })

  const showAndUpdateCalcState = (num) => {
    if(calcOperator === false){
      if(firstCalc){
        clearInputAndOperation(num, true)
        setFirstCalc(false)
      }if( num === '.'){
        calc.firstNumber += num
        setFirstNumber(firstNumber + num)
        calc.lastNumber = ''
      }else if (num === 'backspace'){
        setCalc({
          'firstNumber': calc.firstNumber.slice(0, -1),
          'calcOperator': '',
          'secondNumber': ''
        })
        setFirstNumber(firstNumber)
      }else{
        calc.firstNumber += num
        setFirstNumber(firstNumber + num)
        calc.lastNumber = ''
      }
    }else{
      if (num === '.'){
        calc.secondNumber += num
        setSecondNumber(secondNumber + num)
      }else if(num === 'backspace'){
        setCalc({
          'firstNumber': calc.firstNumber,
          'calcOperator': calc.calcOperator,
          'secondNumber': calc.secondNumber.slice(0, -1),
        })
      }else{
        calc.secondNumber += num
        setSecondNumber(secondNumber + num)
      }
    }
  }

  const handleActiveOperator = (num) => {
    calc['calcOperator'] = num
    setOperator(num)
    setCalcOperator(true)
    setSecondOperator(false)

    if(firstClick){
      setCalc({
        'firstNumber': calc.lastNumber,
        'calcOperator': calc.calcOperator,
        'secondNumber': '',
      })
      setFirstNumber(calc.lastNumber)
      setSecondNumber('')
    }

    setFirstClick(true)
  }
  
  const handleGetValues = (num) => {
    const operations = {
      '+': (num1, num2) => (parseFloat(num1) + parseFloat(num2)),
      '-': (num1, num2) => (parseFloat(num1) - parseFloat(num2)),
      '/': (num1, num2) => (parseFloat(num1) / parseFloat(num2)),
      '%': (num1, num2) => (parseFloat(num1) % parseFloat(num2)),
      '*': (num1, num2) => (parseFloat(num1) * parseFloat(num2)),
    }
    let result = operations[calc['calcOperator']](calc.firstNumber, calc.secondNumber)
    calc.lastNumber = result
    setResult(result)
    setSecondOperator(true)
    setCalcOperator(false)
    setFirstCalc(true)
  }
  
  const clearInputAndOperation = (num, calculateFunctionDnv) => {
    if(calculateFunctionDnv){
      setCalc({
        'firstNumber': num,
        'calcOperator': calc.calcOperator,
        'secondNumber': '',
      })

      setFirstClick(false)
      setResult('')
      setFirstNumber('')
      setSecondNumber('')
      setOperator('')
    }else{
      setCalc({
        'firstNumber': '',
        'calcOperator': calc.calcOperator,
        'secondNumber': '',
      })

      setFirstClick(false)
      setResult('')
      setFirstNumber('')
      setSecondNumber('')
      setOperator('')
    }
  }
  
  const calculateFunction = (num) => {
    if (!isNaN(num) || num === '.' || num === 'backspace'){
      showAndUpdateCalcState(num)
    }else if ((num === '+' || num === '-' || num === '/' || num === '*' || num === '%') & isSecondOperator){
      handleActiveOperator(num)
    }else if(num === 'C'){
      clearInputAndOperation()
    }else if(num === '='){
      if(calc.secondNumber !== ''){
        handleGetValues(num)
      }
    }
  }

  return(
      <div className = 'calculate-wrapper'>
        <CalculatorInput
            result = {result}
            firstNumber = {calc.firstNumber}
            secondNumber = {calc.secondNumber}
            calcOperator = {operator}
        />
        <Buttons calculateFunction = {calculateFunction} />
      </div>
  )
}

export default Calculator;