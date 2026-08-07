import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageSwitcher } from '../../../shared/components/language-switcher/language-switcher';

@Component({
  selector: 'app-footer',
  imports: [TranslatePipe, LanguageSwitcher],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {}
