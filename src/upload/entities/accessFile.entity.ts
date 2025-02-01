import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'access' })
export class AcessFileEntity {
    @PrimaryGeneratedColumn('identity')
    id: number;

    @Column({ name: 'file_id', nullable: false })
    fileId: number;

    @Column({ name: 'user_id', nullable: false })
    userId: number;

    @Column({ name: 'permission_type', nullable: false })
    permissionType: string;

    @CreateDateColumn({ name: 'date_grant' })
    dateGrant: Date;
}