import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ContatosService } from './contatos.service';
import { CreateContatoDto } from './dto/create-contato.dto';
import { UpdateContatoDto } from './dto/update-contato.dto';

@Controller('contatos')
export class ContatosController {
  constructor(private readonly contatosService: ContatosService) {}

  @Post()
  criar_contato(@Body() createContatoDto: CreateContatoDto) {
    return this.contatosService.criar_contato(createContatoDto);
  }

  @Get()
  listar_todos_contatos() {
    return this.contatosService.listar_todos_contatos();
  }

  @Get(':id')
  lista_contato_unico(@Param('id') id: number) {
    return this.contatosService.lista_contato_unico(id);
  }

  @Patch('editar/:id')
  atualiza_usuario(
    @Param('id') id: number,
    @Body() updateContatoDto: CreateContatoDto,
  ) {
    return this.contatosService.atualiza_usuario(+id, updateContatoDto);
  }

  @Delete('apagar/:id')
  remove_usuario(@Param('id') id: number) {
    return this.contatosService.remove_usuario(id);
  }
}
