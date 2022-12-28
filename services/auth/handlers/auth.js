const bcrypt = require('bcryptjs');
const user = require('../../../pkg/users');
const jwt = require('jsonwebtoken');
const config = require('../../../pkg/config');

const create = async (req, res) => {
    try {
        if(
            req.body.password.length === 0 ||
            req.body.password !== req.body.password2
        ) {
            return res.status(400).send("Bad request!");
        }

        let u = await user.getUserByEmail(req.body.email);
        if (u) {
            return res.status(409).send("Conflict. User exists!");
        };

        req.body.password = bcrypt.hashSync(req.body.password);

        let usr = user.create(req.body);
        return res.status(201).send(usr);
    } catch (err) {
        return res.status(500).send("Internal Server Error!");
    }
};

const login = async (req, res) => {
    try {
        let u = await user.getUserByEmail(req.body.email);
        if(!u) {
            return res.status(400).send("Bad request. Bad login credentials!");
        }

        if(!bcrypt.compareSync(req.body.password, u.password)) {
            return res.status(400).send("Bad request. Bad login credentials!");
        }

        let payload = {
            uid: u._id,
            email: u.email,
            first_name: u.first_name,
            last_name: u.last_name
        };
        let token = jwt.sign(payload, config.get('security').jwt_secret);
        return res.status(200).send({token});
    } catch (err) {
        return res.status(500).send("Internal Server Error!");
    }
};

const validate = (req, res) => {
    console.log(req.auth);
    return res.status(200).send(req.auth);
};

module.exports = {
    create,
    login,
    validate
};
