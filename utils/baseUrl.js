const baseUrl = process.env.NODE_ENV === "production" 
? 'https://faceai.asia' 
: 'http://localhost:8000';

export default baseUrl;