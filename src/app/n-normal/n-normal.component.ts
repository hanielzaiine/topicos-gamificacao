import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-n-normal',
  templateUrl: './n-normal.component.html',
  styleUrls: ['../n-facil/n-facil.component.css']
})
export class NNormalComponent implements OnInit {

  constructor(
    private router: Router
    ) { }

  ngOnInit() {
  }

  goToPage(pageName: string){
    this.router.navigate([`${pageName}`])
  }

}
