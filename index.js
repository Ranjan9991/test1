const routes = require("express").Router();      // inport this in every routes files
const handlers = require("../controllers");
   routes.get("/",(req,res)=>{
       const data = [
           {"latest new api":"https://protected-garden-26257.herokuapp.com/news"},
           {"test result":"https://protected-garden-26257.herokuapp.com/testresult"},
           {"upcoming test":"https://protected-garden-26257.herokuapp.com/test"},
           {"upcoming odi":"https://protected-garden-26257.herokuapp.com/odi"},
           {"upcoming t20":"https://protected-garden-26257.herokuapp.com/t20"},
           {"stadium detail":"https://protected-garden-26257.herokuapp.com/details"},
           {"quiz api":"https://protected-garden-26257.herokuapp.com/quiz"},
           {"overall match ":"https://protected-garden-26257.herokuapp.com/match"}
       ]
       res.json(data)
   })
routes.get("/news",async(req,res)=>{
    const data = await handlers.getNews()
    res.json(data)
});

routes.get("/testresult",(req,res)=>{
	const data = handlers.getTestResult()
    res.json(data)
});
routes.get("/test",(req,res)=>{
	const data = handlers.getUpcomingTest()
    res.json(data)
});
routes.get("/odi",(req,res)=>{
const data = handlers.getUpcomingOdi()
res.json(data)
});
routes.get("/t20",(req,res)=>{
    const data = handlers.getUpcomingT20()
    res.json(data)
});
routes.get("/details",(req,res)=>{
    const data = handlers.getStadiumDetails()
	res.json(data)
});
routes.get("/quiz",(req,res)=>{
    const data = handlers.getQuiz()
    res.json(data)
});
routes.get("/match",(req,res)=>{
	const data = handlers.getMatchDetails()
    res.json(data)
});
module.exports = routes;