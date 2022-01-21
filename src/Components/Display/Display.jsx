import React from 'react';
import './display.css'

function Display({valorInicial}) {
  return(
    <>
        <input value={valorInicial} type="text" disabled className='input'/>
    </>
  );
}

export default Display;