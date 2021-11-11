import { HttpRequest } from './HttpRequest';
import { API_URL } from '../../constants/ApiUrls';
import { GetErrorMessage } from '../../utils';

export async function GetSuperHeroeId(): Promise<any | undefined> {
  try {
    const HeroeData = await new HttpRequest().Get<any>(`${API_URL}`);
    return HeroeData;
  } catch (error) {
    throw new Error(GetErrorMessage(error));
  }
}
