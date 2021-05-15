import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponentComponent } from "./Components/main-component/main-component.component";
import { CityDetailsComponent } from "./Components/SubPages/city-details/city-details.component";

const routes: Routes = [
  { path: "", component: MainComponentComponent, pathMatch: "full" },
  { path: "city/:id", component: CityDetailsComponent },
  { path: "**", component: MainComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
