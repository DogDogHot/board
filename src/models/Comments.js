const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Comments', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    boardId: {
      type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
      allowNull: true,
      references: {
        model: 'Board',
        key: 'id'
      }
    },
    depth: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    commentsId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "내용"
    },
    writername: {
      type: DataTypes.STRING(17),
      allowNull: false,
      comment: "작성자 이름"
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "작성일"
    }
  }, {
    sequelize,
    tableName: 'Comments',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "FK_Board_TO_Comments_1",
        using: "BTREE",
        fields: [
          { name: "boardId" },
        ]
      },
    ]
  });
};
