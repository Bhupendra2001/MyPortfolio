const nodemailer = require('nodemailer')
require('dotenv').config()
const User = require('./model')

const transporter = nodemailer.createTransport({
    service : "gmail",
    auth : 
         {
            user : process.env.User,
            pass : process.env.Password
        }
    
});

const sendWelcomeEmail = async (email, fname , lname) => {
    const message = `Dear ${fname + " " + lname},

    Thank you for taking the time to provide feedback on our portfolio website. Your input is highly valuable to us as we strive to improve and create a better experience for our users.
    
    We appreciate your suggestions and comments. Our team will carefully review your feedback and consider how we can implement any necessary changes or enhancements to address your concerns.
    
    If you have any additional thoughts or if there's anything else you'd like to share, please feel free to reply to this email.
    
    Once again, thank you for your feedback. Your contribution helps us create a better platform for everyone.
    
    Best regards,
    Bhupendra Namedev
    bnamdev20@gmail.com`;
       const mailOption = {
      from: process.env.User,
      to: email,
      subject: "Thank You for Your Feedback",
      text: message,
    };
  
    try {
      const info = await transporter.sendMail(mailOption);
      console.log("Welcome message sent successfully!", info);
      return info; // Return the info if needed for further processing
    } catch (error) {
      console.log("Error sending the welcome message: ", error);
      throw error; // Re-throw the error to handle it in the calling function
    }
  };

const createUserFeedback = async (req, res)=>{
    try{
        let data = req.body

        let { fname , lname  , email , phone , message } = data

        if(!fname) return res.status(400).send('Please enter fname')
        if(!lname) return res.status(400).send('Please enter lname')
        if(!email) return res.status(400).send('Please enter email')
        if(!phone) return res.status(400).send('Please enter phone')
        if(!message) return res.status(400).send('Please enter message')

       const checkEmail = await  User.findOne({ email : email})

       if(checkEmail) return res.status(400).send('email already register')
       const checkphone = await  User.findOne({ phone : phone})

       if(checkphone) return res.status(400).send('phone number already register')

       await sendWelcomeEmail(email , fname , lname);
       const saved = await User.create(data)

        
       return res.status(201).send({message : "register successfully", data : saved})

    }catch(err){
        return res.status(500).send(err.message)
    }
}

module.exports = { createUserFeedback}