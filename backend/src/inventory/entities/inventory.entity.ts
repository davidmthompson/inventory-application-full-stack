import { Column, Entity, PrimaryColumn } from "typeorm"

@Entity()
export class InventoryItem {
    @PrimaryColumn()
    id!: number;

    @Column({length: 250, nullable: false})
    name!: string

    @Column({length: 500})
    description?: string

    @Column({length: 80})
    imgUrl?: string

    @Column({length: 25, unique: true, nullable: false})
    sku!: string

    @Column({type: "int", nullable: false})
    price!: number

    @Column({type: "text",})
    availableMedium?: "Online" | "In Store"

    @Column({type: "boolean"})
    isActive!: boolean

    @Column({type: "datetime", nullable: false, default: new Date()})
    createdAt!: Date

    @Column({type: "datetime", nullable: false, default: new Date()})
    updateAt!: Date
}
