// import { applyMiddleware, combineReducers, compose, createStore } from "redux";

// import reduxThunk from "redux-thunk";
// import { modalReducer } from "./Reducers/ModalReducer";
// import { quanLyNguoiDungReducer } from "./Reducers/quanLyNguoiDungReducer";
// import { toDoListReducer } from "./Reducers/toDoListReducer";

// const rootReducer = combineReducers({
//   //Nơi chứa các state của ứng dụng
//   toDoListReducer,
//   modalReducer,
//   quanLyNguoiDungReducer,
// });

// let middleWare = applyMiddleware(reduxThunk);

// let composeCustom = compose(
//   middleWare,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export const store = createStore(rootReducer, composeCustom);
