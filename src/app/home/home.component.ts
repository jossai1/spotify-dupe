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
      name: 'Alte vybz',
      coverArtImgSrc: '../assets/images/album-art/Burna-Boy-5th-Album-Cover-Art.jpg',
      url: '',
      playing: false
    },
    {name: 'Work of art', coverArtImgSrc: '/assets/images/album-art/Asake-Work-of-Art.webp', url: '', playing: false},
    {
      name: 'Oldies',
      coverArtImgSrc: '/assets/images/album-art/Burna_Boy_-_Outside_album_cover.jpg',
      url: '',
      playing: false
    },
    {
      name: 'R&B',
      coverArtImgSrc: '/assets/images/album-art/anita-baker.jpeg',
      url: '',
      playing: false
    },
    {
      name: 'Afrobeats',
      coverArtImgSrc: '/assets/images/album-art/Burna_Boy_-_African_Giant.png',
      url: '',
      playing: false
    },
    {
      name: 'Jazmine Sullivan',
      coverArtImgSrc: '/assets/images/album-art/Heaux Tales_Jazmine Sullivan.webp',
      url: '',
      playing: true
    },
  ];

  mediaCategories: any[] = [
    {
      categoryName: `Made for ${this.username}`, type: 'DailyMixes', mediaTiles: [
        {
          name: 'Daily Mix 1',
          coverArtImgSrc: '/assets/images/album-art/daily-mix.jpeg',
          url: '',
          playing: false,
          description: 'Asake, Lojay, Chris Brown'
        },
        {
          name: 'Daily Mix 2',
          coverArtImgSrc: '/assets/images/album-art/daily-mix.jpeg',
          url: '',
          playing: false,
          description: 'Asake, Lojay, Chris Brown'
        },
        {
          name: 'Daily Mix 3',
          coverArtImgSrc: '/assets/images/album-art/daily-mix.jpeg',
          url: '',
          playing: false,
          description: 'Asake, Lojay, Chris Brown'
        },
        {
          name: 'Daily Mix 4',
          coverArtImgSrc: '/assets/images/album-art/daily-mix.jpeg',
          url: '',
          playing: false,
          description: 'Asake, Lojay, Chris Brown'
        },
        {
          name: 'Daily Mix 5',
          coverArtImgSrc: '/assets/images/album-art/daily-mix.jpeg',
          url: '',
          playing: true,
          description: 'Asake, Lojay, Chris Brown'
        },
        {
          name: 'Daily Mix 6',
          coverArtImgSrc: '/assets/images/album-art/daily-mix.jpeg',
          url: '',
          playing: false,
          description: 'Asake, Lojay, Chris Brown'
        },
        {
          name: 'Daily Mix 7',
          coverArtImgSrc: '/assets/images/album-art/daily-mix.jpeg',
          url: '',
          playing: false,
          description: 'Asake, Lojay, Chris Brown'
        },
        {
          name: 'Daily Mix 8',
          coverArtImgSrc: '/assets/images/album-art/daily-mix.jpeg',
          url: '',
          playing: false,
          description: 'Asake, Lojay, Chris Brown'
        },
      ]
    },
    {
      categoryName: `Episodes for you`, type: 'Podcasts', mediaTiles: [
        {
          name: 'ISWIS',
          coverArtImgSrc: '/assets/images/album-art/iswis.jpeg',
          url: '',
          playing: false,
          description: '26th July - 199 mins'
        },
        {
          name: 'ISWIS',
          coverArtImgSrc: '/assets/images/album-art/iswis.jpeg',
          url: '',
          playing: false,
          description: '26th July - 199 mins'
        },
        {
          name: 'ISWIS',
          coverArtImgSrc: '/assets/images/album-art/iswis.jpeg',
          url: '',
          playing: false,
          description: '26th July - 199 mins'
        },
        {
          name: 'ISWIS',
          coverArtImgSrc: '/assets/images/album-art/iswis.jpeg',
          url: '',
          playing: false,
          description: '26th July - 199 mins'
        },
        {
          name: 'ISWIS',
          coverArtImgSrc: '/assets/images/album-art/iswis.jpeg',
          url: '',
          playing: false,
          description: '26th July - 199 mins'
        },
        {
          name: 'Daily Motion',
          coverArtImgSrc: '/assets/images/album-art/iswis.jpeg',
          url: '',
          playing: false,
          description: 'Asake, Lojay, Chris Brown'
        },
        {
          name: 'TechCrunch',
          coverArtImgSrc: '/assets/images/album-art/iswis.jpeg',
          url: '',
          playing: false,
          description: 'Asake, Lojay, Chris Brown'
        },
        {
          name: 'FBN Slayers',
          coverArtImgSrc: '/assets/images/album-art/iswis.jpeg',
          url: '',
          playing: false,
          description: 'Asake, Lojay, Chris Brown'
        },
      ]
    },
    {
      categoryName: `Your Playlists`, type: 'Playlists', mediaTiles: [
        {
          name: 'Alte',
          coverArtImgSrc: '/assets/images/album-art/Wizkid_-_Made_in_Lagos.png',
          url: '',
          playing: false,
          description: `By ${this.username}`
        },
        {
          name: 'Oldies',
          coverArtImgSrc: '/assets/images/album-art/Wizkid_-_Made_in_Lagos.png',
          url: '',
          playing: false,
          description: `By ${this.username}`
        },
        {
          name: 'Hip-Hop',
          coverArtImgSrc: '/assets/images/album-art/Wizkid_-_Made_in_Lagos.png',
          url: '',
          playing: false,
          description: `By ${this.username}`
        },
        {
          name: 'Naija',
          coverArtImgSrc: '/assets/images/album-art/Wizkid_-_Made_in_Lagos.png',
          url: '',
          playing: false,
          description: `By ${this.username}`
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
