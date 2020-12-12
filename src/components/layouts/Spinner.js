import React, {Fragment} from 'react';
import spinner from './spinner.gif';
import '../../App.css';

function Spinner() {
    return (
        <>
          <img src={spinner} 
          alt="Loading..."
          className = "spinner"
          />  
        </>
        )
}

export default Spinner
