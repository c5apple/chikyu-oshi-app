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
      videoUrl: {
        webm: './assets/video/angkor.webm',
        mp4: './assets/video/angkor.mp4'
      },
      region: ['カンボジア'],
      flagUrl: ['./assets/img/Cambodia.png']
    },
    {
      id: 2,
      cd: 'nFXQmeS4hu',
      answer: 'マチュ・ピチュの歴史保護区',
      explanation: '1983年に登録された世界複合遺産です。',
      videoUrl: {
        webm: './assets/video/machu.webm',
        mp4: './assets/video/machu.mp4'
      },
      region: ['ペルー'],
      flagUrl: ['./assets/img/Perou.png']
    },
    {
      id: 4,
      cd: 'tnKMnSQdxa',
      answer: 'グランド・キャニオン国立公園',
      explanation: '1979年に登録された世界自然遺産です。',
      videoUrl: {
        webm: './assets/video/grand-canyon.webm',
        mp4: './assets/video/grand-canyon.mp4'
      },
      region: ['アメリカ合衆国'],
      flagUrl: ['./assets/img/United-States-of-America.png']
    },
    {
      id: 5,
      cd: 'sfE8i8ariT',
      answer: 'ウルル-カタ・ジュタ国立公園',
      explanation: 'エアーズ・ロック。1987年に登録された世界複合遺産です。',
      videoUrl: {
        webm: './assets/video/uluru.webm',
        mp4: './assets/video/uluru.mp4'
      },
      region: ['オーストラリア'],
      flagUrl: ['./assets/img/Australia.png']
    },
    {
      id: 6,
      cd: 'cYrRzCGrY6',
      answer: 'ヴェネツィアとその潟',
      explanation: '1987年に登録された世界文化遺産です。',
      videoUrl: {
        webm: './assets/video/venezia.webm',
        mp4: './assets/video/venezia.mp4'
      },
      region: ['イタリア'],
      flagUrl: ['./assets/img/Italy.png']
    },
    {
      id: 13,
      cd: 'QYPBEm5Wg9',
      answer: 'モシ・オ・トゥニャ/ヴィクトリアの滝',
      explanation: '1989年に登録された世界自然遺産です。',
      videoUrl: {
        webm: './assets/video/victoria-falls.webm',
        mp4: './assets/video/victoria-falls.mp4',
      },
      region: ['ザンビア共和国', 'ジンバブエ共和国'],
      flagUrl: ['./assets/img/Zambia.png', './assets/img/Zimbabwe.png']
    },
    {
      id: 22,
      cd: 'rrQ6MpAr5U',
      answer: 'モン-サン-ミシェルとその湾',
      explanation: '1979年に登録された世界文化遺産です。',
      videoUrl: {
        webm: './assets/video/mont-saint-michel.webm',
        mp4: './assets/video/mont-saint-michel.mp4'
      },
      region: [
        'フランス共和国'
      ],
      flagUrl: [
        './assets/img/France.png'
      ]
    },
    {
      id: 57,
      cd: 'xBZ6gWhAhc',
      answer: 'タージ・マハル',
      explanation: '1983年に登録された世界文化遺産です。',
      videoUrl: {
        webm: './assets/video/taj-mahal.webm',
        mp4: './assets/video/taj-mahal.mp4',
      },
      region: ['インド'],
      flagUrl: ['./assets/img/India.png']
    },
    {
      id: 266,
      cd: 'izQEb69Mgd',
      answer: 'シドニー･オペラハウス',
      explanation: '2007年に登録された世界文化遺産です。',
      videoUrl: {
        webm: './assets/video/opera-house.webm',
        mp4: './assets/video/opera-house.mp4'
      },
      region: [
        'オーストラリア'
      ],
      flagUrl: [
        './assets/img/Australia.png'
      ]
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
   * 問題数を取得する
   */
  public getLength(): number {
    return this.questions.length;
  }

  /**
   * ランダムに問題を取得する
   */
  public random(): Question {
    const i = Math.floor(Math.random() * Math.floor(this.questions.length));
    return this.questions[i];
  }
}
