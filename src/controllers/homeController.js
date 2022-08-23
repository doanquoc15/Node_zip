import db from '../models/index'

let getHomePAge = async (req, res) => {
    try {
        let data = await db.User.findAll();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
    return res.render('homepage.ejs');
}


module.exports = {
    getHomePAge
}