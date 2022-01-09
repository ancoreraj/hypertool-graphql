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



