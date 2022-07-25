import { NgModule } from "@angular/core";
import { 
    NbCardModule,
} from '@nebular/theme'

import { ThemeModule } from "../../@theme/theme.module";
import { HomepageComponent } from "./homepage.component";

// const component = {

// }

@NgModule({
    imports: [
        ThemeModule,
        NbCardModule,
    ],
    declarations: [
        HomepageComponent,
    ],
})
export class HomepageModule { }