import React from 'react'
import spinner from '../../img/spinner.svg'

const Spinner = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img loading='eager' src={spinner} alt='spinner'/>
        </div>
    )
}

export default Spinner;
