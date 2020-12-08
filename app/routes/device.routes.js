const APIs = require("../controllers/device.controller.js");
module.exports = function(app){

    //  GET
    app.route('/api/room/')
        .get(APIs.room);
    
    app.route('/api/devices/')
        .get(APIs.Device);
        
    app.route('/api/room/:R_id')
        .get(APIs.findRoom);

    app.route('/api/devices/PepCount/:D_id')
        .get(APIs.findPepCount);

    app.route('/api/room/MaxCapacity/:D_id')
        .get(APIs.findMaxCapacity);

    //  POST   
    app.route('/api/room/')
        .post(APIs.createRoom);
    
    app.route('/api/devices/')
        .post(APIs.createDevice);

    //  PUT/UPDATE
    app.route('/api/room/')
        .put(APIs.updateRoom);

    app.route('/api/devices/')
        .put(APIs.updateDevice);
    
    app.route('/api/devices/PepCount/')
        .put(APIs.updatePepCount);
    
    //DELETE
    app.route(`/api/room/:room_id`)
        .delete(APIs.deleteRoom);
        
    app.route(`/api/devices/:device_id`)
        .delete(APIs.deleteDevice);
};