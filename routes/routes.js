import { Router } from 'express';
import {HomeController, signup, login, logout} from '../controllers/user.js';
import { authGuard, setTemplateVars } from '../middlewares/session';

const appRouter = Router()

appRouter.use(setTemplateVars)

appRouter.post('/signup', signup);
appRouter.post('/login', login);
appRouter.get('/', authGuard, HomeController);
appRouter.get('/logout', logout);

module.exports = appRouter;
