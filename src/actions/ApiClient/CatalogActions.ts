import { HttpRequest } from './HttpRequest';
import { API_URL } from '../../constants/ApiUrls';
import { GetErrorMessage } from '../../utils';

export async function GetSuperHeroeId(letter: string): Promise<IHeroDataId | undefined> {
  try {
    const HeroeData = await new HttpRequest().Get<any>(
      `https://thingproxy.freeboard.io/fetch/${API_URL}search/${letter}`
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

export async function GetDataFilterPowerstat(
  id: number,
  powerstat: string
): Promise<any | undefined> {
  try {
    const InfoSuperHero = await new HttpRequest().Get<ISearchName>(
      `https://thingproxy.freeboard.io/fetch/${API_URL}${id}/${powerstat}`
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

export async function GetDataFilterAppearance(
  id: number,
  appearance: string
): Promise<any | undefined> {
  try {
    const InfoSuperHero = await new HttpRequest().Get<ISearchName>(
      `https://thingproxy.freeboard.io/fetch/${API_URL}${id}/${appearance}`
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
