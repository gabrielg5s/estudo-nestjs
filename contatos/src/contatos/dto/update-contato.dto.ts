import { PartialType } from '@nestjs/mapped-types';
import { CreateContatoDto } from './create-contato.dto';

export class UpdateContatoDto extends PartialType(CreateContatoDto) {
  nome: string;
  endereco: string;
  telefone: string;
  celular: string;
}
