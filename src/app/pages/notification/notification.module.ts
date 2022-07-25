import { NgModule } from "@angular/core";
import { 

} from '@nebular/theme'

import { ThemeModule } from "../../@theme/theme.module";
import { NotificationComponent } from "./notification.component";
// const component = {

// }

@NgModule({
    imports: [
        ThemeModule,

    ],
    declarations: [
        NotificationComponent,
    ],
})
export class NotificationModule { }