import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { EmailEhUnico } from "../validacao/email-eh-unico.validator";

export class AtualizaUsuarioDTO {

    @MinLength(2, {message: 'O nome deve ser maior ou igual a 2 caracteres'})
    @IsNotEmpty({message:'Nome é obrigatório'})
    @IsOptional()
    nome: string;

    @IsEmail(undefined, {message:'Email não é valido'})
    @EmailEhUnico({message: 'Email já está cadastrado no sistema'})
    @IsOptional()
    email: string;

    @MinLength(6, {message: 'A Senha deve ser maior ou igual a 6 caracteres'})
    @IsOptional()
    senha: string;

    @IsNotEmpty({message:'Id é obrigatório'})
    id:string

}