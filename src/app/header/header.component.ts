import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() featureSelected = new EventEmitter<string>();

  feature: string;

  constructor() {
    this.feature = 'shopping-list';
  }

  ngOnInit() {
  }

  onSelect(selectedFeature: string){
    this.feature = selectedFeature;
    this.featureSelected.emit(this.feature);
  }

}
