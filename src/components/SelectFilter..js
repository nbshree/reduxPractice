import React from 'react';
import PropTypes from "prop-types";

const SelectFilter =({selectEvent})=>(
    <select onChange={(e)=>{selectEvent(e.target.value)}}>
        <option value="all">all</option>
        <option value="completed">completed</option>
        <option value="active">active</option>
    </select>
);
SelectFilter.propTypes = {
    selectEvent: PropTypes.func.isRequired,
};
export default SelectFilter;
