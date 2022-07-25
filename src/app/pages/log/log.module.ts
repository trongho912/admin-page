import { NgModule } from "@angular/core";
import { 

} from '@nebular/theme'

import { ThemeModule } from "../../@theme/theme.module";
import { LogComponent } from "./log.component";
// const component = {

// }

@NgModule({
    imports: [
        ThemeModule,

    ],
    declarations: [
        LogComponent,
    ],
})
export class LogModule { }