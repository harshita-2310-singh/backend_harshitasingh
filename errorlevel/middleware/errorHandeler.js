const errorhandel=(err,req,res,next)=>{
err.statusCode=err.statusCode ||500;
err.status=err.status||"error";
res.status(statusCode).jason({statusCode:err.statusCode,
    status:err.status,
    message:"error found"
    
})

}
module.exports=errorhandel