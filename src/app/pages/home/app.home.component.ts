import { Component } from "@angular/core";

@Component({
    selector:'app-data-analytics',
    templateUrl: './app.home.component.html',
    styleUrls:['./app.home.component.scss']
})
export class AppHome {
    public coverImages = 
    [{
        path:'assets/images/homepage_2.jpg',
        heading: 'Client Empowerment',
        content: 'We empower our clients with the knowledge and tools they need to make informed decisions about their technology investments.'
    },
    {
        path:'assets/images/homepage_5.jpg',
        heading: 'Fast paced',
        content: 'We embrace agile methodologies to deliver solutions quickly and adapt to evolving requirements.'
    },
    {
        path:'assets/images/homepage_2.jpg',
        heading: 'Client Empowerment',
        content: 'We empower our clients with the knowledge and tools they need to make informed decisions about their technology investments.'
    },
    {
        path:'assets/images/homepage_5.jpg',
        heading: 'Fast paced',
        content: 'We embrace agile methodologies to deliver solutions quickly and adapt to evolving requirements.'
    },
    {
        path:'assets/images/homepage_2.jpg',
        heading: 'Client Empowerment',
        content: 'We empower our clients with the knowledge and tools they need to make informed decisions about their technology investments.'
    },
    {
        path:'assets/images/homepage_5.jpg',
        heading: 'Fast paced',
        content: 'We embrace agile methodologies to deliver solutions quickly and adapt to evolving requirements.'
    }];
    public responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];
}