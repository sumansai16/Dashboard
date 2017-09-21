import {Component, Input} from '@angular/core';

import {StatusCardService} from './statuscard.service';

@Component({
  selector: 'statuscard',
  templateUrl: './statuscard.html',
  styleUrls: ['./statuscard.scss']
})
export class StatusCard {

  @Input() StatusCard:Array<Object>;

  constructor(private _statusCardService:StatusCardService) {
  }

  ngOnInit() {
    
    //this._loadStatusCard();
  }

/*
  expandMessage (message){
    message.expanded = !message.expanded;
  }

  private _loadStatusCard() {
    this.StatusCard = this._statusCardService.getData();
  }
  */
}


/* add dependencies to dashboard.module.ts, add selector to en.json */
