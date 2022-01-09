## Steps to run the server

### 1. ```npm install```

### 2. Create .env file in config folder

### 3. Add `MONGO_URI = mongodb://localhost:27017/test` in the file

### 4. Run in terminal `node app.js`

### 5. Go to `http://localhost:5000/graphql`

### Sample GraphQL query

- To get list of all the logs
```query {
  getLogs(size: 25) {
    id,
    createdAt,
    severity,
    component,
    context,
    message,
    tags
  }
}
```

- To create a single log
```
mutation {
  createLog(
    severity: "Demo",
    component: "Demo",
    context: 'Demo',
    message: 'Demo',
    tag: 'Demo'
  ) {
    id,
    createdAt,
    severity,
    component,
    context,
    message,
    tags
  }
}
```



