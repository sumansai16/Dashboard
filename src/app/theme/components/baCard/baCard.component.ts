import {Component, Input} from '@angular/core';

@Component({
  selector: 'ba-card',
  templateUrl: './baCard.html',
})
export class BaCard {
  @Input() title:String;
  @Input() baCardClass:String;
  @Input() cardType:String;
  public cardId:String;

  ngOnInit() {
    //alert(this.title);
    this.cardId= this.title ? this.title.replace(/\s/g, '') : 'ESP Chart';
  }
  
}
