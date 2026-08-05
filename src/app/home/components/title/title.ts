import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [CommonModule],
  templateUrl: './title.html',
  styleUrl: './title.scss',
})
export class Title {
  readonly title = input.required<string>();
  readonly size = input<string>('big');
}
