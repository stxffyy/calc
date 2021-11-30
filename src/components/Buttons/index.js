import React from "react"
import './Buttons.css'

const Buttons = ({calculateFunction}) => {

    return(
        <div className = 'buttons-wrapper'>
            <button></button>
            <button value = {'C'} onClick = {(e) => calculateFunction(e.target.value)}> C </button>
            <button value = {'%'} onClick = {(e) => calculateFunction(e.target.value)}> % </button>
            <button value = {'/'} onClick = {(e) => calculateFunction(e.target.value)} className = 'operator'>/</button>
            
            <button value = {'1'} onClick = {(e) => calculateFunction(e.target.value)}> 1 </button>
            <button value = {'2'} onClick = {(e) => calculateFunction(e.target.value)}> 2 </button>
            <button value = {'3'} onClick = {(e) => calculateFunction(e.target.value)} >3 </button>
            <button value = {'*'} onClick = {(e) => calculateFunction(e.target.value)} className = 'operator' >*</button>

            <button value = {'4'} onClick = {(e) => calculateFunction(e.target.value)} >4</button>
            <button value = {'5'} onClick = {(e) => calculateFunction(e.target.value)}>5</button>
            <button value = {'6'} onClick = {(e) => calculateFunction(e.target.value)}>6</button>
            <button value = {'-'} onClick = {(e) => calculateFunction(e.target.value)} className = 'operator'>-</button>

            <button value = {'7'} onClick = {(e) => calculateFunction(e.target.value)}>7</button>
            <button value = {'8'} onClick = {(e) => calculateFunction(e.target.value)}>8</button>
            <button value = {'9'} onClick = {(e) => calculateFunction(e.target.value)}>9</button>
            <button value = {'+'} onClick = {(e) => calculateFunction(e.target.value)} className = 'operator'>+</button>

            <button value = {'.'} onClick = {(e) => calculateFunction(e.target.value)} >.</button>
            <button value = {'0'} onClick = {(e) => calculateFunction(e.target.value)} >0</button>
            <button value = {'='} onClick = {(e) => calculateFunction(e.target.value)} className = 'operator'>=</button>
        </div>
    )
}

export default Buttons;