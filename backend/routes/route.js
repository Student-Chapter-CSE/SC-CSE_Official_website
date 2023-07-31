import express from "express";
import {
  handleCreateMember,
  handleGetMember,
} from "../controller/member_controller.js";

export const memberRoute = express.Router();

memberRoute.route("/getdetails/:team").get(handleGetMember);
memberRoute.route("/").post(handleCreateMember);
