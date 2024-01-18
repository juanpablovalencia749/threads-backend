import User from "../models/User.js";
import jwt from "jsonwebtoken"

export const protectRoute = async (req, res, next) => {
  try {

 


  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080'); // Reemplaza con la URL de tu aplicación React
  res.setHeader('Access-Control-Allow-Credentials', 'true');


// Resto de la configuración de tu servidor

    const token = req.cookies.jwt

    if (!token) return res.status(401).json({message: "Unauthorized"}) 

    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decode.userId).select("-password")

    req.user = user

    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
		console.log("Error in protectUser: ", error.message);
  }
}
