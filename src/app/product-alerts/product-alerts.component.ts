import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrl: './product-alerts.component.css'
})
export class ProductAlertsComponent {
  // @Input() decorator indicates that the property value comes
  // from the component`s parent: ProductListComponent
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();


}
