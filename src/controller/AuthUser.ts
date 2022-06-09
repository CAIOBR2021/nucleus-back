import {Request,Response, NextFunction} from 'express';
import * as jwt from 'jsonwebtoken';


export const Authenticate = async(request: Request, response: Response, next: NextFunction) =>{

  const authHeader = request.headers.authorization;
   if (!authHeader){
     return response.status(401).json({message:'Token requerido!'});
   }

   const [ ,token] = authHeader.split(' ');

   try {
     //await jwt.verify(token, process.env.APP_SECRET);
     await jwt.verify(token, '4486c0f76776e7d6c2fc60299c1e1405');
     next();
     
   } catch (error) {

    return response.status(401).json({message:'Token inválido!'});
     
   }

}
