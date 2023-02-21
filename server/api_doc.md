## Endpoints

List of Available Endpoints:

- `POST/ register`
- `POST/ login`
- `GET/ users/:id`
- `GET/ orders`
- `POST/ orders`

### POST /register

#### Description

- add a user

#### Request

- Body
  ```json
  {
    "username": String,
    "password": String,
  }
  ```

#### Response

_201 - Created_

- Body
  ```json
    {
      "id": Integer,
      "username": String
    }
  ```

_400 - Bad Request_

- Body

  ```json
  {
    "code": 400,
    "message": String
   }

  ```

### POST /login

#### Description

- log in a user

#### Request

- Body
  ```json
  {
    "username": String,
    "password": String
  }
  ```

#### Response

_200 - OK_

- Body
  ```json
  {
    "access_token": String,
    "username": String,
    "id": Integer
  }
  ```

_400 - Bad Request_

- Body
  ```json
  {
    "code": 400,
    "message": String
  }
  ```

_401 - Unauthorized_

- Body
  ```json
  {
    "code": 401,
    "message": String
  }
  ```

### GET /users

### Description

- get user

  ### Request

- Headers

```json
{
  "access_token": "application/x-www-form-urlencoded"
}
```

### Response

_200 - OK_

- Body
  ```json
      {
        "id": Integer,
        "username": String,
        "createdAt": String,
        "updatedAt": String,
      }
  ```

_401 - Unauthorized_

- Body

  ```json
  {
    "code": 401,
    "message": String
  }
  ```

### GET /orders

### Description

- get all orders available

- Headers

```json
{
  "access_token": "application/x-www-form-urlencoded"
}
```

### Response

_200 - OK_

- Body

  ```json
      [{
        "id": Integer,
        "name": String,
        "amount": Integer,
        "price": Integer,
      },
      ...
      ]
  ```

_401 - Unauthorized_

- Body

  ```json
  {
    "code": 401,
    "message": String
  }
  ```

### POST /orders

### Description

- add an order

  ### Request

- Headers

```json
{
  "access_token": "application/x-www-form-urlencoded"
}
```

- Body

```json
    {
      "name": String,
      "amount": Integer,
      "price": Integer,
    }
```

### Response

_200 - Ok_

- Body

  ```json
  {
    "id": Integer,
    "name": String,
    "imgUrl": String,
  }
  ```

_400 - Bad Request_

- Body
  ```json
  {
    "code": 400,
    "message": String
  }
  ```

_401 - Unauthorized_

- Body

  ```json
  {
    "code": 401,
    "message": String
  }
  ```

### Global Error

#### Response

_500 - Internal Server Error_

- Body
  ```json
  {
    "code": 500,
    "message": "Internal Server Error"
  }
  ```
