import { Component, OnInit, Output,EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
 @Output() serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
 @Output() blueprintCreated = new EventEmitter<{serverName:string,serverContent:string}>();
 @ViewChild('serverInputName') serverNameInput:ElementRef
  newServerName = '';
  // newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  // onAddServer() {
  //   this.serverCreated.emit({
  //     serverName:this.newServerName,
  //     serverContent:this.newServerContent
  //   });
  // }

  // onAddBlueprint() {
  //   this.blueprintCreated.emit({
  //     serverName:this.newServerName,
  //     serverContent:this.newServerContent
  //   })
  // }

  //Using local reference template
  // onAddServer(nameInput:HTMLInputElement,contentInput:HTMLInputElement) {
  //   this.serverCreated.emit({
  //     serverName:nameInput.value,
  //     serverContent:contentInput.value
  //   });
  // }

  // onAddBlueprint(nameInput:HTMLInputElement,contentInput:HTMLInputElement) {
  //   this.blueprintCreated.emit({
  //     serverName:nameInput.value,
  //     serverContent:contentInput.value
  //   })
  // }

  //usig @viewChild()
  onAddServer(nameInput:HTMLInputElement,contentInput:HTMLInputElement) {
    this.serverCreated.emit({
      serverName:this.serverNameInput.nativeElement.value,
      serverContent:contentInput.value
    });
  }

  onAddBlueprint(nameInput:HTMLInputElement,contentInput:HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName:this.serverNameInput.nativeElement.value,
      serverContent:contentInput.value
    })
  }
}
