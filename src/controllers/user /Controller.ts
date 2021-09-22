import { Request, Response, NextFunction } from "express";

class User{
    get(req: Request, res: Response, next: NextFunction ){
        const users = [
            {
                name: "Manish",
                designation: "SDE",
                location: "Dadri",
            },{
                name: "Raj",
                designation: "SDE 2",
                location: "Delhi",
            },{
                name: "jack",
                designation: "SDE 3",
                location: "pune",
            },
        ];
        return res.status(200).send({message: "Users fetched successfully", data:users});
    }
    post(req: Request, res:Response, next: NextFunction) {
        console.log("req is");
        console.log(req.body);
        const { names } = req.body;
        console.log(names);
       // if(!name){
         //   res.status(400).send({message: "user name is required", error: "Bad Request"});
       // }
        //console.log("return success");
    //    res.json({requestBody: req.body}) 
        return res.status(200).send({message: "User added successfully"});
    }
};

export default new User();