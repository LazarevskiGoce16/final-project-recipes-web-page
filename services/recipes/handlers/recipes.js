const recipes = require('../../../pkg/recipes');

const getAll = async (req, res) => {
    try {
        let rs = await recipes.getAll();
        const mpr = rs.sort((a, b) => {
            if(Number(a.stars) < Number(b.stars)) {
                return 1;
            } else if(Number(a.stars) > Number(b.stars)) {
                return -1;
            }
            return 0;
        });
        const fn = [];
        res.status(200).send({mpr: mpr, fn: fn});
    } catch (err) {
        return res.status(500).send("Internal Server Error!");
    }
};

const getMine = async (req, res) => {
    try {
        let rs = await recipes.getUserRecipes(req.auth.uid);
        res.status(200).send(rs);
    } catch (er) {
        return res.status(500).send("Internal Server Error!");   
    }
};

const create = async (req, res) => {
    try {
        let payload = {
            ...req.body,
            author_id: req.auth.uid,
            published_on: new Date()
        };
        let c = await recipes.create(payload);
        return res.status(201).send(c);
    } catch (err) {
        return res.status(500).send("Internal Server Error!");
    }
};

const update = async (req, res) => {
    try {
        let payload = {
            ...req.body,
            author_id: req.auth.uid,
            published_on: new Date()
        };
        await recipes.update(req.params.id, req.auth.uid, payload);
        return res.status(204).send('');
    } catch (err) {
        return res.status(500).send("Internal Server Error!");
    }
};

const remove = async (req, res) => {
    try {
        await recipes.remove(req.params.id, req.auth.uid);
        return res.status(204).send('');
    } catch (err) {
        return res.status(500).send("Internal Server Error!");
    }
};

module.exports = {
    getAll,
    getMine,
    create,
    update,
    remove
};
