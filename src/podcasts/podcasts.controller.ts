import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Episode } from './entities/episode.entity';
import { Podcast } from './entities/podcast.entity';
import { PodcastsService } from './podcasts.service';

@Controller('podcasts')
export class PodcastsController {
    constructor(private readonly podcastsService: PodcastsService) {}

    @Get()
    getAll(): Podcast[] {
        return this.podcastsService.getAll();
    }
    
    @Post()
    create(@Body() podcastData) {
        return this.podcastsService.create(podcastData);
    }
    
    @Get(':id')
    getOne(@Param('id') podcastId: number): Podcast {
        return this.podcastsService.getOne(podcastId);
    }
    
    @Patch(':id')
    update(@Param('id') podcastId: number, @Body() updateData) {
        return this.podcastsService.update(podcastId, this.update(podcastId, updateData))
    }
    
    @Delete(':id')
    remove(@Param('id') podcastId: number) {
        return this.podcastsService.remove(podcastId);
    }

    @Get(':id/episodes')
    getEp(): Episode[] {
        return this.podcastsService.getEp()
    }

    @Get(':id/episodes/:episodeId')
    getEpOne(@Param('epId') epId: number): Episode {
        return this.podcastsService.getEpOne(epId)
    }
    
    @Post(':id/episodes')
    createEp(@Body() epData) {
        return this.podcastsService.createEp(epData);
    }
    
    @Patch(':id/episodes:episodeId')
    updateEp(@Param('epId') epId: number, @Body() updateEpData) {
        return this.podcastsService.updateEp(epId, this.updateEp(epId,updateEpData));
    }

    @Delete(':id/episodes:episodeId')
    removeEp(@Param('epId') epId: number) {
        return this.podcastsService.removeEp(epId);
    }
}
