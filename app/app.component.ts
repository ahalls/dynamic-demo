import { Inject,Component, ViewChild, ViewContainerRef, AfterViewInit  } from "@angular/core";
import {DynamicComponent} from "./dynamic.component";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent implements AfterViewInit { 
    @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;

    constructor(
         @Inject('DynamicComponent') private _dynamicComponent: DynamicComponent
    ){};
      
    ngAfterViewInit() {
        var component = <any> 
            this._dynamicComponent.addComponent(
                this.container, `
                <Label text="Hello, World!" class="h1 text-center"> </Label>
                <Button text="Tap Again" (tap)="onTap()" class="btn btn-primary btn-active"> </Button>  
             ` );
    
        component.prototype.onTap = () => {
            this.counter++;
        } 
    }

    public counter: number = 16;
      public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }
    
    public onTap() {
        this.counter--;
    }
}
