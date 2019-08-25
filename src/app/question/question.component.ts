import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit, AfterViewInit {

  @ViewChild('videoPlayer') videoPlayer: ElementRef;

  isStarted = false;
  canplay = false;
  answerShowed = false;

  constructor() { }

  ngOnInit(): void {

  }

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

  showAnswer(): void {
    this.answerShowed = true;
  }
}
