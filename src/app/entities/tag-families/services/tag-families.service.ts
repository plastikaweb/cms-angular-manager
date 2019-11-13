import { Injectable } from '@angular/core';
import { ConfigService } from '@app/root/services/config/config.service';
import { environment } from '@environments/environment';
import { TagFamily } from '@shared/models';
import { RestService } from '@shared/services/rest/rest.service';

@Injectable({
  providedIn: 'root',
})
export class TagFamiliesService extends RestService<
  TagFamily,
  Partial<TagFamily>,
  Array<TagFamily>
> {
  protected segment =
    ConfigService.settings && ConfigService.settings.pages.tagFamilies.segment;
  baseUrl = `${environment.apiUrl}/${this.segment}`;
}
