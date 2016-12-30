import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";
import {DynamicComponent} from "./dynamic.component";

import { AppComponent } from "./app.component";

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [
         {provide: 'DynamicComponent', useClass: DynamicComponent}
    ]
})
export class AppModule { }
