import { Component, OnDestroy, OnInit } from '@angular/core';
import { Round } from 'src/model/round.model';

@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.css'],
})
export class RoundComponent implements OnInit, OnDestroy {
  rounds: Round[] = [];
  actualRound: Round = new Round();
  roundNumber = 0;
  wrongHidden = false;
  nextHidden = true;

  constructor() {}
  ngOnInit(): void {
    this.rounds = [
      {
        question: 'Round 1: Name a popular type of fruit',
        answers: [
          { content: 'Apple', points: 30, answered: false },
          { content: 'Banana', points: 25, answered: false },
          { content: 'Orange', points: 20, answered: false },
          { content: 'Grape', points: 15, answered: false },
          { content: 'Pineapple', points: 10, answered: false },
        ],
        points: 0,
        wrongs: 0,
        wrongsX: Array(0)
          .fill(0)
          .map((_, i) => i + 1),
      },
      {
        question: 'Round 2: Name a popular type of flower',
        answers: [
          { content: 'Rose', points: 35, answered: false },
          { content: 'Daisy', points: 20, answered: false },
          { content: 'Sunflower', points: 15, answered: false },
          { content: 'Lily', points: 15, answered: false },
          { content: 'Tulip', points: 15, answered: false },
        ],
        points: 0,
        wrongs: 0,
        wrongsX: Array(0)
          .fill(0)
          .map((_, i) => i + 1),
      },
      {
        question: 'Round 3: Name a popular type of pet',
        answers: [
          { content: 'Dog', points: 40, answered: false },
          { content: 'Cat', points: 35, answered: false },
          { content: 'Fish', points: 10, answered: false },
          { content: 'Bird', points: 10, answered: false },
          { content: 'Hamster/Guinea Pig', points: 5, answered: false },
        ],
        points: 0,
        wrongs: 0,
        wrongsX: Array(0)
          .fill(0)
          .map((_, i) => i + 1),
      },
      {
        question: 'Round 4: Name a popular type of vegetable',
        answers: [
          { content: 'Carrot', points: 25, answered: false },
          { content: 'Broccoli', points: 20, answered: false },
          { content: 'Potato', points: 20, answered: false },
          { content: 'Onion', points: 15, answered: false },
          { content: 'Tomato', points: 15, answered: false },
          { content: 'Spinach', points: 5, answered: false },
        ],
        points: 0,
        wrongs: 0,
        wrongsX: Array(0)
          .fill(0)
          .map((_, i) => i + 1),
      },
      {
        question: 'Round 5: Name a popular type of tree',
        answers: [
          { content: 'Oak', points: 30, answered: false },
          { content: 'Pine', points: 20, answered: false },
          { content: 'Maple', points: 20, answered: false },
          { content: 'Cherry Blossom', points: 15, answered: false },
          { content: 'Palm', points: 10, answered: false },
          { content: 'Redwood', points: 5, answered: false },
        ],
        points: 0,
        wrongs: 0,
        wrongsX: Array(0)
          .fill(0)
          .map((_, i) => i + 1),
      },
      {
        question: 'Round 6: Name a popular type of dessert',
        answers: [
          { content: 'Cake', points: 30, answered: false },
          { content: 'Ice Cream', points: 25, answered: false },
          { content: 'Pie', points: 20, answered: false },
          { content: 'Cookies', points: 15, answered: false },
          { content: 'Brownies', points: 10, answered: false },
        ],
        points: 0,
        wrongs: 0,
        wrongsX: Array(1)
          .fill(0)
          .map((_, i) => i + 1),
      },
      {
        question: 'Round 7: Name a popular type of bird',
        answers: [
          { content: 'Eagle', points: 30, answered: false },
          { content: 'Sparrow', points: 20, answered: false },
          { content: 'Parrot', points: 20, answered: false },
          { content: 'Hummingbird', points: 15, answered: false },
          { content: 'Owl', points: 10, answered: false },
          { content: 'Seagull', points: 5, answered: false },
        ],
        points: 0,
        wrongs: 0,
        wrongsX: Array(0)
          .fill(0)
          .map((_, i) => i + 1),
      },
    ];
    this.roundNumber = 0;
    this.actualRound = this.rounds[this.roundNumber];
    this.nextHidden = true;
    this.wrongHidden = false;
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  onNext() {
    this.roundNumber++;
    this.actualRound = this.rounds[this.roundNumber];
    this.nextHidden = true;
    this.wrongHidden = false;
  }

  onWrong() {
    if (this.actualRound.wrongs != 3) {
      this.actualRound.wrongs++;
      this.actualRound.wrongsX.length++;
      if (this.actualRound.wrongs == 3) {
        this.nextHidden = false;
        this.wrongHidden = true;
      }
    }
  }

  onAnswer(index:number){
    this.actualRound.answers[index].answered=true;
    this.actualRound.points += this.actualRound.answers[index].points;
    if(this.actualRound.points == 100){
      this.nextHidden = false;
      this.wrongHidden = true;
    }
  }
}
