import { Injectable } from '@angular/core';
import { ConfigService } from '@app/root/services/config/config.service';
import { environment } from '@environments/environment';
import { Tag, TagCreation, TagsApiResponse } from '@shared/models';
import { RestService } from '@shared/services/rest/rest.service';

@Injectable({
  providedIn: 'root',
})
export class TagsService extends RestService<
  Tag,
  TagCreation,
  TagsApiResponse
> {
  protected segment =
    ConfigService.settings && ConfigService.settings.pages.tags.segment;
  baseUrl = `${environment.apiUrl}/${this.segment}`;
}
