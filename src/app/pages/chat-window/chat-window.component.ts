import { Component } from '@angular/core';
import { 
  NbThemeService,
  NbCardComponent,
} from '@nebular/theme';

@Component({
  selector: 'chat-window',
  templateUrl: './chat-window.component.html',
})
export class ChatWindowComponent {
  constructor(private themeService:NbThemeService,
           
              ){
    this.themeService.getJsTheme()
  }
}