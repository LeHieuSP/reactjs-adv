// import React, { useEffect } from "react";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   addTaskApiAction,
//   deleteTaskAction,
//   doneTaskAction,
//   getAllTaskAction,
//   rejectTaskAction,
// } from "../../redux/actions/types/toDoListAction";

// export default function ToDoList() {
//   //   const [arrTask, setArrTask] = useState([]);
//   const [task, setTask] = useState({ taskName: "", status: false });
//   const { arrTask } = useSelector((rootReducer) => rootReducer.toDoListReducer);
//   const dispatch = useDispatch();

//   useEffect(() => {
//      function GetAllTask() {
//       let action = getAllTaskAction();
//       dispatch(action);
//     }

//     GetAllTask();
//   }, []);

//   console.log("task", task);
//   const handleChangeInput = (e) => {
//     let { value, name } = e.target;
//     setTask({
//       ...task,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const action = addTaskApiAction(task);
//     dispatch(action);
//   };

//   return (
//     <div className="container">
//       <div className="d-flex justify-content-center align-items-center">
//         <div>
//           <h3>To Do List</h3>

//           <form onSubmit={handleSubmit} className="input-group mb-3">
//             <input
//               onChange={handleChangeInput}
//               name="taskName"
//               type="text"
//               className="form-control"
//               placeholder="task name"
//               aria-label="Recipient's username"
//               aria-describedby="basic-addon2"
//             />
//             <div className="input-group-append">
//               <button
//                 type="submit"
//                 className="input-group-button btn btn-success"
//                 id="basic-addon2"
//               >
//                 Add task
//               </button>
//             </div>
//           </form>

//           <table className="table">
//             <tbody>
//               {arrTask
//                 .filter((task) => task.status === true && task.taskName !== "")
//                 .map((task, index) => {
//                   return (
//                     <tr key={index}>
//                       <td>{task.taskName}</td>
//                       <td>
//                         <span className="badge badge-success">completed</span>
//                       </td>
//                       <td>
//                       <button className="btn btn-warning" onClick={()=>{
//                         const action = rejectTaskAction(task.taskName);
//                         dispatch(action);
//                       }}>undo</button>

//                         <button className="btn btn-danger ml-2"  onClick={()=>{
//                           dispatch(deleteTaskAction(task.taskName));
//                         }} >delete</button>
//                       </td>
//                     </tr>
//                   );
//                 })}
//             </tbody>

//             <tfoot>
//               {arrTask
//                 .filter((task) => task.status === false && task.taskName !== "")
//                 .map((task, index) => {
//                   return (
//                     <tr key={index}>
//                       <td>{task.taskName}</td>
//                       <td>
//                         <span className="badge badge-danger">incompleted</span>
//                       </td>
//                       <td>
//                       <button className="btn btn-success" onClick={()=>{
//                         const action = doneTaskAction(task.taskName);
//                         dispatch(action)
//                       }}>done</button>

//                         <button className="btn btn-danger ml-2" onClick={()=>{
//                           dispatch(deleteTaskAction(task.taskName));
//                         }}>delete</button>
//                       </td>
//                     </tr>
//                   );
//                 })}
//             </tfoot>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }
