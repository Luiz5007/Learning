import { Column, Table } from 'sequelize-typescript'
import { IUser } from '../../1-domain/entities/iUser'

@Table
export class User implements IUser {
  @Column
  email!: string

  @Column
  password!: string
}
