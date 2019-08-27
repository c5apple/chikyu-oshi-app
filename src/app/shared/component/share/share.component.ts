import { Component, OnInit } from '@angular/core';

/**
 * シェアコンポーネント
 */
@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /**
   * Facebookでシェア
   */
  shareFacebook(): void {
    const url = 'https://www.facebook.com/sharer.php?u=' + encodeURIComponent(location.href);
    window.open(url, '_blank', 'noopener');
  }

  /**
   * Twitterでシェア
   */
  shareTwitter(): void {
    // TODO シェア内容
    const text = encodeURIComponent(document.title);
    const url = 'https://twitter.com/share?text=' + text + '&url=' + encodeURIComponent(location.href);
    window.open(url, '_blank', 'noopener');
  }

  /**
   * LINEでシェア
   */
  shareLine(): void {
    // TODO シェア内容
    const text = encodeURIComponent(document.title) + '%20' + encodeURIComponent(location.href);
    const url = 'https://line.me/R/msg/text/?' + text;
    window.open(url, '_blank', 'noopener');
  }

  /**
   * リンクをコピー
   */
  copyLink(): void {
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.preventDefault();
      e.clipboardData.setData('text/plain', location.href);
    }, { once: true });
    document.execCommand('copy');

    alert('リンクがクリップボードにコピーされました。');
  }
}
