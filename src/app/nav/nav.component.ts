import { Component, OnInit } from '@angular/core';
import { FakeAuthService } from '../servicios/fake-auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  showRrhhLink: boolean = false;

  constructor(private fakeAuthService: FakeAuthService) { }

  ngOnInit(): void {
    this.showRrhhLink = this.fakeAuthService.hasRrhhAccess()
  }

}
