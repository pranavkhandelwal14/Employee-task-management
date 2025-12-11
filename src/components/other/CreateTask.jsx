import React, { useState } from "react";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskAsignTo, setTaskAsignTo] = useState("");
  const [category, setCategory] = useState("");
  
  const [newTask, setNewTask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();

    setNewTask({taskTitle,taskDescription,taskDate,category,active:false,newTask:true,FailedTask:false,completed:false})
    const data = JSON.parse(localStorage.getItem('employees'))

    data.forEach(function(elem){
      if(taskAsignTo == elem.firstName){
        elem.tasks.push(newTask)

      }
    })
    localStorage.setItem('employees',JSON.stringify(data))
    setCategory('')
    setTaskAsignTo('')
    setTaskDate('')
    setTaskTitle('')
    setTaskDescription('')
  };

  return (
    <div className="p-5 bg-[#1C1C1C] mt-7 rounded">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap w-full items-start justify-between"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              type="text"
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
              placeholder="Make a UI Design"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              type="date"
              value={taskDate}
              onChange={(e) => {
                setTaskDate(e.target.value);
              }}
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Asign to</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              type="text"
              value={taskAsignTo}
              onChange={(e) => {
                setTaskAsignTo(e.target.value);
              }}
              placeholder="Employee Name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              type="text"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              placeholder="design,dev,etc"
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400"
            name=""
            id=""
            value={taskDescription}
            onChange={(e) => {
              setTaskDescription(e.target.value);
            }}
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
