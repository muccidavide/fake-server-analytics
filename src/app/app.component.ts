import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { StatusComponent } from "./components/status/status.component";
import { TrafficComponent } from "./components/traffic/traffic.component";
import { SupportComponent } from "./components/support/support.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [HeaderComponent, StatusComponent, TrafficComponent, SupportComponent]
})
export class AppComponent {

}
