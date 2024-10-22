
export interface AnimeResponse{
  data       : Anime[]
  pagination : number,
}

export interface Anime {
  mal_id         : number;
  images         : Images;
  score          : string;
  start_date     : string;
  episodes       : number;
  duration       : string;
  rating         : string;
  genres         : Genres;
  title          : string;
  title_japanese : string;
  aired          : Aired;
}

export interface Aired {
  string : string;
}

export interface Genres {
  mal_id : number;
  type   : string;
  name   : string;
  url    : string;
}

export interface AnimeDetailsData {
  data: AnimeDetails;
}

export interface AnimeDetails extends Anime {
  synopsis: string;
  trailer_url: string;
}

export interface Images {
  jpg    : ImagesType;
  webp   : ImagesType;
}

export interface ImagesType {
  image_url    : string;
  small_image_url : string;
  large_image_url : string;
}



