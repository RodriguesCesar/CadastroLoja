import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne } from 'typeorm';
import { ProdutoEntity } from './produto.entity';

@Entity('produto_caracteristicas')
export class ProdutoCaracteristicaEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

 
  @ManyToOne(()=> ProdutoEntity, (produto)=> produto.caracteristicas,
    {onDelete:'CASCADE', onUpdate:'CASCADE', orphanedRowAction:'delete'} )
  produto: ProdutoEntity;

  @Column({ name: 'nome', length: 100, nullable: false })
  nome: string;

  @Column({ name: 'descricao', length: 255, nullable: false })
  descricao: string;
}
