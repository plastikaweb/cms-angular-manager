import { Injectable } from '@angular/core';
import { ConfigService } from '@app/root/services/config/config.service';
import { environment } from '@environments/environment';
import { Action, ActionCreation } from '@shared/models';
import { RestService } from '@shared/services/rest/rest.service';

@Injectable({
  providedIn: 'root',
})
export class ActionsService extends RestService<
  Action,
  ActionCreation,
  Array<Action>
> {
  segment =
    ConfigService.settings && ConfigService.settings.pages.actions.segment;
  baseUrl = `${environment.apiUrl}/${this.segment}`;
}
