# Node.js Socket Client for CDN

## CDN

jsDelivrで配信
```
<script src="https://cdn.jsdelivr.net/npm/nodejs-socket-client@1.0.1/index.js" integrity="sha256-h17+PbIX5sv+N7DmVZSHpZy/s0BoUWnUCi5jeo3OUTo=" crossorigin="anonymous"></script>
```

https://www.npmjs.com/package/nodejs-socket-client

## Description

[https://github.com/Rasukarusan/nodejs-socket-server](https://github.com/Rasukarusan/nodejs-socket-server) のクライアント。  
ソケットサーバーからメッセージを受信すると、`location.reload()`をするだけのもの。

## Usage

コーディング中のhtmlファイル内でCDNで読み込むだけです。  
事前に[ソケットサーバー](https://github.com/Rasukarusan/nodejs-socket-server)を立ち上げておきます。
DevToolのコンソールに`socket connected`と出れば成功です。

index.html
```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>socket</title>
  <script src="https://cdn.jsdelivr.net/npm/nodejs-socket-client@1.0.0/index.js" integrity="sha256-W3axhsOWw8Ypmtb2GVoazW4AZaAZKbg98mLBjF/roBM=" crossorigin="anonymous"></script>
</head>
<body>
  <div>hoge</div>
</body>
</html>
```
