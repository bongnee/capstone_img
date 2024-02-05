import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getComment = async (req, res) => {
    let { img_id } = req.params;
    console.log(img_id);
    try {
      if (!img_id) {
        img_id = "";
      }
      let data = await prisma.comments.findMany({
        where: {
          img_id: Number(img_id),
         
        },
      });
  
      res.send(data);
    } catch (error) {
      res.send(`BE error ${error}`);
    }
  };
  const getSavedImaged = async (req, res) => {
    let { id } = req.params;
  
    try {
      let data = await prisma.saved_imaged.findMany({
        where: {
         id: Number(id),
        },
      });
    
      if (data.length === 0) {
        res.send("img id does not exits");
      } else {
        res.send(data);
      }
    } catch (error) {
      res.send(`BE error ${error}`);
    }
  };

  const createComment = async (req, res) => {
    try {
      let day = new Date();
      let strDay = day.toISOString();
      let { id, user_id, img_id,content} = req.body;
      let newData = {
        id,
         user_id, 
         img_id, 
         comment_day:strDay,
         content,
      };
      await prisma.comments.create({
        data: newData
      }
       );
      res.send("create comment successfully");
    } catch (error) {
      res.send(`BE error ${error}`);
    }
  };
  

  export {getComment, createComment,}