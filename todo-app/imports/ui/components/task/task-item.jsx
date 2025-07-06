import React from 'react';

export function TaskItem(props){
    const {title} = props
    return (
        <div>
            <p>{title}</p>
        </div>
    )
}