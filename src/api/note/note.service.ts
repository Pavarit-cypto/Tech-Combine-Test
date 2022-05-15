import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NoteEntity } from 'src/database/entities/note.entity';
import { INote } from 'src/interfaces/note.interface';
import { Repository } from 'typeorm';

@Injectable()
export class NoteService {
  constructor(
    @InjectRepository(NoteEntity)
    private noteRepository: Repository<NoteEntity>,
  ) {}

  async getAllNote(column: string, sort: string): Promise<NoteEntity[]> {
    let order = {};
    if (column && sort) {
      Object.assign(order, { [column]: String(sort).toUpperCase() });
    }
    return await this.noteRepository.find({ order });
  }

  async getDetailNoteById(id: string): Promise<NoteEntity> {
    return await this.noteRepository.findOne({ where: { id } });
  }

  async getNoteTag(tag: string[]): Promise<NoteEntity[]> {
    return await this.noteRepository.find({ where: { tags: tag } });
  }

  async createNote(body: INote) {
    const noteCreated = await this.noteRepository.create(body);
    return await this.noteRepository.save(noteCreated);
  }
}
