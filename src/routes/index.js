import express from "express";
import boardRoutes from "./board.route";
import commentRoutes from "./comment.route";

const router = express.Router();

const defaultRoutes = [
  {
    path: "/board",
    route: boardRoutes,
  },
  {
    path: "/comment",
    route: commentRoutes,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
