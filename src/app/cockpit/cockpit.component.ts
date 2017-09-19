import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('srvCreated') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverName: HTMLInputElement, serverContent: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverName.value,
      serverContent: serverContent.value
    })
  }

  onAddBlueprint(serverName: HTMLInputElement, serverContent: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverName.value,
      serverContent: serverContent.value
    })
  }
}
