import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService, Question } from '../shared/service/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('videoPlayer') videoPlayer: ElementRef;

  private sub: any;

  isStarted = false;
  canplay = false;
  answerShowed = false;

  /** 問題 */
  question: Question;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private questionService: QuestionService
  ) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params: { cd: string }) => {
      // 問題を取得する
      this.question = this.questionService.get(params.cd);
      if (!this.question) {
        // ランダム出題
        this.router.navigate(['/question/' + this.questionService.random().cd]);
        return;
      }
    });
  }

  ngAfterViewInit(): void {
    if (this.question) {
      this.videoPlayer.nativeElement.addEventListener('canplaythrough', () => {
        this.canplay = true;
      });
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
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
