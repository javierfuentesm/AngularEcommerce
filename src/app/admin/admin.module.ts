import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminRoutingModule } from "./admin-routing.module";
import { ProductFormComponent } from "./components/product-form/product-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../material/material.module";
@NgModule({
  declarations: [ProductFormComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class AdminModule {}
