
exports.sendSMS = async (phone) => {
    let code = Math.random(10);
    console.log(`Sending sms whit code ${code} to phone number ${phone}`)
}