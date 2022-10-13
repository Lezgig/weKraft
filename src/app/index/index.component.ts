import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  loopArrayLogo: Array<string> = ["github_logo.png" ,"oracle_vm_logo.png","slack_logo.png", "jira_logo.png","docker_logo.png"] ;
  loopArrayLink: Array<string> = ["https://github.com/Lezgig/weKraft","https://www.oracle.com/fr/virtualization/technologies/vm/downloads/virtualbox-downloads.html","https://slack.com/intl/fr-fr/","https://www.atlassian.com/fr/software/jira","https://hub.docker.com/r/bitnami/symfony/"]
  loopArray: {logo: string, link: string}[] = [];
  show: boolean = false;

  constructor() {

  }

  public getLogo(index: number){

    return this.loopArray[index].logo;
  }

  public getLink(index: number){

    return this.loopArray[index].link;

  }

  private populate(){
    let i = 0;
    this.loopArrayLogo.forEach(element => {
      this.loopArray.push({logo:this.loopArrayLogo[i] , link: this.loopArrayLink[i]})
      i++;
    });
  }

  ngOnInit(): void {
    this.populate();console.log(this.loopArray)

    this.show = true;
  }

}
