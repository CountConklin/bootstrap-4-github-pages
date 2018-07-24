import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discord-server-form',
  templateUrl: './discord-server-form.component.html',
  styleUrls: ['./discord-server-form.component.scss']
})
export class DiscordServerFormComponent implements OnInit {

  public toggleDiscord: boolean;
  public toggleDiscord_SlideUp: boolean;
  public toggleDiscord_SlideDown: boolean;

  constructor() { }

  ngOnInit() {
  }

  onClickToggleDiscord() {
    this.toggleDiscord = !this.toggleDiscord;
    if (this.toggleDiscord) {
      this.toggleDiscord_SlideDown = false;
      this.toggleDiscord_SlideUp = true;
    } else if (!this.toggleDiscord) {
      this.toggleDiscord_SlideUp = false;
      this.toggleDiscord_SlideDown = true;
    }
  }

}
