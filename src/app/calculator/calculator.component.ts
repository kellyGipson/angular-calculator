import { Component } from "@angular/core";
import { Calculator } from "./calculator";
import { KeyToken } from "./key-token";
import { FormControl } from "@angular/forms";

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
})
export class CalculatorComponent {
  calculator = new Calculator();
  valueFormControl = new FormControl<number>(0);

  updateValue(value: number): void {
    if (this.valueFormControl.value?.toString().length === 16) {
      return;
    }

    if (this.valueFormControl.value === 0) {
      this.valueFormControl.setValue(value);
    } else {
      const concatValues = this.valueFormControl.value?.toString() + value?.toString();
      const convertedToNumber = +concatValues;
      this.valueFormControl.setValue(convertedToNumber);
    }
  }
  
  registerKeyToken(key: string) {
    this.calculator.registerKey(new KeyToken(key));
  }
}
