import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'app/restaurants/restaurant.service';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from '../menu-item/menu-item.mode';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnInit {
  menu: Observable<MenuItem[]>
  constructor(private restaurantService: RestaurantService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.menu = this.restaurantService.menuOfRestaurant( this.route.parent.snapshot.params['id'] )
    
  }
  addMenuItem(item: MenuItem){
      console.log('item', item);
      
  }

}
