import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  loopArray: Array<string> = ["github_logo.png" ,"oracle_vm_logo.png","slack_logo.png", "jira_logo.png","docker_logo.png"] ;

  constructor() {

  }

  ngOnInit(): void {

  }

}
