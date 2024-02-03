import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

const getUser = async (req, res) => {
    let { id } = req.params;
    let { token } = req.headers;
    let isValidToken = checkToken(token);
    console.log(isValidToken)
    try {
      let data = await prisma.users.findMany({
        where: {
          id: Number(id),
        },
      });
  
      if (data.length === 0) {
        res.send("user id does not exits");
      } else {
        if (data.id == isValidToken.data.data.id) {

          res.send(isValidToken.data);
        } else {
         
          res.send(data);
        }
      }
    } catch (error) {
      res.send(`BE error ${error}`);
    }
  };

  const getSavedImgdByUserId = async (req, res) => {
    let { id } = req.params;
  
    try {
      let data = await prisma.saved_imaged.findMany({
        where: {
          user_id: Number(id),
        },
      });
  
      if (data.length === 0) {
        res.send("user id does not exits");
      } else {
        res.send(data);
      }
    } catch (error) {
      res.send(`BE error ${error}`);
    }
  };

  const getImgCreatedByUserId = async (req, res) => {
    let { id } = req.params;
  
    try {
      let data = await prisma.image.findMany({
        where: {
          user_id: Number(id),
        },
      });
  
      if (data.length === 0) {
        res.send("user id does not exits");
      } else {
        res.send(data);
      }
    } catch (error) {
      res.send(`BE error ${error}`);
    }
  };

  export {getUser,getSavedImgdByUserId, getImgCreatedByUserId}
