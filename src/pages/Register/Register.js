// import React, { Component } from 'react'
// import { Prompt } from 'react-router-dom'

// export default class Register extends Component {

//   state = {
//     submitted: true
//   }

//   handleSubmit = (e) => {
//     this.setState({
//       submitted: false
//     })
//     e.preventDefault()

//   }
//   render() {
//     return (
//       <form className='container' onSubmit={this.handleSubmit}>
//         <h3>Đăng ký</h3>
//         <div className='form-group'>
//           <p>Tài khoản</p>
//           <input name='taiKhoan' className='form-control' />
//         </div>
//         <div className='form-group'>
//           <p>Họ tên</p>
//           <input name='hoTen' className='form-control' />
//         </div>
//         <div className='form-group'>
//           <p>Mật khẩu</p>
//           <input name='matKhau' className='form-control' type="password" />
//         </div>
//         <div className='form-group'>
//           <p>Email</p>
//           <input name='email' className='form-control' />
//         </div>
//         <div className='form-group'>
//           <p>Số điện thoại</p>
//           <input name='soDienThoai' className='form-control' />
//         </div>
//         <div className='form-group'>
//           <button type='submit' className='btn btn-success'>Đăng ký</button>
//         </div>

//         <Prompt
//           when={this.state.submitted}
//           message={location => ('Bạn thực sự muốn rời khỏi trang ???')}

//         />
//       </form>
//     )
//   }
// }
