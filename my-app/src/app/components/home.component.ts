import { Component,OnInit } from '@angular/core';
import { PostService } from '../service/post.service';

@Component({
    template: `
               <div class="blogContainer" id="blog">
                <div class="mainblogview">
                 <div ng-app="PostModule" ng-controller="PostCtrl" style="overflow:hidden;width:100%;">
                   <div *ngFor="let post of posts" class="postDescContainer">
                       <div class="postDescTitle"><h3><b>{{post.post_title}}</b></h3></div>
                         <br>
                       <div class="postPubDate">
                            <label>Posted On :</label>{{post.date}}
                        </div>
                       <div class="postDescCategory">
                           Posted By <b>{{post.user_name}}</b> in <b>{{post.category_name}}</b>
                        </div>
                         <br><br>
                       <div class="postDescBody">
                           {{post.post_content}}
                    </div>
                    </div>
                       <a href="<?php echo base_url();?>front_controller/read_more/<?php echo $row->post_id?>" class="btn btn-primary active" role="button">Read More</a>
                </div>
                </div>
                </div>
                 <div class="pull-right">
                   <div class="list-group">
                     <div class="list-group-item">
                         <h2><b>Categories</b></h2></div>
                      <ul *ngFor="let cat of cats">
                      <li>{{cat.category_name}}</li>
                      </ul> 
                 </div>
                 <div class="list-group">
                     <div class="list-group-item">
                         <h2><b>Tags</b></h2></div>
                      <ul *ngFor="let tag of tags">
                      <li>{{tag.tag_name}}</li>
                      </ul> 
                 </div>
               </div>

              `,
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    posts = new Array();
    cats = new Array();
    tags = new Array();

    constructor(private _postService: PostService) { }
    ngOnInit() {
        this._postService.getPosts()
            .subscribe(resPostData => this.posts = resPostData);
   
        this._postService.getCats()
            .subscribe(resCatData => this.cats = resCatData);

        this._postService.getTags()
            .subscribe(resTagData => this.tags = resTagData);
    }
    

}