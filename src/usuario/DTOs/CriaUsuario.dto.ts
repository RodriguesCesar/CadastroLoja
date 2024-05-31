import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { EmailEhUnico } from "../validacao/email-eh-unico.validator";

export class CriaUsuarioDTO {

    @MinLength(2, {message: 'O nome deve ser maior ou igual a 2 caracteres'})
    @IsNotEmpty({message:'Nome é obrigatório'})
    nome: string;

    @IsEmail(undefined, {message:'Email não é valido'})
    @EmailEhUnico({message: 'Email já está cadastrado no sistema'})
    email: string;

    @MinLength(6, {message: 'A Senha deve ser maior ou igual a 6 caracteres'})
    senha: string;

}