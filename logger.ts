//  app/loger.js
declare var module: any;

module.exports = function(message){
    console.log(new Date(Date.now()), " - ", message);
}
