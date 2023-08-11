import Member from "../model/Member_model.js";
import { v2 as cloudinary } from "cloudinary";

export const handleCreateMember = async (req, res) => {
  try {
    const {
      name, //
      email, //
      rollno, //
      memberOf, //
      picture,
      courseCompletionYear, //
      section, //
      phonenumber, //
      paymentDone, //
    } = req.body;

    console.log(req.body);

    if (
      !name ||
      !email ||
      !rollno ||
      !memberOf ||
      !picture ||
      !courseCompletionYear ||
      !section ||
      !phonenumber
    ) {
      res.status(400).json({
        msg: "please enter all fields",
      });
      return;
    }

    const uploadResponse = await cloudinary.uploader.upload(picture, {});
    console.log(uploadResponse);

    const member = await Member.create({
      name,
      email,
      rollno,
      memberOf,
      picture,
      courseCompletionYear,
      section,
      phonenumber,
      paymentDone,
    });

    if (member) {
      res.status(201).json(member);
    } else {
      res.status(400).json({
        msg: " Member isn't created ",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({
      msg: err,
    });
  }
};

export const handleGetMember = async (req, res) => {
  try {
    const team = req.params["team"] ?? "";
    const email = req.params["email"] ?? "";
    console.log(team);
    const member = await Member.find({
      $or: [{ memberOf: team }, { email: email }],
    });

    if (!member) {
      res.status(400).json({
        msg: "unable to fetch data",
      });
    } else {
      res.status(201).json(member);
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({
      msg: "unable to fetch data",
    });
  }
};
