import { Column, Entity, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class InventoryItem {
    @PrimaryColumn()
    id!: number;

    @Column({length: 250, nullable: false})
    name!: string;

    @Column({length: 500, nullable: true}) // Cleaned up syntax
    description?: string;

    @Column({length: 80, nullable: true})
    imgUrl?: string;

    @Column({length: 25, unique: true, nullable: false})
    sku!: string;

    @Column({type: "int", nullable: false})
    price!: number;

    @Column({type: "text", nullable: true})
    availableMedium?: "Online" | "In Store";

    @Column({type: "boolean"})
    isActive!: boolean;

    @CreateDateColumn() // Automatically sets the date on creation
    createdAt!: Date;

    @UpdateDateColumn() // Automatically updates the date on every change
    updateAt!: Date;
}