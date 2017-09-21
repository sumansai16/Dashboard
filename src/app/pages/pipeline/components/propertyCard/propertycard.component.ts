import {Component, Input} from '@angular/core';

import {PropertyCardService} from './propertycard.service';

@Component({
  selector: 'propertycard',
  templateUrl: './propertycard.html',
  styleUrls: ['./propertycard.scss']
})
export class PropertyCard {

  @Input() PropertyCard:Array<Object>;

  constructor(private _propertyCardService:PropertyCardService) {
  }

  ngOnInit() {
    
    this._loadTagCard();
  }

  expandMessage (message){
    message.expanded = !message.expanded;
  }

  private _loadTagCard() {
    this.PropertyCard = this._propertyCardService.getData();
  }
  
}


/* add dependencies to dashboard.module.ts, add selector to en.json */
