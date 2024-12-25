var express = require('express');
var router = express.Router();

router.post('/update/password',(req,res,next)=>{
  console.log(req.cookies);
  if(req.cookies["session-token"]){
    res.status(200).send("Request completed successfully");
  }
  else{
    res.status(401).send("User is unauthenticated");
  }

})

router.post('/login',(req,res,next)=>{
  res.cookie("session-token","mysession",{httpOnly:true,secure:false,sameSite:'lax'});
  res.status(200).send("Request completed successfully");
})
module.exports = router;