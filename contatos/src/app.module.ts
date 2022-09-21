import { Module } from '@nestjs/common';
import { ContatosModule } from './contatos/contatos.module';
import { MainPrismaService } from './database/MainPrismaService';

@Module({
  imports: [ContatosModule],
  controllers: [],
  providers: [MainPrismaService],
})
export class AppModule {}
