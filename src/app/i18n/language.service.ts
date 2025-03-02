import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private currentLangSubject = new BehaviorSubject<string>('en');

  constructor(private translate: TranslateService) {
    // Initialize with browser language or default to English
    const browserLang = translate.getBrowserLang() || 'en';
    const supportedLangs = ['en', 'es', 'fr'];

    const defaultLang = supportedLangs.includes(browserLang)
      ? browserLang
      : 'en';

    translate.setDefaultLang('en');
    this.changeLanguage(defaultLang);
  }

  changeLanguage(lang: string): void {
    this.translate.use(lang);
    this.currentLangSubject.next(lang);
    document.documentElement.lang = lang;
  }

  getCurrentLang(): Observable<string> {
    return this.currentLangSubject.asObservable();
  }

  getAvailableLanguages(): { code: string; name: string }[] {
    return [
      { code: 'en', name: 'English' },
      { code: 'es', name: 'Español' },
      { code: 'fr', name: 'Français' },
    ];
  }
}
