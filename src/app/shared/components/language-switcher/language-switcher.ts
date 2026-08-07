import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-language-switcher',
    standalone: true,
    imports: [MatButtonModule],
    templateUrl: './language-switcher.html',
    styleUrl: './language-switcher.scss',
})
export class LanguageSwitcher {
    private readonly translate = inject(TranslateService);
    protected readonly currentLang = signal<string>(this.translate.currentLang());

    constructor() {
        this.translate.onLangChange.subscribe((event) => {
            this.currentLang.set(event.lang);
        });
    }

    protected toggleLanguage(): void {
        const next = this.currentLang() === 'en' ? 'es' : 'en';
        this.translate.use(next);
    }

    protected get label(): string {
        return this.currentLang() === 'en' ? 'Español' : 'English';
    }
}
