import jwt  from "jsonwebtoken"

export const generateToken = (userId) => {

	return new Promise (( resolve, reject )=>{
    
    jwt.sign( { userId }, process.env.JWT_SECRET, {
       expiresIn: '2h'
    }, ( err, token ) => {

      if ( err ) {
        reject(`Token could not be generated: ${err}`)
      }
      
      resolve( token ); 
    })  

	})
}