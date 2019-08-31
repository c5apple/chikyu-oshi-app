import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../shared/service/question';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  /** 問題数 */
  questionLength: number;

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.questionLength = this.questionService.getLength();
  }

}
