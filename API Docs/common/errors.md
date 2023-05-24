### Common errors
An array of 2 element
 Status code  | Error message | Description
------------- | -------------| -------------
401 | AUTHENTICATION_ERROR | X-api_key and api_secret does not match.
403 | AUTHORIZATION_ERROR:\<reason> | api_key does not have permission to call this API.
403 | CONCURRENCY_LIMIT_EXCEEDED | The rate limit for this API Key has been exceeded.
400 | MISSING_ARGUMENTS: <key> | Some required arguments missed.
400 | BAD_ARGUMENTS:<key> | Error while parsing some arguments.
400 | COEXISTENCE_ARGUMENTS | Passed several arguments which are not allowed to coexist. 
400 | TOO_MANY_FACE_ATTRIBUTES | More than one face in the picture.
413 | Request Entity Too Large | The request entity has exceeded the limit (2MB). 
404 | API_NOT_FOUND | Requested API can not be found

