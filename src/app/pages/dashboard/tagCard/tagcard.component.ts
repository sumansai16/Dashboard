import {Component} from '@angular/core';

import {TagCardService} from './tagcard.service';

@Component({
  selector: 'tagcard',
  templateUrl: './tagcard.html',
  styleUrls: ['./tagcard.scss']
})
export class TagCard {

  public TagCard:Array<Object>;

  constructor(private _tagCardService:TagCardService) {
  }

  ngOnInit() {
    this._loadTagCard();
  }

  expandMessage (message){
    message.expanded = !message.expanded;
  }

  private _loadTagCard() {
    this.TagCard = this._tagCardService.getData();
  }
}


/* add dependencies to dashboard.module.ts, add selector to en.json */
