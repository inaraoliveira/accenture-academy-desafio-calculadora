import React, { useState } from 'react';
import Display from '../Display/Display';


function Calculadora() {

    const [valorInicial, setValorInicial] = useState('');

    function getValue(e){
        setValorInicial(valorInicial + e)
    }

    function viewResult(){
        setValorInicial(eval(valorInicial))
    }

    function clearInput(){
        setValorInicial('')
    }

    return(
        <main>
            <div className='container'>
                <Display valorInicial={valorInicial} className='input'/>
                <button onClick={() => clearInput()} className='limparInput'>C</button>
                <section className='botoes'>
                    <button onClick={(e) => getValue(e.target.value)} className='btn' type="button" value="7">7</button>
                    <button onClick={(e) => getValue(e.target.value)} className='btn' type="button" value="8">8</button>
                    <button onClick={(e) => getValue(e.target.value)} className='btn' type="button" value="9">9</button>
                    <button onClick={(e) => getValue(e.target.value)} className='btn' type="button" value="/">/</button>
                    <button onClick={(e) => getValue(e.target.value)} className='btn' type="button" value="4">4</button>
                    <button onClick={(e) => getValue(e.target.value)} className='btn' type="button" value="5">5</button>
                    <button onClick={(e) => getValue(e.target.value)} className='btn' type="button" value="6">6</button>
                    <button onClick={(e) => getValue(e.target.value)} className='btn' type="button" value="*">*</button>
                    <button onClick={(e) => getValue(e.target.value)} className='btn' type="button" value="1">1</button>
                    <button onClick={(e) => getValue(e.target.value)} className='btn' type="button" value="2">2</button>
                    <button onClick={(e) => getValue(e.target.value)} className='btn' type="button" value="3">3</button>
                    <button onClick={(e) => getValue(e.target.value)} className='btn' type="button" value="-">-</button>
                    <button onClick={(e) => getValue(e.target.value)} className='btn' type="button" value="0">0</button>
                    <button onClick={(e) => getValue(e.target.value)} className='btn' type="button" value=".">.</button>
                    <button onClick={() => viewResult()}type="button" className='btn'>=</button>
                    <button onClick={(e) => getValue(e.target.value)} className='btn' type="button" value="+">+</button>
                </section>
            </div>
        </main>
    )
}

export default Calculadora;