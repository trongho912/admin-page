import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KeywordComponent } from './keyword.component'
import { KeywordDetailComponent } from './keyword-detail/keyword-detail.component';

const routes: Routes = [
    { 
        path: '',
        component: KeywordComponent,
        children: [
            {
                path: 'keyword-detail/:id',
                component: KeywordDetailComponent,
            },
        ]
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [KeywordDetailComponent]
})

export class KeywordRoutingModule { }