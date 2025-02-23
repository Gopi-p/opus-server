import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const jwtMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  next();
  //   const token = req.headers["authorization"]?.split(" ")[1];
  //   if (!token) {
  //     return res.status(401).json({
  //       payload: null,
  //       msg: "Unauthorized: No token provided",
  //       status: false,
  //       code: 401,
  //     });
  //   }
  //   try {
  //     jwt.verify(token, process.env.JWT_SECRET!);
  //     next();
  //   } catch (error) {
  //     return res.status(401).json({
  //       payload: null,
  //       msg: "Unauthorized: Invalid token",
  //       status: false,
  //       code: 401,
  //     });
  //   }
};
