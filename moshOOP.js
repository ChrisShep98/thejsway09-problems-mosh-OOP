class Stopwatch{
    constructor(){
        this.startTime, this.endTime, this.duration = 0;
    }
    start(){
        this.startTime = new Date();
    }
    stop(){
        this.endTime = new Date();
        let seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
        this.duration += seconds
    }
    reset(){
        this.startTime = null;
        this.endTime = null;
        this.duration = 0;
    }
}
