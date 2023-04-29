export class Answer{
  public content:string;
  public points:number;
  public answered: boolean;

  constructor(){
    this.content='';
    this.points=-1;
    this.answered=false;
  }
}
