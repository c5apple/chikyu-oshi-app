import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
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

  isIOS = false;

  player: YT.Player;
  playerVars: YT.PlayerVars = {
    rel: 0,
    modestbranding: 1,
    showinfo: 0,
    fs: 0,
    controls: 0,
    color: 'white',
    loop: 0,
    playsinline: 1
  };

  /** プレイヤーの解答 */
  answer = '';
  /** プレイヤーが正解したか */
  isCorrect = false;

  /** 問題 */
  question: Question;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private questionService: QuestionService,
    private titleService: Title
  ) {
    const ua = navigator.userAgent;
    if (ua.indexOf('iPhone') > 0) {
      this.isIOS = true;
    }
  }

  savePlayer(player) {
    this.player = player;
    this.canplay = true;
  }

  onStateChange(event) {
    if (YT.PlayerState.PLAYING === event.data) {
      this.isStarted = true;
    }
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params: { cd: string }) => {
      // 問題を取得する
      this.question = this.questionService.get(params.cd);
      if (!this.question) {
        // ランダム出題
        this.router.navigate(['/question/' + this.questionService.random().cd]);
        return;
      } else {
        this.titleService.setTitle(`問題${this.question.id} | 地球押し`);
      }
    });
  }

  ngAfterViewInit(): void {
    if (this.question && this.videoPlayer) {
      this.videoPlayer.nativeElement.addEventListener('canplaythrough', () => {
        this.videoPlayer.nativeElement.setAttribute('poster', './assets/img/start.png');
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
    if (this.isIOS) {
      this.player.playVideo();
    } else {
      this.videoPlayer.nativeElement.play();
    }
    this.isStarted = true;
  }

  pause(): void {
    if (this.isIOS) {
      this.player.pauseVideo();
    } else {
      this.videoPlayer.nativeElement.pause();
    }
  }

  isPaused(): boolean {
    if (this.isIOS) {
      return this.player.getPlayerState() === 2;
    } else {
      return this.videoPlayer.nativeElement.paused;
    }
  }

  showAnswer(): void {
    // 答え合わせ
    if (this.answer && [this.question.answer].concat(this.question.answers).indexOf(this.answer.trim()) !== -1) {
      this.isCorrect = true;
    }
    this.answerShowed = true;
  }
}
