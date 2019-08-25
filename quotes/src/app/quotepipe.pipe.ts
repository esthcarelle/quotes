import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quotepipe'
})
export class QuotepipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let thisday:Date = new Date(); //get current date and time
    let thisdayWithNoTime:any = new Date(thisday.getFullYear(), thisday.getMonth(), thisday.getDate())
    var dateDifference = Math.abs(thisdayWithNoTime - value ) //returns value in miliseconds
    const secondsInDay = 86400; //60 seconds * 60 minutes in an hour * 24 hours in a day
    var dateDifferenceSeconds = dateDifference*0.001; //converts miliseconds to seconds
    var dateCounter = dateDifferenceSeconds/secondsInDay;

    if (dateCounter >= 1 && value < thisdayWithNoTime){
      return dateCounter ;
    }else{
      return 0;
    }
  }
}
