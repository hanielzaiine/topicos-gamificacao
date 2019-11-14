import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-n-facil',
  templateUrl: './n-facil.component.html',
  styleUrls: ['./n-facil.component.css']
})
export class NFacilComponent implements OnInit {

  constructor(
    private router: Router
    ) { }

  ngOnInit() {
  }

  goToPage(pageName: string){
    this.router.navigate([`${pageName}`])
  }


}
