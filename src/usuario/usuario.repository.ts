import { Injectable } from "@nestjs/common";
import { usuario } from "./usuario.entity";
import { error } from "console";

@Injectable()
export class UsuarioRepository {

    private usuarios: usuario[] =[];

    async salvar(usuario: usuario) {

        this.usuarios.push(usuario);
    }

    async atualiza(id: string, dadosUsuario: Partial<usuario>)  {

        var usuarioSalvo =  this.usuarios.find(x=> x.id == id);

        if(!usuarioSalvo) {
            throw new error('Usuário não encontrado!');
        }

        Object.entries(dadosUsuario).forEach(([chave, valor]) => {
            if(chave=== 'id') {
                return;
            }

            usuarioSalvo[chave] = valor;

        });

     return usuarioSalvo;
    }

    async deletar(id: string)  {

        var usuarioSalvo =  this.usuarios.find(x=> x.id == id);

        if(!usuarioSalvo) {
            throw new error('Usuário não encontrado!');
        }

        this.usuarios =   this.usuarios.filter(usuario=> usuario.id  != id);
      
       return usuarioSalvo;
    }

    async listaUsuarios(){

        return this.usuarios;
    }

    async existeEmail(email: string) {

        return this.usuarios.find(x=> x.email == email) != undefined;
    }

}

