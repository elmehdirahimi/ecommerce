const express = require("express");
const { default: userModel } = require("../modles/userModel");
const router = express.Router();
const SingInValidation = require("../validation/singInValidation");
// const Joi = require('@hapi/joi');
const {getToken} = require('../util/util');

router.post("/signin", async (req, res) => {
  
  // const { error } = Joi.validate(req.body, SingInValidation);
  //  const { error } = Joi.object(SingInValidation).validate(req.body);

 // if (error) {
   // console.log(error);
   // res.status(400).send(error);
///  } else {
    const signInUser = await userModel.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (signInUser) {
      res.send({
        _id: signInUser._id,
        name: signInUser.name,
        email: signInUser.email,
        isAdmin: signInUser.isAdmin,
         token: getToken(signInUser),
      });
    } else {
      res.status(404).send({ msg: "email or password incorrect" });
    }
 // }
});

export default router;
