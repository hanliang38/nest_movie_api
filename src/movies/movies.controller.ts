import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

  constructor(private readonly moviesServies: MoviesService) {}

  @Get()
  getAll() :Movie[] {
    return this.moviesServies.getAll();
  }

  @Get(':id')
  getone(@Param('id') movieId: string): Movie {
    return this.moviesServies.getOne(movieId);
  }

  @Post()
  create(@Body() movieData) {
    return this.moviesServies.create(movieData)
  }

  @Delete(':id')
  remove(@Param('id') movieId: string) {
    return this.moviesServies.deleteOne(movieId)
  }

  @Patch(':id')
  path(@Param('id') movieId: string, @Body() updateData) {
    return this.moviesServies.update(movieId, updateData)
  }
}
