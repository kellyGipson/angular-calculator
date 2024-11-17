import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { CalculatorComponent } from "./calculator.component";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  declarations: [
    CalculatorComponent,
  ],
  exports: [
    CalculatorComponent,
  ],
})
export class CalculatorModule {}
