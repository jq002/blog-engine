var express = require('express');
var AV = require('leanengine');

AV.init({
  appId: process.env.LEANCLOUD_APP_ID || 'YG422dxIB7yfERhmRdQaNP9a-gzGzoHsz',
  appKey: process.env.LEANCLOUD_APP_KEY || 'q7WQJKsigX3M3j9byMP3q8XQ',
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY || 'zHP9NYgqLIxCCIVTcNTcKiqn'
});

var app = express();
app.use(express.static('dist'));
// 设置默认超时时间
// app.use(timeout('15s'));
app.use(AV.express());
app.listen(process.env.LEANCLOUD_APP_PORT||3050);