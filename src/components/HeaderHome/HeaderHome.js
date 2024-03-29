// import React from "react";
// import { useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";

// export default function HeaderHome() {
//   const { userLogin } = useSelector(
//     (rootReducer) => rootReducer.quanLyNguoiDungReducer
//   );
//   const renderLogin = () => {
//     if (userLogin) {
//       return (
//         <NavLink
//           exact
//           activeClassName="bg-white text-dark"
//           className="nav-link"
//           to="/profile"
//         >
//           Helo ! {userLogin.hoTen}
//         </NavLink>
//       );
//     }
//     return <NavLink exact activeClassName='bg-white text-dark' className="nav-link" to="/login">Login</NavLink>

//   };

//   return (
//     <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
//       <NavLink className="navbar-brand" to="/">
//         Cybersoft
//       </NavLink>
//       <button
//         className="navbar-toggler d-lg-none"
//         type="button"
//         data-toggle="collapse"
//         data-target="#collapsibleNavId"
//         aria-controls="collapsibleNavId"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       />
//       <div className="collapse navbar-collapse" id="collapsibleNavId">
//         <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
//           <li className="nav-item active">
//             <NavLink
//               exact
//               activeClassName="bg-white text-dark"
//               className="nav-link"
//               to="/home"
//             >
//               Home <span className="sr-only">(current)</span>
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink
//               activeStyle={{ color: "orange" }}
//               exact
//               activeClassName="bg-white"
//               className="nav-link"
//               to="/about"
//             >
//               About
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink
//               exact
//               activeClassName="bg-white text-dark"
//               className="nav-link"
//               to="/contact"
//             >
//               Contact
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink
//               exact
//               activeClassName="bg-white text-dark"
//               className="nav-link"
//               to="/register"
//             >
//               Register
//             </NavLink>
//           </li>
//           <li className="nav-item">{renderLogin()}</li>
//           <li className="nav-item">
//             <NavLink
//               exact
//               activeClassName="bg-white text-dark"
//               className="nav-link"
//               to="/demohocmodal"
//             >
//               HOC
//             </NavLink>
//           </li>
//           <li className="nav-item dropdown">
//             <a
//               className="nav-link dropdown-toggle"
//               href="#"
//               id="dropdownId"
//               data-toggle="dropdown"
//               aria-haspopup="true"
//               aria-expanded="false"
//             >
//               Hooks
//             </a>
//             <div className="dropdown-menu" aria-labelledby="dropdownId">
//               <NavLink className="dropdown-item" to="/hookusestate">
//                 UseState
//               </NavLink>
//               <NavLink className="dropdown-item" to="/hookuseeffect">
//                 useEffect
//               </NavLink>
//               <NavLink className="dropdown-item" to="/hookusecallback">
//                 useCallBack
//               </NavLink>
//               <NavLink className="dropdown-item" to="/hookusememo">
//                 useMemo
//               </NavLink>
//               <NavLink className="dropdown-item" to="/hookuseref">
//                 useRef
//               </NavLink>
//               <NavLink className="dropdown-item" to="/hookredux">
//                 hookredux
//               </NavLink>
//               <NavLink className="dropdown-item" to="/todolist">
//                 To do list
//               </NavLink>
//             </div>
//           </li>
//         </ul>
//         <form className="form-inline my-2 my-lg-0">
//           <input
//             className="form-control mr-sm-2"
//             type="text"
//             placeholder="Search"
//           />
//           <button
//             className="btn btn-outline-success my-2 my-sm-0"
//             type="submit"
//           >
//             Search
//           </button>
//         </form>
//       </div>
//     </nav>
//   );
// }
