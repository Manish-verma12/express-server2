import UserRepository from '../repositories/user/UserRepository';
import config from '../config/configuration'
import * as bcrypt from 'bcrypt';
import * as constants from '../libs/constants'

const UserRepository: UserRepository = new UserRepository();
export default () => {
    UserRepository.count()
        .then(res => {
            if (res === 0) {
                console.log('data seed in progress');

                bcrypt.hash(config.password, constants.BCRYPT_SALT_ROUNDS).then(function (hash) {
                    UserRepository.create({ name: 'manish', role: 'trainee', email: 'trainee@successive.tech', password: hash });    //  password: 'Trainee@123'


                });

            }

        })
        .catch(err => console.log(err));
}
