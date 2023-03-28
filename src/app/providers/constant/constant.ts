import { Injectable } from '@angular/core';

@Injectable()
export class AppConstants  {
    apiurl : string = 'https://devl06.borugroup.com/drakelighting/phoneapi/';
    vturl : string = 'https://devl06.borugroup.com/drakelighting/';

    properties :[
        {
            "recordid": 244787,
            "site_name": "Simmons",
            "coords": "35.045556, -89.906111",
            "city": "Chicago",
            "state": "IL",
            "zip": 60659,
            "travel_time_m": 18,
            "miles": 2.6
        },
        {
            "recordid": 345879,
            "site_name": "Coldspring",
            "coords": "33.224495, -91.04211",
            "city": "New York",
            "state": "NY",
            "zip": 10014,
            "travel_time_m": 734,
            "miles": 789
        },
        {
            "recordid": 144848,
            "site_name": "Sawmill",
            "coords": "35.121858, -89.54004",
            "city": "Chicago",
            "state": "IL",
            "zip": 60603,
            "travel_time_m": 42,
            "miles": 6.0
        },
        {
            "recordid": 255654,
            "site_name": "Mellen",
            "coords": "34.102253, -90.07503",
            "city": "Downers Grove",
            "state": "IL",
            "zip": 60516,
            "travel_time_m": 50,
            "miles": 7.1
        },
        {
            "recordid": 149598,
            "site_name": "Funston",
            "coords": "32.172031, -90.02392",
            "city": "Chicago",
            "state": "IL",
            "zip": 60645,
            "travel_time_m": 20,
            "miles": 1.8
        },
        {
            "recordid": 254879,
            "site_name": "York",
            "coords": "35.121858, -89.54004",
            "city": "Chicago",
            "state": "IL",
            "zip": 60453,
            "travel_time_m": 44,
            "miles": 3.6
        },
        {
            "recordid": 154888,
            "site_name": "Saxton",
            "coords": "35.045556, -89.906111",
            "city": "Palo Alto",
            "state": "CA",
            "zip": 94020,
            "travel_time_m": 85,
            "miles": 18
        },
        {
            "recordid": 111254,
            "site_name": "Latwell",
            "coords": "34.102253, -90.07503",
            "city": "Cupertino",
            "state": "CA",
            "zip": 95014,
            "travel_time_m": 10,
            "miles": 1.0
        },
        {
            "recordid": 345487,
            "site_name": "Medora",
            "coords": "32.172031, -90.02392",
            "city": "Redmond",
            "state": "WA",
            "zip": 98052,
            "travel_time_m": 5,
            "miles": 0.5
        },
        {
            "recordid": 554678,
            "site_name": "Rockwood",
            "coords": "33.224495, -91.04211",
            "city": "Palo Alto",
            "state": "CA",
            "zip": 94303,
            "travel_time_m": 25,
            "miles": 2.0
        }
        ];

    getApiUrl() {
        return this.apiurl;
    }
    getVtUrl() {
        return this.vturl;
    }
    getProperties() {
        return  this.properties;
    }
}
