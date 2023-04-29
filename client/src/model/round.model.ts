import { Answer } from "./answer.model";

export class Round{
  public question:string;
  public answers:Answer[];
  public points:number;
  public wrongs:number;
  public wrongsX:number[];

  constructor(){
    this.question = '';
    this.answers = [];
    this.points=0;
    this.wrongs=0;
    this.wrongsX=[];
  }

}
