import { NgModule } from "@angular/core";
import { 

} from '@nebular/theme'

import { ThemeModule } from "../../@theme/theme.module";
import { UsersComponent } from "./users.component";

// const component = {

// }

@NgModule({
    imports: [
        ThemeModule,

    ],
    declarations: [
        UsersComponent,
    ],
})
export class UsersModule { }