import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'app/restaurants/restaurant.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styles: []
})
export class ReviewsComponent implements OnInit {
  reviews: Observable<any>
  constructor(private restaurantService: RestaurantService,
              private route: ActivatedRoute   ) { }

  ngOnInit() {
     
     this.reviews = this.restaurantService.reviewsOfRestaurant( this.route.parent.snapshot.params['id'] )
  }

}
