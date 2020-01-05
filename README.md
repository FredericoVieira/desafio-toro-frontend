# desafio-toro-frontend

Displays stock prices received through a websocket connection.

### Prerequisites:

- docker
- npm

### To set this projetct locally:

Install dependencies:
```
npm install
```

Run docker:
```
docker run -p 8080:8080 toroinvestimentos/quotesmock
```

Run project:
```
npm run-script start
```

For tests:
```
npm run-script test
```
