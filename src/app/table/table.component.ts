import { Component, OnInit } from '@angular/core';
import { DishService } from '../dish.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  frv8Dish !: string
  constructor(private dishService : DishService) { }

  ngOnInit(): void {
    this.dishService.reciveDish()
      .subscribe(res => {
        this.frv8Dish = res;
      })
  }

}
