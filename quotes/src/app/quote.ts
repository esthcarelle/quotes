export class Quote {
    showDescription: boolean;
    constructor(public name: string,public quote: string,public author:string,public postDate: Date){
      this.showDescription=false;
    }
}
