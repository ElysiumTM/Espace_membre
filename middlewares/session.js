// Middleware de sécurité pour vérifier si l'utilisateur est authentifié
function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next(); // L'utilisateur est authentifié, passez à la prochaine étape
    } else {
      // L'utilisateur n'est pas authentifié, redirigez-le vers la page de connexion
      res.redirect('/login');
    }
  }
  
  // Utilisez ce middleware pour sécuriser l'accès au tableau de bord
  app.get('/dashboard', ensureAuthenticated, (req, res) => {
    res.render('dashboard'); // Affichez le tableau de bord uniquement si l'utilisateur est authentifié
  });
  