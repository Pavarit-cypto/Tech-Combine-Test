import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreateNoteDto, getNoteTagDto } from './dto/note.dto';
import { NoteService } from './note.service';

@ApiTags('Note')
@Controller({
  version: '1',
  path: 'note',
})
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Get('/')
  getAllNote(@Query('column') column?: string, @Query('sort') sort?: string) {
    return this.noteService.getAllNote(column, sort);
  }

  @Post('/tags')
  getNoteTag(@Body() body: getNoteTagDto) {
    return this.noteService.getNoteTag(body.tags);
  }

  @Get('/:id')
  getDetailNoteById(@Param('id') id: string) {
    return this.noteService.getDetailNoteById(id);
  }

  @Post('create')
  createNote(@Body() body: CreateNoteDto) {
    return this.noteService.createNote(body)
  }
}
