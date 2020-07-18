function getCurrentTime(){
    let now=new Date();
    let month=now.getMonth()+1;
    let date=now.getDate();
    let hour=now.getHours();
    let min=now.getMinutes();
    return `${month}月${date}号 ${hour}:${min}`
}
module.exports=getCurrentTime;