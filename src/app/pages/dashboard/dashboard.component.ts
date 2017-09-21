import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastCommunicationService } from './alert-notifications/toast-communication.service';

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
export class Dashboard {

  // Position of Ng2ToastyComponent
  private toastyComponentPosition: string;

  constructor(private toastCommunicationService: ToastCommunicationService) {
    // We listen the toast notification position's changes
    this.toastCommunicationService.position$.subscribe(pos => this.toastyComponentPosition = pos);
  }

}
