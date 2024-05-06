import { Component } from '@angular/core';
import {Howl, Howler} from 'howler';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'memory-mingle-final';
  // const sound = new Howl({
  //   src: ['sound.webm', 'sound.mp3']
  // });

  // sound.play();

  // Howler.volume(0.5);

  constructor()
  {
    
  }

  audio = new Audio();
  ngOnInit() {
    // this.audio.src = 'assets/myaudio.mp3';
    // this.audio.load(); 
    // this.audio.loop = true; 
    // this.audio.play();
  }
}

