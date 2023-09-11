# hello-http

A collection of simple HTTP servers in many languages and frameworks.

Each directory contains a different implementation of a HTTP server in a specific programming language and framework, alongside a `README.md` with instructions on how to develop, debug and run the server.

Where possible, the project will include a `Dockerfile` to build and run the server in a container, and a `.devcontainer` configuration to run the server in a container with Visual Studio Code.

## Servers

- nodejs
  - express
- nim
  - asynchttpserver

## TODO

- nodejs
  - koa
  - hapi
- deno
  - Deno.serve (https://deno.land/api@v1.36.4?s=Deno.serve)
  - oak (https://oakserver.github.io/oak/)
  - abc (https://deno.land/x/abc)
  - fresh (https://fresh.deno.dev/)
  - deno-express (https://github.com/NMathar/deno-express)
- nim
  - prologue (https://planety.github.io/prologue/)
  - jester (https://github.com/dom96/jester)
  - happyx (https://github.com/HapticX/happyx)
  - nexus (https://jfilby.github.io/nexus/)
  - nimwc (https://nimwc.org/)
  - httpbeast (https://github.com/dom96/httpbeast)
- go
  - net-http (https://pkg.go.dev/net/http)
  - gin (https://gin-gonic.com/)
  - echo (https://echo.labstack.com/)
  - gorilla-mux (https://pkg.go.dev/github.com/gorilla/mux)
- python
  - flask (https://flask.palletsprojects.com/)
  - fastapi (https://fastapi.tiangolo.com/)
  - django (https://www.djangoproject.com/)
- lua
  - lapis (https://leafo.net/lapis/)
  - lua-http (https://daurnimator.github.io/lua-http/0.4/#http.server)
- rust
  - actix (https://actix.rs/)
  - rocket (https://rocket.rs/)
  - warp (https://docs.rs/warp/latest/warp/)
  - tide (https://docs.rs/tide/latest/tide/)
  - iron (https://docs.rs/iron/latest/iron/)
  - rouille (https://docs.rs/rouille/latest/rouille/)
  - nickel (https://nickel-org.github.io/)
