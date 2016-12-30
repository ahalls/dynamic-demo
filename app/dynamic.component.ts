import { Injectable, Compiler, Component, NgModule, ViewContainerRef} from '@angular/core'

@Injectable()
export class DynamicComponent {
    constructor(private compiler: Compiler) {}
    
    public addComponent(container: ViewContainerRef, template: string) {
        @Component({template: template})
        class TemplateComponent {}

        @NgModule({declarations: [TemplateComponent]})
        class TemplateModule {}

        const mod = this.compiler.compileModuleAndAllComponentsSync(TemplateModule);
        const factory = mod.componentFactories.filter((comp) =>
            comp.componentType === TemplateComponent
        );
        const component = container.createComponent(factory[0]);
    
        return TemplateComponent;
    }
}