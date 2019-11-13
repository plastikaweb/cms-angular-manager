import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { MainConfig } from '@shared/models';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  static settings: MainConfig;

  constructor(private http: HttpClient) {}
  load() {
    const jsonFile = `${environment.assetsUrl}/assets/config/config.json`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return new Promise<void>((resolve, reject) => {
      this.http
        .get<MainConfig>(jsonFile, httpOptions)
        .toPromise()
        .then((response: MainConfig) => {
          ConfigService.settings = response as MainConfig;
          resolve();
        })
        .catch((response: any) => {
          reject(`Failed to load the config file`);
        });
    });
  }
}
