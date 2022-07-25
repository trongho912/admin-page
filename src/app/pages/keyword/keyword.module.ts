import { NgModule } from "@angular/core";
import { 
    NbAccordionModule,
    NbButtonModule, 
    NbCardModule, 
    NbDatepickerModule, 
    NbFormFieldModule, 
    NbIconModule, 
    NbInputModule, 
    NbSelectModule, 
} from '@nebular/theme'
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from "../../@theme/theme.module";
import { KeywordComponent } from "./keyword.component";
import { KeywordRoutingModule } from "./keyword-routing.module";
// const component = {

// }

@NgModule({
    imports: [
        KeywordRoutingModule,
        NbCardModule,
        NbIconModule,
        NbInputModule,
        NbButtonModule,
        NbSelectModule,
        NbAccordionModule,
        NbDatepickerModule,
        NbFormFieldModule,
        ThemeModule,
        Ng2SmartTableModule,
    ],
    declarations: [
        KeywordComponent,
    ],
})
export class KeywordModule { }