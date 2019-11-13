import { Injectable } from '@angular/core';
import { ConfigService } from '@app/root/services/config/config.service';
import { environment } from '@environments/environment';
import { Room } from '@shared/models';
import { RestService } from '@shared/services/rest/rest.service';

@Injectable({
  providedIn: 'root',
})
export class RoomsService extends RestService<
  Room,
  Partial<Room>,
  Array<Room>
> {
  protected segment =
    ConfigService.settings && ConfigService.settings.pages.rooms.segment;
  baseUrl = `${environment.apiUrl}/${this.segment}`;
}
