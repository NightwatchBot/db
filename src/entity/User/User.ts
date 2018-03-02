import { Entity, BaseEntity, PrimaryColumn, Column, OneToOne } from 'typeorm'
import { IsFQDN } from 'class-validator'
import { UserSettings, UserVerification, UserLevel } from '.'

@Entity()
export class User extends BaseEntity {

  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @Column()
  @IsFQDN()
  avatarUrl: string

  @Column()
  dateCreated: Date

  @Column()
  banned: boolean

  @Column()
  dateLastMessage: Date

  @OneToOne(type => UserSettings, userSettings => userSettings.user, {
    cascadeAll: true
  })
  settings: UserSettings

  @OneToOne(type => UserVerification, userVerification => userVerification.user, {
    cascadeAll: true
  })
  verification: UserVerification

  @OneToOne(type => UserLevel, userLevel => userLevel.user, {
    cascadeAll: true
  })
  level: UserLevel
}