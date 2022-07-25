import { Component } from '@angular/core';
import { 
  NbThemeService,
  NbCardComponent,
} from '@nebular/theme';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
})
export class HomepageComponent {
  constructor(private themeService:NbThemeService,

    ){
    this.themeService.getJsTheme()
      
  }
}