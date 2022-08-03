import dotenv from 'dotenv'
dotenv.config()
import nodemailer from 'nodemailer'


let transporter=nodemailer.createTransport({
    pool:true,
    host:process.env.EMAIL_HOST,
    port:process.env.EMAIL_PORT,
    secure:true,  //true for 465,false for other ports
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
      },
    auth:{
        user:process.env.EMAIL_USER,    //Admin Gmail ID
        pass:process.env.EMAIL_PASS,  //Admin Gmail Password    
    },
})
export default transporter