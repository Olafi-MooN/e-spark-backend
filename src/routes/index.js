import { Router } from 'express';
import { middlewareJWT } from '../controllers/middlewares/index.js';
import { home } from '../controllers/homeController/index.js';
import { store as carsStore, index as indexCars, destroy as carsDestroy } from '../controllers/carsController/index.js';
import { store as cars_DescriptionStore } from '../controllers/carsDescriptionController/index.js';
import { store as cars_DatasheetStore } from '../controllers/carsDatasheetController/index.js';
import { store as usersStore, index as usersIndex, update as usersUpdate, destroy as usersDestroy, login } from '../controllers/usersController/index.js';
import { store as usercarsStore, index as userscarsIndex } from '../controllers/userscarsController/index.js';

const routes = Router();

routes.get('/', home);

routes.post('/cars', middlewareJWT,
    // #swagger.tags = ['Cars']
    // #swagger.description = 'Route for creating cars'

    /* #swagger.parameters['cars'] = {
            in: 'body',
            description: 'Receives an object containing name_car, quantity_in_stock, url_img_car',
            required: true,
            schema: { $ref: '#/definitions/CreateCars' }
    } */

    /* #swagger.responses[201] = {
            description: 'car created',
            schema: { $ref: '#/definitions/CreateCars' }
    } */
    /* #swagger.responses[400] = {
            description: 'uncreated car',
            schema: { 
                error: 'Unable to create vehicle',
                cars: { $ref: '#/definitions/CreateCars' }
            },
    } */
    carsStore);

routes.get('/cars',
    // #swagger.tags = ['Cars']
    // #swagger.description = 'Route to list the cars'

    /* #swagger.responses[200] = {
            description: 'List of cars',
            schema: { $ref: '#/definitions/Cars' }
            
    } */

    /* #swagger.responses[400] = {
            description: 'Erro list cars',
            schema: { error: 'Error when trying to list cars' }
    } */
    indexCars);

routes.delete('/cars/:id', middlewareJWT,
    // #swagger.tags = ['Cars']
    // #swagger.description = 'Route to delete one car'

    /* #swagger.parameters['id'] = {
            in: 'query',
            description: 'Receives an id of a car already created',
            required: true
    } */

    /* #swagger.responses[202] = {
            description: 'Delete cars',
            schema: { $ref: '#/definitions/CreateCars' }
            
    } */
    carsDestroy);

routes.post('/cars/description/:id_cars', middlewareJWT,
    // #swagger.tags = ['Cars description']
    // #swagger.description = 'Route to create description car'

    /* #swagger.parameters['id_cars'] = {
            in: 'query',
            description: 'Receives an id of a car already created',
            required: true
    } */


    /* #swagger.parameters['data'] = {
            in: 'body',
            description: 'Body request data',
            required: true,
            schema: { $ref: '#/definitions/CarsDescription' }
    } */

    /* #swagger.responses[201] = {
            description: 'Description cars id',
            schema: { $ref: '#/definitions/CarsDescription' }      
    } */
    cars_DescriptionStore);

routes.post('/cars/datasheet/:id_cars', middlewareJWT,
    // #swagger.tags = ['Cars datasheet']
    // #swagger.description = 'Route for creating datasheet cars'

    /* #swagger.parameters['id_cars'] = {
            in: 'query',
            description: 'Receives an id of a car already created',
            required: true
    } */

    /* #swagger.parameters['data'] = {
            in: 'body',
            description: 'body request data',
            required: true,
            schema: { $ref: '#/definitions/CarsDatasheet' }
    } */

    /* #swagger.responses[201] = {
            description: 'Cars created',
            schema: { $ref: '#/definitions/CarsDatasheet' }      
    } */
    cars_DatasheetStore);

