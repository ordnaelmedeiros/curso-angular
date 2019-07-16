import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import FirebaseConfig from './firebase.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'app3';
  
  ngOnInit(): void {
    firebase.initializeApp(new FirebaseConfig().firebaseConfig());
  }
  
}
