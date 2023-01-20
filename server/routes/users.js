const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("hello world!");
});

router.post("/", (req, res) => {
  const username = req.body.username;
  console.log(username);
});

module.exports = router;
