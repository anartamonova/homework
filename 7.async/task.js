class AlarmClock {
  constructor(alarmCollection, id){
      this.alarmCollection = [];
      this.timerId = null;
    }

  addClock(time, callback, id){
    if (id == undefined) {
      throw new Error('Таймер не определен');
    };

    if (this.alarmCollection.some((alarm) => alarm.id == id)) {
      return console.log ("Такой будильник уже существует")
    };

    this.alarmCollection.push({id,time,callback});

  }
  
  removeClock(id) {
    let collectionLength = this.alarmCollection.length;
    this.alarmCollection = this.alarmCollection.filter(alarm => alarm.id !== id);
    return collectionLength > this.alarmCollection.length; 
  }
  getCurrentFormattedTime(){
    const currentDate = new Date();
    const hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
    const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;
    return `${hours}:${minutes}`
  }
  
  start(){
    function checkClock(alarmTime) {
        if (alarmTime.time === this.getCurrentFormattedTime()) {
            alarmTime.callback();
        }
    }
    checkClock = checkClock.bind(this);
      this.timerId = setInterval(() => this.alarmCollection.forEach((alarm) => checkClock(alarm)), 500);
    }
  
  stop() {
    if(this.timerId !== undefined) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  printAlarms() {
    this.alarmCollection.forEach(item=> console.log(`id: ${item.id} time: ${item.time}`));
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}

