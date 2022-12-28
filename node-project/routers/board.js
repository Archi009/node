import { Router } from "express";
const route = Router();

route

  .get("/", (req, res) => {
    //?writer=kim
    console.log("writer:", req.query.writer); //query로 받기
    console.log("wdt:", req.query.wdt);
    res.send("get board");
  })
  .post("/", (req, res) => {
    //json으로 받기
    console.log("title:", req.body.title);
    res.send("post board");
  })
  .put("/", (req, res) => {
    res.send("put board");
  })
  .delete("/:boardno", (req, res) => {
    console.log("boardno", req.params.boardno);
    res.send("delete board");
  });

export default route;
