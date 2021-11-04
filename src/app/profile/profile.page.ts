import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Result } from '../interfaces/character.interfaces';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profileId : string = '';
  url : string = 'https://rickandmortyapi.com/api/character/';
  character;
  constructor( 
    private activatedRouter: ActivatedRoute,
    private http : HttpClient
    ) { }

  ngOnInit() {
    this.profileId = this.activatedRouter.snapshot.paramMap.get('id');
    this.http.get<Result>(this.url + this.profileId).subscribe( res => {
      console.log(res);
      this.character = res;
    });
  }

}
