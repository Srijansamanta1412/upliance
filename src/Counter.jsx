
import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Counter() {
    const [value, setValue] = useState(0);
    const [color,setColor]=useState(210);
    const increaseCount = () => {
        setValue(value + 1);
        if(color<253){
        setColor(color+2);
        }
    }
    const decreaseCount = () => {
        if (value > 0){
            setValue(value - 1);
            if(color>=212){
            setColor(color-2);
            }
        }
    }
    const resetCount = () => {
        setValue(0);
        setColor(210);
    }
    return (<>
        <div style={{width:'max-content',padding:20,backgroundColor:`rgb(${color}, 196, 164)`}}>
            <div style={{textAlign:'center', textDecorationStyle:'bold'}}>
                Counter : {value}
            </div>
            <br></br>
            <Stack direction="row" spacing={2}>
                <Button variant="contained" color="error" onClick={decreaseCount}>
                    -
                </Button>

                <Button variant="contained" onClick={resetCount}>
                    RESET
                </Button>
                <Button variant="contained" color="success" onClick={increaseCount}>
                    +
                </Button>
            </Stack>
        </div>
    </>)
}
export default Counter;