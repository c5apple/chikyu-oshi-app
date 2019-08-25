import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('videoPlayer') videoPlayer: ElementRef;

  isStarted = false;
  canplay = false;

  ngAfterViewInit(): void {
    this.videoPlayer.nativeElement.addEventListener('canplaythrough', () => {
      this.canplay = true;
    });
  }

  toggleVideo(): void {
    if (!this.canplay) {
      return;
    }
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
