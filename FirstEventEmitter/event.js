function myEvent (){
    this.events={}
}

myEvent.prototype.on=function(type,eventFunction){
this.events[type]=this.events[type]?this.events[type]:[];
this.events[type].push(eventFunction);
}

myEvent.prototype.emits=function(type){
    this.events[type].map((e)=>{
        e();
    })
}


module.exports=myEvent;