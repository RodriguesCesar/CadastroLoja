import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";
import { CriaUsuarioDTO } from "./DTOs/CriaUsuario.dto";
import { usuario } from "./usuario.entity";
import {v4 as uuid} from 'uuid';
import { ListaUsuarioDTO } from "./DTOs/listaUsuario.dto";
import { AtualizaUsuarioDTO } from "./DTOs/AtualizaUsuario.dto";

@Controller('/usuarios')
export class UsuarioController {


    constructor(private usuarioRepository: UsuarioRepository) {

    }
  

    @Post()    
    async criarUsuario(@Body()dadosDoUsuario: CriaUsuarioDTO) { 
    
        const objetoUsuario = new usuario();
        objetoUsuario.nome = dadosDoUsuario.nome;
        objetoUsuario.email = dadosDoUsuario.email;
        objetoUsuario.senha = dadosDoUsuario.senha;
        objetoUsuario.id = uuid();

        this.usuarioRepository.salvar(objetoUsuario);
        return { status: 'Usuário criado!', mensagem: "bem vindo! " + dadosDoUsuario.nome, id: objetoUsuario.id};

    }

    @Get()
    async listaUsuarios()  {

    return  (await this.usuarioRepository.listaUsuarios()).map(usuarioSalvo => new ListaUsuarioDTO(usuarioSalvo.id, usuarioSalvo.nome));
    
    }
    @Put('/:id')    
    async Atualizar(@Param('id') id: string, @Body()novosDados: AtualizaUsuarioDTO) { 
    
      const usuarioSalvo =   await this.usuarioRepository.atualiza(id, novosDados);
      return { status: 'dados atualizados', mensagem: "Sr(a) " + usuarioSalvo.nome, id: usuarioSalvo.id};

    }

    @Delete('/:id')    
    async Deletar(@Param('id') id: string) { 
    
      const usuarioSalvo =   await this.usuarioRepository.deletar(id);
      return { status: 'dados deletado', mensagem: "Sr(a) " + usuarioSalvo.nome, id: id};

    }


}