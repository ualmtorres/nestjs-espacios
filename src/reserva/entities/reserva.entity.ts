import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Espacio } from '../../espacio/entities/espacio.entity';
@Entity()
export class Reserva {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  hora: string;

  @Column()
  descripcion: string;

  @Column()
  asignatura: string;

  @Column()
  profesor: string;

  @ManyToOne(() => Espacio, (espacio) => espacio.reservas, {
    onDelete: 'CASCADE',
  })
  espacio: number;
}
