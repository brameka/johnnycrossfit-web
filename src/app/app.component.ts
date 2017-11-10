import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  wods: Observable<any[]>;

  constructor(public af: AngularFireDatabase) {
    this.wods = af.list('wods').valueChanges();
    this.wods.subscribe(x => {
      console.log('wods loaded...', x);
    });
  }
}


