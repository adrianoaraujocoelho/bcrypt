/* eslint-disable linebreak-style */

const bcrypt = require('bcryptjs');
const args = require('yargs').argv;


const text = args.text='MY_SECRET_KEY'; 
const salt = args.salt=10;

const hash = bcrypt.hashSync(text, salt);


console.log(hash);




