import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Address } from "./address.entity";
import { Category } from "./category.entity";
import { Schedule } from "./schedules.entity";

@Entity('properties')
export class Property {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ default: false })
    sold: boolean

    @Column({ type: "decimal", precision: 12, scale: 2 })
    value: number

    @Column()
    size: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @OneToOne (() => Address, address => address.property)
    @JoinColumn()
    address: Address

    @ManyToOne(() => Category, category => category.properties, { nullable: true })
    category: Category

    @OneToMany(() => Schedule, schedule => schedule.property)
    schedules: Schedule[]
}