import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'shopping-list'; //Using the same name as in the header-component.html

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
