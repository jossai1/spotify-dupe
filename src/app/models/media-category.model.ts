import {MediaTile} from "./media-tile.model";
import {MediaTileType} from "./media-type.types";

export interface MediaCategory {
  type: MediaTileType;
  categoryName: string;
  mediaTiles: MediaTile[];
}
