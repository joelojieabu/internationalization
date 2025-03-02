import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSelectorComponent } from '../../components/language-selector/language-selector.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslateModule, LanguageSelectorComponent],
  template: `
    <div class="home-container">
      <h2>{{ 'HOME.WELCOME' | translate }}</h2>
      <p>{{ 'HOME.DESCRIPTION' | translate }}</p>

      <div class="language-section">
        <h3>{{ 'HOME.SWITCH_LANGUAGE' | translate }}</h3>
        <app-language-selector></app-language-selector>
      </div>
    </div>
  `,
  styles: [
    `
      .home-container {
        padding: 20px;
        max-width: 800px;
        margin: 0 auto;
      }
      .language-section {
        margin-top: 30px;
        padding: 20px;
        background-color: #f9f9f9;
        border-radius: 5px;
      }
    `,
  ],
})
export class HomeComponent {}
