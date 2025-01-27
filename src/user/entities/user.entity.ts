import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'user' })
export default class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'name', nullable: true })
    name: string;

    @Column({ name: 'last_name', nullable: true })
    lastName: string;

    @Column({ name: 'email', nullable: false })
    email: string;

    @Column({ name: 'password', nullable: true })
    password: string;

    @Column({ name: 'email', nullable: true })
    pictureUrl: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}