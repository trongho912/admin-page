import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScriptComponent } from './script.component'
import { ScriptEditComponent } from './script-edit/script-edit.component';
import { ScriptRegisterComponent } from './script-register/script-register.component';
import { ScriptListComponent } from './script-list/script-list.component';

const routes: Routes = [{ 
    path: '',
    component: ScriptComponent,
    children: [
        {
            path: 'script-list',
            component: ScriptListComponent,
        },
        {
            path: 'script-edit/:id',
            component: ScriptEditComponent,
        },
        {
            path: 'script-register',
            component: ScriptRegisterComponent,
        },    
    ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class ScriptRoutingModule { }

export const routedComponents = [
    ScriptComponent,
    ScriptListComponent,
    ScriptEditComponent,
    ScriptRegisterComponent,
];