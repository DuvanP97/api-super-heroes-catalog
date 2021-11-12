import { HttpRequest } from './HttpRequest';
import { API_URL } from '../../constants/ApiUrls';
import { GetErrorMessage } from '../../utils';

export async function GetSuperHeroeId(): Promise<IHeroDataId | undefined> {
  try {
    const HeroeData = await new HttpRequest().Get<IHeroDataId>(`${API_URL}2`);
    if (HeroeData.okay && HeroeData.data) {
      return HeroeData.data;
    } else {
      throw Error(HeroeData.message);
    }
  } catch (error) {
    throw new Error(GetErrorMessage(error));
  }
}
