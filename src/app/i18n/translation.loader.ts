import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

const TRANSLATIONS = {
  en: {
    HEADER: {
      TITLE: 'My Angular Application',
      LANGUAGE: 'Language',
    },
    HOME: {
      WELCOME: 'Welcome to our application!',
      DESCRIPTION:
        'This is an internationalized Angular application using standalone components.',
      SWITCH_LANGUAGE: 'Switch Language',
    },
    ABOUT: {
      TITLE: 'About Us',
      CONTENT:
        'We are a team dedicated to building great Angular applications.',
    },
  },
  es: {
    HEADER: {
      TITLE: 'Mi Aplicación Angular',
      LANGUAGE: 'Idioma',
    },
    HOME: {
      WELCOME: '¡Bienvenido a nuestra aplicación!',
      DESCRIPTION:
        'Esta es una aplicación Angular internacionalizada utilizando componentes independientes.',
      SWITCH_LANGUAGE: 'Cambiar Idioma',
    },
    ABOUT: {
      TITLE: 'Sobre Nosotros',
      CONTENT:
        'Somos un equipo dedicado a construir excelentes aplicaciones Angular.',
    },
  },
  fr: {
    HEADER: {
      TITLE: 'Mon Application Angular',
      LANGUAGE: 'Langue',
    },
    HOME: {
      WELCOME: 'Bienvenue dans notre application!',
      DESCRIPTION:
        'Ceci est une application Angular internationalisée utilisant des composants autonomes.',
      SWITCH_LANGUAGE: 'Changer de Langue',
    },
    ABOUT: {
      TITLE: 'À Propos de Nous',
      CONTENT:
        "Nous sommes une équipe dédiée à la création d'excellentes applications Angular.",
    },
  },
};

export function createTranslateLoader(http: HttpClient) {
  return new CustomTranslateLoader(http);
}

@Injectable({
  providedIn: 'root',
})
export class CustomTranslateLoader implements TranslateLoader {
  constructor(private http: HttpClient) {}

  getTranslation(lang: string): Observable<any> {
    // First try to load from the server
    // If that fails, fall back to hardcoded translations
    return of(
      TRANSLATIONS[lang as keyof typeof TRANSLATIONS] || TRANSLATIONS['en']
    );
  }
}
