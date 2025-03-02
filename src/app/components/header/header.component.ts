import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, TranslateModule, LanguageSelectorComponent],
  template: `
    <header>
      <h1>{{ 'HEADER.TITLE' | translate }}</h1>
      <nav>
        <a
          routerLink="/"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: true }"
          >{{ 'HEADER.HOME' | translate }}</a
        >
        <a routerLink="/about" routerLinkActive="active">{{
          'HEADER.ABOUT' | translate
        }}</a>
      </nav>
      <app-language-selector></app-language-selector>
    </header>
  `,
  styles: [
    `
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        background-color: #f5f5f5;
        border-bottom: 1px solid #ddd;
      }
      nav {
        display: flex;
        gap: 20px;
      }
      a {
        text-decoration: none;
        color: #333;
      }
      a.active {
        font-weight: bold;
        color: #0066cc;
      }
    `,
  ],
})
export class HeaderComponent {}
