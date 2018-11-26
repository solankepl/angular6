import { Component, OnInit } from '@angular/core';
import { YoutubeapiService } from '../youtubeapi.service';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.sass']
})
export class YoutubePlayerComponent implements OnInit {
  player: YT.Player;
  private id: string = 'qDuKsiwS5xw';

  constructor(private _youtubeapiService : YoutubeapiService) { }

  ngOnInit() {
    this._youtubeapiService.getJSON().subscribe(data => {
      console.log(data)
  });
  } 
 
  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }

}
