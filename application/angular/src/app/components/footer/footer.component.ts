import { Component, OnInit } from '@angular/core';
import {Student} from "../../interfaces/student.interface";
import {students} from "../../../constants";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public year: number;
  public students: Array<Student> = students;

  constructor() { }

  ngOnInit() {
    this.year = new Date().getFullYear();
  }

}
