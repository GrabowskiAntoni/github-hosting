import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-view',
  templateUrl: './start-view.component.html',
  styleUrls: ['./start-view.component.scss']
})
export class StartViewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToKrzyzowka(){
    this.router.navigate(['/krzyzowka'])
  }
}
