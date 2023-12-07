import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Component } from "@angular/core";

@Component({
  selector: "button, Button",
  template: `
    <button class="button">Submit</button>
  `,
  styles: [
    `
      .button {
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        background-color: #3498db;
        color: white;
        cursor: pointer;
      }

      .button:hover {
        background-color: #2980b9;
      }
    `,
  ],
})
export class Button {}

@NgModule({
  declarations: [Button],
  imports: [CommonModule],
  exports: [Button],
})
export class ButtonModule {}
