import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-rest-01',
  templateUrl: './fetch-data.component.html'
})
export class FetchRest01 {
  public responseData: ExampleAEntityDto[] = [];


  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<ExampleAEntityDto[]>(baseUrl + 'api/rest/host/v1/toberewritten').subscribe(result => {
      this.responseData = result;
    }, error => console.error(error));
  }
}

interface ExampleAEntityDto {
  text: string;
  description: string;
}
