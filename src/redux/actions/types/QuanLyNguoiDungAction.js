// import axios from 'axios';
// import { ACCESSTOKEN, DOMAIN, TOKEN_CYBERSOFT, USER_LOGIN } from "../../../util/setting";

// export const dangNhapAction = (userLogin) =>{

//     return async dispatch =>{
//         try {
//             let result = await axios({
//                 url: `${DOMAIN}/api/QuanLyNguoiDung/DangNhap`,
//                 method: 'POST',
//                 data: userLogin,
//                 headers: {
//                     'TokenCybersoft': TOKEN_CYBERSOFT,
//                 }
//             });

//             // lưu thông tin user và token khi người dùng đăng nhập thanh công
//             let usLogin = result.data.content;
//             let token = usLogin.accessToken;

//             localStorage.setItem(ACCESSTOKEN,token);
//             localStorage.setItem(USER_LOGIN,JSON.stringify(usLogin));

//             console.log(result.data);

//             // chuyển hướng trang
//             // history.push('/home');
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }
