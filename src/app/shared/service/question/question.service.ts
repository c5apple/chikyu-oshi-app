import { Injectable } from '@angular/core';
import { Question } from './question';

/**
 * 問題サービス
 */
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  /** 問題集 */
  private questions: Question[] = [
    {
      id: 1,
      cd: 'eCwADVKiYN',
      answer: 'アンコール',
      explanation: 'アンコールワット遺跡群。1992年に登録された世界文化遺産です。',
      videoUrl: './assets/video/angkor.webm',
      region: 'カンボジア',
      flagUrl: './assets/img/Cambodia.png'
    },
    {
      id: 2,
      cd: 'nFXQmeS4hu',
      answer: 'マチュ・ピチュの歴史保護区',
      explanation: '1983年に登録された世界複合遺産です。',
      videoUrl: './assets/video/machu.webm',
      region: 'ペルー',
      flagUrl: './assets/img/Perou.png'
    }
  ];

  /**
   * 問題を取得する
   * @param cd
   */
  public get(cd: string): Question {
    return this.questions.filter(q => q.cd === cd).shift();
  }

  /**
   * ランダムに問題を取得する
   */
  public random(): Question {
    const i = Math.floor(Math.random() * Math.floor(this.questions.length));
    return this.questions[i];
  }
}
