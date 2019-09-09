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

  private _questions: Question[] = [];

  /** 問題集 */
  private questions: Question[] = [
    {
      id: 1,
      cd: 'eCwADVKiYN',
      answer: 'アンコール',
      answers: [
        'アンコールワット', 'あんこーる', 'あんこーるわっと', 'アンコールワット遺跡', 'アンコールワット遺跡'
      ],
      explanation: 'アンコールワット遺跡群。1992年に登録された世界文化遺産です。',
      videoUrl: {
        webm: './assets/video/angkor.webm',
        mp4: './assets/video/angkor.mp4',
        youtube: 'SdOfeT5qkEY'
      },
      region: ['カンボジア'],
      flagUrl: ['./assets/img/Cambodia.png']
    },
    {
      id: 2,
      cd: 'nFXQmeS4hu',
      answer: 'マチュ・ピチュの歴史保護区',
      answers: [
        'マチュピチュ', 'まちゅぴちゅ', 'マチュ・ピチュ', 'まちゅ・ぴちゅ'
      ],
      explanation: '1983年に登録された世界複合遺産です。',
      videoUrl: {
        webm: './assets/video/machu.webm',
        mp4: './assets/video/machu.mp4',
        youtube: 'Ld6FaNmEsV8'
      },
      region: ['ペルー'],
      flagUrl: ['./assets/img/Perou.png']
    },
    {
      id: 4,
      cd: 'tnKMnSQdxa',
      answer: 'グランド・キャニオン国立公園',
      answers: [
        'グランドキャニオン', 'ぐらんど・きゃにおん', 'グランドキャニオン国立公園'
      ],
      explanation: '1979年に登録された世界自然遺産です。',
      videoUrl: {
        webm: './assets/video/grand-canyon.webm',
        mp4: './assets/video/grand-canyon.mp4',
        youtube: 'Xsuq5oED11c'
      },
      region: ['アメリカ合衆国'],
      flagUrl: ['./assets/img/United-States-of-America.png']
    },
    {
      id: 5,
      cd: 'sfE8i8ariT',
      answer: 'ウルル-カタ・ジュタ国立公園',
      answers: [
        'ウルル', 'うるる', 'ウルル・カタ', 'うるる・かた', 'エアーズロック', 'エアーズ・ロック', 'えあーずろっく', 'えあーず・ろっく', 'ジュタ', 'じゅた', 'ジュタ国立公園'
      ],
      explanation: 'エアーズ・ロック。1987年に登録された世界複合遺産です。',
      videoUrl: {
        webm: './assets/video/uluru.webm',
        mp4: './assets/video/uluru.mp4',
        youtube: '-kihhVdhNjM'
      },
      region: ['オーストラリア'],
      flagUrl: ['./assets/img/Australia.png']
    },
    {
      id: 6,
      cd: 'cYrRzCGrY6',
      answer: 'ヴェネツィアとその潟',
      answers: [
        'ヴェネツィア', 'ベネチア', 'ヴェネチア', 'ベネツィア', 'べねちあ', 'べねつぃあ'
      ],
      explanation: '1987年に登録された世界文化遺産です。',
      videoUrl: {
        webm: './assets/video/venezia.webm',
        mp4: './assets/video/venezia.mp4',
        youtube: 'xBhskAPOLUk'
      },
      region: ['イタリア'],
      flagUrl: ['./assets/img/Italy.png']
    },
    {
      id: 13,
      cd: 'QYPBEm5Wg9',
      answer: 'モシ・オ・トゥニャ/ヴィクトリアの滝',
      answers: [
        'モシ・オ・トゥニャ', 'モシオトゥニャ', 'もしおとぅにゃ', 'ヴィクトリアの滝', 'ビクトリアの滝', 'ヴぃくとりあのたき', 'びくとりあのたき'
      ],
      explanation: '1989年に登録された世界自然遺産です。',
      videoUrl: {
        webm: './assets/video/victoria-falls.webm',
        mp4: './assets/video/victoria-falls.mp4',
        youtube: 'RXw-5qosgZc'
      },
      region: ['ザンビア共和国', 'ジンバブエ共和国'],
      flagUrl: ['./assets/img/Zambia.png', './assets/img/Zimbabwe.png']
    },
    {
      id: 22,
      cd: 'rrQ6MpAr5U',
      answer: 'モン-サン-ミシェルとその湾',
      answers: [
        'モンサンミッシェル', 'モンサンミシェル', 'モン・サン・ミシェル', 'モン・サン・ミッシェル', 'もんさんみっしぇる', 'もんさんみしぇる'
      ],
      explanation: '1979年に登録された世界文化遺産です。',
      videoUrl: {
        webm: './assets/video/mont-saint-michel.webm',
        mp4: './assets/video/mont-saint-michel.mp4',
        youtube: 'BNMjVnoos-4'
      },
      region: [
        'フランス共和国'
      ],
      flagUrl: [
        './assets/img/France.png'
      ]
    },
    {
      id: 25,
      cd: 'jMEx6F8Yix',
      answer: 'ナスカとパルパの地上絵',
      answers: [
        'ナスカ', 'なすか', 'ナスカの地上絵', 'ナスカとフマナ平原の地上絵'
      ],
      explanation: '1994年に登録された世界文化遺産です。',
      videoUrl: {
        webm: './assets/video/nazca.webm',
        mp4: './assets/video/nazca.mp4',
        youtube: 'DRiznIuJKVk'
      },
      region: ['ペルー'],
      flagUrl: ['./assets/img/Perou.png']
    },
    {
      id: 26,
      cd: 'Y5P94YhUCT',
      answer: 'グレート・バリア・リーフ',
      answers: [
        'グレートバリアリーフ', 'ぐれーとばりありーふ', 'ぐれーと・ばりあ・りーふ'
      ],
      explanation: '1981年に登録された世界自然遺産です。',
      videoUrl: {
        webm: './assets/video/great-barrier-reef.webm',
        mp4: './assets/video/great-barrier-reef.mp4',
        youtube: 'K9SIhWxuJ1I'
      },
      region: ['オーストラリア'],
      flagUrl: ['./assets/img/Australia.png']
    },
    {
      id: 30,
      cd: 'fp7JV7NTzF',
      answer: 'ギョレメ国立公園とカッパドキアの岩窟群',
      answers: [
        'カッパドキア', 'かっぱどきあ', 'ギョレメ国立公園', 'カッパドキアの岩窟群'
      ],
      explanation: '1985年に登録された世界複合遺産です。',
      videoUrl: {
        webm: './assets/video/cappadocia.webm',
        mp4: './assets/video/cappadocia.mp4',
        youtube: '255OZ9OdfEA'
      },
      region: ['トルコ共和国'],
      flagUrl: ['./assets/img/Turkey.png']
    },
    {
      id: 33,
      cd: 'RVmkab9K7s',
      answer: '古代都市チチェン-イッツァ',
      answers: [
        'チチェン・イッツァ', 'ちちぇんいっつぁ', 'チチェン・イツァ', 'ちちぇん・いつぁ'
      ],
      explanation: '1988年に登録された世界文化遺産です。',
      videoUrl: {
        webm: './assets/video/chichen-Itza.webm',
        mp4: './assets/video/chichen-Itza.mp4',
        youtube: '9rgIzZS5WFQ'
      },
      region: ['メキシコ合衆国'],
      flagUrl: ['./assets/img/Mexico.png']
    },
    {
      id: 35,
      cd: 'sCUtUeCuKe',
      answer: 'ガラパゴス諸島',
      answers: [
        'ガラパゴス', 'がらぱごす', 'がらぱごすしょとう'
      ],
      explanation: '1978年、2001年に登録された世界自然遺産です。',
      videoUrl: {
        webm: './assets/video/galapagos.webm',
        mp4: './assets/video/galapagos.mp4',
        youtube: 'jdMVfy-SQaI'
      },
      region: ['エクアドル共和国'],
      flagUrl: ['./assets/img/Ecuador.png']
    },
    {
      id: 36,
      cd: 'XpcxNyYjL8',
      answer: 'ドゥブロヴニク旧市街',
      answers: [
        'ドゥブロヴニク', 'ドブロヴニク', 'ドゥブロブニク', 'ドブロブニク', 'どぅぶろぶにく', 'どぶろぶにく', 'ドゥブロヴニク旧市街', 'ドブロヴニク旧市街', 'ドゥブロブニク旧市街', 'ドブロブニク旧市街'
      ],
      explanation: '1979年、1994年に登録された世界文化遺産です。',
      videoUrl: {
        webm: './assets/video/dubrovnik.webm',
        mp4: './assets/video/dubrovnik.mp4',
        youtube: 'DkNsupD2HD0'
      },
      region: ['クロアチア共和国'],
      flagUrl: ['./assets/img/Croatia.png']
    },
    {
      id: 39,
      cd: 'UrpDx7Pr5P',
      answer: 'バチカン市国',
      answers: [
        'バチカン', 'ばちかん', 'ばちかんしこく', 'ヴァチカン', 'ヴァチカン市国'
      ],
      explanation: '1984年に登録された世界文化遺産です。',
      videoUrl: {
        webm: './assets/video/vatican.webm',
        mp4: './assets/video/vatican.mp4',
        youtube: 'uFoaO0Vira0'
      },
      region: ['バチカン市国'],
      flagUrl: ['./assets/img/Vatican-City.png']
    },
    {
      id: 44,
      cd: 'z8QGVmH5sj',
      answer: 'ラサのポタラ宮歴史地区',
      answers: [
        'ラサ', 'らさ', 'ポタラ', 'ぽたら', 'ポタラ宮', 'ぽたらきゅう', 'ポタラ宮歴史地区'
      ],
      explanation: '1994年、2000年、2001年に登録された世界文化遺産です。',
      videoUrl: {
        webm: './assets/video/pho-brang-potala.webm',
        mp4: './assets/video/pho-brang-potala.mp4',
        youtube: '4YyV_yD1vyE'
      },
      region: ['中華人民共和国'],
      flagUrl: ['./assets/img/China.png']
    },
    {
      id: 50,
      cd: 'JYVJKVxhzz',
      answer: 'ハワイ火山国立公園',
      answers: [
        'ハワイ火山', 'はわいかざん', 'キラウエア', 'きらうえあ', 'キラウエア火山', 'きらうえあかざん'
      ],
      explanation: 'キラウエア火山。1987年に登録された世界自然遺産です。',
      videoUrl: {
        webm: './assets/video/kilauea.webm',
        mp4: './assets/video/kilauea.mp4',
        youtube: 'JOs6YPv63Yc'
      },
      region: ['アメリカ合衆国'],
      flagUrl: ['./assets/img/United-States-of-America.png']
    },
    {
      id: 57,
      cd: 'xBZ6gWhAhc',
      answer: 'タージ・マハル',
      answers: [
        'タージマハル', 'たーじまはる', 'たーじ・まはる'
      ],
      explanation: '1983年に登録された世界文化遺産です。',
      videoUrl: {
        webm: './assets/video/taj-mahal.webm',
        mp4: './assets/video/taj-mahal.mp4',
        youtube: 'OTOTbvDSFRs'
      },
      region: ['インド'],
      flagUrl: ['./assets/img/India.png']
    },
    {
      id: 61,
      cd: 'bmXzMBfNC4',
      answer: '南ラグーンのロックアイランド群',
      answers: [
        '南ラグーン', 'みなみらぐーん', 'ロックアイランド', 'ろっくあいらんど', 'ロックアイランド群', 'ろっくあいらんどぐん'
      ],
      explanation: '2012年に登録された世界複合遺産です。',
      videoUrl: {
        webm: './assets/video/rock-islands.webm',
        mp4: './assets/video/rock-islands.mp4',
        youtube: '2RPZbh7pnGM'
      },
      region: ['パラオ共和国'],
      flagUrl: ['./assets/img/Palau.png']
    },
    {
      id: 68,
      cd: '9DwZCiYxZG',
      answer: 'イチャン・カラ',
      answers: [
        'イチャンカラ', 'いちゃんから', 'いちゃん・から'
      ],
      explanation: '1990年に登録された世界文化遺産です。',
      videoUrl: {
        webm: './assets/video/ichan-qala.webm',
        mp4: './assets/video/ichan-qala.mp4',
        youtube: 'y71zkbWDGX0'
      },
      region: ['ウズベキスタン共和国'],
      flagUrl: ['./assets/img/Uzbekistan.png']
    },
    {
      id: 88,
      cd: 'uhfGnaSKJw',
      answer: '富士山−信仰の対象と芸術の源泉',
      answers: [
        '富士山', 'ふじさん', 'ふじやま'
      ],
      explanation: '2013年に登録された世界文化遺産です。',
      videoUrl: {
        webm: './assets/video/fujisan.webm',
        mp4: './assets/video/fujisan.mp4',
        youtube: 'XLHSbhJENU4'
      },
      region: ['日本国'],
      flagUrl: ['./assets/img/Japan.png']
    },
    {
      id: 175,
      cd: 'tpDZDuKeEd',
      answer: 'ロンドン塔',
      answers: [
        'ろんどんとう', 'タワー・オブ・ロンドン', 'タワーオブロンドン', 'たわー・おぶ・ろんどん', 'たわーおぶろんどん'
      ],
      explanation: '1988年に登録された世界文化遺産です。',
      videoUrl: {
        webm: './assets/video/tower-of-london.webm',
        mp4: './assets/video/tower-of-london.mp4',
        youtube: '7PtTWz8eWJg'
      },
      region: ['英国（グレートブリテン及び北アイルランド連合王国）'],
      flagUrl: ['./assets/img/United-Kingdom.png']
    },
    {
      id: 266,
      cd: 'izQEb69Mgd',
      answer: 'シドニー･オペラハウス',
      answers: [
        'オペラハウス', 'おぺらはうす'
      ],
      explanation: '2007年に登録された世界文化遺産です。',
      videoUrl: {
        webm: './assets/video/opera-house.webm',
        mp4: './assets/video/opera-house.mp4',
        youtube: '6Rtt3yDGTPE'
      },
      region: ['オーストラリア'],
      flagUrl: ['./assets/img/Australia.png']
    },
    {
      id: 375,
      cd: 'QUuyTfN3X9',
      answer: 'オランジュのローマ劇場とその周辺及び“凱旋門”',
      answers: [
        '凱旋門', 'がいせんもん', 'オランジュのローマ劇場とその周辺及び凱旋門'
      ],
      explanation: '1981年に登録された世界文化遺産です。',
      videoUrl: {
        webm: './assets/video/triumphal-arch.webm',
        mp4: './assets/video/triumphal-arch.mp4',
        youtube: 'yQ7krS_ZWFg'
      },
      region: ['フランス共和国'],
      flagUrl: ['./assets/img/France.png']
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
    if (this._questions.length === 0) {
      this.questions.forEach(q => this._questions.push(q));
    }
    const i = Math.floor(Math.random() * Math.floor(this._questions.length));
    const q = this._questions[i];
    this._questions.splice(i, 1);
    return q;
  }
}
