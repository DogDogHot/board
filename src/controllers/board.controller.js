import BoardsService from "../services/board.service";

export default {
  findBoards: async (req, res) => {
    try {
      const { title, writerName, offset, limit } = req.params;

      const boards = await BoardsService.findBoards({
        title,
        writerName,
        offset,
        limit,
      });
      const total = await BoardsService.findBoardsTotal({
        title,
        writerName,
      });

      res.status(200).json({
        code: 2000,
        msg: "find",
        data: { total, boards },
      });
    } catch (e) {
      console.log("gkdlgdkgldgkdl");
      throw e;
    }
  },
};
