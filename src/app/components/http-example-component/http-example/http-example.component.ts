import { Component, OnInit } from '@angular/core';
import { IHero } from 'src/app/models/ihero';
import { HeroService } from 'src/app/shared/hero.service';

@Component({
  selector: 'app-http-example',
  templateUrl: './http-example.component.html',
  styleUrls: ['./http-example.component.scss']
})
export class HttpExampleComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
    this.getHero(19);
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe(
      (heroes: IHero[]) => this.displayHeroes(heroes),
      // (error: any) => this.errorMessage = <any>error
    );
  }

  getHero(id: number) {
    this.heroService.getHero(id).subscribe(
      (hero: IHero) => this.displayHeroes(hero),
      // (error: any) => this.errorMessage = <any>error
    );
  }

  displayHeroes(requestValue: any) {
    console.log(JSON.stringify(requestValue));
  }

}
