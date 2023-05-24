const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
const getBase64FromUrl = async (url) => {
    const data = await fetch(url);
    const blob = await data.blob();
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob); 
        reader.onloadend = () => {
          const base64data = reader.result;   
          resolve(base64data);
        }
      });
  }
const URLtoBase64 = async(URL) => {
    let base64 = ""
    try{
      base64 = await getBase64FromUrl(URL)
    } catch(error){
      console.log(error)
    }
    return base64
  }

module.exports = {
    toBase64,
    URLtoBase64
}