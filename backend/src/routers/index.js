const UserRouter = require("./UserRouter");
const InsertRouter = require("./insert");
const MovieRouter = require("./MovieRouter");
const ShowRouter = require("./ShowRouter");
const CinemaRouter = require("./CinemaRouter");
const ShowSeatRouter = require("./ShowSeatRouter");
const SeatRouter = require("./SeatRouter");

const initRoutes = (app) => {
  app.use("/api/user", UserRouter);
  app.use("/api/movie", MovieRouter);
  app.use("/api/show", ShowRouter);
  app.use("/api/cinema", CinemaRouter);
  app.use("/api/showseat", ShowSeatRouter);
  app.use("/api/insert", InsertRouter);
  app.use("/api/seat", SeatRouter);

  return app.use("/", (req, res) => {
    res.send("server on 123");
  });
};

module.exports = initRoutes;
