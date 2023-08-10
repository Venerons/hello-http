# Node.js + Express

- https://nodejs.org/
- https://expressjs.com/

## Development

TODO

## Deployment

The `Dockerfile` contains the instructions for building the Docker image.

You can build the image with:

```bash
docker build -t nodejs-express .
```

You can run the image with:

```bash
docker run -p 8080:8080 nodejs-express
```

Once started, you can access the application at `http://localhost:8080`.
