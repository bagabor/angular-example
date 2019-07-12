import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  languages: MenuItem[];

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.languages = [
      { label: 'EN', icon: 'pi pi-globe', command: () => this.languageSetter('en') },
      { label: 'HU', icon: 'pi pi-globe', command: () => this.languageSetter('hu') }
    ];
  }

  languageSetter(languageID: string): void {
    this.translate.use(languageID);
  }
}
