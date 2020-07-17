import React, {useContext} from 'react';
import {ColorContext} from './Color';

export default function Word() {
    const {color} = useContext(ColorContext)
    return (<div style={{'color': color}}>666</div>)
};
