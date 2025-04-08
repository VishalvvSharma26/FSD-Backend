import fs from "fs/promises";


const asyncwriter=async()=>{
}
const asyncreader=async()=>{
    const fileData=await fs.readFile("./dataasync.csv","utf-8");
    return fileData
}
//asyncwriter()
 const data = await asyncreader();
 console.log(data);