import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [

    {
        // tslint:disable-next-line:max-line-length
        path: '', title: 'Dashboard', icon: 'fas fa-tachometer-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        // tslint:disable-next-line:max-line-length
        path: '/full-layout', title: 'Contacts', icon: 'ft-user', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '', title: 'Items', icon: 'icon-handbag',
         class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: 'javascript:;', title: 'Items', icon: '', class: '',
             badge: '', badgeClass: '', isExternalLink: true, submenu: [],
            },
        ]
        },
    {
        path: '', title: 'Sales', icon: 'icon-basket',
         class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: 'javascript:;', title: 'Estimates', icon: '', class: '',
             badge: '', badgeClass: '', isExternalLink: true, submenu: [],
            },
            { path: 'javascript:;', title: 'Sales Orders', icon: '', class: '',
             badge: '', badgeClass: '', isExternalLink: true, submenu: [],
            },
            { path: 'javascript:;', title: 'Delivery Challans', icon: '', class: '',
             badge: '', badgeClass: '', isExternalLink: true, submenu: [],
            },
            { path: 'javascript:;', title: 'Invoices', icon: '', class: '',
             badge: '', badgeClass: '', isExternalLink: true, submenu: [],
            },
            { path: 'javascript:;', title: 'Payments Received', icon: '', class: '',
             badge: '', badgeClass: '', isExternalLink: true, submenu: [],
            },
            { path: 'javascript:;', title: 'Recurring Invoice', icon: '', class: '',
             badge: '', badgeClass: '', isExternalLink: true, submenu: [],
            },
            { path: 'javascript:;', title: 'Credit Notes', icon: '', class: '',
             badge: '', badgeClass: '', isExternalLink: true, submenu: [],
            },
        ]
        },
        {
            path: '', title: 'Purchases', icon: 'icon-bag',
             class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
            submenu: [
                { path: 'javascript:;', title: 'Expenses', icon: '', class: '',
                 badge: '', badgeClass: '', isExternalLink: true, submenu: [],
                },
                { path: 'javascript:;', title: 'Recurring Expenses', icon: '', class: '',
                 badge: '', badgeClass: '', isExternalLink: true, submenu: [],
                },
                { path: 'javascript:;', title: 'purchase Orders', icon: '', class: '',
                 badge: '', badgeClass: '', isExternalLink: true, submenu: [],
                },
                { path: 'javascript:;', title: 'Bills', icon: '', class: '',
                 badge: '', badgeClass: '', isExternalLink: true, submenu: [],
                },
                { path: 'javascript:;', title: 'Payment Mode', icon: '', class: '',
                 badge: '', badgeClass: '', isExternalLink: true, submenu: [],
                },
                { path: 'javascript:;', title: 'Recurring Bills', icon: '', class: '',
                 badge: '', badgeClass: '', isExternalLink: true, submenu: [],
                },
                { path: 'javascript:;', title: 'Vendor Credits', icon: '', class: '',
                 badge: '', badgeClass: '', isExternalLink: true, submenu: [],
                },
            ]
            },
    // {
    //     // tslint:disable-next-line:max-line-length
    //     path: '/full-layout', title: 'Full Layout',
    // icon: 'ft-layout', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    // },
    // {
    //     path: '/content-layout', title: 'Content Layout', icon: 'ft-square', class: '',
    //      badge: '', badgeClass: '', isExternalLink: false, submenu: []
    // },
    // {
    //     path: '', title: 'Menu Levels', icon: 'ft-align-left',
    //      class: 'has-sub', badge: '1', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
    //     submenu: [
    //         { path: 'javascript:;', title: 'Second Level', icon: '', class: '',
    //          badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    //         {
    //             path: '', title: 'Second Level Child', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
    //             submenu: [
    //                 { path: 'javascript:;', title: 'Third Level 1.1', icon: '',
    //                  class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    //                 { path: 'javascript:;', title: 'Third Level 1.2', icon: '',
    //                  class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    //             ]
    //         },
    //     ]
    // },
    // {
    //     path: '/changelog', title: 'ChangeLog', icon: 'ft-file', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    // },
    { path: '/changelog', title: 'Reports', icon: 'ft-activity',
    class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },

];
