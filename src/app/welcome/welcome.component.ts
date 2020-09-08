import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import {AppComponent} from '../app.component';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = 'Some Welcome Message';
  name = ''
  // ActivateRoute
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name']
  }

}
