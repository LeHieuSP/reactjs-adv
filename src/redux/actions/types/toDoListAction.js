// import axios from "axios";

// // closure function
// export const getAllTaskAction = () => {
//   return async (dispatch) => {
//     try {
//       let result = await axios({
//         url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
//         method: "GET",
//       });

//       // sau khi lấy dữ liệu từ backend về => dispatch dữ liệu đó lên redux
//       const action = {
//         type: "GET_ALL_TASK",
//         arrTask: result.data,
//       };
//       dispatch(action);
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const addTaskApiAction = (task) => {
//   return async (dispatch) => {
//     try {
//       let result = await axios({
//         url: "http://svcy.myclass.vn/api/ToDoList/AddTask",
//         method: "POST",
//         data: task,
//       });
//       // sau khi thêm task thành công => dispatch logic getAllTaskAction()
// console.log(result.data);
//       const action = getAllTaskAction();
//       dispatch(action);
//     } catch (error) {
//       console.log("error", error);
//     }
//   };
// };

// export const doneTaskAction = (taskName) =>{

//   return async (dispatch) =>{
//     try {
//       let result = await axios({
//         url: 'http://svcy.myclass.vn/api/ToDoList/doneTask?taskName='+taskName ,
//         method: 'PUT',

//       });

//       await dispatch(getAllTaskAction());
//     } catch (error) {
//       console.log(error);
//     }
//   }
// }

// export const rejectTaskAction = (taskName) =>{

//   return async (dispatch)=>{
//     try {
//       let result = await axios({
//         url: `http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`,
//         method: 'PUT'
//       });

//       dispatch(getAllTaskAction());
//     } catch (error) {
//       console.log(error);
//     }
//   }
// }

// export const deleteTaskAction = (taskName) =>{

//   return async (dispatch) =>{

//     try {
//       let result = await axios({
//         url: 'http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=' + taskName,
//         method: 'DELETE'
//       })

//       dispatch(getAllTaskAction());
//     } catch (error) {
//       console.log(error);
//     }
//   }
// }
