var DataTypes = require("sequelize").DataTypes;
var _Board = require("./Board");
var _Comments = require("./Comments");
var _Keyward = require("./Keyward");

function initModels(sequelize) {
  console.log(sequelize.define);
  var Board = _Board(sequelize, DataTypes);
  var Comments = _Comments(sequelize, DataTypes);
  var Keyward = _Keyward(sequelize, DataTypes);

  Comments.belongsTo(Board, { as: "board", foreignKey: "boardId" });
  Board.hasMany(Comments, { as: "Comments", foreignKey: "boardId" });

  return {
    Board,
    Comments,
    Keyward,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
