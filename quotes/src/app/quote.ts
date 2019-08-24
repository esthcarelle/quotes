export class Quote {
    showDescription: boolean;
    constructor(public name: string,public quote: string,author:string,public postDate: Date){
      this.showDescription=false;
    }
}
