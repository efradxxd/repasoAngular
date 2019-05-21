import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {

  // postRemote: any[]=[];
  postRemote: any;
  posts = [
    {
      titulo: 'titulo 1',
      cuerpo: 'texto prueba'
    },
    {
      titulo: 'titulo 2',
      cuerpo: 'texto prueba2'
    },
    {
      titulo: 'titulo 3',
      cuerpo: 'texto prueba3'
    }
  ];
  constructor(private dataService:DataService) { }

  ngOnInit() {
    // this.dataService.getPosts()
    // .subscribe(posts=>{
    //   console.log(posts);
    // this.postRemote = posts;
    // });
    this.postRemote=this.dataService.getPosts();
  }

  onClickPadre(id){
    console.log(id);
  }
}
