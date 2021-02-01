'use strict';
var scode = require('./scode');

hexo.extend.tag.register("info", scode.info, { ends: true });
hexo.extend.tag.register("warn", scode.warn, { ends: true });
hexo.extend.tag.register("error", scode.error, { ends: true });
