import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quotepipe'
})
export class QuotepipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let thisday:Date = new Date(); //get current date and time
    let thisdayWithNoTime:any = new Date(thisday.getHours(), thisday.getMinutes(), thisday.getMilliseconds())
    let dayWithNoTime:any = new Date(value.getHours(), value.getMinutes(), value.getMilliseconds())
    var dateDifference = Math.abs(dayWithNoTime - thisdayWithNoTime) //returns value in miliseconds
    const secondsInDay = 3600; //60 seconds * 60 minutes in an hour * 24 hours in a day
    var dateDifferenceSeconds = dateDifference*0.001; //converts miliseconds to seconds
    var dateCounter = dateDifferenceSeconds/secondsInDay;

    if (dateCounter >= 1 && value >= thisdayWithNoTime){
      return dateCounter ;
    }else{
      return 0;
    }
  }
}
