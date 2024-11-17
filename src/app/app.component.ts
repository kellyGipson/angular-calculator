import { Component } from '@angular/core';
import { CalculatorModule } from './calculator/calculator.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CalculatorModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'calculator';
}
