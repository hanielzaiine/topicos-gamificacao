import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-niveis',
  templateUrl: './niveis.component.html',
  styleUrls: ['../login/login.component.css']
})
export class NiveisComponent implements OnInit {

  constructor(
    private router: Router
    ) { }

  ngOnInit() {
  }

  goToPage(pageName: string){
    this.router.navigate([`${pageName}`])
  }
}
