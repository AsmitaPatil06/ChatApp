import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-another-prof',
  templateUrl: './another-prof.component.html',
  styleUrls: ['./another-prof.component.css']
})
export class AnotherProfComponent implements OnInit {


  //@Input() prof = 'hiivgv'; // decorate the property with @Input()
  @Input() prof; // decorate the property with @Input()
  constructor() {


  }

  ngOnInit(): void {
  }


}
