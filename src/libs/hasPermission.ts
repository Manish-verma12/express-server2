import {permissions} from './constants';

export default function hasPermission(module: string,role: string, type: string): Boolean {
    const permission = permissions[module]
    if(!permission || !permission[type]){
    console.log(`\n${role} do not have permission to ${type} permission for the module ${module}`)
    return false;   

    }

    if(!permission[type]. include(role)){
        console.log(`\n${role} do not have permission to ${type} permission for the module ${module}`)
        return false;
    }
    console.log(`\n${role}  have permission to ${type} permission for the module ${module}`)
    return true;

}