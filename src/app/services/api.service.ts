import {
  Injectable,
} from '@angular/core';
import { BaseApiService } from './base-api.service';


@Injectable({
  providedIn: 'root',
})
export class ApiService extends BaseApiService  {
  //BaseApiService implements all the GET with the TransferState to optimize SSR

  //TODO: change any with model
  getHomepage() {
    return this.getWithState<any>('homepage')
  } 
  
  getTalkById(id: string) {
    return this.getWithState<any>(`talk/${id}`, id);
  }
 
}
