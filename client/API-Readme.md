# Back-End-Architect

## Brooks Poltl

### Live Backend URL: https://backend-art.herokuapp.com/

### **Register a user**

_method url_: `/api/register`

_http method_: **[POST]**

#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `Content-Type` | String | Yes      | Must be application/json |

#### Body

| name         | type   | required | description    |
| ------------ | ------ | -------- | -------------- |
| `username`   | String | Yes      | Must be unique |
| `fullName`   | String | Yes      |                |
| `password`   | String | Yes      |                |
| `email`      | String | No       |                |
| `userImgUrl` | String | No       |                |

#### Example

```
  {
    "username": "brooks",
    "password": "1234",
    "fullName": "Brooks Poltl",
    "email": "bpoltl1@gmail.com",
    "userImgUrl": "something.jpg"
  }
```

#### Response

##### 201 (ok)

> created user

##### 400 (Bad Request)

```
  {
    "errorMessage": "missing ${itemMissing}"
  }
```

### **Login a user**

_method url_: `/api/login`

_http method_: **[POST]**

#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `Content-Type` | String | Yes      | Must be application/json |

#### Body

| name       | type   | required | description             |
| ---------- | ------ | -------- | ----------------------- |
| `username` | String | Yes      | must be registered user |
| `password` | String | Yes      |                         |

#### Example

```
  {
    "username": "brooks",
    "password": "1234",
  }
```

#### Response

##### 200 (ok)

> no issues logging in

###### Example response

```
{
    "id":3,
    "username":"brooks",
    "fullName":"Brooks Poltl",
    "email":null,
    "userImgUrl":null,
    "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2Vybmk"
}
```

##### 400 (Bad Request)

```
  {
    errorMessage: 'missing ${itemMissing}'
  }
```

##### 401 (Unauthorized)

```
{
  errorMessage: "passwords don't match"
}
```

### **get all users**

_method url_: `/api/users`

_http method_: **[GET]**

#### Response

##### 200 (ok)

###### Example response

```
[
  {
     "id": 1,
     "username": "brooks3",
     "password": "$2a$12$UzYfINUnqfZh2n180pBswORvPCIrwHKp3d/MEZ69DaRxoLTYj26UG",
     "fullName": "Brooks Poltl",
     "email": null,
     "userImgUrl": null
  },
  {
     "id": 2,
     "username": "Bob",
     "password": "$2a$12$5.flIIREO8kVSwAGdL2iWO1IUKaaN7VgKN9zEX/Z7XXygBupMSQ0W",
     "fullName": "McBobbers",
     "email": "brannanconrad@gmail.com",
     "userImgUrl": ""
  },
  {
    "id": 3,
    "username": "spencer",
    "password": "$2a$12$5F3zLBEigPgcTQxzQFT23.hW3A15PDyelLAFU.ENtym5Jdn17ypjW",
    "fullName": "Spencer Curtis",
    "email": null,
    "userImgUrl": null
  },
]
```

### **get a single user**

_method url_: `/api/users/:id`

_http method_: **[GET]**

#### Response

##### 200 (ok)

###### Example response

```
[
  {
    "id": 1,
    "username": "brooks3",
    "password": "$2a$12$UzYfINUnqfZh2n180pBswORvPCIrwHKp3d/MEZ69DaRxoLTYj26UG",
    "fullName": "Brooks Poltl",
    "email": null,
    "userImgUrl": null
  }
]
```

### **get a user profile with all post**

_method url_: `/api/users/posts/:id (id meaning id of the user)`

_http method_: **[GET]**

#### Response

##### 200 (ok)

###### Example response

```
[
  {
    "id": 6,
    "username": "brooks12345",
    "password": "$2a$12$xEMuC6KExFMmz95p6jIAoe4CYT1oDPGBPHpxjR4FjIMmUGO09iR.m",
    "fullName": "hasdjhkha",
    "email": null,
    "userImgUrl": null,
    "posts": [
        {
          "id": 11,
          "imageUrl": "insertedImgurl",
          "upvotes": 0,
          "userId": 6,
          "description": "a painting :)",
          "postName": "mona lisa"
        },
        {
          "id": 12,
          "imageUrl": "insertedImgurl",
          "upvotes": 0,
          "userId": 6,
          "description": "a painting :)"
          "postName": "mona lisa"
        },
        {
          "id": 13,
          "imageUrl": "insertedImgurl",
          "upvotes": 0,
          "userId": 6,
          "description": "a painting :)",
          "postName": "mona lisa"
        },
        {
          "id": 14,
          "imageUrl": "insertedImgurl",
          "upvotes": 0,
          "userId": 6,
          "description": "a painting :)",
          "postName": "starry night"
         }
        ]
    }
]
```

### **Edit a User Account**

_method url_: `/api/users/:id`

_http method_: **[PUT]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `authorization` | String | Yes      | token to Authorize user  |

#### Body

| name         | type   | required | description    |
| ------------ | ------ | -------- | -------------- |
| `username`   | String | No       | Must be unique |
| `fullName`   | String | No       |                |
| `password`   | String | No       |                |
| `email`      | String | No       |                |
| `userImgUrl` | String | No       |                |

#### Example

