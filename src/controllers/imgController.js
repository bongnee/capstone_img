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

  export {deleteImgById,}