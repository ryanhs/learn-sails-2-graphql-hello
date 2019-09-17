# 2-gql-hello

a [Sails v1](https://sailsjs.com) application



#### Packages

- `yarn add sails-hook-autoreload`
- `yarn add bluebird graphql graphql-tools express-graphql`

#### Config: Routes

```
{
  ...

  'GET /api/ping': { action: 'api/ping' },

  '/graphql': 'GraphqlController.serve',
}
```
