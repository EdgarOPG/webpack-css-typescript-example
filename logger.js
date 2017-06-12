//  app/loger.js
module.exports = function(message){
    console.log(new Date(Date.now()), " - ", message);
}
