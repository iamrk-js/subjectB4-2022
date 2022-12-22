import { Component, OnInit } from '@angular/core';
import { DishService } from '../dish.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private dishService : DishService) { }

  ngOnInit(): void {
  }
  onAddDish(dishName:any){
    this.dishService.sendDish(dishName.value)
  }
}
