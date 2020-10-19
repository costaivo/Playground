import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
import * as bcrypt from 'bcrypt';

@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({unique: true})
    username:string;

    @Column({unique: true})
    emailAddress:string;

    @Column()
    password:string;

    @Column({ nullable: true})
    salt:string;

    async validatePassword(password:string):Promise<boolean>{
        const hashedPassword = await this.hashPassword(password);
        return hashedPassword == this.password;
    }
    async hashPassword(password:string):Promise<string>{
        const hashedPassword = await bcrypt.hash(password,this.salt);
        return hashedPassword;
    }
}