const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');

const routes = express.Router();


routes.get("/", (req, resp)=> {
    
    // return resp.send(`Hello World ${req.query.name}`);
    return resp.json({message: `Hello World - ${req.query.name}`});
});

routes.post('/devs', DevController.store);
routes.get('/devs', DevController.index);

routes.post('/devs/:devId/dislikes', DislikeController.store);
routes.post('/devs/:devId/likes', LikeController.store);

module.exports = routes;