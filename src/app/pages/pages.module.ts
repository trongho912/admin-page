import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { HomepageModule } from './homepage/homepage.module';
import { ChatWindowModule } from './chat-window/chat-window.module';
import { ScriptModule } from './script/script.module';
import { UsersModule } from './users/users.module';
import { KeywordModule } from './keyword/keyword.module';
import { LogModule } from './log/log.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    HomepageModule,
    ChatWindowModule,
    ScriptModule,
    UsersModule,
    KeywordModule,
    LogModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
