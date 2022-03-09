import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostRoutingModule } from './post-routing.module';
import { HomeComponent } from './home/home.component';
import { PostsService } from '../posts.service';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  providers: [],
})
export class PostModule {}
