const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "Board",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING(254),
        allowNull: false,
        comment: "제목",
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
        comment: "내용",
      },
      writerName: {
        type: DataTypes.STRING(17),
        allowNull: false,
        comment: "작성자이름",
      },
      password: {
        type: DataTypes.CHAR(72),
        allowNull: false,
        comment: "비밀번호",
      },
      createTime: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
        comment: "작성일",
      },
      updateTime: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: "수정일",
      },
    },
    {
      sequelize,
      tableName: "Board",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
      ],
    }
  );
};
