import {APP_INITIALIZER, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidemenuComponent} from './sidemenu/sidemenu.component';
import {SidemenuItemComponent} from './sidemenu-item/sidemenu-item.component';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {FullscreenComponent} from './fullscreen/fullscreen.component';
import {UserMenuComponent} from './user-menu/user-menu.component';
import {TableComponent} from './table/table.component';
import {ConfigService} from './services/config.service';
import {AuthGuard} from './guards/auth.guard';
import {SharedModule} from '../shared/shared.module';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {UserService} from './services/user.service';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

// @ts-ignore
@NgModule({
    declarations: [
        SidemenuComponent,
        SidemenuItemComponent,
        ToolbarComponent,
        FullscreenComponent,
        UserMenuComponent,
        TableComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
        PerfectScrollbarModule,
        FlexLayoutModule,
    ],
    exports: [
        SidemenuComponent,
        SidemenuItemComponent,
        ToolbarComponent,
        FullscreenComponent,
        UserMenuComponent,
        TableComponent,
    ],
    providers: [
        ConfigService,
        UserService,
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }
    ],
})
export class CoreModule {
}
