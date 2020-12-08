module.exports = (sequelize, Sequelize) => {
  const Device = sequelize.define("device", {
    device_id: {
      type: Sequelize.INT
    },
    device_name: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    }
  });

  return Device;
};
