import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  ip = 'JohnsonsLegacy.net';
  color = '#FFC0CB';

  constructor() { }

  copyIP() {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.ip;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

    this.ip = 'Copied IP!';
    this.color = '#51DF56';

    setTimeout(() => {
      this.ip = 'JohnsonsLegacy.net';
      this.color = '#FFC0CB';
    }, 2000);
  }
}
