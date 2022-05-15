import { Module } from '@nestjs/common';
import { NoteService } from './note.service';
import { NoteController } from './note.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { NoteEntity } from 'src/database/entities/note.entity';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([NoteEntity])],
  providers: [NoteService, ConfigService],
  controllers: [NoteController],
  exports: [NoteService],
})
export class NoteModule {}
