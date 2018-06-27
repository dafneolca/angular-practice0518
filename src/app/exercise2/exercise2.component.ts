import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise2',
  templateUrl: './exercise2.component.html',
  styleUrls: ['./exercise2.component.css']
})
export class Exercise2Component implements OnInit {

  displayParagraph = false;
  display: boolean = false;
  log = [];

  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverName ="Testserver";
  serverCreated = false;
  servers = ['Testserver', 'Testserver2'];
  

  constructor() { 
    this.serverStatus = Math.random () > 0.5 ? 'online' : 'offline';
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  toggleDisplay(){
    console.log("toggle display.");
    if (this.displayParagraph) {
      this.displayParagraph = false;
    }
    else {
      this.displayParagraph = true;
    }
  }

  onToggleDetails(){
    this.display = !this.display
    this.log.push(new Date())
  }

  title = 'server';
  serverId = 10;
  serverStatus="offline";

  getServerStatus() {
    return this.serverStatus;
  }

  getColor(){
    return this.serverStatus === 'offline' ? "red" : "green" ;
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus ="Server was created! Name is "+  this.serverName;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event){
    console.log("update server name");
    this.serverName = (<HTMLInputElement>event.target).value;
  }



}
