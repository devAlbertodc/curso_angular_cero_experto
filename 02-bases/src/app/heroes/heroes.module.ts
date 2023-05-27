import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";
import { CommonModule } from "@angular/common";

//Isolate modules in little sections.
//Components go in declaration and exports, and import has the modules. 
@NgModule({
    declarations: [
        HeroComponent,
        ListComponent,
    ],
    exports: [
        HeroComponent,
        ListComponent,
    ],
    imports: [
        CommonModule,
    ]
})
export class HeroesModule { }