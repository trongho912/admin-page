import { NgModule } from "@angular/core";
import { 
    NbCardModule,
} from '@nebular/theme'

import { ThemeModule } from "../../@theme/theme.module";
import { ChatWindowComponent } from "./chat-window.component";

// const component = {

// }

@NgModule({
    imports: [
        ThemeModule,
        NbCardModule,
    ],
    declarations: [
        ChatWindowComponent,
    ],
})
export class ChatWindowModule { }