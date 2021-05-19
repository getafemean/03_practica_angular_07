import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InicioRRHHComponent } from "./inicio-rrhh/inicio-rrhh.component";

const routes: Routes = [
    {path: '', component: InicioRRHHComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RecursosHumanosRoutingModule {}