routes.post('/users',
    // #swagger.tags = ['Users']
    // #swagger.description = 'Route for creating users'

    /* #swagger.parameters['data'] = {
            in: 'body',
            description: 'body request data',
            required: true,
            schema: { $ref: '#/definitions/User' }
    } */

    /* #swagger.responses[201] = {
            description: 'Create cars',
            schema: {
                status: true,
                data: 'token',
                message: 'Usuário criado com sucesso!' 
            }      
    } */

    /* #swagger.responses[400] = {
            description: 'invalid e-mail',
            schema: { 
                status: false,
                message: 'Não é possível criar um usuário com esse e-mail'
            }      
    } */
    /* #swagger.responses[500] = {
            description: 'Internal server error',
            schema: { 
                status: false,
                 message: 'Ocorreu um erro interno',
            }      
    } */
    usersStore);

routes.get('/users', middlewareJWT,
    // #swagger.tags = ['Users']
    // #swagger.description = 'Route for list users'

    /* #swagger.responses[201] = {
            description: 'List users',
            schema: {
                status: true,
                schema: { $ref: '#/definitions/User' }
            }      
    } */
    usersIndex);

routes.put('/users/:id/:type?', middlewareJWT,
    // #swagger.tags = ['Users']
    // #swagger.description = 'Route for update users, using types'

    /* #swagger.parameters['id'] = {
            in: 'query',
            description: 'Receives an id of a users already created',
            required: true
    } */
    /* #swagger.parameters['type'] = {
            in: 'query',
            description: 'Receives an type (profile, password, profile) a users already created',
            required: true
    } */

    /* #swagger.parameters['data'] = {
            in: 'body',
            description: 'body request data',
            required: true,
            schema: { $ref: '#/definitions/User' }
    } */
    
    /* #swagger.responses[200] = {
            description: 'update users',
            schema: {
                status: true,
                schema: { $ref: '#/definitions/User' }
            }      
    } */
    usersUpdate);

routes.delete('/users/:id', middlewareJWT,
    // #swagger.tags = ['Users']
    // #swagger.description = 'Route for delete users'

    /* #swagger.parameters['id'] = {
            in: 'query',
            description: 'Receives an id of a users already created',
            required: true
    } */

    /* #swagger.responses[202] = {
            description: 'update users',
            schema: {
                status: true,
                schema: { $ref: '#/definitions/User' }
            }      
    } */
    usersDestroy);

routes.post('/userscars', middlewareJWT,
    // #swagger.tags = ['Users Cars']
    // #swagger.description = 'Route for create history of users and cars'

    /* #swagger.parameters['data'] = {
            in: 'body',
            description: 'body request data',
            required: true,
            schema: { $ref: '#/definitions/UsersCars' }
    } */

    /* #swagger.responses[201] = {
            description: 'update users',
            schema: {
                status: true,
                data: { 
                    status: true,
                    $ref: '#/definitions/UsersCars'
                }
            }      
    } */

    /* #swagger.responses[404] = {
            description: 'Not found user_id or car_id',
            schema: {
                status: true,
                data: { $ref: '#/definitions/User' }
            }      
    } */
    usercarsStore);

routes.get('/userscars/:id_user', middlewareJWT,
    // #swagger.tags = ['Users Cars']
    // #swagger.description = 'Route for list history of users and cars'

    /* #swagger.parameters['id_user'] = {
            in: 'query',
            description: 'Receives an id of a users already created',
            required: true
    } */

    /* #swagger.responses[200] = {
            description: 'list relation Usercars',
            schema: {
                status: true,
                data: { 
                    status: true,
                    $ref: '#/definitions/UsersCarsHistory'
                }
            }      
    } */
    userscarsIndex);

routes.post('/users/login',
    // #swagger.tags = ['Login']
    // #swagger.description = 'Login users'

    /* #swagger.parameters['data'] = {
            in: 'body',
            description: 'body request data',
            required: true,
            schema: { 
                email: 'alefmastertutor@gmail.com',
                password: 'senha001'
             }
    } */

    /* #swagger.responses[400] = {
            description: 'list relation Usercars',
            schema: {
                status: false,
                message: 'ERROR - nenhum usuário encontrado'
            }      
    } */
    
    /* #swagger.responses[200] = {
            description: 'list relation Usercars',
            schema: {
                status: true,
                message: 'SUCCESS - Usuário encontrado',
                data: 'token'
            }      
    } */


login);

export { routes }
