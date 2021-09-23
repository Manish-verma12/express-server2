import * as jwt from 'jsonwebtoken';
import hasPermission from '../hasPermission';
import config from '../../config/configuration';


 export default (module, permissionType) => async (req, res, next) => {
  console.log(module, permissionType);

    const token = req.header('Authorization');
    console.log(token);

    if (!token){
        next({error: 'Unauthorized', message: 'Token not found', status:403});
    }
} 

const {secret} = config;
//console.log(secret);

let user;
try{
    user = jwt.verify(token, secret);
} catch(err){
    console.log(err);
    next({error: 'Unauthorized', message: 'user not authorized', status: 403 });
}

console.log('user is', user);

if(!user){
    next({error: 'Unauthorized', message: 'user not authorized', status: 403 });
}

if(!hasPermission(module,user.role, permissionType)){
    next({error: 'Unauthorized', message: 'permission Denied', status: 403 });
}

req.user = user;
next();
}
//export default authMiddleware;