const con = require("./conn");
var response = require("../res")

exports.room = function(req, res) {
  con.query('SELECT Room.room_id,Room.room_info,Device.device_id,Device.device_name,Room.maxcapacity ,Device.peoplecount,Room.length,Room.width FROM Room INNER JOIN Device ON Room.device_id = Device.device_id', function (error, rows, fields){
      if(error){
          console.log(error)
      } else{
          response.ok(rows, res)
      }
  });
};

exports.Device = function(req, res) {
  
  con.query('SELECT device_id,device_name,peoplecount FROM Device', function (error, rows, fields){
      if(error){
          console.log(error)
      } else{
          response.ok(rows, res)
      }
  });
};

exports.findRoom = function(req, res) {
  
  var R_id = req.params.R_id;

  con.query('SELECT Room.room_id,Room.room_info,Device.device_id,Device.device_name,Room.maxcapacity ,Device.peoplecount,Room.length,Room.width FROM Room INNER JOIN Device ON Room.device_id = Device.device_id WHERE Room.device_id = ?',
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

  con.query('SELECT peoplecount FROM Device where device_id = ?',
  [ D_id ], 
  function (error, rows, fields){
      if(error){
          console.log(error)
      } else{
          response.ok(rows, res)
      }
  });
};


exports.findMaxCapacity = function(req, res) {
  
    var D_id = req.params.D_id;
  
    con.query('SELECT maxcapacity FROM Room where device_id = ?',
    [ D_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
  };
  

exports.createRoom = function(req, res) {
  
  var room_id = req.body.room_id;
  var device_id = req.body.device_id;
  var room_info = req.body.room_info;
  var length = req.body.length;
  var width = req.body.width;
  var maxcapacity = 0;
  
  con.query('INSERT INTO Room (room_id,device_id,room_info,length,width,maxcapacity) values (?,?,?,?,?,?)',
  [ room_id,device_id,room_info,length,width,maxcapacity ], 
  function (error, rows, fields){
      if(error){
          console.log(error)
      } else{
          response.ok("Berhasil menambahkan Ruangan!", res)
      }
  });
};

exports.createDevice = function(req, res) {
  
  var device_id = req.body.device_id;
  var device_name = req.body.device_name;
  
   
  con.query('INSERT INTO Device (device_id,device_name) values (?,?)',
  [ device_id,device_name ], 
  function (error, rows, fields){
      if(error){  
          console.log(error)
      } else{
          response.ok("Berhasil menambahkan Device!", res)
      }
  });
};

exports.updateRoom = function(req, res) {
  
  var room_id = req.body.room_id;
  var device_id = req.body.device_id;
  var room_info = req.body.room_info;
  var length = req.body.length;
  var width = req.body.width;
  var maxcapacity = req.body.maxcapacity;
  
   
  con.query('UPDATE Room SET device_id = ?,room_info = ?,length = ?,width = ?,maxcapacity = ? WHERE room_id = ?',
  [ device_id,room_info,length,width,room_id,maxcapacity ], 
  function (error, rows, fields){
      if(error){
          console.log(error)
      } else{
          response.ok("Berhasil merubah info Ruangan!", res)
      }
  });
};

exports.updateDevice = function(req, res) {
  
  var device_id = req.body.device_id;
  var device_name = req.body.device_name;
   
  con.query('UPDATE Device SET device_name = ? WHERE device_id = ?',
  [ device_name,device_id ], 
  function (error, rows, fields){
      if(error){
          console.log(error)
      } else{
          response.ok("Berhasil merubah info Device!", res)
      }
  });
};

exports.updatePepCount = function(req, res) {
  //Buat Raspi
  var device_id = req.body.device_id;
  var peoplecount = req.body.peoplecount;
 
  con.query('UPDATE Device SET peoplecount = ? WHERE device_id = ?',
  [ peoplecount,device_id ], 
  function (error, rows, fields){
      if(error){
          console.log(error)
      } else{
          response.ok("Berhasil merubah People Count!", res)
      }
  });
};

exports.deleteRoom = function(req, res) {
  
  var room_id = req.params.room_id;

  con.query('DELETE FROM Room WHERE Room_id = ?',
  [ room_id ], 
  function (error, rows, fields){
      if(error){
          console.log(error)
      } else{
          response.ok("Berhasil menghapus Ruangan!", res)
      }
  });
};

exports.deleteDevice = function(req, res) {
  
  var device_id = req.params.device_id;

  con.query(`DELETE FROM Device WHERE device_id = ?`,
  [ device_id ], 
  function (error, rows, fields){
      if(error){
          console.log(error)
      } else{
          response.ok("Berhasil menghapus Device!", res)
      }   
  });
};
