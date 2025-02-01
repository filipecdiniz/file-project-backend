import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'file' })
export class FileEntity {
    @PrimaryGeneratedColumn('identity')
    id: number;

    @Column({ name: 'name', nullable: false })
    name: string;

    @Column({ name: 'url', nullable: false })
    url: string;

    @Column({ name: 'type', nullable: false })
    type: string;

    @Column({ name: 'size', nullable: false })
    size: number;

    @Column({ name: 'owner_id', nullable: false })
    ownerId: number;

    @CreateDateColumn({ name: 'created_at', nullable: false })
    createdAt: Date;
}