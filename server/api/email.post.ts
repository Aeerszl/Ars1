import nodemailer from 'nodemailer'
export default defineEventHandler(async(event)=> {
const body =await readBody(event)

const transporter = nodemailer.createTransport({
    host: 'mail.erciyes.edu.tr',
    port: 465,
    secure: true,
    auth: {
        user: 'ardektesvik@erciyes.edu.tr',
        pass: 'Ardek@@2024' // config.gmailAuthCode
    }
})
const result = await transporter.sendMail({
    from: '"ARDEK Teşvik" <ardektesvik@erciyes.edu.tr>',
    to: "1030510302@erciyes.edu.tr",
    text: 'Hello world?',
    subject:"sadsad"
   // html: newHtml
})

console.log('result',  result.envelope.to)
return  {result}
})
