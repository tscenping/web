import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Matches,
} from 'class-validator';
import { BaseEntity } from 'src/common/base-entity';
import { Column, Entity, Unique } from 'typeorm';

@Entity()
@Unique(['nickname'])
export class User extends BaseEntity {
  @Column()
  @IsString()
  @Length(1, 10)
  @Matches(/^[ㄱ-ㅎ가-힣a-zA-Z0-9]+$/)
  nickname: string;

  @Column()
  @IsString()
  avatar: string;

  @Column()
  @IsString()
  email: string;

  @Column({ default: false })
  @IsBoolean()
  isMfaEnabled: boolean;

  @Column({ default: 1200 })
  @IsNumber()
  ladderScore: number;

  @Column({ default: 1200 })
  @IsNumber()
  ladderMaxScore: number;

  @Column({ default: 0 })
  @IsNumber()
  winCount: number;

  @Column({ default: 0 })
  @IsNumber()
  loseCount: number;

  //   @Column({ nullable: true })
  //   @IsString()
  //   accessToken!: string | null;

  @Column()
  @IsString()
  refreshToken: string;

  @Column()
  @IsString()
  gameSocketId: string;

  @Column()
  @IsString()
  chatSocketId: string;

  @Column({ default: null })
  @Length(1, 20)
  @IsString()
  @IsOptional()
  @Matches(/^[ㄱ-ㅎ가-힣a-zA-Z0-9]+$/)
  statusMessage: string;
}
