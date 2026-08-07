import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [
    MatButtonModule,
    MatIconModule,
    TranslatePipe
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

}
