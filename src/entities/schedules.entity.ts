import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Property } from "./property.entity";
import { User } from "./user.entity";

@Entity('schedulesToUsersAndProperties')
export class Schedule {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: 'date' })
    date: string

    @Column({ type: 'time' })
    hour: string

    @ManyToOne(() => Property, property => property.schedules)
    property: Property

    @ManyToOne(() => User, user => user.schedule)
    user: User
}