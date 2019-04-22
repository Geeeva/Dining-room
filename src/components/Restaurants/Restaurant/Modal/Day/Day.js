import React from 'react';

const day = props => {
    return (
        <div>
            {props.data[0]} {props.data[1]} - {props.data[2]}
        </div>
    );
}

export default day;