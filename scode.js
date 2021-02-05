function gen_html(type, title, content) {
    let html_content = content;
    let html_title = title ? `<p class="scode-title">${title}</p>` : '';
    return `<div class="scode ${type.toLowerCase()}">${html_title}${html_content}</div>\n`;
}

exports.info = function(args, content) {
    var title = args.slice(0).join(' ') || '';
    return gen_html("info", title, content);
}

exports.warn = function(args, content) {
    var title = args.slice(0).join(' ') || '';
    return gen_html("warn", title, content);
}

exports.error = function(args, content) {
    var title = args.slice(0).join(' ') || '';
    return gen_html("error", title, content);
}
