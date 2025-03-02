import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslateModule],
  template: `
    <div class="about-container">
      <h2>{{ 'ABOUT.TITLE' | translate }}</h2>
      <p>{{ 'ABOUT.CONTENT' | translate }}</p>
    </div>
  `,
  styles: [
    `
      .about-container {
        padding: 20px;
        max-width: 800px;
        margin: 0 auto;
      }
    `,
  ],
})
export class AboutComponent {}
