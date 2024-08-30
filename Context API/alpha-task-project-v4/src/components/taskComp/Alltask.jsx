import React, { useContext } from 'react'
import { TaskContext } from './../../context/TaskContext';
import Task from './Task';

const Alltask = () => {
  let {task}=useContext(TaskContext)
  return (
    <section id="task">
        <article>
            <h2>All Task</h2>
            <div className="list">
              {
                task===null ? "loading" :task.length>0 && task.map(t=>{
                  return <Task key={t.id}{...t}/>
                })
              }
            </div>
        </article>
    </section>
  )
}

export default Alltask