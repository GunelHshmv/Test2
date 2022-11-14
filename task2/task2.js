class Message{
    constructor(names,date,text){
        this.names=names
        this.date=date
        this.text=text
    }
    toString(){
        console.log(`${this.date},${this.names}${this.text}`)
    }
}
class Messenger{
    constructor(){
        this.history=[]
    }

getTime(){
    let now=new Date()
    return `${now.getHours()}:${now.getUTCMinutes()}`
}
send(names,text){
    this.history.push(new Message(names ,this.getTime(),text))
}
showhistory() {
    this.history.forEach(element => {
        element.toString()
    });
}


}
let messenger=new Messenger()
messenger.send('ali:','ilk mesaj')
messenger.showhistory()
