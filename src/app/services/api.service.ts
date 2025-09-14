import {
  Inject,
  Injectable,
  TransferState,
} from '@angular/core';
import { BaseApiService } from './base-api.service';
import { Header } from '../models/header.model';
import { HttpClient } from '@angular/common/http';
import { API_URL_TOKEN } from '../tokens/api.token';
import { map } from 'rxjs';
import { Footer } from '../models/footer.model';


@Injectable({
  providedIn: 'root',
})
export class ApiService extends BaseApiService  {
  //BaseApiService implements all the GET with the TransferState to optimize SSR
  constructor(
    http: HttpClient,
    transferState: TransferState,
    @Inject(API_URL_TOKEN) apiUrl: string
  ) {
    super(http, transferState, 'browser', apiUrl);
  }

  //TODO: change any with model
  getHomepage() {
    return this.getWithState<any>('homepage')
  } 
  
  getTalkById(id: string) {
    return this.getWithState<any>(`talk/${id}`, id);
  }

  updateHeader(body: Header) {
    return this.http.put(`${this.apiUrl}/homepage/header`, body).pipe(map((res: any) => res));
  }

  updateFooter(body: Footer) {
    return this.http.put(`${this.apiUrl}/homepage/footer`, body).pipe(map((res: any) => res));
  }
 
}
