declare interface IHeroesDataSlice {
  heroes: IHeroDataId;
}

// declare interface IHeroes {
//   id: number;
//   skills: number[];
// }
declare interface IHeroDataId {
  results: ISuperHeroId | null;
}
declare interface ISearchName {
  results: ISearchNameHero | null;
}
declare interface ISearchNameData {
  data: ISearchNameHeroData;
}
declare interface ISearchNameHeroData {
  results: ISearchNameHero[];
}
declare interface ISearchNameHero {
  response: string;
  id: string;
  name: string;
  powerstats: IPowerStats;
  biography: IBiography;
  appearance: IAppearance;
  work: IWork;
  connections: IConnection;
  image: IImage;
}
declare interface ISuperHeroId {
  response: string;
  id: string;
  name: string;
  powerstats: IPowerStats;
  biography: IBiography;
  appearance: IAppearance;
  work: IWork;
  connections: IConnection;
  image: IImage;
}
declare interface IPowerStats {
  intelligence: string;
  strength: string;
  speed: string;
  durability: string;
  power: string;
  combat: string;
}
declare interface IBiography {
  'full-name': string;
  'alter-egos': string;
  aliases: string[];
  'place-of-birth': string;
  'first-appearance': string;
  publisher: string;
  alignment: string;
}
declare interface IAppearance {
  gender: string;
  race: string;
  height: string;
  weight: string;
  'eye-color': string;
  'hair-color': string;
}
declare interface IWork {
  occupation: string;
  base: string;
}
declare interface IConnection {
  'group-affiliation': string;
  relatives: string;
}
declare interface IImage {
  url: any;
}
