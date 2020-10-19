import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

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
}