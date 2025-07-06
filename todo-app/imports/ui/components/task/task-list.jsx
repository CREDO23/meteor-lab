import React from 'react';
import { TaskItem } from './task-item';

export function TaskList (props) {
    const { tasks } = props
    return (
        <div>
            {tasks.map((task) => (
                <TaskItem key={task._id} title={task.title}/>
            ))}
        </div>
    )
}