import mysql from "../config/mysql.config";
import { ApplicationError } from "../helpers/errors.helper";

export default {
  findBoards: async ({ title, writerName, offset = 0, limit = 20 }) => {
    try {
      const qry = `
        SELECT 
            id, title, content, writerName, createTime
        FROM
            Board
        WHERE
            1=1 
        LIMIT ? offset ?
    `;
      const query = mysql.format(qry, [limit, offset]);
      const [row] = await mysql.query(query);
      return row;
    } catch (e) {
      throw new ApplicationError(500, "server error", e);
    }
  },
  findBoardsTotal: async ({ title, writerName }) => {
    try {
      const qry = `
        SELECT 
            COUNT(*) AS cnt
        FROM
            Board
        WHERE
            1=1 
    `;
      const query = mysql.format(qry);
      const [row] = await mysql.query(query);
      console.log(row[0].cnt);
      return row[0].cnt;
    } catch (e) {
      throw new ApplicationError(500, "server error", e);
    }
  },
};
