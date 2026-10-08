# orbitproxy API 服务

这是一个用 Bun 写的 API 服务。任意路径都会返回这次连接的信息，用来演示 [orbitproxy](https://orbitproxy.cc) 的 API 网关：在内网或 localhost 启动它，再通过 orbitproxy 分享到公网。

- 官网：[orbitproxy.cc](https://orbitproxy.cc)
- 文档：[把 localhost API 分享到公网](https://docs.orbitproxy.cc/docs/cases/api/localhost-api)

返回示例：

```json
{
  "message": "Pong from orbitproxy!",
  "user_agent": "curl/8.7.1",
  "method": "GET",
  "url": "/",
  "time": "2025-02-06T21:23:28.084Z",
  "status": 200
}
```

可以用环境变量改监听端口，默认是 `4000`，也可以改默认文案。

改端口：

```shell
PORT=4001 bun app.js
```

同一台机器上要跑多个实例时，给每个实例设不同的 `PORT`。

改文案：

```shell
MESSAGE='Hello from cloud A!' bun app.js
```

设置了 `MESSAGE` 时，响应只有 `{"message":"..."}`。没设置时，才返回上面那些字段。

## 自己构建容器

```shell
docker buildx build \
  --platform linux/amd64,linux/arm64 \
  -t <YOUR_REGISTRY_USERNAME>/orbitproxy-api-demo:latest \
  --push .
```

## 相关链接

- [orbitproxy 官网](https://orbitproxy.cc)
- [orbitproxy 文档](https://docs.orbitproxy.cc/docs)
- [API 网关](https://docs.orbitproxy.cc/docs/gateway/api)
- [orbitproxy Go SDK](https://github.com/orbitproxy/orbitproxy-go)
