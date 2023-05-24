### Version
1.0


### Overview
Replace background of first image by second image. 

### [Image Requirements](../common/objects.md#image_requirement) 

### Request URL
http://faceai.asia:3000/api/imageapp/v1/body_recognition/
Suggested: http://faceai.asia:3000/api/v1/face/background/

### Request Method
POST

### Permission
All API Keys can use this API.


### Request Parameter
 Field  | Type | Required? | Description
------------- | -------------| -------------| -------------
api_key  | String | ✓ | Registered key to call API.
image_url1  | String | ✓(1 of 3) | URL of the first image.
image_file1 | File | ✓(1 of 3) | The binary data of the first image, uploaded via POST multipart/form-data.
image_base64_1  | String | ✓(1 of 3) | Base64 encoded binary data of the first image.
image_url2  | String | ✓(1 of 3) | URL of the second image.
image_file2 | File | ✓(1 of 3) | The binary data of the second image, uploaded via POST multipart/form-data.
image_base64_2  | String | ✓(1 of 3) | Base64 encoded binary data of the second image.


#### Response parameter
 Field  | Type | Description
------------- | -------------| -------------
request_id  | String | Unique id of each request.
image  | String | Base64 encode of result image
image_id_1  | String | Unique id of first image.
image_id_2  | String | Unique id of second image.

### Sample Response
**Sample response when request has succeeded**
<pre><code>
{ 
    "request_id": "ee3d6b47-3bfe-487a-b93c-5d294b8241a3", 
    "image": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAM.....", 
    "image_id": "4403b7c7-a0a0-4f1b-bf3d-b2a3d2779468"
}
</code></pre>

**Sample response when request has failed**
<pre><code>
{
    "request_id": "14d964b8-4355-4c74-925c-d3fb586b6a12",
    "error_message": "MISSING_ARGUMENTS: image_url, image_file, image_base64"
}
</code></pre>

### Unique ERROR_MESSAGE of this API
 Status code  | Error message | Description
------------- | -------------| -------------
400  | INVALID_IMAGE_SIZE: \<param> | The size of uploaded image does not meet the requirement as above. <param> is the argument which indicates its size of image is too big.

### [Common error messages](../common/errors.md#common-errors)