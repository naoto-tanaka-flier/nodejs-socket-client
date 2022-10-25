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
