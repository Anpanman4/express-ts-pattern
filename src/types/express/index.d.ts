import { JwtPayload } from "jsonwebtoken";
import { Payload } from "../payload";

export {};

declare global {
  namespace Express {
    export interface Request {
      user?: string | JwtPayload;
    }
  }
}
