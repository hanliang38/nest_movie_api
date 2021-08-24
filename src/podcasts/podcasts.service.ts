import { Injectable, NotFoundException } from '@nestjs/common';
import { Episode } from './entities/episode.entity';
import { Podcast } from './entities/podcast.entity';

@Injectable()
export class PodcastsService {
    private podcasts: Podcast[] = [];
    private episodes: Episode[] = [];

    getAll(): Podcast[] {
        return this.podcasts;
    };

    create(podcastData) {
        this.podcasts.push({
            id: this.podcasts.length + 1,
            ...podcastData,
        })
    };

    getOne(podcastId: number): Podcast {
        const podcast = this.podcasts.find((podcast) => podcast.id === podcastId)
        if (!podcast) {
      throw new NotFoundException(`Podcast with ID ${podcastId} not found.`)
    }
    return podcast;
    };

    remove(podcastId: number) {
        this.getOne(podcastId);
        this.podcasts = this.podcasts.filter((podcast) => podcast.id !== podcastId);
    };

    update(podcastId: number, podcastData) {
        const podcast = this.getOne(podcastId);
        this.remove(podcastId);
        this.podcasts.push({...podcast, ...podcastData})
    };

    getEp(): Episode[] {
        return this.episodes;
    };

    getEpOne(epId: number): Episode {
        const ep = this.episodes.find((ep) => ep.id === epId);
        if (!ep) {
      throw new NotFoundException(`Episode with ID ${epId} not found.`)
    }
    return ep;
  }

    createEp(epData) {
        this.episodes.push({
            id: this.episodes.length + 1,
            ...epData,
        });
    };

    removeEp(epId: number) {
        this.getEpOne(epId);
        this.episodes = this.episodes.filter((ep) => ep.id !== epId);
    }
    
    updateEp(epId: number, updateEpData) {
        const ep = this.getEpOne(epId);
        this.episodes.push({...ep, ...updateEpData})
    }
}
