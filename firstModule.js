var dataModified=require("upper-case");
exports.myModule=function(){
    return "Created with Custom module"+new Date();
}
exports.modifiedData=function(data){
    return dataModified(data);
}