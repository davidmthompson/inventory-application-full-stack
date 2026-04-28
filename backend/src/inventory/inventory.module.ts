import { Module } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { InventoryController } from './inventory.controller';
import { databaseProviders } from 'src/database.provider';

@Module({
  controllers: [InventoryController],
  providers: [InventoryService, ...databaseProviders],
})
export class InventoryModule {}
