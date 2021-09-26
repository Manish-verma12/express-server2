import UserRepository from "src/repositories/user/UserRepository";


const UserRepository: UserRepository = new UserRepository();
export default () => {
    UserRepository.count()
    .then(res => {
        console.log('res', typeof res);
          
        if(res===0){
            console.log('data seed in progress');
            UserRepository.create({ name: 'manish', role: 'trainee', email: 'trainee@successive.tech', password: 'Trainee@123'});
    
        
        }
    
    
    
   
    }.catch(err => console.log(err));
}
