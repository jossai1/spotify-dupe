import {Injectable} from '@angular/core';
import {LastPlayed} from "../models/last-played.model";
import {MediaTileType} from "../models/media-type.types";
import {MediaCategory} from "../models/media-category.model";
import { HttpClient } from  '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) {}

  username: string = 'FierceBlackNerd';
  defaultBgColor: string = 'rgb(224, 40, 40)';
  gradientBackgroundColor: string = this.defaultBgColor;

  getUsername(): string {
    return this.username;
  }

  getDefaultBgColor() {
    return this.defaultBgColor;
  }

  setUsername(username: string) {
    this.username = username;
  }

  setGradientBackgroundColor(bgColor: string) {
    this.gradientBackgroundColor = bgColor;
  }

  getGradientBackgroundColor() {
    return this.gradientBackgroundColor;
  }

  getRandomCocktail(): Observable<any> {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    return this.http.get(url);
  }

  getMediaCategories(): MediaCategory[] {
    return [
      {
        categoryName: `Made for ${this.username}`, type: MediaTileType.DAILY_MIXES, mediaTiles: [
          {
            id: '6',
            name: 'Daily Mix 1',
            coverArt: {imgSrc: '/assets/images/album-art/daily-mix.jpeg'},
            url: '',
            playing: false,
            description: 'Asake, Lojay, Chris Brown',
            type:  MediaTileType.PLAYLIST
          },
          {
            id: '7',
            name: 'Daily Mix 2',
            coverArt: {imgSrc: '/assets/images/album-art/daily-mix.jpeg'},
            url: '',
            playing: false,
            description: 'Asake, Lojay, Chris Brown',
            type: MediaTileType.PLAYLIST
          },
          {
            id: '8',
            name: 'Daily Mix 3',
            coverArt: {imgSrc: '/assets/images/album-art/daily-mix.jpeg'},
            url: '',
            playing: false,
            description: 'Asake, Lojay, Chris Brown',
            type: MediaTileType.PLAYLIST
          },
          {
            id: '9',
            name: 'Daily Mix 4',
            coverArt: {imgSrc: '/assets/images/album-art/daily-mix.jpeg'},
            url: '',
            playing: false,
            description: 'Asake, Lojay, Chris Brown',
            type: MediaTileType.PLAYLIST
          },
          {
            id: '10',
            name: 'Daily Mix 5',
            coverArt: {imgSrc: '/assets/images/album-art/daily-mix.jpeg'},
            url: '',
            playing: false,
            description: 'Asake, Lojay, Chris Brown',
            type: MediaTileType.PLAYLIST
          },
          {
            id: '11',
            name: 'Daily Mix 6',
            coverArt: {imgSrc: '/assets/images/album-art/daily-mix.jpeg'},
            url: '',
            playing: false,
            description: 'Asake, Lojay, Chris Brown',
            type: MediaTileType.PLAYLIST
          },
          {
            id: '12',
            name: 'Daily Mix 7',
            coverArt: {imgSrc: '/assets/images/album-art/daily-mix.jpeg'},
            url: '',
            playing: false,
            description: 'Asake, Lojay, Chris Brown',
            type: MediaTileType.PLAYLIST
          },
          {
            id: '13',
            name: 'Daily Mix 8',
            coverArt: {imgSrc: '/assets/images/album-art/daily-mix.jpeg'},
            url: '',
            playing: false,
            description: 'Asake, Lojay, Chris Brown',
            type: MediaTileType.PLAYLIST
          },
        ]
      },
      {
        categoryName: `Episodes for you`, type: MediaTileType.PODCASTS, mediaTiles: [
          {
            id: '14',
            name: 'ISWIS SE05EP23The "Cool Mum" Episode ft. Chinyere, Folusho & Mfonabasi',
            coverArt: {imgSrc: '/assets/images/album-art/iswis.jpeg'},
            url: '',
            playing: false,
            description: '26th July - 199 mins',
            type: MediaTileType.SHOW,
            fullShowName: 'I Said What I Said'
          },
          {
            id: '15',
            name: 'ISWIS SE05EP23The "Cool Mum" Episode ft. Chinyere, Folusho & Mfonabasi',
            coverArt: {imgSrc: '/assets/images/album-art/iswis.jpeg'},
            url: '',
            playing: false,
            description: '26th July - 199 mins',
            type: MediaTileType.SHOW,
            fullShowName: 'I Said What I Said'
          },
          {
            id: '16',
            name: 'ISWIS SE05EP23The "Cool Mum" Episode ft. Chinyere, Folusho & Mfonabasi',
            coverArt: {imgSrc: '/assets/images/album-art/iswis.jpeg'},
            url: '',
            playing: false,
            description: '26th July - 199 mins',
            type: MediaTileType.SHOW,
            fullShowName: 'I Said What I Said'
          },
          {
            id: '17',
            name: 'ISWIS SE05EP23The "Cool Mum" Episode ft. Chinyere, Folusho & Mfonabasi',
            coverArt: {imgSrc: '/assets/images/album-art/iswis.jpeg'},
            url: '',
            playing: false,
            description: '26th July - 199 mins',
            type: MediaTileType.SHOW,
            fullShowName: 'I Said What I Said'
          },
          {
            id: '18',
            name: 'ISWIS SE05EP23The "Cool Mum" Episode ft. Chinyere, Folusho & Mfonabasi',
            coverArt: {imgSrc: '/assets/images/album-art/iswis.jpeg'},
            url: '',
            playing: false,
            description: '26th July - 199 mins',
            type: MediaTileType.SHOW,
            fullShowName: 'I Said What I Said'
          },
          {
            id: '19',
            name: 'Daily Motion',
            coverArt: {imgSrc: '/assets/images/album-art/iswis.jpeg'},
            url: '',
            playing: false,
            description: 'Asake, Lojay, Chris Brown',
            type: MediaTileType.SHOW,
            fullShowName: 'I Said What I Said'
          },
          {
            id: '20',
            name: 'TechCrunch',
            coverArt: {imgSrc: '/assets/images/album-art/iswis.jpeg'},
            url: '',
            playing: false,
            description: 'Asake, Lojay, Chris Brown',
            type: MediaTileType.SHOW,
            fullShowName: 'I Said What I Said'
          },
          {
            id: '21',
            name: 'FBN Slayers',
            coverArt: {imgSrc: '/assets/images/album-art/iswis.jpeg'},
            url: '',
            playing: false,
            description: 'Asake, Lojay, Chris Brown',
            type: MediaTileType.SHOW,
            fullShowName: 'I Said What I Said'
          },
        ]
      },
      {
        categoryName: `Your Playlists`, type: MediaTileType.PLAYLISTS, mediaTiles: [
          {
            id: '22',
            name: 'Alte',
            coverArt: {imgSrc: '/assets/images/album-art/Wizkid_-_Made_in_Lagos.png'},
            url: '',
            playing: false,
            description: `By ${this.username}`,
            type: MediaTileType.PLAYLIST
          },
          {
            id: '23',
            name: 'Oldies',
            coverArt: {imgSrc: '/assets/images/album-art/Wizkid_-_Made_in_Lagos.png'},
            url: '',
            playing: false,
            description: `By ${this.username}`,
            type: MediaTileType.PLAYLIST
          },
          {
            id: '24',
            name: 'Hip-Hop',
            coverArt: {imgSrc: '/assets/images/album-art/Wizkid_-_Made_in_Lagos.png'},
            url: '',
            playing: false,
            description: `By ${this.username}`,
            type: MediaTileType.PLAYLIST
          },
          {
            id: '25',
            name: 'Naija',
            coverArt: {imgSrc: '/assets/images/album-art/Wizkid_-_Made_in_Lagos.png'},
            url: '',
            playing: false,
            description: `By ${this.username}`,
            type: MediaTileType.PLAYLIST
          }
        ]
      }
    ];
  }

  getLastPlayedData(): LastPlayed[] {
    return [
      {
        id: '1',
        name: 'Alte vybz',
        coverArt: {imgSrc: '../assets/images/album-art/Burna-Boy-5th-Album-Cover-Art.jpg', mainColor: '#E6B358'},
        url: '',
        playing: false,
        type: MediaTileType.PLAYLIST
      },
      {
        id: '6',
        name: 'Work of art',
        artistName: 'Asake',
        coverArt: {imgSrc: '/assets/images/album-art/Asake-Work-of-Art.webp', mainColor: '#C02305'},
        url: '',
        playing: false,
        type: MediaTileType.ALBUM
      },
      {
        id: '2',
        name: 'Oldies',
        coverArt: {imgSrc: '/assets/images/album-art/Burna_Boy_-_Outside_album_cover.jpg', mainColor: '#78D8F1'},
        url: '',
        playing: false,
        type: MediaTileType.PLAYLIST
      },
      {
        id: '3',
        name: 'R&B',
        coverArt: {imgSrc: '/assets/images/album-art/anita-baker.jpeg', mainColor: '#9A7295'},
        url: '',
        playing: false,
        type: MediaTileType.PLAYLIST
      },
      {
        id: '4',
        name: 'Afrobeats',
        coverArt: {imgSrc: '/assets/images/album-art/Burna_Boy_-_African_Giant.png', mainColor: '#CF8B74'},
        url: '',
        playing: false,
        type: MediaTileType.PLAYLIST
      },
      {
        id: '5',
          name: 'Heaux Tales',
        artistName: 'Jazmine Sullivan',
        coverArt: {imgSrc: '/assets/images/album-art/Heaux Tales_Jazmine Sullivan.webp', mainColor: '#D2F73C'},
        url: '',
        playing: true,
        type: MediaTileType.ALBUM
      },
    ];
  }
}
