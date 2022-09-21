import { Module } from '@nestjs/common';
import { ContatosService } from './contatos.service';
import { ContatosController } from './contatos.controller';
import { MainPrismaService } from '../database/MainPrismaService';

@Module({
  controllers: [ContatosController],
  providers: [ContatosService, MainPrismaService],
})
export class ContatosModule {}
