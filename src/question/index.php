<?php
  // ※ng serveでは動かない。http-serverのみ動く。

  $cd = filter_input(INPUT_GET, 'cd');

  // JSONファイル読み込み
  $questions = getJsonArray('../assets/json/question.json');
  $question = NULL;

  foreach ($questions as $q) {
    if ($q['cd'] == $cd) {
      $question = $q;
      break;
    }
  }
  if ($question == NULL) {
    // $url = 'http://' . (string) $_SERVER['SERVER_NAME'] . $url;
    header('HTTP/1.1 404 Not Found');
    // header('Location: ' . $url);
    exit;
  }

  /**
   * JSONファイルを配列にして返却します
   * @param $json_path JSONファイルパス
   * @param $is_num_fil 数値フィルタをかけるか
   * @return array()
   */
  function getJsonArray($json_path, $is_num_fil = TRUE) {
    if (!file_exists($json_path)) {
      return array();
    }
    $json = json_decode(file_get_contents($json_path), TRUE);
    if ($is_num_fil) {
      return array_filter($json, function($value, $key) {
        return is_numeric($key);
      }, ARRAY_FILTER_USE_BOTH);
    }
    return $json;
  }

  //クローラー判定
  function isClawler(){
    $ua = $_SERVER['HTTP_USER_AGENT'];

    $crawler_arr = array(
      'Googlebot'		// google
      ,'Baiduspider'		// Baidu
      ,'bingbot'		// Bing
      ,'Yeti'			// NHN
      ,'NaverBot'		// NaverBot
      ,'Yahoo'		// Yahoo
      ,'Tumblr'		// Tumblr
      ,'livedoor'		// livedoor
    );
    foreach ($crawler_arr as $value) {
      if (stripos($ua, $value) !== false) {
          return true;
      }
    }
    return false;
  }
?>
<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>問題<?= $question['id'] ?> | 地球押しアプリ</title>
  <base href="/chikyu-oshi-app/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="TBS東大王で生まれた「宇宙から徐々にズームする映像から世界遺産を答えるクイズ」地球押しを体験できます。ぜひ遊んでみてください。問題<?= $question['id'] ?>">
  <meta property="og:url" content="https://games.banana-juice.com/chikyu-oshi-app/">
  <meta property="og:title" content="問題<?= $question['id'] ?>：地球押しアプリ">
  <meta property="og:type" content="website">
  <meta property="og:image" content="https://games.banana-juice.com/chikyu-oshi-app/assets/img/ogp.png">
  <meta property="og:image:width" content="1280">
  <meta property="og:image:height" content="670">
  <meta property="og:description" content="TBS東大王で生まれた「宇宙から徐々にズームする映像から世界遺産を答えるクイズ」地球押しを体験できます。ぜひ遊んでみてください。">
  <meta property="og:locale" content="ja_JP">
  <meta property="og:site_name" content="地球押しアプリ">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@c5banana_juice">
  <meta property="fb:app_id" content="353945695199349">
  <meta name="theme-color" content="#F4F5F6">
  <link rel="icon" type="image/x-icon" href="./favicon.ico">
  <link rel="manifest" href="./manifest.json">
  <link rel="stylesheet" href="./assets/fontawesome/css/fontawesome.min.css">
  <link rel="stylesheet" href="./assets/fontawesome/css/all.min.css">

  <style>
    body {
      margin: 0;
      padding: 0;
      text-align: center;
    }

    h1 a {
      color: inherit;
    }

    .h3 {
      font-size: 2.8rem;
      line-height: 1.3;
      background: #f4f5f6;
      border-bottom: .1rem solid #d1d1d1;
    }

    .h4 {
      font-size: 2.2rem;
      letter-spacing: -.08rem;
      line-height: 1.35;
    }

    .rule {
      margin: 16px auto;
      padding: 8px;
      width: 90%;
      max-width: 80.0rem;
      text-align: left;
      border: 1px dotted #606c76;
      border-radius: 5px;
    }
  </style>
<?php
foreach(glob('../{styles*.css}',GLOB_BRACE) as $file){
    if(is_file($file)){
?>
<link rel="stylesheet" href="<?= basename($file) ?>">
<?php
    }
}
?>
</head>

