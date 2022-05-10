import React, { useState } from 'react';

const FunctionState = () => {
   const [increment, setIncrement] = useState(0);

   function handleClick() {
       setIncrement(increment + 1);
   }

    return (
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <p style={{fontSize: '30px'}}>{increment}</p>
            <button style={{ background: 'coral', color: '#fff', width: '180px', height: '40px', border: 'none', borderRadius: '10px'  }} onClick={() => handleClick()}>Botão de incremento</button>
        </div>
    )
}

export default FunctionState;