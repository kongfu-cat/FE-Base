const querystring = require('querystring');
const http = require('http');
const url = require('url');
const socket = require('socket.io');

const PORT = 10888
const server = http.createServer(function (request, response) {
    // 解析 url 参数
    var params = url.parse(request.url, true).query;
    console.log('params: ', JSON.stringify(params))

    var type = params.type || 'get'
    var body = "";
    request.on('data', function (chunk) {
        body += chunk;
    });
    request.on('end', function () {
        // 解析参数
        body = querystring.parse(body);

        var headerData = JSON.stringify(
            {
                type: type,
                httpVersion: request.httpVersion,
                url: request.url,
                method: request.method,
                header: request.headers
            }
        )
        // 发送响应数据
        switch (type) {
            case 'ajax':
                response.writeHead(200, { 'Content-Type': 'text/plain' });
                response.end(headerData); break;
            case 'proxy':
                response.writeHead(200, { 'Content-Type': 'text/plain' });
                response.end(headerData); break;
            case 'jsonp':
                var fn = params.callback
                response.writeHead(200, { 'Content-Type': 'text/javascript' });
                response.end(`${fn}(${headerData})`); break;
            case 'cors1':
                // 跨域后台设置
                response.writeHead(200, {
                    'Access-Control-Allow-Credentials': 'true',     // 后端允许发送Cookie
                    'Access-Control-Allow-Origin': 'http://127.0.0.1:5500',    // 允许访问的域（协议+域名+端口）
                    /* 
                     * 此处设置的cookie还是domain2的而非domain1，因为后端也不能跨域写cookie(nginx反向代理可以实现)，
                     * 但只要domain2中写入一次cookie认证，后面的跨域接口都能从domain2中获取cookie，从而实现所有的接口都能跨域访问
                     */
                    'Set-Cookie': 'l=a123456;Path=/;Domain=127.0.0.1:10888;HttpOnly'  // HttpOnly的作用是让js无法读取cookie
                });
                response.end(`${headerData}`); break;
            default:
                response.writeHead(200, { 'Content-Type': 'text/plain' });
                response.end(headerData); break;
        }

    });
})
server.listen(PORT);
console.log(`http://127.0.0.1:${PORT}`)


// 监听socket连接
socket.listen(server).on('connection', function (client) {
    // 接收信息
    client.on('message', function (msg) {
        client.send('hello：' + msg);
        console.log('data from client: ---> ' + msg);
    });

    // 断开处理
    client.on('disconnect', function () {
        console.log('Client socket has closed.');
    });
});