export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'general.menu.dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
        },
        {
        path: 'pipeline',
        data: {
          menu: {
            title: 'general.menu.pipeline',
            icon: 'ion-edit',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'plainscdp',
            data: {
              menu: {
                title: 'general.menu.plainscdp',
              }
            },
            children: [
              {
                path: 'radios',
                data: {
                  menu: {
                    title: 'general.menu.radios',
                  }
                }
              },
              {
            path: 'westerncdp',
            data: {
              menu: {
                title: 'general.menu.westerncdp',
              }
            }
          }
            ]
          },
          {
            path: 'westerncdp',
            data: {
              menu: {
                title: 'general.menu.westerncdp',
              }
            }
          },
          {
            path: 'rustlerbluff',
            data: {
              menu: {
                title: 'general.menu.rustlerbluff',
              }
            }
          },
          {
            path: 'acclact',
            data: {
              menu: {
                title: 'general.menu.acclact',
              }
            }
          },
          {
            path: 'plu421',
            data: {
              menu: {
                title: 'general.menu.plu421',
              }
            }
          },
          {
            path: 'bigsinks',
            data: {
              menu: {
                title: 'general.menu.bigsinks',
              }
            }
          },
          {
            path: 'hastalavista',
            data: {
              menu: {
                title: 'general.menu.hastalavista',
              }
            }
          },
          {
            path: 'drillisland4',
            data: {
              menu: {
                title: 'general.menu.drillisland4',
              }
            }
          },
          {
            path: 'drillisland5',
            data: {
              menu: {
                title: 'general.menu.drillisland5',
              }
            }
          }
        ]
      }
    ]
  }
];
