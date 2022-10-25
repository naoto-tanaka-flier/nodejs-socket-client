const s = document.createElement('script');
s.setAttribute('src', 'https://cdn.socket.io/4.5.3/socket.io.min.js');
s.setAttribute('integrity', 'sha384-WPFUvHkB1aHA5TDSZi6xtDgkF0wXJcIIxXhC6h8OT8EH3fC5PWro5pWJ1THjcfEi')
s.setAttribute('crossorigin', 'anonymous')
s.onload = function(){
  const socket = io.connect('http://localhost:6002');
  // ソケット確立
  socket.on('connect', function() {
    console.log('socket connected')
  });
  // ソケット確立に失敗
  socket.on("connect_error", () => {
    console.log('socket connect failed...')
  });
  // サーバーからメッセージを受信
  socket.on('message', function(data) {
    location.reload()
  })
};
document.body.appendChild(s);
