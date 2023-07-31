import Member from "../model/Member_model.js";

export const handleCreateMember = async (req, res) => {
  const {
    name,
    email,
    rollno,
    memberOf,
    picture,
    courseCompletionYear,
    section,
    phonenumber,
    paymentDone,
  } = req.body;

  if (
    !name ||
    !email ||
    !rollno ||
    !memberOf ||
    !picture ||
    !courseCompletionYear ||
    !section ||
    !phonenumber ||
    !paymentDone
  ) {
    res.status(400).json({
      msg: "please enter all fields",
    });
  }

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
      msg: " member  created successfully ",
    });
  }
};

export const handleGetMember = async (req, res) => {
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
};
