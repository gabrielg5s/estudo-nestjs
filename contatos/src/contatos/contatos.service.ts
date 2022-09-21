import { Injectable } from '@nestjs/common';
import { CreateContatoDto } from './dto/create-contato.dto';
import { UpdateContatoDto } from './dto/update-contato.dto';
import { MainPrismaService } from '../database/MainPrismaService';

@Injectable()
export class ContatosService {
  constructor(private db: MainPrismaService) {}

  async criar_contato(dados: CreateContatoDto) {
    const create_contato = await this.db.contatos.create({
      data: {
        nome: dados.nome,
        endereco: dados.endereco,
        telefone: dados.telefone,
        celular: dados.celular,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    return create_contato;
  }

  async listar_todos_contatos(): Promise<any> {
    const lista_contatos: Array<any> = await this.db.contatos.findMany({
      select: {
        id: true,
        nome: true,
        endereco: true,
        telefone: true,
        celular: true,
      },
    });
    return lista_contatos;
  }

  async lista_contato_unico(id) {
    const contato = await this.db.contatos.findFirst({
      where: {
        id: parseInt(id),
      },
      select: {
        id: true,
        nome: true,
        endereco: true,
        telefone: true,
        celular: true,
      },
    });
    return contato;
  }

  async atualiza_usuario(id: number, info: UpdateContatoDto) {
    const dados = await this.db.contatos.update({
      where: {
        id: id,
      },
      data: {
        nome: info.nome,
        endereco: info.endereco,
        telefone: info.telefone,
        celular: info.celular,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
    return dados;
  }

  async remove_usuario(id) {
    const contato_apagado = await this.db.contatos.delete({
      where: {
        id: parseInt(id),
      },
    });
    return {
      message: 'usuario removido',
      contato_apagado,
    };
  }
}
