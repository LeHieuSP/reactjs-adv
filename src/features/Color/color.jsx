import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

ColorFeature.propTypes = {

};

function getRandomColor() {
    const COLOR_LIST = ['deeppink','green','yellow','black','blue'];
    const randomIndex = Math.trunc(Math.random() * 5);
        
    return COLOR_LIST[randomIndex];
}

function ColorFeature(props) {
    const [color,setColor] = useState(()=>{
        const initColor = localStorage.getItem('box_color') || 'deeppink';
        return initColor;
    });

    function handleBoxClick() {
        const newColor = getRandomColor();
        setColor(newColor);

        localStorage.setItem('box_color', newColor)
    }

    return (
        <div className='color-box' style={{backgroundColor: color, cursor:'pointer'}} onClick={handleBoxClick} >

            COLOR BOX
        </div>
    );
}

export default ColorFeature;