import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ApiService } from '../service/api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api: ApiService) { }
  getData() {
      return [
        {
            "country": "Afghanistan",
            "barcode": 1009
        },
        {
            "country": "Albania",
            "barcode": 530
        },
        {
            "country": "Algeria",
            "barcode": 613
        },
        {
            "country": "American Samoa",
            "barcode": 1009
        },
        {
            "country": "Andorra",
            "barcode": 1009
        },
        {
            "country": "Angola",
            "barcode": 1009
        },
        {
            "country": "Anguilla",
            "barcode": 1009
        },
        {
            "country": "Antarctica",
            "barcode": 1009
        },
        {
            "country": "Antigua and Barbuda",
            "barcode": 1009
        },
        {
            "country": "Argentina",
            "barcode": 778
        },
        {
            "country": "Armenia",
            "barcode": 485
        },
        {
            "country": "Aruba",
            "barcode": 1009
        },
        {
            "country": "Australia",
            "barcode": 930
        },
        {
            "country": "Austria",
            "barcode": 900
        },
        {
            "country": "Azerbaijan",
            "barcode": 476
        },
        {
            "country": "Bahamas",
            "barcode": 1009
        },
        {
            "country": "Bahrain",
            "barcode": 608
        },
        {
            "country": "Bangladesh",
            "barcode": 1009
        },
        {
            "country": "Barbados",
            "barcode": 1009
        },
        {
            "country": "Belarus",
            "barcode": 481
        },
        {
            "country": "Belgium",
            "barcode": 1009
        },
        {
            "country": "Belize",
            "barcode": 1009
        },
        {
            "country": "Benin",
            "barcode": 1009
        },
        {
            "country": "Bermuda",
            "barcode": 1009
        },
        {
            "country": "Bhutan",
            "barcode": 1009
        },
        {
            "country": "Bolivia",
            "barcode": 777
        },
        {
            "country": "Bosnia and Herzegovina",
            "barcode": 387
        },
        {
            "country": "Botswana",
            "barcode": 1009
        },
        {
            "country": "Bouvet Island",
            "barcode": 1009
        },
        {
            "country": "Brazil",
            "barcode": 789
        },
        {
            "country": "British Indian Ocean Territory",
            "barcode": 1009
        },
        {
            "country": "Brunei",
            "barcode": 623
        },
        {
            "country": "Bulgaria",
            "barcode": 380
        },
        {
            "country": "Burkina Faso",
            "barcode": 1009
        },
        {
            "country": "Burundi",
            "barcode": 1009
        },
        {
            "country": "Cambodia",
            "barcode": 884
        },
        {
            "country": "Cameroon",
            "barcode": 1009
        },
        {
            "country": "Canada",
            "barcode": 19
        },
        {
            "country": "Cape Verde",
            "barcode": 1009
        },
        {
            "country": "Cayman Islands",
            "barcode": 1009
        },
        {
            "country": "Central African Republic",
            "barcode": 1009
        },
        {
            "country": "Chad",
            "barcode": 1009
        },
        {
            "country": "Chile",
            "barcode": 780
        },
        {
            "country": "China",
            "barcode": 699
        },
        {
            "country": "Christmas Island",
            "barcode": 1009
        },
        {
            "country": "Cocos (Keeling) Islands",
            "barcode": 1009
        },
        {
            "country": "Colombia",
            "barcode": 771
        },
        {
            "country": "Comoros",
            "barcode": 1009
        },
        {
            "country": "Congo",
            "barcode": 1009
        },
        {
            "country": "Cook Islands",
            "barcode": 1009
        },
        {
            "country": "Costa Rica",
            "barcode": 744
        },
        {
            "country": "Croatia",
            "barcode": 385
        },
        {
            "country": "Cuba",
            "barcode": 850
        },
        {
            "country": "Cyprus",
            "barcode": 529
        },
        {
            "country": "Czech Republic",
            "barcode": 859
        },
        {
            "country": "Denmark",
            "barcode": 579
        },
        {
            "country": "Djibouti",
            "barcode": 1009
        },
        {
            "country": "Dominica",
            "barcode": 1009
        },
        {
            "country": "Dominican Republic",
            "barcode": 746
        },
        {
            "country": "East Timor",
            "barcode": 1009
        },
        {
            "country": "Ecuador",
            "barcode": 786
        },
        {
            "country": "Egypt",
            "barcode": 622
        },
        {
            "country": "El Salvador",
            "barcode": 741
        },
        {
            "country": "England",
            "barcode": 1009
        },
        {
            "country": "Equatorial Guinea",
            "barcode": 1009
        },
        {
            "country": "Eritrea",
            "barcode": 1009
        },
        {
            "country": "Estonia",
            "barcode": 474
        },
        {
            "country": "Ethiopia",
            "barcode": 1009
        },
        {
            "country": "Falkland Islands",
            "barcode": 1009
        },
        {
            "country": "Faroe Islands",
            "barcode": 579
        },
        {
            "country": "Fiji Islands",
            "barcode": 1009
        },
        {
            "country": "Finland",
            "barcode": 649
        },
        {
            "country": "France",
            "barcode": 1009
        },
        {
            "country": "French Guiana",
            "barcode": 1009
        },
        {
            "country": "French Polynesia",
            "barcode": 1009
        },
        {
            "country": "French Southern territories",
            "barcode": 1009
        },
        {
            "country": "Gabon",
            "barcode": 1009
        },
        {
            "country": "Gambia",
            "barcode": 1009
        },
        {
            "country": "Georgia",
            "barcode": 486
        },
        {
            "country": "Germany",
            "barcode": 440
        },
        {
            "country": "Ghana",
            "barcode": 603
        },
        {
            "country": "Gibraltar",
            "barcode": 1009
        },
        {
            "country": "Greece",
            "barcode": 521
        },
        {
            "country": "Greenland",
            "barcode": 570 
        },
        {
            "country": "Grenada",
            "barcode": 1009
        },
        {
            "country": "Guadeloupe",
            "barcode": 1009
        },
        {
            "country": "Guam",
            "barcode": 1009
        },
        {
            "country": "Guatemala",
            "barcode": 740
        },
        {
            "country": "Guinea",
            "barcode": 1009
        },
        {
            "country": "Guinea-Bissau",
            "barcode": 1009
        },
        {
            "country": "Guyana",
            "barcode": 1009
        },
        {
            "country": "Haiti",
            "barcode": 1009
        },
        {
            "country": "Heard Island and McDonald Islands",
            "barcode": 1009
        },
        {
            "country": "Holy See (Vatican City State)",
            "barcode": 1009
        },
        {
            "country": "Honduras",
            "barcode": 742
        },
        {
            "country": "Hong Kong",
            "barcode": 489
        },
        {
            "country": "Hungary",
            "barcode": 599
        },
        {
            "country": "Iceland",
            "barcode": 569
        },
        {
            "country": "India",
            "barcode": 890
        },
        {
            "country": "Indonesia",
            "barcode": 899
        },
        {
            "country": "Iran",
            "barcode": 626
        },
        {
            "country": "Iraq",
            "barcode": 1009
        },
        {
            "country": "Ireland",
            "barcode": 1009
        },
        {
            "country": "Israel",
            "barcode": 729
        },
        {
            "country": "Italy",
            "barcode": 1009
        },
        {
            "country": "Ivory Coast",
            "barcode": 618
        },
        {
            "country": "Jamaica",
            "barcode": 1009
        },
        {
            "country": "Japan",
            "barcode": 459
        },
        {
            "country": "Jordan",
            "barcode": 625
        },
        {
            "country": "Kazakhstan",
            "barcode": 1009
        },
        {
            "country": "Kenya",
            "barcode": 616
        },
        {
            "country": "Kiribati",
            "barcode": 1009
        },
        {
            "country": "Kuwait",
            "barcode": 627
        },
        {
            "country": "Kyrgyzstan",
            "barcode": 470
        },
        {
            "country": "Laos",
            "barcode": 1009
        },
        {
            "country": "Latvia",
            "barcode": 475
        },
        {
            "country": "Lebanon",
            "barcode": 528
        },
        {
            "country": "Lesotho",
            "barcode": 1009
        },
        {
            "country": "Liberia",
            "barcode": 1009
        },
        {
            "country": "Libyan Arab Jamahiriya",
            "barcode": 1009
        },
        {
            "country": "Liechtenstein",
            "barcode": 1009
        },
        {
            "country": "Lithuania",
            "barcode": 477
        },
        {
            "country": "Luxembourg",
            "barcode": 1009
        },
        {
            "country": "Macao",
            "barcode": 1009
        },
        {
            "country": "North Macedonia",
            "barcode": 531
        },
        {
            "country": "Madagascar",
            "barcode": 1009
        },
        {
            "country": "Malawi",
            "barcode": 1009
        },
        {
            "country": "Malaysia",
            "barcode": 955
        },
        {
            "country": "Maldives",
            "barcode": 1009
        },
        {
            "country": "Mali",
            "barcode": 1009
        },
        {
            "country": "Malta",
            "barcode": 535
        },
        {
            "country": "Marshall Islands",
            "barcode": 1009
        },
        {
            "country": "Martinique",
            "barcode": 1009
        },
        {
            "country": "Mauritania",
            "barcode": 1009
        },
        {
            "country": "Mauritius",
            "barcode": 609
        },
        {
            "country": "Mayotte",
            "barcode": 1009
        },
        {
            "country": "Mexico",
            "barcode": 750
        },
        {
            "country": "Micronesia, Federated States of",
            "barcode": 1009
        },
        {
            "country": "Moldova",
            "barcode": 484
        },
        {
            "country": "Monaco",
            "barcode": 1009
        },
        {
            "country": "Mongolia",
            "barcode": 865
        },
        {
            "country": "Montserrat",
            "barcode": 1009
        },
        {
            "country": "Morocco",
            "barcode": 611
        },
        {
            "country": "Mozambique",
            "barcode": 1009
        },
        {
            "country": "Myanmar",
            "barcode": 1009
        },
        {
            "country": "Namibia",
            "barcode": 1009
        },
        {
            "country": "Nauru",
            "barcode": 1009
        },
        {
            "country": "Nepal",
            "barcode": 1009
        },
        {
            "country": "Netherlands",
            "barcode": 879
        },
        {
            "country": "Netherlands Antilles",
            "barcode": 1009
        },
        {
            "country": "New Caledonia",
            "barcode": 1009
        },
        {
            "country": "New Zealand",
            "barcode": 949
        },
        {
            "country": "Nicaragua",
            "barcode": 743
        },
        {
            "country": "Niger",
            "barcode": 1009
        },
        {
            "country": "Nigeria",
            "barcode": 615
        },
        {
            "country": "Niue",
            "barcode": 1009
        },
        {
            "country": "Norfolk Island",
            "barcode": 1009
        },
        {
            "country": "North Korea",
            "barcode": 867
        },
        {
            "country": "Northern Ireland",
            "barcode": 1009
        },
        {
            "country": "Northern Mariana Islands",
            "barcode": 1009
        },
        {
            "country": "Norway",
            "barcode": 709
        },
        {
            "country": "Oman",
            "barcode": 1009
        },
        {
            "country": "Pakistan",
            "barcode": 896
        },
        {
            "country": "Palau",
            "barcode": 1009
        },
        {
            "country": "Palestine",
            "barcode": 1009
        },
        {
            "country": "Panama",
            "barcode": 745
        },
        {
            "country": "Papua New Guinea",
            "barcode": 1009
        },
        {
            "country": "Paraguay",
            "barcode": 784
        },
        {
            "country": "Peru",
            "barcode": 775
        },
        {
            "country": "Philippines",
            "barcode": 480
        },
        {
            "country": "Pitcairn",
            "barcode": 1009
        },
        {
            "country": "Poland",
            "barcode": 590
        },
        {
            "country": "Portugal",
            "barcode": 560
        },
        {
            "country": "Puerto Rico",
            "barcode": 1009
        },
        {
            "country": "Qatar",
            "barcode": 1009
        },
        {
            "country": "Reunion",
            "barcode": 1009
        },
        {
            "country": "Romania",
            "barcode": 594
        },
        {
            "country": "Russian Federation",
            "barcode": 1009
        },
        {
            "country": "Rwanda",
            "barcode": 1009
        },
        {
            "country": "Saint Helena",
            "barcode": 1009
        },
        {
            "country": "Saint Kitts and Nevis",
            "barcode": 1009
        },
        {
            "country": "Saint Lucia",
            "barcode": 1009
        },
        {
            "country": "Saint Pierre and Miquelon",
            "barcode": 1009
        },
        {
            "country": "Saint Vincent and the Grenadines",
            "barcode": 1009
        },
        {
            "country": "Samoa",
            "barcode": 1009
        },
        {
            "country": "San Marino",
            "barcode": 1009
        },
        {
            "country": "Sao Tome and Principe",
            "barcode": 1009
        },
        {
            "country": "Saudi Arabia",
            "barcode": 628
        },
        {
            "country": "Scotland",
            "barcode": 1009
        },
        {
            "country": "Senegal",
            "barcode": 604
        },
        {
            "country": "Seychelles",
            "barcode": 1009
        },
        {
            "country": "Sierra Leone",
            "barcode": 1009
        },
        {
            "country": "Singapore",
            "barcode": 888
        },
        {
            "country": "Slovakia",
            "barcode": 858
        },
        {
            "country": "Slovenia",
            "barcode": 383
        },
        {
            "country": "Solomon Islands",
            "barcode": 1009
        },
        {
            "country": "Somalia",
            "barcode": 1009
        },
        {
            "country": "South Africa",
            "barcode": 600
        },
        {
            "country": "South Georgia and the South Sandwich Islands",
            "barcode": 1009
        },
        {
            "country": "South Korea",
            "barcode": 880
        },
        {
            "country": "South Sudan",
            "barcode": 1009
        },
        {
            "country": "Spain",
            "barcode": 1009
        },
        {
            "country": "SriLanka",
            "barcode": 1009
        },
        {
            "country": "Sudan",
            "barcode": 1009
        },
        {
            "country": "Suriname",
            "barcode": 1009
        },
        {
            "country": "Svalbard and Jan Mayen",
            "barcode": 1009
        },
        {
            "country": "Swaziland",
            "barcode": 1009
        },
        {
            "country": "Sweden",
            "barcode": 1009
        },
        {
            "country": "Switzerland",
            "barcode": 1009
        },
        {
            "country": "Syria",
            "barcode": 621
        },
        {
            "country": "Tajikistan",
            "barcode": 488
        },
        {
            "country": "Tanzania",
            "barcode": 620
        },
        {
            "country": "Thailand",
            "barcode": 885
        },
        {
            "country": "The Democratic Republic of Congo",
            "barcode": 1009
        },
        {
            "country": "Togo",
            "barcode": 1009
        },
        {
            "country": "Tokelau",
            "barcode": 1009
        },
        {
            "country": "Tonga",
            "barcode": 1009
        },
        {
            "country": "Trinidad and Tobago",
            "barcode": 1009
        },
        {
            "country": "Tunisia",
            "barcode": 619
        },
        {
            "country": "Turkey",
            "barcode": 869
        },
        {
            "country": "Turkmenistan",
            "barcode": 483
        },
        {
            "country": "Turks and Caicos Islands",
            "barcode": 1009
        },
        {
            "country": "Tuvalu",
            "barcode": 1009
        },
        {
            "country": "Uganda",
            "barcode": 1009
        },
        {
            "country": "Ukraine",
            "barcode": 482
        },
        {
            "country": "United Arab Emirates",
            "barcode": 629
        },
        {
            "country": "United Kingdom",
            "barcode": 509
        },
        {
            "country": "United States",
            "barcode": 19
        },
        {
            "country": "United States Minor Outlying Islands",
            "barcode": 1009
        },
        {
            "country": "Uruguay",
            "barcode": 773
        },
        {
            "country": "Uzbekistan",
            "barcode": 478
        },
        {
            "country": "Vanuatu",
            "barcode": 1009
        },
        {
            "country": "Venezuela",
            "barcode": 759
        },
        {
            "country": "Vietnam",
            "barcode": 893
        },
        {
            "country": "Virgin Islands, British",
            "barcode": 1009
        },
        {
            "country": "Virgin Islands, U.S.",
            "barcode": 1009
        },
        {
            "country": "Wales",
            "barcode": 1009
        },
        {
            "country": "Wallis and Futuna",
            "barcode": 1009
        },
        {
            "country": "Western Sahara",
            "barcode": 1009
        },
        {
            "country": "Yemen",
            "barcode": 1009
        },
        {
            "country": "Yugoslavia",
            "barcode": 1009
        },
        {
            "country": "Zambia",
            "barcode": 1009
        },
        {
            "country": "Zimbabwe",
            "barcode": 1009
        }
    ];
  }
  getListData() { 
    return [
        { month: 'Jan', mean: -5.2, high: -0.8, low: -9.7 },
        { month: 'Feb', mean: -3.4, high: 1.4, low: -8.2 },
        { month: 'Mar', mean: 1.7, high: 6.9, low: -3.5 },
        { month: 'Apr', mean: 8.8, high: 14.6, low: 2.9 },
        { month: 'May', mean: 14.6, high: 20.8, low: 8.4 },
        { month: 'Jun', mean: 19.6, high: 25.5, low: 13.6 },
        { month: 'Jul', mean: 22.1, high: 27.9, low: 16.3 },
        { month: 'Aug', mean: 21.2, high: 26.9, low: 15.5 },
        { month: 'Sep', mean: 16.6, high: 22.3, low: 10.9 },
        { month: 'Oct', mean: 9.8, high: 15.4, low: 4.2 },
        { month: 'Nov', mean: 4.3, high: 8.8, low: -0.3 },
        { month: 'Dec', mean: -1.9, high: 2.1, low: -6 }
    ];
  }
  getPieData() {
    return [
        { brand: 'Samsung', sales: 321
            ,Chile:[
                { brand: 'A1', sales: 321},
                { brand: 'A2', sales: 100},
                { brand: 'A3', sales: 500},
                { brand: 'A4', sales: 300}
            ] },
        { brand: 'Apple', sales: 215,Chile:[
            { brand: 'A5', sales: 321},
            { brand: 'A6', sales: 100},
            { brand: 'A7', sales: 500},
            { brand: 'A8', sales: 300}
        ] },
        { brand: 'Huawei', sales: 160,Chile:[
            { brand: 'A9', sales: 321},
            { brand: 'A10', sales: 100},
            { brand: 'A11', sales: 500},
            { brand: 'A12', sales: 300}
        ] },
        { brand: 'OPPO', sales: 112,Chile:[
            { brand: 'A11', sales: 321},
            { brand: 'A12', sales: 100},
            { brand: 'A13', sales: 500},
            { brand: 'A14', sales: 300}
        ] },
        { brand: 'Vivo', sales: 100,Chile:[
            { brand: 'A21', sales: 321},
            { brand: 'A22', sales: 100},
            { brand: 'A23', sales: 500},
            { brand: 'A24', sales: 300}
        ] },
        { brand: 'Others', sales: 638,Chile:[
            { brand: 'A31', sales: 321},
            { brand: 'A32', sales: 100},
            { brand: 'A33', sales: 500},
            { brand: 'A34', sales: 300}
        ] }
    ];
  }
  login(val): Observable<any> {
    return this.api.post(environment.urls.auth.login(), val).pipe( 
      map(res => {  
          if (res.token) {
            sessionStorage.setItem("token",res.token);
              return { success: true, message: res.token };
          } else {
              return { success: false, message: "User not found" };
          }
      })
    );
  }
  users(pageNo): Observable<any> {
    return this.api.get(environment.urls.users.list()+"?page="+pageNo).pipe( 
      map(res => {  
          if (res.data) {
              return { success: true, data: res.data, total: res.total};
          } else {
              return 1009;
          }
      })
    );
  }
  add(val): Observable<any> {
    return this.api.post(environment.urls.users.list(), val).pipe( 
      map(res => {  
          if (res) {
              return { success: true, message: res };
          } else {
              return { success: false, message: "Try agin" };
          }
      })
    );
  }
}

export class User {
  id: number;
  email?: string;
  first_name?: string;
  last_name?: string;
  avatar?: string;

  constructor(ini: UserInput) {
      this.updateWith(ini);
  }

  updateWith(ini: UserInput) {
      if (ini.id) {
          this.id = ini.id;
      }
      if (ini.email) {
        this.email = ini.email;
    }
    if (ini.first_name) {
      this.first_name = ini.first_name;
    }
    if (ini.avatar) {
      this.avatar = ini.avatar;
    }
  }

  toIni(): UserInput {
      return {
        id: this.id,
        email: this.email,
        first_name: this.first_name,
        last_name: this.last_name,
        avatar: this.avatar
      };
  }
}
interface UserInput {
  id: number;
  email?: string;
  first_name?: string;
  last_name?: string;
  avatar?: string;
}
