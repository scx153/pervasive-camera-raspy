'use strict';

module.exports = function(app) {
    var APIs = require('./controller');

    //  GET
    app.route('/')
        .get(APIs.index);

    app.route('/devices')
        .get(APIs.devices);

    app.route('/devices/:D_id')
        .get(APIs.findDevice);
    
    app.route('/room/:R_id')
        .get(APIs.findRoom);

    app.route('/devices/PepCount/:D_id')
        .get(APIs.findPepCount);

    //  POST   
    app.route('/devices')
        .post(APIs.createDevice);

    //  PUT/UPDATE
    app.route('/devices')
        .put(APIs.updateDevice);
    
    app.route('/devices/PepCount')
        .put(APIs.updatePepCount);

    app.route('/devices/Area')
        .put(APIs.updateArea);
        
    app.route('/devices')
        .delete(APIs.deleteDevice);
};