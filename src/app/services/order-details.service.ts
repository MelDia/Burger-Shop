import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  //food details
  foodDetails = [
    {
      id: 1,
      foodName: "KING Cheese",
      foodPrice: 100.00,
      foodImg: "https://res.cloudinary.com/baby9728/image/upload/v1652119124/img/burger-food_1_iwvtz9.jpg"
    },
    {
      id: 2,
      foodName: "MISTER supreme",
      foodPrice: 120.00,
      foodImg: "https://res.cloudinary.com/baby9728/image/upload/v1652119125/img/burger-food_3_knvdw3.jpg"
    },
    {
      id: 3,
      foodName: "Double steakhouse",
      foodPrice: 130.00,
      foodImg: "https://res.cloudinary.com/baby9728/image/upload/v1652119130/img/burger-food_2_ninoal.jpg"
    },
    {
      id: 4,
      foodName: "Junior Egg",
      foodPrice: 90.00,
      foodImg: "https://res.cloudinary.com/baby9728/image/upload/v1652119131/img/burger-food_9_n0nwfv.jpg"
    },
    {
      id: 5,
      foodName: "SPECIAL Cheeseburger",
      foodPrice: 190.00,
      foodImg: "https://res.cloudinary.com/baby9728/image/upload/v1652119128/img/burger-food_5_x2nysu.jpg"
    },
    {
      id: 6,
      foodName: "Simple steak Junior",
      foodPrice: 90.00,
      foodImg: "https://res.cloudinary.com/baby9728/image/upload/v1652119129/img/burger-food_6_n5wdcp.jpg"
    },
  ]

}
