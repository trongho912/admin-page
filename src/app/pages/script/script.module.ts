import { NgModule } from "@angular/core";
import { 
    NbAccordionModule,
    NbButtonModule, 
    NbCardModule, 
    NbDatepickerModule, 
    NbFormFieldModule, 
    NbIconModule, 
    NbInputModule, 
    NbRadioModule, 
    NbRouteTabsetModule, 
    NbSelectModule,
    NbTabsetModule, 
} from '@nebular/theme'
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule } from "@angular/forms";

import { ThemeModule } from "../../@theme/theme.module";
import { ScriptRoutingModule, routedComponents} from "./script-routing.module";

// const component = {

// }

@NgModule({
    imports: [
        ScriptRoutingModule,
        NbCardModule,
        NbIconModule,
        NbInputModule,
        NbButtonModule,
        NbSelectModule,
        NbAccordionModule,
        NbDatepickerModule,
        NbFormFieldModule,
        NbTabsetModule,
        NbRouteTabsetModule,
        NbRadioModule,
        ThemeModule,
        Ng2SmartTableModule,
        FormsModule,
    ],
    declarations: [
        ...routedComponents,
    ],
})
export class ScriptModule {}