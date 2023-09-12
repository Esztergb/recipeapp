const { Schema , model } = require('mongoose');
const bcrypt = require('bcrypt');

const recipeSchrma = require('./Recipe');

const userSchema = new Schema (
    {
        username : {
            type: String ,
            required: true,
            unique: true,
        },
        email: {
            type
        }
    }
)