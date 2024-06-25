import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { StatusComponent } from "./components/status/status.component";
import { TrafficComponent } from "./components/traffic/traffic.component";
import { SupportComponent } from "./components/support/support.component";
import { DashboardItemComponent } from "./components/dashboard-item/dashboard-item.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [HeaderComponent, StatusComponent, TrafficComponent, SupportComponent, DashboardItemComponent]
})
export class AppComponent {

}
