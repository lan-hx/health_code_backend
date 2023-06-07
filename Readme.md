## ZJU软件工程2023第五组大作业后端部分

### build

```shell
docker build . -t lan5223/health_code_backend:latest
```

### run

```shell
docker run -p 127.0.0.1:8080:8080/tcp -v health_code_backend_config:/app/config --rm --detach lan5223/health_code_backend
```