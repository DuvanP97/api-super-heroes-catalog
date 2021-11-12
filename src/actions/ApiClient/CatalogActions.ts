import { HttpRequest } from './HttpRequest';
import { API_URL } from '../../constants/ApiUrls';
import { GetErrorMessage } from '../../utils';

export async function GetSuperHeroeId(id: number): Promise<IHeroDataId | undefined> {
  try {
    const HeroeData = await new HttpRequest().Get<IHeroDataId>(
      `https://thingproxy.freeboard.io/fetch/${API_URL}${id}`
    );
    if (HeroeData.okay && HeroeData.data) {
      return HeroeData.data;
    } else {
      throw Error(HeroeData.message);
    }
  } catch (error) {
    throw new Error(GetErrorMessage(error));
  }
}

export async function GetSearchName(name: string): Promise<IHeroDataId | undefined> {
  try {
    const InfoSuperHero = await new HttpRequest().Get<ISearchName>(
      `https://thingproxy.freeboard.io/fetch/${API_URL}search/${name}`
    );
    if (InfoSuperHero.okay && InfoSuperHero.data) {
      return InfoSuperHero.data;
    } else {
      throw Error(InfoSuperHero.message);
    }
  } catch (error) {
    throw new Error(GetErrorMessage(error));
  }
}
