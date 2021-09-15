export default(req, res, next)=>{
  res.status(404).json({status:404 ,error: "page Not Found",message: "error ",timestamp: new Date()});
    

};