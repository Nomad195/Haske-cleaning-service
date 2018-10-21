const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let clientSchema = new Schema({
    description: String,
    done: Boolean
});
module.exports = mongoose.model('Clients', clientSchema);