```
  {
    "username": "brookspoltl",
    "password": "hunter2",
    "fullName": "Brooks Poltl",
  }
```

#### Response

##### 200 (ok)

###### Example Response

```
  {
    "message":"your account has been edited"
  }
```

##### 401 (Unauthorized)

###### Example Response

```
  {
    "errorMessage": "you are not authorized to edit this account"
  }
```

##### 403 (Forbidden)

###### Example Response

```
  {
    "message": "invalid token"
  }
```

### **Delete an Account**

_method url_: `/api/users/:id`

_http method_: **[DELETE]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `authorization` | String | Yes      | token to Authorize user  |

#### Response

##### 200 (ok)

###### Example Response

```
  {
    "message":"your account has been deleted"
  }
```

##### 401 (Unauthorized)

###### Example Response

```
  {
    "errorMessage": "you are not authorized to delete this account"
  }
```

##### 403 (Forbidden)

###### Example Response

```
  {
    "message": "invalid token"
  }
```

### **create a user**

_method url_: `/api/posts`

_http method_: **[POST]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `authorization` | String | Yes      | token to Authorize user  |

#### Body

| name          | type   | required | description |
| ------------- | ------ | -------- | ----------- |
| `postName`    | String | Yes      |             |
| `imageUrl`    | String | Yes      |             |
| `description` | String | No       |             |

#### Example

```
  {
    "postName": "Mona Lisa",
    "imageUrl": "monaLisa.jpg",
    "description": "cool painting i made",
  }
```

#### Response

##### 201 (created)

###### Example Response

```
  {
    "id": 1,
    "postName": "Mona Lisa",
    "imageUrl": "monaLisa.jpg",
    "description": "cool painting i made",
    "upvotes": 0,
    "userId": 3
  }
```

##### 403 (Forbidden)

###### Example Response

```
  {
    "message": "invalid token"
  }
```

### **get all posts**

_method url_: `/api/posts`

_http method_: **[GET]**

#### Response

##### 200 (ok)

###### Example response

```
[
 {
    "id": 12,
    "imageUrl": "insertedImgurl",
    "upvotes": 0,
    "userId": 6,
    "description": "a painting :)",
    "postName": "mona lisa"
 },
 {
    "id": 13,
    "imageUrl": "insertedImgurl",
    "upvotes": 0,
    "userId": 6,
    "description": "a painting :)",
    "postName": "mona lisa"
  },
  {
    "id": 14,
    "imageUrl": "insertedImgurl",
    "upvotes": 0,
    "userId": 6,
    "description": "a painting :)",
    "postName": "starry night"
  }
]
```

### **get a single post**

_method url_: `/api/posts/:id (as in id of the post)`

_http method_: **[GET]**

#### Response

##### 200 (ok)

###### Example response

```
{
    "id": 14,
    "imageUrl": "insertedImgurl",
    "upvotes": 0,
    "userId": 6,
    "description": "a painting :)",
    "postName": "starry night"
}
```

### **get All post from user, without user info**

_method url_: `/api/users/posts/:id (id meaning id of the user)`

_http method_: **[GET]**

#### Response

##### 200 (ok)

###### Example response

```
[
  {
        "id": 11,
        "imageUrl": "insertedImgurl",
        "upvotes": 0,
        "userId": 6,
        "description": "a painting :)",
        "postName": "mona lisa"
    },
    {
        "id": 12,
        "imageUrl": "insertedImgurl",
        "upvotes": 0,
        "userId": 6,
        "description": "a painting :)",
        "postName": "mona lisa"
    },
    {
        "id": 13,
        "imageUrl": "insertedImgurl",
        "upvotes": 0,
        "userId": 6,
        "description": "a painting :)",
        "postName": "mona lisa"
    },
    {
        "id": 14,
        "imageUrl": "insertedImgurl",
        "upvotes": 0,
        "userId": 6,
        "description": "a painting :)",
        "postName": "starry night"
    }

]
```

### **Edit a Post**

_method url_: `/api/users/:id`

_http method_: **[PUT]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `authorization` | String | Yes      | token to Authorize user  |

#### Body

| name          | type   | required | description |
| ------------- | ------ | -------- | ----------- |
| `postName`    | String | No       |             |
| `imageUrl`    | String | No       |             |
| `description` | String | No       |             |

#### Example

```
  {
    "postName": "my masterpiece",
    "imageUrl": "hunter2.jpg",
  }
```

#### Response

##### 200 (ok)

###### Example Response

```
  {
    "message":"your post has been edited"
  }
```

##### 401 (Unauthorized)

###### Example Response

```
  {
    "errorMessage": "not authorized to edit this post"
  }
```

##### 403 (Forbidden)

###### Example Response

```
  {
    "message": "invalid token"
  }
```

### **Delete a Post**

_method url_: `/api/posts/:id (id of the post)`

_http method_: **[DELETE]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `authorization` | String | Yes      | token to Authorize user  |

#### Response

##### 200 (ok)

###### Example Response

```
  {
    "message":"post successfully deleted"
  }
```

##### 401 (Unauthorized)

###### Example Response

```
  {
    "errorMessage": "you are not authorized to delete this post"
  }
```

##### 403 (Forbidden)

###### Example Response

```
  {
    "message": "invalid token"
  }
```
