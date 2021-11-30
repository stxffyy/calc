import React from 'react'
import './CalculatorInput.css'

const CalculatorInput = ({firstNumber, calcOperator, result , secondNumber}) => {
    return (
        <div className = 'calc-input-wrapper'>
            <p className = 'numbers'>{firstNumber} {calcOperator} {secondNumber}</p>
            <p className = 'result'>{result}</p>
        </div>
    )
}

export default CalculatorInput