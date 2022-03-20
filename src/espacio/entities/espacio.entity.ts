import { Reserva } from '../../reserva/entities/reserva.entity';
import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Espacio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  edificio: string;

  @Column()
  aula: string;

  @Column()
  fecha: string;

  @OneToMany(() => Reserva, (reserva) => reserva.espacio, {
    eager: true,
    cascade: true,
  })
  reservas: Reserva[];
}
