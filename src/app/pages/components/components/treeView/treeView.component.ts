import {Component} from '@angular/core';
import {TreeModel, NodeEvent} from 'ng2-tree';

@Component({
  selector: 'tree-view',
  templateUrl: './treeView.html',
})

export class TreeView {

//  public  tree: TreeModel = {
//     value: "Programming languages by programming paradigm",
//     // children: [
//     //   {
//     //     value: 'Object-oriented programming',
//     //     children: [
//     //       {value: 'Java'},
//     //       {value: 'C++'},
//     //       {value: 'C#'},
//     //     ]
//     //   },
//     //   {
//     //     value: 'Prototype-based programming',
//     //     children: [
//     //       {value: 'JavaScript'},
//     //       {value: 'CoffeeScript'},
//     //       {value: 'Lua'},
//     //     ]
//     //   }
//     // ]
//   };

public fonts: TreeModel = {
    value: 'Fonts',
    children: [
      {
        value: 'Serif  -  All my children and I are STATIC ¯\\_(ツ)_/¯',
        settings: {
          'static': true
        },
        children: [
          { value: 'Antiqua' },
          { value: 'DejaVu Serif' },
          { value: 'Garamond' },
          { value: 'Georgia' },
          { value: 'Times New Roman' },
          {
            value: 'Slab serif',
            children: [
              { value: 'Candida' },
              { value: 'Swift' },
              { value: 'Guardian Egyptian' }
            ]
          }
        ]
      },
      {
        value: 'Sans-serif',
        children: [
          { value: 'Arial' },
          { value: 'Century Gothic' },
          { value: 'DejaVu Sans' },
          { value: 'Futura' },
          { value: 'Geneva' },
          { value: 'Liberation Sans' }
        ]
      },
      {
        value: 'Monospace - With ASYNC CHILDREN',
        // children property is ignored if "loadChildren" is present
        children: [{value: 'I am the font that will be ignored'}],
        loadChildren: (callback) => {
          setTimeout(() => {
            callback([
              { value: 'Input Mono' },
              { value: 'Roboto Mono' },
              { value: 'Liberation Mono' },
              { value: 'Hack' },
              { value: 'Consolas' },
              { value: 'Menlo' },
              { value: 'Source Code Pro' }
            ]);
          }, 5000);
        }
      }
    ]
};

  constructor() {
  }

}
