import {
  Injectable,
  Inject,
  PLATFORM_ID,
  TransferState,
  StateKey,
  makeStateKey,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isPlatformServer } from '@angular/common';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { API_URL_TOKEN } from '../tokens/api.token';

@Injectable()
export class BaseApiService {
  constructor(
    protected http: HttpClient,
    protected transferState: TransferState,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(API_URL_TOKEN) private apiUrl: string
  ) {}

  // makeStateKey<T>('key'): unique key for the data we need to save
  // TransferState.set(key, data): writing data server side
  // TransferState.get(key, default):  reading data client side

  /**
   * Generic GET with TransferState support
   */
  protected getWithState<T>(
    endpoint: string,
    keySuffix?: string
  ): Observable<T> {
    const key: StateKey<T> = makeStateKey<T>(`${endpoint}-${keySuffix || ''}`);

    // Check if data is already in TransferState (client side)
    if (this.transferState.hasKey(key)) {
      const data = this.transferState.get<T>(key, null as any);
      this.transferState.remove(key);
      return of(data);
    }

    // Otherwise, fetch via HTTP
    return this.http.get<T>(`${this.apiUrl}/${endpoint}`).pipe(
      tap((data) => {
        // Only server side: save in TransferState
        if (isPlatformServer(this.platformId)) {
          this.transferState.set(key, data);
        }
      })
    );
  }
}
