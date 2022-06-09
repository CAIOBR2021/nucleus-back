import {Router, Request, Response} from 'express';

import {getUsuarios,saveUsuarios, getUsuario,updateUsuario,loginUser} from './controller/UsuerController';

import {Authenticate} from './controller/AuthUser';

const routes = Router();

routes.get('/', (request: Request, response: Response) =>{
    return response.json({message: 'API - Nucleus'});
});

routes.post('/session', loginUser);
routes.post('/save', saveUsuarios);

routes.use(Authenticate);

routes.get('/user', getUsuarios);

routes.get('/user/:id', getUsuario);

routes.put('/update/:id', updateUsuario);

export default routes;

