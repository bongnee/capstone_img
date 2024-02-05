import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const deleteImgById = async (req, res) => {
    try {
      let { id } = req.params;
  
      const findImg = await prisma.image.findUnique({
        where: {
          id: Number(id),
        },
      });
      if (findImg) {
        await prisma.image.delete({
          where: {
            id: Number(id),
          },
        });
        res.send("You just deleted the image");
      } else {
        res.send("Image not found");
      }
    } catch (error) {
      console.error(`Backend error: ${error}`);
      res.status(500).send("Internal Server Error");
    }
  };

  const getImg = async (req, res) => {
    let { img_name } = req.query;
    try {
      if (!img_name) {
        img_name = "";
      }
      let data = await prisma.image.findMany({
        where: {
          img_name: {
            contains: img_name,
          },
        },
      });
  
        res.send(data);
      
    } catch (error) {
      res.send(`BE error ${error}`);
    }
  };

  const getImgDetail = async (req, res) => {
    let { id } = req.params;
   
    try {
      if (!id) {
       id = "";
      }
      let data = await prisma.image.findMany({
        where: {
          id: Number(id),
        },
        include: {
          users: true,
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



  export {deleteImgById, getImg, getImgDetail, getSavedImaged}