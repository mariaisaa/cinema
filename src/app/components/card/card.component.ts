import { Component, Input, OnInit  } from '@angular/core';
import { Movies } from 'src/app/interfaces/movies';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']

})
export class CardComponent implements OnInit {
  @Input() movies:Movies|any;

  constructor() { }

  ngOnInit(): void {
  }

  
  
  

}
