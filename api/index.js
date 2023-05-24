import axios from 'axios'
var formData = require('form-data');
const BASE_URL = "http://localhost:8000"
const ROUTER_BODY_BACKGROUND = "/v1/body_background"


export const getBodyBackgroundInputImage = async (dataImage1, dataImage2, cancelTokenSource) => {
  const api_key = "testing_id";
  
  let data = new formData()

  data.append('api_key', api_key)
  data.append('image_base64_1', dataImage1)

  data.append('image_base64_2', dataImage2)
  
  const res = await axios.post(`${BASE_URL}${ROUTER_BODY_BACKGROUND}`,data, {
      cancelToken: cancelTokenSource
    });
  console.log(res);
  if (res.status === 200) {
    return res.data;
  } else {
    console.log("can't reach API");
    throw new Error("Cannot reach API", res);
  }
}
