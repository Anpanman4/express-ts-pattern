import { JwtPayload } from "jsonwebtoken";

export interface Payload extends JwtPayload {
  _id: string;
}
