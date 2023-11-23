
import { Component, HostListener, OnInit } from '@angular/core';
import { AppMenuItem } from '../models/app-menu-item';

@Component({
    selector: 'app-menubar',
    templateUrl: './menubar.component.html',
    styleUrls: ['./menubar.component.scss']
})
export class AppMenubar implements OnInit {
    items: AppMenuItem[] | any | undefined;
    selectedItem: AppMenuItem | undefined = {};
    selectedSubItem: AppMenuItem | undefined = {};

    ngOnInit() {
        this.items = [
            {
                label: 'Services',
                items: [
                    {
                        label: 'Overview',
                        isOverview: true,
                        overview: {
                            header: 'KeeyBee is here to make a difference.',
                            buttonName: 'Discover all solutions',
                            content: 'We build greater solutions for businesses across multiple industries and companies'
                        }
                    },
                    {
                        label: 'Cloud & Infrastructure',
                        items: [
                            {
                                label: 'Cloud',
                                items: [
                                    {
                                        label: 'AWS'
                                    },
                                    {
                                        label: 'Azure'
                                    },
                                    {
                                        label: 'Google Cloud Platform'
                                    }
                                ]
                            }
                        ],
                        content: [
                            {
                                header: 'sdfsdf'
                            },
                            {
                                header: 'sdfsdf'
                            }]
                    },
                    {
                        label: 'Consulting',
                    },
                    {
                        label: 'Data & Analytics',
                        routerLink: 'data_analytics'
                    },
                    {
                        label: 'Digital Engineering',
                    },
                    {
                        label: 'Quality Engineering',
                    }
                ]
            },
            {
                label: 'Resources',
                // icon: 'pi pi-fw pi-calendar',
                items: [
                    {
                        label: 'Overview',
                        isOverview: true,
                        overview: {
                            header: 'KeeyBee is here to make a difference.',
                            buttonName: 'Discover all solutions',
                            content: 'We build greater solutions for businesses across multiple industries and companies'
                        }
                    },
                    {
                        label: 'Explore',
                        items: [
                            {
                                label: 'Case Studies',
                            },
                            {
                                label: 'Blogs',
                            }
                        ]
                    },
                    {
                        label: 'Customer Success',
                        items: [
                            {
                                label: 'Support',
                            },
                            {
                                label: 'Educational Services',
                            },
                            {
                                label: 'Professional Services',
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Company',
                // icon: 'pi pi-fw pi-power-off'
                items: [
                    {
                        label: 'Overview',
                        isOverview: true,
                        overview: {
                            header: 'KeeyBee is here to make a difference.',
                            buttonName: 'Discover all solutions',
                            content: 'We build greater solutions for businesses across multiple industries and companies'
                        }
                    },
                    {
                        label: 'Careers'
                    },
                    {
                        label: 'Leadership'
                    },
                    {
                        label: 'Partners'
                    },
                    {
                        label: 'Locations'
                    }
                ]
            }
        ];
    }

    menuExpanded = false;

    toggleMenu(sitem: AppMenuItem) {
        this.selectedItem = sitem;
        this.selectedSubItem = this.selectedItem.items?.find((s: any) => s.isOverview);
        setTimeout(() => {
            this.menuExpanded = true;
        }, 0);
    }

    toggleSubMenuItem(sitem: AppMenuItem) {
        this.selectedSubItem = sitem;
    }

    @HostListener('window:click', ['$event'])
    listenToOutsideClick(event: PointerEvent) {
        const target = event.target as HTMLElement;
        const isToggler = target.getAttribute('id')?.startsWith('navbarDropdown')
        if (!this.menuExpanded || isToggler) {
            return;
        }

        this.menuExpanded = false;
    };
}