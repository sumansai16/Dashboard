import {Component} from '@angular/core';
import { Router }  from '@angular/router';
import { TestDataService } from './test.service';
import { TREE_ACTIONS, IActionMapping } from 'angular-tree-component';

@Component({
  selector: 'test',
  styleUrls: ['./test.scss'],
  templateUrl: './test.html',
})
export class TestComponent {
  public TestData:Object;

  constructor(private _TestDataService:TestDataService, private router: Router) {
  }

  ngOnInit() {
    this._loadTestData();

  }

  private _loadTestData() {
    this.TestData = this._TestDataService.getTestData();
    
  }

  onFocus($event) {
    //alert($event);
    // console.log($event.node.id);
    // console.log($event.node.data.name);
    // console.log($event.node);

    this.router.navigate(['/pages/pipeline/' + $event.node.data.route]);
  }

}