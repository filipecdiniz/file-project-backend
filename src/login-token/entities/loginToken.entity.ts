import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'login_token' })
export default class loginTokenEntity {
    @PrimaryGeneratedColumn('identity')
    id: number;

    @Column({ name: 'user_id', nullable: false })
    userId: number;

    @Column({ name: 'code', nullable: false })
    code: string;

    @Column({ name: 'expires', nullable: false })
    expires: Date;

    @Column({ name: 'used', nullable: false })
    used: boolean;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
}