export interface IKAA {
  clip: string;
  sig: string;
  vt: string;
  user: User;
  notes: Notes;
  ax: boolean;
  scheduleList: ScheduleList[];
  animeList: AnimeList;
  wkl: string;
}

export interface AnimeList {
  all: All[];
  sub: All[];
  dub: All[];
}

export interface All {
  episode: string;
  slug: string;
  type: Type;
  episode_date: string;
  name: string;
  poster: string;
}

export enum Type {
  Dub = 'DUB',
  Sub = 'SUB',
}

export interface ScheduleList {
  day: string;
  data: Datum[];
}

export interface Datum {
  title: string;
  time: string;
  slug: string;
  image: string;
}

export interface IEpisodeAppData extends IKAA {
  anime: Anime;
  episode: PurpleEpisode;
  ext_servers: string[];
  episodes: EpisodeElement[];
  animeList: undefined;
}

export interface Anime {
  anime_id: string;
  name: string;
  en_title: string;
  slug: string;
  description: string;
  status: string;
  image: string;
  banner: null;
  startdate: string;
  enddate: null;
  broadcast_day: string;
  broadcast_time: string;
  source: string;
  duration: string;
  alternate: string;
  site: string;
  info_link: string;
  createddate: string;
  mal_id: string;
  simkl_id: string;
  types: Genre[];
  genres: Genre[];
}

export interface Genre {
  name: string;
  slug: string;
}

export interface PurpleEpisode {
  name: string;
  title: null;
  slug: string;
  slug_id: string;
  dub: string;
  link1: string;
  link2: string;
  link3: string;
  link4: string;
  anime_id: string;
  sector: string;
  createddate: string;
  next: null;
  prev: Prev;
  epid: string;
  rating: number;
  votes: string;
  favorited: boolean;
}

export interface Prev {
  name: string;
  slug: string;
  dub: string;
  title: null;
}

export interface EpisodeElement {
  epnum: string;
  name: null;
  slug: string;
  createddate: string;
  num: string;
}

export interface Notes {
  adblock: string;
  adblock_cheat: string;
  adblock_dialog: string;
  notes: string;
}

export interface User {
  uid: string;
  name: string;
  image: string;
}
