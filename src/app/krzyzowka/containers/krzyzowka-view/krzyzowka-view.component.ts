import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-krzyzowka-view',
  templateUrl: './krzyzowka-view.component.html',
  styleUrls: ['./krzyzowka-view.component.scss']
})
export class KrzyzowkaViewComponent implements OnInit {
  correctAnswer: string = 'hw53prrb'
  s1: string = ''
  s2: string = ''
  s3: string = ''
  s4: string = ''
  s5: string = ''
  s6: string = ''
  s7: string = ''
  s8: string = ''

  
  checkWin(){
    let answer = this.s1 + this.s2 + this.s3 + this.s4 + this.s5 + this.s6 + this.s7 + this.s8
    if(answer == this.correctAnswer){
      this.win = true;
    }
  }

  win: boolean = false;

  key: string = "H7V3-RVWY-EPXW-BR85"

  constructor() { }

  ngOnInit(): void {
  }

}
