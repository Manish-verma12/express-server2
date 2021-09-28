import { Request, Response, NextFunction } from "express";
import user from ".";

class User {
    public async get(req: Request, res: Response) {
        const { skip = 0, limit = 10 } = req.query;
        const role = { role: 'trainee' };

        localhost:9000/api/trainees?skip=0&limit=10&sort=createdAt

        const data1 = await user.find(skip, limit, role);
        const documents = await user.count();
        const data = [{ count: documents, data: data1 }];
        res.status(200).send({ successHandler('User Data', 200, data));
    }


    public async post(req: Request, res: Response) {
        const data = await user.createUser(req.body);
        res.status(200).send(successHandler('User Created', 200, data));
    }
    public async put(req: Request, res: Response) {
        const { dataToUpdate, id } = req.body;
        const data = await user.updateUser(originalId: id, name: dataToUpdate});
    res.status(200).send(successHandler('User Updated', 200, data));
    }
    public async delete (req: Request, res: Response) {
    const { id } = req.params;
    const data = await user.delete({ _id: id });
    res.status(200).send(successHandler('User Deleted', 200, data));
}
    public createToken(req: Request, res: Response, next){
    const { token } = req;
    res.status(200).send(successHandler(`User Generated: ${token}`, 200, 'ok')
    );
}
}

export default new User();








// import { Request, Response, NextFunction } from "express";

// class User{
//     get(req: Request, res: Response, next: NextFunction ){
//         console.log('inside get request for trainee');
//         const data = [
//             {
//                 name: "user1",

//             },{
//                 name: "user2",

//             },
//         ];
//         return res.status(200).send({message: "Users fetched successfully", data:data, status: 'success'});
//     }
//     create(req: Request, res:Response, next: NextFunction) {
//         console.log("inside post request for user", req.body);

//         const { name, id} = req.body;

//         if(!name){
//          return next({  status: 400 ,message: "user name is required", error: "Bad Request"});
//         }
//         if(!id){
//             return next({ status: 400, message: "user name is required", error: "Bad Request"});
//            }

//          res.status(200).send({message: "User created successfully", data: {name,id}, status: "success" });
//     }
// };

// export default new User();





// import { Request, Response, NextFunction } from "express";

// class User{
//     get(req: Request, res: Response, next: NextFunction ){
//         console.log('inside get request for trainee');
//         const data = [
//             {
//                 name: "Manish",
//                 designation: "SDE",
//                 location: "Dadri",
//             },{
//                 name: "Raj",
//                 designation: "SDE 2",
//                 location: "Delhi",
//             },{
//                 name: "jack",
//                 designation: "SDE 3",
//                 location: "pune",
//             },
//         ];
//         return res.status(200).send({message: "Users fetched successfully", data:users, status: 'success'});
//     }
//     post(req: Request, res:Response, next: NextFunction) {
//         console.log("req is");
//         console.log(req.body);
//         const { names } = req.body;
//         console.log(names);
//        // if(!name){
//          //   res.status(400).send({message: "user name is required", error: "Bad Request"});
//        // }
//         //console.log("return success");
//     //    res.json({requestBody: req.body}) 
//         return res.status(200).send({message: "User added successfully"});
//     }
// };

// export default new User();