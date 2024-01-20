import jwt from 'jsonwebtoken';  

export const validationJWT = ( req, res, next ) => {
   //x-token headers
   const token = req.header('x-token');

   if ( !token ) {
      return res.status(401).json({
        ok: false,
        msg: 'there not token in request'
      });
   }

   try {

    const { uid, name } = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

     req.uid = uid
     req.name = name

    
   } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: 'Invalid token' 
    })
   }

   next();
}

