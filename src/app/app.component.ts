import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('videoPlayer') public videoPlayer: ElementRef;

  isStarted = false;

  ngOnInit(): void {
    this.videoPlayer.nativeElement.onloadeddata = () => {
      this.play();
    }
  }

  toggleVideo(event: any) {
    if (this.isStarted) {
      this.pause();
    } else {
      this.play();
    }
  }

  play(): void {
    this.videoPlayer.nativeElement.play();
    this.isStarted = true;
  }

  pause(): void {
    this.videoPlayer.nativeElement.pause();
  }

  isPaused(): boolean {
    return this.videoPlayer.nativeElement.paused;
  }
}
