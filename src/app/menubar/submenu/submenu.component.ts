
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-submenu',
    templateUrl: './submenu.component.html',
    // styleUrls: ['./menubar.component.scss']
})
export class AppSubMenubar {
    @Input() item: MenuItem = {};

    menuExpanded = false;

  toggleMenu() {
    setTimeout(() => {
      this.menuExpanded = !this.menuExpanded;
    }, 0);
  }

  @HostListener('window:click', ['$event'])
  listenToOutsideClick(event: PointerEvent) {
    const target = event.target as HTMLElement;
    const isToggler = target.getAttribute('id') === 'navbarDropdown'
    if (!this.menuExpanded || isToggler) {
      return;
    }

    this.menuExpanded = false;
  };
}