import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/posts.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IPost } from 'src/app/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['userId', 'id', 'title', 'body'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public errorMsg: any;

  constructor(private _postsService: PostsService) {}

  ngOnInit(): void {
    this._postsService.getPosts().subscribe({
      next: (res) => (
        (this.dataSource = new MatTableDataSource(res)),
        (this.dataSource.paginator = this.paginator)
      ),
      error: (error) => {
        alert('Error while fetching data');
      },
    });
  }
}
