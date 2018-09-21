import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { BrandComponent } from './brand/brand.component';
import { CategoryComponent } from './category/category.component';
import { ReviewDetailComponent } from './review-detail/review-detail.component';
import { AuthorComponent } from './author/author.component';
import { AllReviewsComponent } from './all-reviews/all-reviews.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
	{ path: 'products', component: ProductsComponent, 
	children: [
        { path: 'details/:id', component: ProductDetailsComponent },
        { path: 'brand/:brand', component: BrandComponent },
        { path: 'category/:cat', component: CategoryComponent }
       ]
    },
    { path: 'reviews', component: ReviewsComponent,
     children: [
        { path: 'details/:id', component: ReviewDetailComponent },
        { path: 'author/:id', component: AuthorComponent },
        { path: 'all/:id', component: AllReviewsComponent }
       ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
