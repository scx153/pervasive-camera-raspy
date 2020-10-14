'use strict';

var response = require('./res');
var connection = require('./conn');

exports.devices = function(req, res) {
    connection.query('SELECT * FROM Data', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.index = function(req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};


exports.findDevice = function(req, res) {
    
    var D_id = req.params.D_id;

    connection.query('SELECT * FROM Data where device_id = ?',
    [ D_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.findRoom = function(req, res) {
    
    var R_id = req.params.R_id;

    connection.query('SELECT * FROM Data where Room_id = ?',
    [ R_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.findPepCount = function(req, res) {
    
    var D_id = req.params.D_id;

    connection.query('SELECT peoplecount,maxcapacity FROM Data where device_id = ?',
    [ D_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.createDevice = function(req, res) {
    
    var device_id = req.body.device_id;
    var room_id = req.body.room_id;
    var peoplecount = req.body.peoplecount;
    var maxcapacity = req.body.maxcapacity;
    var length = req.body.length;
    var width = req.body.width;
    
     
    connection.query('INSERT INTO Data (device_id,room_id,peoplecount,maxcapacity,length,width) values (?,?,?,?,?,?)',
    [ device_id,room_id,peoplecount,maxcapacity,length,width ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menambahkan Device!", res)
        }
    });
};

exports.updateDevice = function(req, res) {
    
    var device_id = req.body.device_id;
    var room_id = req.body.room_id;
    var peoplecount = req.body.peoplecount;
    var maxcapacity = req.body.maxcapacity;
    var length = req.body.length;
    var width = req.body.width;
    
     
    connection.query('UPDATE Data SET room_id = ?,peoplecount = ?,maxcapacity = ?,length = ?,width = ? WHERE device_id = ?',
    [ room_id,peoplecount,maxcapacity,length,width,device_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil merubah Device!", res)
        }
    });
};

exports.updatePepCount = function(req, res) {
    
    var device_id = req.body.device_id;
    var peoplecount = req.body.peoplecount;
   
    connection.query('UPDATE Data SET peoplecount = ? WHERE device_id = ?',
    [ peoplecount,device_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil merubah People Count!", res)
        }
    });
};

exports.updateArea = function(req, res) {
    
    var device_id = req.body.device_id;
    var length = req.body.length;
    var width = req.body.width;
   
    connection.query('UPDATE Data SET length = ?,width = ? WHERE device_id = ?',
    [ length,width,device_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil merubah Dimensi Area!", res)
        }
    });
};

exports.deleteDevice = function(req, res) {
    
    var device_id = req.body.device_id;

    connection.query('DELETE FROM Data WHERE device_id = ?',
    [ device_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menghapus Device!", res)
        }
    });
};