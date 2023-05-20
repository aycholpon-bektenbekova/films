var express = require('express');
var router = express.Router();
var fs = require("fs")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/toTxt", function(req, res){
  fs.appendFileSync("films.txt", 
  req.query.filmName+ " " 
  +req.query.filmDate+ " "
  +req.query.filmPrice+ " "
  +req.query.filmEditor+ " "
  +req.query.filmDesk+',')

  res.render("films.hbs", {})
})

router.get("/listOfFilms", function(req, res){
  let filmsList = fs.readFileSync("films.txt", "utf8")
  res.render("filmsList.hbs", {
    key1: filmsList
  })
})
module.exports = router;
