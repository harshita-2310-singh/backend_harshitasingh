const fs=require("fs");
const result_filter=(req, res, next)=> {
    console.log("hello,middleware one");

     //return res.json({data:"hello"});
     //res.end()
      next()
}


const logFile= (req,res,next)=>{
    console.log("middleware second call.......")
    const date =new Date()
    fs.appendFile('log.txt',`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}:${req.method} : ${req.path}`,(err)=>{
        if(err) console.log(err);
        console.log("log file generated....")
    })
    next()

}
module.exports={result_filter,logFile};