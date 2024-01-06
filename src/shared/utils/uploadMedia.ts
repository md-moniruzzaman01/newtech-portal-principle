// UPLOAD IMAGE FUNCTION
async function uploadMedia(images : Array<File>){
    const imgArray = []
    
    for (const item of images) {
      const form = new FormData()
      form.append('file', item) 
  
      form.append("upload_preset", "jtl5tzbf")
      form.append("cloud_name","dnpxop8r0")
  
      const res = await fetch("https://api.cloudinary.com/v1_1/dnpxop8r0/upload",{method:"post",body: form})
      const data = await res.json()
      
      imgArray.push({ public_id:data.public_id , url: data.secure_url, name : item.name, size : item.size })
    }
  
    return imgArray
}
  
export { uploadMedia }