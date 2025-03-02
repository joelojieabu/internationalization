import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../i18n/language.service';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <div class="language-selector">
      <label>{{ 'HEADER.LANGUAGE' | translate }}: </label>
      <select (change)="changeLanguage($event)">
        <option
          *ngFor="let lang of languages"
          [value]="lang.code"
          [selected]="lang.code === currentLang"
        >
          {{ lang.name }}
        </option>
      </select>
    </div>
  `,
  styles: [
    `
      .language-selector {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      select {
        padding: 5px;
        border-radius: 4px;
      }
    `,
  ],
})
export class LanguageSelectorComponent implements OnInit {
  languages: { code: string; name: string }[] = [];
  currentLang = 'en';

  constructor(private languageService: LanguageService) {
    this.languages = this.languageService.getAvailableLanguages();
  }

  ngOnInit(): void {
    this.languageService.getCurrentLang().subscribe((lang) => {
      this.currentLang = lang;
    });
  }

  changeLanguage(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.languageService.changeLanguage(select.value);
  }
}
