import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { AuthCredentialDto } from "./dto/auth-credential.dto";
import { User } from "./user.entity";
import * as bcrypt from 'bcrypt';
@EntityRepository(User)
export class UserRepository extends Repository<User>{
    
    async signUp(authCredentialDto: AuthCredentialDto):Promise<void> {
        const { username, password } = authCredentialDto;
console.log('test data');
        const salt = await bcrypt.genSalt();
        console.log(salt);

        // const user = new User();
        // user.username = username;
        // user.password = password;
        // // Dummy just for testing.
        // user.emailAddress = password;
        // try{
        // await user.save();
        // } catch (error){
        //     console.log(error.code);
        //     if(error.code === "23505")
        //     {
        //         if(error.detail.indexOf("username")>=0)
        //             throw new ConflictException(`Username : ${username} already exists!`);
        //         else 
        //             throw new ConflictException(`emailAddress :${password} already exists!`);
        //     }
        //     else{
        //         throw new InternalServerErrorException(error.message);
        //     }
        // }
    }
}