import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],

  // 'encapsulation' determines whether CSS styles are applied only to this
  // component, or applied globally.
  // Emulated is the default value, so it's not actually required to declare
  // explicitly. Other values are None (use normal browser renderer rules),
  // and Native, which uses the Shadow DOM. This works similarly to 'emulated',
  // but not all browsers support Shadow DOM.
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit {
  @Input() element: { type: string, name: string, content: string };

  constructor() { }

  ngOnInit() {
  }

}
