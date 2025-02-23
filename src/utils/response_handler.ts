import { Response } from "express";

export const sendResponse = (
  res: Response,
  payload: any,
  msg: string,
  status: boolean,
  code: number
) => {
  res.status(code).json({ payload, msg, status, code });
};
