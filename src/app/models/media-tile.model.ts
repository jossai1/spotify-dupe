import {MediaTileType} from "./media-type.types";
import {CoverArtData} from "../types/cover-art-data.type";

export interface MediaTile {
  id: string;
  name: string;
  coverArt: CoverArtData;
  url: string;
  description: string;
  playing: boolean;
  type: MediaTileType;
  fullShowName?: string
}

export interface ShowMediaTile extends MediaTile {
  fullShowName:string;
}
