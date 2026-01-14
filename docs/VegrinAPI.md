---
title: Default module
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
code_clipboard: true
highlight_theme: darkula
headingLevel: 2
generator: "@tarslib/widdershins v4.0.30"

---

# Default module

Base URLs:

# Authentication

# Authentication

## POST User Login

POST /auth/login

> Body Parameters

```json
{
  "email": "abdamadhafiz13@gmail.com",
  "password": "GusinerT022",
  "device_id": "djfkasjfdafljkldsjafklsjaf",
  "device_name": "IPHONE 15",
  "is_lifetime": true
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "code": 200,
  "message": "OK",
  "data": {
    "message": "Login berhasil!",
    "token": {
      "id": "3675e734-b634-47be-bb8a-423ccfee5c29",
      "username": "Gusion",
      "email": "abdamadhafiz15@gmail.com",
      "password": "$2b$10$pc8M13nBmcDtJC/Z/3wD/OAFC2imQ/5TdLyvUaYRmQINyp9E.Rr3m",
      "token": "9273e508ba227bed26212704637de5a92fcea72ca794e9c7c4cb0e75f7aacb8c"
    }
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## POST User Register

POST /auth/register

> Body Parameters

```json
{
  "email": "abdamadhafiz13@gmail.com",
  "password": "GusinerT022",
  "front_name": "Abdullah Ahmad",
  "back_name": "Hafiz",
  "address": "Jalan Teuku Nyak Arief",
  "phone_number": "08123456789",
  "birth_date": "2004-01-13T00:00:00.000Z"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "code": 200,
  "message": "OK",
  "data": {
    "id": "fbc442e7-d8ce-4990-9deb-b862fd6d9499",
    "username": "Alice23",
    "email": "abdamadhafiz18@gmail.com",
    "password": "$2b$10$oNR1fSaSsIuxiYtt/6A4Cex1Siuy2na5GvYwLHWwwzNL/zHdzVtWy",
    "token": null
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## POST User Logout

POST /auth/logout

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|vtoken|header|string| no |none|
|device_id|header|string| no |none|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "code": 200,
  "message": "OK",
  "data": {
    "id": "3675e734-b634-47be-bb8a-423ccfee5c29",
    "username": "Gusion",
    "email": "abdamadhafiz15@gmail.com",
    "password": "$2b$10$pc8M13nBmcDtJC/Z/3wD/OAFC2imQ/5TdLyvUaYRmQINyp9E.Rr3m",
    "token": null
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## POST Google Login

POST /auth/google-login

> Body Parameters

```json
{
  "id_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjEzMGZkY2VmY2M4ZWQ3YmU2YmVkZmE2ZmM4Nzk3MjIwNDBjOTJiMzgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI4NTM5MDgwNTYwMTUtamo5cHAxdTFlb2NsM2hlMmppY2NuN2ZsZjYwZGV1dnAuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI4NTM5MDgwNTYwMTUtamo5cHAxdTFlb2NsM2hlMmppY2NuN2ZsZjYwZGV1dnAuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTQ1NjM5ODE4NDQ3NzkxNTMxMzQiLCJlbWFpbCI6ImhhZml6c2Vjb25kNjM1QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiTkZlYjQySmtHYnc3X2dvcDRwRXNoUSIsIm5hbWUiOiJTZWNvbmQgSGFmaXoiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jTHlwNWJVYVBqQVU3Wk5uRUxuLWZMX1NvSWtiVjVLN3luZWU0X1ZNSF9raV9uWmlnPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IlNlY29uZCIsImZhbWlseV9uYW1lIjoiSGFmaXoiLCJpYXQiOjE3NjYyMDYwMzksImV4cCI6MTc2NjIwOTYzOX0.ZFRovpNohCI7r3pqoyheZoiGN0E6fnDOSRigNv0-iJcTlGCY5ARNUFWqik0tH4EuFvJEHG7buCQkRJJ9cTcwmaOXlqTaDMo7rtKjdI-orGxF3JmZj69hiNHfN1Z_Bm3W5yzgliYzvsn3vUuNRkGlNaa8iKQLMN0jniHcZxbIggvqDJjq1GCkrLi_J9tGC8_keCLuT8hcNhVRm1NzcUi_pmfHbbiBqFSS2gdlybT4at7gXQ5GL_qtUMWUB6mCQTy40YgV3QdFz7ue6X5bgeCuB6vGUDiE8lEDDuHwHcoG8LZLAnkguP_1ajBtbvmw0PXZwy4eHDgHRH_QDCKXbJn6dg",
  "device_id": "fadsklfjaklsfs",
  "device_name": "Iphone 15"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| yes |none|
|» *anonymous*|body|string| no |none|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "code": 200,
  "message": "OK",
  "data": {
    "message": "Login berhasil!",
    "user_session": {
      "id": "77a29040-8def-4e68-ac38-d596ad8b53e2",
      "user_id": "8fc3c3e7-4f40-479c-9e63-91d85eb7b947",
      "token": "2f3e2cfb5e5ea89807a3018bc11152bc9d71110cbb997c5f145cc46a9a22ab4c",
      "device_id": "fadsklfjaklsfs",
      "device_name": "Iphone 15",
      "login_at": "2025-12-20T04:48:08.698Z",
      "duration_hours": 24,
      "is_lifetime": false
    }
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## POST Verify Email for Reset Password

POST /

> Body Parameters

```json
{
  "email": "abdamadhafiz13@gmail.com"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|token|query|string| no |none|
|body|body|object| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "code": 200,
  "message": "OK",
  "data": {
    "message": "Identifikasi Pengguna berhasil. Periksa email anda untuk reset password!"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## POST Reset Password User

POST /auth/reset-password

> Body Parameters

```json
{
  "token": "b0543a08c1ced6b210e719683d18b28a373257824339b871800822fbf9efda9a",
  "password": "Hafiz1234"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "code": 200,
  "message": "OK",
  "data": {
    "message": "Password telah diubah, silahkan login kembali"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## GET Verify User Email (Redirected to Mobile)

GET /auth/verify-email

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|token|query|array[string]| no |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

# Profile Management

## PUT Update Profile

PUT /

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## GET Get Profile

GET /user

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|vtoken|header|string| no |none|
|device_id|header|string| no |none|

> Response Examples

> 200 Response

```json
{
  "success": false,
  "message": "Cannot GET /profile",
  "error": "Not Found",
  "statusCode": 404
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

# Weather Data

## GET Get Weather Data

GET /weather

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|lat|query|string| no |none|
|lon|query|string| no |none|
|vtoken|header|string| no |none|
|device_id|header|string| no |none|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "code": 200,
  "message": "OK",
  "data": {
    "message": "Berhasil mengambil data cuaca",
    "weather": {
      "name": "sedikit berawan",
      "local_datetime": "26/12/2025, 08.25.23",
      "temperature": 26.02000000000004,
      "minimal_temperature": 25.510000000000048,
      "maximal_temperature": 26.720000000000027,
      "humidity": 90,
      "total_cloud_cover": 20,
      "curah_hujan": 0,
      "icon": "https://openweathermap.org/img/wn/02n@2x.png",
      "wind_direction": 360,
      "wind_speed": 2.57
    }
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

# Plant Module

## POST Plant Analyze

POST /plant

> Body Parameters

```yaml
image_file: cmMtdXBsb2FkLTE3NjY5Mjc4OTI5MDctMg==/Penyakit-pada-tanaman.jpg

```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|vtoken|header|string| no |none|
|device_id|header|string| no |none|
|body|body|object| yes |none|
|» image_file|body|string(binary)| no |none|

> Response Examples

> 200 Response

```json
{
  "success": false,
  "message": "Failed to get API",
  "error": "Bad Gateway",
  "statusCode": 502
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## GET Get Log Scan Plant

GET /plant

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|vtoken|header|string| no |none|
|device_id|header|string| no |none|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "code": 200,
  "message": "OK",
  "data": {
    "message": "Berhasil mendapatkan log data scan tanaman",
    "log_data": {
      "id": "2d30cfa7-3a48-494e-827c-1f2a68b96689",
      "user_id": "6bc05b40-c068-402e-a0be-3538eb5cb396",
      "detail": {
        "is_plant": true,
        "symptoms": [
          "Bercak cokelat tua hingga hitam pada daun",
          "Terdapat pola lingkaran konsentris seperti target pada bercak",
          "Daun menguning (klorosis) di sekitar area bercak",
          "Daun mengering dan gugur prematur"
        ],
        "treatment": {
          "organic": "Pangkas dan musnahkan daun yang terinfeksi, lakukan rotasi tanaman, dan gunakan semprotan fungisida nabati dari ekstrak bawang putih atau baking soda.",
          "chemical": "Aplikasikan fungisida berbahan aktif mankozeb, klorotalonil, atau azoksistrobin sesuai dosis anjuran pada label."
        },
        "confidence": 95
      },
      "plant_image": "uploads/image/plants/1766936363650-76119960.jpg",
      "plant_name": "Kentang",
      "condition": "Sakit",
      "diagnosis": "Bercak Kering (Early Blight)"
    }
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## GET Get Detail Log Scan Plant

GET /plant/2d30cfa7-3a48-494e-827c-1f2a68b96689

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|vtoken|header|string| no |none|
|device_id|header|string| no |none|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "code": 200,
  "message": "OK",
  "data": {
    "message": "Berhasil mendapatkan log data scan tanaman",
    "log_data": {
      "id": "2d30cfa7-3a48-494e-827c-1f2a68b96689",
      "plant_name": "Kentang",
      "plant_image": "uploads/image/plants/1766936363650-76119960.jpg",
      "condition": "Sakit",
      "diagnosis": "Bercak Kering (Early Blight)",
      "detail": {
        "is_plant": true,
        "symptoms": [
          "Bercak cokelat tua hingga hitam pada daun",
          "Terdapat pola lingkaran konsentris seperti target pada bercak",
          "Daun menguning (klorosis) di sekitar area bercak",
          "Daun mengering dan gugur prematur"
        ],
        "treatment": {
          "organic": "Pangkas dan musnahkan daun yang terinfeksi, lakukan rotasi tanaman, dan gunakan semprotan fungisida nabati dari ekstrak bawang putih atau baking soda.",
          "chemical": "Aplikasikan fungisida berbahan aktif mankozeb, klorotalonil, atau azoksistrobin sesuai dosis anjuran pada label."
        },
        "confidence": 95
      }
    }
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

# Data Schema

