import {MediaTileType} from "./media-type.types";
import {CoverArtData} from "../types/cover-art-data.type";
import {Privacy} from "../types/media-privacy.type";

export interface LastPlayed {
  id: string;
  name: string;
  // coverArt: { imgSrc: string, mainColor: string };
  coverArt: CoverArtData;
  url: string;
  description?: string;
  playing: boolean;
  type: MediaTileType;
  artistName?: string;
  fullShowName?: string;
  privacy?: Privacy;
}

export interface LastPlayedAlbum extends LastPlayed{
  artistName: string;
}
