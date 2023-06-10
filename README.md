# Documentation

## Lucky Store - E-Commerce
E-Commerce Website with 2 combine technologie \
→ **API REST** created with **Node Express** \
→ **Front End** with **React**


## Deployment

To deploy this project run

```bash
  npm i
```

then \
→ if you have nodemon installed
```bash
  nodemon
```
→ otherwise
```bash
  node .\index.js
```

# API REST

## Summary
- [Important](#important)
- [Product](#product)
    - [Get All](#get-all-products)
    - [Get By ID](#get-product-by-id)
    - [Add](#add-product)
    - [Edit](#edit-product)
    - [Remove](#remove-product)
- [User](#user)
    - [Login](#login)
    - [Signup](#signup)


## Important
For `POST`, `PUT` and `DELETE` \
Add Authentification: **Bearer Token**

## Product

### Get All Products
#### Request
```http
GET /api/product/
```
#### Responses
```javascript
[
	{
		"id"            : int,
		"name"          : string,
		"description"   : string,
		"image"         : string,
		"quantity"      : int,
		"price"         : float
	},
	{
		"id"            : int,
		"name"          : string,
		"description"   : string,
		"image"         : string,
		"quantity"      : int,
		"price"         : float
	}
]
```


### Get Product By ID
#### Request
```http
GET /api/product/:id
```
| Parameter | Type |
| :--- | :--- |
| `id` | `int` |

#### Response
```javascript
{
    "id"            : int,
    "name"          : string,
    "description"   : string,
    "image"         : string,
    "quantity"      : int,
    "price"         : float
}
```

### Add Product
#### Request
```http
POST /api/product/
```
#### Header
```javascript
{
    "name"          : string,
    "description"   : string,
    "image"         : string,
    "quantity"      : int,
    "price"         : float
}
```

### Edit Product
#### Request
```http
PUT /api/product/:id
```
| Parameter | Type |
| :--- | :--- |
| `id` | `int` |

#### Header: JSON
```javascript
{
    "name"          : string,
    "description"   : string,
    "image"         : string,
    "quantity"      : int,
    "price"         : float
}
```
#### Response
```javascript
int (LastID)
```
OR
```javascript
{
    "error": string
}
```

### Remove Product
#### Request
```http
DELETE /api/product/:id
```
| Parameter | Type |
| :--- | :--- |
| `id` | `int` |

#### Response
```javascript
1
```
OR
```javascript
{
    "error": string
}
```


## User

### Login
#### Request
```http
POST /api/user/login
```
#### Header: JSON
```javascript
{
	"email"     : string,
	"password"  : string
}
```

### Signup
#### Request
```http
POST /api/user/signup
```
#### Header: JSON
```javascript
{
    "firstname" : string,
    "lastname"  : string,
    "email"     : string,
    "password"  : string
}
```