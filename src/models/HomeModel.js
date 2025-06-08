const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
  titulo: { type: String, required: true }, // True pois precisa ser enviado.
  descricao: String
});

const HomeModel = mongoose.model('Home', HomeSchema);


// MOLDE
class Home {

}

module.exports = Home;