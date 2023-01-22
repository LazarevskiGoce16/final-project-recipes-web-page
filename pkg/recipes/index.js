const mongoose = require('mongoose');

const Recipe = mongoose.model(
    'recipe',
    {
        title: String,
        category: String,
        preparation_time: Number,
        num_of_people: Number,
        description: String,
        full_recipe: String,
        stars: Number,
        published_on: Date
    },
    'recipes'
);

const getAll = async () => {
    return Recipe.find({});
};

const getUserRecipes = async (author_id) => {
    return Recipe.find({author_id});
};

const create = async (data) => {
    const r = new Recipe(data);
    return r.save();
};

const update = async (id, uid, data) => {
    return Recipe.updateOne({_id: id, author_id: uid}, data);
};

const remove = async (id, uid) => {
    return Recipe.deleteOne({_id: id, author_id: id});
};

module.exports = {
    getAll,
    getUserRecipes,
    create,
    update,
    remove
};
