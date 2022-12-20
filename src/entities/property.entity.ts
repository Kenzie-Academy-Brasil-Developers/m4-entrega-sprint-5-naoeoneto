import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Address } from "./address.entity";

@Entity('properties')
export class Property {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ default: false })
    sold: boolean

    @Column()
    value: number

    @Column()
    size: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @OneToOne (() => Address)
    @JoinColumn()
    address: Address
}