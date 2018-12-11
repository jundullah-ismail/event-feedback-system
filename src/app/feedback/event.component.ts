import {Component} from '@angular/core';
import {EventFeedbackSystem} from '../../services/event.service';
@Component({
  selector: 'trg-todo',
  templateUrl: './event.page.html',
})
export class EventComponent {


  constructor(private EventService : EventFeedbackSystem) {
    this.EventService.findEvents()
      .subscribe(data=>{
        console.log(data);
      });

    this.EventService.findEvent();
  }
}
