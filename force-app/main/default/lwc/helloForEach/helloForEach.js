import { LightningElement } from 'lwc';

export default class HelloForEach extends LightningElement {
    contacts=[
        {Id:1,
         Name:'Amy Taylor',
         Title:'VP of Engineering'
        },
        {Id:2,
            Name:'Ramesh Taylor',
            Title:'VP of Engineering'
           },
           {Id:3,
            Name:'Sriram Taylor',
            Title:'VP of Engineering'
           },
    ]
}