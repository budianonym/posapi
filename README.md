# Installation Guide

1. Clone this repository into your local by ``git clone https://github.com/budianonym/posapi.git``
2. Install all dependencies listed in package.json by ``npm install``
3. Run ``node import`` to import sample data for Nedb
4. Start the application by ``npm start``
5. Below are the endpoints 

### Getting products by value
* Method: GET
* Content-Type: application/json
* Endpoint: localhost:6000/api/v1/product
* Example Json request:
```
{
 "name": "blank tshirt",
 "category": "mouse",
 "series": "red"
}
```

* Example Json response:
```
[
  {
    "_id": "p1",
    "name": "blank tshirt",
    "price": [
      {
        "qt": 1,
        "pr": 30000
      },
      {
        "qt": 3,
        "pr": 80000
      }
    ],
    "category": [
      "men",
      "woman"
    ],
    "series": [
      "premium",
      "standard"
    ]
  },
  {
    "_id": "p3",
    "name": "logitech mouse",
    "price": [
      {
        "qt": 1,
        "pr": 50000
      },
      {
        "qt": 2,
        "pr": 90000
      },
      {
        "qt": 3,
        "pr": 130000
      }
    ],
    "category": "mouse",
    "series": [
      "blue",
      "red"
    ]
  }
]
```

### Comparing 2 product by product id
* Method: GET
* Content-Type: application/json
* Endpoint: localhost:6000/api/v1/compare
* Example Json request:
```
{
    "id1": "p1",
    "id2": "p3"
}
```
* Example Json response:
```
[
  {
    "_id": "p1",
    "name": "blank tshirt",
    "price": [
      {
        "qt": 1,
        "pr": 30000
      },
      {
        "qt": 3,
        "pr": 80000
      }
    ],
    "category": [
      "men",
      "woman"
    ],
    "series": [
      "premium",
      "standard"
    ]
  },
  {
    "_id": "p3",
    "name": "logitech mouse",
    "price": [
      {
        "qt": 1,
        "pr": 50000
      },
      {
        "qt": 2,
        "pr": 90000
      },
      {
        "qt": 3,
        "pr": 130000
      }
    ],
    "category": "mouse",
    "series": [
      "blue",
      "red"
    ]
  }
]
```

### Post an order
* Method: POST
* Content-Type: application/json
* Endpoint: localhost:6000/api/v1/order
* Example Json request:
```
{
  "user": "budiher",
  "product": "blank tshirt",
  "qt": 1
}
```
* Example Json response:
```
{
  "status": "success",
  "data": {
    "user": "budihermawan",
    "product": "blank tshirt",
    "qt": 1
  }
}
```

### Get all order by username
* Method: GET
* Content-Type: application/json
* Endpoint: localhost:6000/api/v1/allorder
* Example Json request:
```
{
  "user": "budiher"
}
```
* Example Json response:
```
[
  {
    "user": "budiher",
    "product": "blank tshirt",
    "qt": 1,
    "_id": "bLnwDhn6aikc5sGm"
  },
  {
    "user": "budiher",
    "product": "blank tshirt",
    "qt": 1,
    "_id": "iaFUhM6oPVKCNN3N"
  }
]
```