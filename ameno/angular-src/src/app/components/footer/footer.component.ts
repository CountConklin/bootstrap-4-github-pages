import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onTwitterClick(){
    window.open("https://twitter.com/", "_blank");
  }

  onPatreonClick(){
    window.open("https://www.patreon.com/", "_blank");
  }

  onFacebookClick(){
    window.open("https://www.facebook.com/", "_blank");
  }

}
