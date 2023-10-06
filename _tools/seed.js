import mongoose from 'mongoose';

// Remplacez <username>, <password>, <cluster-name>, et <database-name> par vos informations réelles
const uri = "mongodb+srv://jacques:iLHlagN7hV9kTA6Q@cluster0.jafsmrx.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('✅ Connecté à la base MongoDB')
  })
  .catch(err => {
    console.error('Erreur de connexion', err.message)
  });
