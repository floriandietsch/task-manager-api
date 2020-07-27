const sgMail = require("@sendgrid/mail")

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "floriandietsch@gmx.de",
        subject: "Thanks for joining!",
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendGoodbyeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "floriandietsch@gmx.de",
        subject: "Goodbye :(",
        text: `Sorry to see you leave ${name}! But never forget that Diego sucks.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}