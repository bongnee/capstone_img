// import jwt from "jsonwebtoken";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// const createToken = (data) =>{
//     return jwt.sign(data, "NODE38", {expiresIn: "1y"})
// };
// const checkToken = (token) => {
//     // zxczxczxczxczxczxasdasdwfqwfqwfqwf => {user_id: 7}, iat: ....., exp:......
//     return jwt.verify(token, "NODE38", (err, decoded) => {
//         if(err) { // nếu giải mã thất bại -> sẽ có error message
//             return {
//                 statusCode: 401, // 401 - unauthorized
//                 message: "Invalid token"
//             }
//         }
//         // giải mã thành công
//         return {
//             statusCode: 200,
//             data: decoded
//         }
//     })
// }
// const khoaApi = async (req, res, next) => {
//     // nếu thỏa yêu cầu của middleware thì bypass
//     let {token} = req.headers;
//     // kiểm trả có token trên header
//     if(token){
//         let verifyToken = checkToken(token);
//         if(verifyToken.statusCode == 401) {
//             res.status(401).send("Invalid token")
//             return
//         }
//         // nếu muốn check role
//         let {user_id} = verifyToken.data;

//         // check user_id có tồn tại trong DB hay không ?
//         let checkUser = await conn.users.findOne({
//             where: {
//                 user_id: user_id
//             }
//         })
//         if(!checkUser) {
//             res.status(401).send("Invalid token")
//             return
//         }
//         // handle logic ở đây
//         next(); // bypass
//     } else {
//         res.status(401).send("Unauthorized");
//         return
//     }
// } 

// export {
//     createToken,
//     checkToken,
//     khoaApi
// }

import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const createToken = (data) => {
  return jwt.sign({ data }, "KEYMAHOA", { expiresIn: "1y" });
};
const checkToken = (token) => {
  // value of decoded => : userId, iat, exp...
  return jwt.verify(token, "KEYMAHOA", (err, decoded) => {
    if (err) {
      return {
        statusCode: 401, // unauthorized
        message: "invalid token",
      };
    }
    return {
      statusCode: 200,
      data: decoded,
    };
  });
};

const verifyToken = async (req, res, next) => {
  let { token } = req.headers;
  if (!token) {
    res.status(401).send("Invalid token");
    return;
  }
  let isValidToken = checkToken(token);
  if (isValidToken.statusCode == 401) {
    res.status(401).send(isValidToken.message);
    return;
  }
console.log(isValidToken.data)
 // check user có trong db hay không

//   let { id } = isValidToken.data;
//   let data = await prisma.users.findUnique({
//     where: {
//       id:Number(id),
//     },
//   });
//   if (!data) {
//     res.status(401).send("invalid token");
//     return;
//   }

  next(); //bypass
};
export { createToken, verifyToken,checkToken };

