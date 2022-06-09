import {Entity, PrimaryGeneratedColumn,Column} from 'typeorm';

@Entity()
export class userAcount {
  @PrimaryGeneratedColumn()
  codigo: number;

  @Column()
  nome: string;

  @Column()
  logradouro: string;

  @Column()
  bairro: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @Column()
  telefone: string;

  @Column()
  email: string;

  @Column()
  senha: string; 

  @Column()
  acesso:number;
  
  @Column()
  status: number;
  
}