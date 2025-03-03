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
        font-family: 'Lato', serif;
        font-weight: 300;
        font-style: italic;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        background-color:'rgba(54, 162, 235, 0.7)';
        border-bottom: 1px solid #ddd;
        flex-wrap: wrap;
      }
      nav {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
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
