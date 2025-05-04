import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  tiles = [
    { text: 'One', cols: 4, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];
  form = new FormGroup({});
  model = { email: 'email@gmail.com' };
  fields: FormlyFieldConfig[] =
    [
      {
        type: "card",
        props: {
          style: {
            "border-radius": 0,
            "background-color": "rgba(3, 3, 39, 0.92)",
            "justify-content": "center",
            "color": "white",
            "padding": "5%"
          },
        },
        fieldGroup: [
          {
            wrappers: ["grid-layout"],
            props: {
              colspan: 12
            },
            fieldGroup: [
              {
                type: 'card',
                props: {
                  style: {
                    // border: "none",
                    "border-radius": 0,
                    "background-color": "inherit",
                    "justify-content": "center",
                    "color": "white",
                    "line-height": 5
                  },
                  colspan: 5,
                  rowspan: 3,
                  title: "<h1>Send a Photo. We'll Handle the Rest.</h1>",
                  subtitle: "Quick and reliable issue resolution based on your images. No forms, no hassle — just snap, send, and relax."
                }
              }

            ]
          },
         
        ]
      }

    ];

  onSubmit(model: any) {
    console.log(model);
  }

}
