import { FlightService } from './flight.service';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FlightCardComponent } from './flight-card/flight-card.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule, // [(ngModel)]="..."
        SharedModule
    ],
    declarations: [
        FlightSearchComponent,
        FlightCardComponent
    ],
    providers: [
        // FlightService
    ],
    exports: [
        FlightSearchComponent
    ]
})
export class FlightBookingModule {

}