<body>
  <header>
    <h1 class="h3"><a href="./">地球押しアプリ</a></h1>
  </header>
  <main role="main">
    <app-root>
      <p>
        1,000件以上ある<strong>世界遺産</strong>を知っていますか？<br>
        <strong>世界遺産</strong>を上から見て、それを当ててみましょう。
      </p>
      Now Loading...
      <?php if (isClawler()) : ?>
      <app-question>
        <div class="animated fadeIn">
          <h2 class="h4"><span class="red">世界遺産</span>の名称をお答えください。</h2>
          <video>
            <source type="video/webm" src="<?= $question['videoUrl'] ?>">
            地球を再生できません。友達のスマホを借りてみてね。
          </video>
          <div class="container">
            <div class="animated bounceIn">
              <div class="row">
                <div class="column column-80 column-offset-10">
                  <input placeholder="出た！地球押し！答えを...どうぞ！" type="text" disabled="">
                </div>
              </div>
              <div class="row">
                <div class="animated fadeIn column">
                  <h2 class="h4">答え：<?= $question['answer'] ?></h2>
                  <div class="explanation">
                    <figure>
                      <img width="100" src="<?= $question['flagUrl'] ?>" alt="<?= $question['region'] ?>" title="<?= $question['region'] ?>">
                      <figcaption><?= $question['region'] ?></figcaption>
                    </figure>
                    <p><?= $question['explanation'] ?></p>
                  </div><button routerlink="/question" type="button" tabindex="0">次の世界遺産へ</button>
                </div>
              </div>
            </div>
            <app-share>
              <ul>
                <li>
                  <a aria-label="ツイッターでシェア" class="twitter" href="javascript:void(0);">
                    <i class="fab fa-twitter-square"></i>
                  </a>
                </li>
                <li>
                  <a aria-label="ラインでシェア" class="line" href="javascript:void(0);">
                    <i class="fab fa-line"></i>
                  </a>
                </li>
                <li>
                  <a aria-label="フェイスブックでシェア" class="facebook" href="javascript:void(0);">
                    <i class="fab fa-facebook-square"></i>
                  </a>
                </li>
                <li>
                  <a aria-label="URLをコピー" class="copy" href="javascript:void(0);">
                    <i class="fas fa-copy"></i>
                  </a>
                </li>
              </ul>
            </app-share>
          </div>
        </div>
      </app-question>
      <?php endif; // isClawler ?>
    </app-root>
    <noscript>
      <p>JavaScriptを実行できないため、問題を再生できません。ブラウザの設定をオンにしていただくか、別の端末をご利用ください。</p>
    </noscript>
    <div class="rule">
      <h2 class="h4">遊び方</h2>
      <ol>
        <li>スタートボタンを押すと、地球の画面が表示されます。</li>
        <li>ある<strong>世界遺産</strong>に徐々にズームしていきます。</li>
        <li>なるべく早く「分かったボタン」を押して解答しましょう。</li>
        <li>宇宙の時点でボタンを押せるように練習してみましょう。</li>
      </ol>
    </div>
  </main>
  <footer>
    &copy; 2019 地球押しアプリ</a>
  </footer>
  <script async="async" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
  <script async="async" src="//www.googletagmanager.com/gtag/js"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
  </script>
<?php
foreach(glob('../{runtime*.js}',GLOB_BRACE) as $file){
    if(is_file($file)){
?>
<script type="text/javascript" src="<?= basename($file) ?>"></script>
<?php
    }
}
?>
<?php
foreach(glob('../{es2015-polyfills*.js}',GLOB_BRACE) as $file){
    if(is_file($file)){
?>
<script type="text/javascript" src="<?= basename($file) ?>" nomodule></script>
<?php
    }
}
?>
<?php
foreach(glob('../{polyfills*.js,main*.js}',GLOB_BRACE) as $file){
    if(is_file($file)){
?>
<script type="text/javascript" src="<?= basename($file) ?>"></script>
<?php
    }
}
?>
</body>

</html>