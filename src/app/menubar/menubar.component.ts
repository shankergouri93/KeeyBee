
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-menubar',
    templateUrl: './menubar.component.html',
    styleUrls: ['./menubar.component.scss']
})
export class AppMenubar implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Services',
                items: [
                    {
                        label: 'Cloud & Infrastructure',
                        items:[
                            {
                                label: 'Cloud',
                                items: [
                                    {
                                        label:'AWS'
                                    },
                                    {
                                        label:'Azure'
                                    },
                                    {
                                        label:'Google Cloud Platform'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        label: 'Consulting',
                    },
                    {
                        label: 'Data & Analytics',
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
                        label: 'Careers'
                    },
                    {
                        label:'Leadership'
                    },
                    {
                        label: 'Partners'
                    },
                    {
                        label:'Locations'
                    }
                ]
            }
        ];
    }
}