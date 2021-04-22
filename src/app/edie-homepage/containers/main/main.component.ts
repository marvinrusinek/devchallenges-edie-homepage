import { Component, OnInit } from '@angular/core';
import * as sal from 'sal.js';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    sal();
  }

  navigateToSection(section: string): void {
    window.location.hash = '';
    window.location.hash = section;
  }
}
