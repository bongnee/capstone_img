import { PrismaClient } from "@prisma/client";
import { createToken, verifyToken,checkToken } from "../config/jwt.js";
import bryct from "bcrypt";

const prisma = new PrismaClient();
// đăng nhập

const signIn = async (req, res) => {
  try {
    let { id, password } = req.body;
    let data = await prisma.users.findUnique({
      where: {
        id,
      },
    });
    if (data) {
      let checkPassword = bryct.compareSync(password, data.password);
      if (checkPassword) {
        let payload = {
          id: data.user_id,
          email: data.email,
          password: data.password,
          name: data.user_name
          
        };

        let token = createToken(payload);
        res.status(200).send(token);
      } else {
        res.status(400).send("wrong pass!")
      }
    } else {
        res.status(400).send("sign in fail!");
    }
  } catch (error) {
    res.send(`BE error: ${error}`)
  }
};

// đăng ký 

const signUp = async (req, res) => {
    try {
      let { id, email, password, name} = req.body;
  
      const data = await prisma.users.findUnique({
        where: {
          id,
        },
      });
  
      if (data) {
        res.status(400).send("User exists!");
      } else {
        let encodePassword = bcrypt.hashSync(password, 10);
        let newUser = {
          id,
          email,
          password: encodePassword,
          name    
        };
        await prisma.users.create({
          data: newUser,
        });
        res.status(201).send("create user!");
      }
    } catch (error) {
      res.status(500).send(`Backend error: ${error}`);
    }
  };


  export {
    signIn,
    signUp,
  }