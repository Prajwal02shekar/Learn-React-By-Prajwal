import React, { useContext, useState } from "react";
import { TaskContext } from "../../context/TaskContext";

const TaskForm = () => {
  let{addTask}=useContext(TaskContext)
  let [state, setState] = useState({
    title: "",
    author: "",
    description: "",
    status: false,
  });

  let { title, author, description, status } = state;
  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handlesubmit = (e) => {
    e.preventDefault();
    try {
      addTask(title, author, description);
     e.target.firstChild.focus();
      setState({ title: "", author: "", description: "" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id="form">
      <article>
        <h2>add task to the basket</h2>
        <main>
          <form onSubmit={handlesubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                placeholder="Enter Title"
                value={title}
                onChange={handleChange}
                name="title"
                id="title"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="author">Author</label>
              <input
                type="text"
                placeholder="Enter the Author Name"
                value={author}
                onChange={handleChange}
                name="author"
                id="author"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                value={description}
                onChange={handleChange}
                name="description"
                id="description"
                rows="5"
                // cols="30"
              />
            </div>
            <div className="form-grout">
              <button>{status === true ? "loading..." : "add task"}</button>
            </div>
          </form>
        </main>
      </article>
    </section>
  );
};

export default TaskForm;
