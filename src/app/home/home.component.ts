import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  username: string = 'FierceBlackNerd';

  //passed in as prop
  lastPlayedMedia: any[] = [
    {
      id: '1',
      name: 'Alte vybz',
      coverArtImgSrc: '../assets/images/album-art/Burna-Boy-5th-Album-Cover-Art.jpg',
      url: '',
      playing: false,
      type: 'playlist'
    },
    {
      name: 'Work of art',
      coverArtImgSrc: '/assets/images/album-art/Asake-Work-of-Art.webp',
      url: '',
      playing: false,
      type: 'album'
    },
    {
      id: '2',
      name: 'Oldies',
      coverArtImgSrc: '/assets/images/album-art/Burna_Boy_-_Outside_album_cover.jpg',
      url: '',
      playing: false,
      type: 'playlist'
    },
    {
      id: '3',
      name: 'R&B',
      coverArtImgSrc: '/assets/images/album-art/anita-baker.jpeg',
      url: '',
      playing: false,
      type: 'playlist'
    },
    {
      id: '4',
      name: 'Afrobeats',
      coverArtImgSrc: '/assets/images/album-art/Burna_Boy_-_African_Giant.png',
      url: '',
      playing: false,
      type: 'playlist'
    },
    {
      id: '5',
      name: 'Jazmine Sullivan',
      coverArtImgSrc: '/assets/images/album-art/Heaux Tales_Jazmine Sullivan.webp',
      url: '',
      playing: true,
      type: 'album'
    },
  ];

  mediaCategories: any[] = [
    {
      categoryName: `Made for ${this.username}`, type: 'DailyMixes', mediaTiles: [
        {
          id: '6',
          name: 'Daily Mix 1',
          coverArtImgSrc: '/assets/images/album-art/daily-mix.jpeg',
          url: '',
          playing: false,
          description: 'Asake, Lojay, Chris Brown',
          type: 'playlist'
        },
        {
          id: '7',
          name: 'Daily Mix 2',
          coverArtImgSrc: '/assets/images/album-art/daily-mix.jpeg',
          url: '',
          playing: false,
          description: 'Asake, Lojay, Chris Brown',
          type: 'playlist'
        },
        {
          id: '8',
          name: 'Daily Mix 3',
          coverArtImgSrc: '/assets/images/album-art/daily-mix.jpeg',
          url: '',
          playing: false,
          description: 'Asake, Lojay, Chris Brown',
          type: 'playlist'
        },
        {
          id: '9',
          name: 'Daily Mix 4',
          coverArtImgSrc: '/assets/images/album-art/daily-mix.jpeg',
          url: '',
          playing: false,
          description: 'Asake, Lojay, Chris Brown',
          type: 'playlist'
        },
        {
          id: '10',
          name: 'Daily Mix 5',
          coverArtImgSrc: '/assets/images/album-art/daily-mix.jpeg',
          url: '',
          playing: false,
          description: 'Asake, Lojay, Chris Brown',
          type: 'playlist'
        },
        {
          id: '11',
          name: 'Daily Mix 6',
          coverArtImgSrc: '/assets/images/album-art/daily-mix.jpeg',
          url: '',
          playing: false,
          description: 'Asake, Lojay, Chris Brown',
          type: 'playlist'
        },
        {
          id: '12',
          name: 'Daily Mix 7',
          coverArtImgSrc: '/assets/images/album-art/daily-mix.jpeg',
          url: '',
          playing: false,
          description: 'Asake, Lojay, Chris Brown',
          type: 'playlist'
        },
        {
          id: '13',
          name: 'Daily Mix 8',
          coverArtImgSrc: '/assets/images/album-art/daily-mix.jpeg',
          url: '',
          playing: false,
          description: 'Asake, Lojay, Chris Brown',
          type: 'playlist'
        },
      ]
    },
    {
      categoryName: `Episodes for you`, type: 'Podcasts', mediaTiles: [
        {
          id: '14',
          name: 'ISWIS SE05EP23The "Cool Mum" Episode ft. Chinyere, Folusho & Mfonabasi',
          coverArtImgSrc: '/assets/images/album-art/iswis.jpeg',
          url: '',
          playing: false,
          description: '26th July - 199 mins',
          type: 'show',
          fullShowName: 'I Said What I Said'
        },
        {
          id: '15',
          name: 'ISWIS SE05EP23The "Cool Mum" Episode ft. Chinyere, Folusho & Mfonabasi',
          coverArtImgSrc: '/assets/images/album-art/iswis.jpeg',
          url: '',
          playing: false,
          description: '26th July - 199 mins',
          type: 'show',
          fullShowName: 'I Said What I Said'
        },
        {
          id: '16',
          name: 'ISWIS SE05EP23The "Cool Mum" Episode ft. Chinyere, Folusho & Mfonabasi',
          coverArtImgSrc: '/assets/images/album-art/iswis.jpeg',
          url: '',
          playing: false,
          description: '26th July - 199 mins',
          type: 'show',
          fullShowName: 'I Said What I Said'
        },
        {
          id: '17',
          name: 'ISWIS SE05EP23The "Cool Mum" Episode ft. Chinyere, Folusho & Mfonabasi',
          coverArtImgSrc: '/assets/images/album-art/iswis.jpeg',
          url: '',
          playing: false,
          description: '26th July - 199 mins',
          type: 'show',
          fullShowName: 'I Said What I Said'
        },
        {
          id: '18',
          name: 'ISWIS SE05EP23The "Cool Mum" Episode ft. Chinyere, Folusho & Mfonabasi',
          coverArtImgSrc: '/assets/images/album-art/iswis.jpeg',
          url: '',
          playing: false,
          description: '26th July - 199 mins',
          type: 'show',
          fullShowName: 'I Said What I Said'
        },
        {
          id: '19',
          name: 'Daily Motion',
          coverArtImgSrc: '/assets/images/album-art/iswis.jpeg',
          url: '',
          playing: false,
          description: 'Asake, Lojay, Chris Brown',
          type: 'show',
          fullShowName: 'I Said What I Said'
        },
        {
          id: '20',
          name: 'TechCrunch',
          coverArtImgSrc: '/assets/images/album-art/iswis.jpeg',
          url: '',
          playing: false,
          description: 'Asake, Lojay, Chris Brown',
          type: 'show',
          fullShowName: 'I Said What I Said'
        },
        {
          id: '21',
          name: 'FBN Slayers',
          coverArtImgSrc: '/assets/images/album-art/iswis.jpeg',
          url: '',
          playing: false,
          description: 'Asake, Lojay, Chris Brown',
          type: 'show',
          fullShowName: 'I Said What I Said'
        },
      ]
    },
    {
      categoryName: `Your Playlists`, type: 'Playlists', mediaTiles: [
        {
          id: '22',
          name: 'Alte',
          coverArtImgSrc: '/assets/images/album-art/Wizkid_-_Made_in_Lagos.png',
          url: '',
          playing: false,
          description: `By ${this.username}`,
          type: 'playlist'
        },
        {
          id: '23',
          name: 'Oldies',
          coverArtImgSrc: '/assets/images/album-art/Wizkid_-_Made_in_Lagos.png',
          url: '',
          playing: false,
          description: `By ${this.username}`,
          type: 'playlist'
        },
        {
          id: '24',
          name: 'Hip-Hop',
          coverArtImgSrc: '/assets/images/album-art/Wizkid_-_Made_in_Lagos.png',
          url: '',
          playing: false,
          description: `By ${this.username}`,
          type: 'playlist'
        },
        {
          id: '25',
          name: 'Naija',
          coverArtImgSrc: '/assets/images/album-art/Wizkid_-_Made_in_Lagos.png',
          url: '',
          playing: false,
          description: `By ${this.username}`,
          type: 'playlist'
        }
      ]
    }
  ];

  timeOfDay(): string {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
      return 'Morning';
    } else if (currentHour >= 12 && currentHour < 17) {
      return 'Afternoon';
    } else {
      return 'Evening';
    }
  }
}
