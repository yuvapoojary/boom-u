const jwt = require('jsonwebtoken');
const sendGrid = require('@sendgrid/mail');
const Otp = require('../models/otp.model');

sendGrid.setApiKey(process.env.SENDGRID_API_KEY);

exports.sendOTP = async (req, res) => {
  const code = (await import('crypto-random-string')).default({
    type: 'numeric',
    length: 6,
  });

  if (!req.body.email)
    return res.status(400).json({
      message: 'email is required',
    });

  if (!req.body.type)
    return res.status(400).json({
      message: 'type is required',
    });

  await sendGrid.send({
    to: req.body.email,
    text: `OTP: ${code}`,
    from: process.env.SENDGRID_FROM_EMAIL,
    subject: 'Verification for boominance',
  });

  await Otp.create({ email: req.body.email, otp: code, type: req.body.type });

  res.json({ message: 'success' });
};

exports.verifyOTP = async (req, res) => {
  if (!req.body.email)
    return res.status(400).json({
      message: 'email is required',
    });

  if (!req.body.otp)
    return res.status(400).json({
      message: 'otp is required',
    });

  const record = await Otp.findOne({
    email: req.body.email,
    otp: req.body.otp,
  });

  if (!record)
    return res.status(400).json({
      message: 'Invalid OTP',
    });

  await record.remove();

  const token = jwt.sign(
    { email: record.email, type: record.type },
    process.env.SECRET,
    {
      expiresIn: '10m',
    }
  );

  res.json({ token });
};
