import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSelectorComponent } from '../../components/language-selector/language-selector.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslateModule, LanguageSelectorComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
