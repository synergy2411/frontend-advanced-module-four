import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {

  @Input() user: any;
  @Output() childEvent = new EventEmitter<any>()

  onbtnClick() {
    this.childEvent.emit(this.user)
  }

}
