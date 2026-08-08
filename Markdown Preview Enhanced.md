#### **1. POST /api/v1/rc/rc-full**

##### **Request Example**



const myHeaders = new Headers();

myHeaders.append("Authorization", "Bearer <token>");

myHeaders.append("Content-Type", "application/json");



const raw = JSON.stringify({

&#x20;  "id\_number": "RJ12XJ1234"

});



const requestOptions = {

&#x20;  method: "POST",

&#x20;  headers: myHeaders,

&#x20;  body: raw,

&#x20;  redirect: "follow"

};



fetch("https://kyc-api.surepass.app/api/v1/rc/rc-full", requestOptions)

&#x20;  .then((response) => response.text())

&#x20;  .then((result) => console.log(result))

&#x20;  .catch((error) => console.error(error));



##### **Response Example**

{

&#x20;   "data": {

&#x20;       "client\_id": "rc\_dSpdBzqCodglkkoQkmeu",

&#x20;       "rc\_number": "AB12CD3456",

&#x20;       "registration\_date": "2017-09-05",

&#x20;       "owner\_name": "Munna Bhaiya",

&#x20;       "father\_name": "Kaleen Bhaiya",

&#x20;       "present\_address": "HNO 1-10/2 Mirzapur",

&#x20;       "permanent\_address": "HNO 1-10/2 Mirzapur",

&#x20;       "mobile\_number": "",

&#x20;       "vehicle\_category": "HPV",

&#x20;       "vehicle\_chasi\_number": "ABCD12LRT0HH123456",

&#x20;       "vehicle\_engine\_number": "ABCD12H123456",

&#x20;       "maker\_description": "VEHICLES LTD",

&#x20;       "maker\_model": "EICHER PRO BSIV",

&#x20;       "body\_type": "SALOON",

&#x20;       "fuel\_type": "DIESEL",

&#x20;       "color": "WHITE",

&#x20;       "norms\_type": "BHARAT STAGE IV",

&#x20;       "fit\_up\_to": "2099-09-00",

&#x20;       "financer": "FINANCE LTD",

&#x20;       "financed": true,

&#x20;       "insurance\_company": "Assurance Company Limited",

&#x20;       "insurance\_policy\_number": "0000023123456789",

&#x20;       "insurance\_upto": "2099-00-04",

&#x20;       "manufacturing\_date": "8/1947",

&#x20;       "manufacturing\_date\_formatted": "1947-08",

&#x20;       "registered\_at": "RTO",

&#x20;       "latest\_by": "1497-00-27",

&#x20;       "less\_info": true,

&#x20;       "tax\_upto": null,

&#x20;       "tax\_paid\_upto": "1857-11-30",

&#x20;       "cubic\_capacity": "3298",

&#x20;       "vehicle\_gross\_weight": "9850",

&#x20;       "no\_cylinders": "4",

&#x20;       "seat\_capacity": "50",

&#x20;       "sleeper\_capacity": null,

&#x20;       "standing\_capacity": null,

&#x20;       "wheelbase": "5260",

&#x20;       "unladen\_weight": "6110",

&#x20;       "vehicle\_category\_description": "Bus",

&#x20;       "pucc\_number": "",

&#x20;       "pucc\_upto": null,

&#x20;       "permit\_number": "123/AB/45/64",

&#x20;       "permit\_issue\_date": null,

&#x20;       "permit\_valid\_from": null,

&#x20;       "permit\_valid\_upto": "2080-11-06",

&#x20;       "permit\_type": "TEMPORARY PERMIT",

&#x20;       "national\_permit\_number": null,

&#x20;       "national\_permit\_upto": null,

&#x20;       "national\_permit\_issued\_by": null,

&#x20;       "non\_use\_status": null,

&#x20;       "non\_use\_from": null,

&#x20;       "non\_use\_to": null,

&#x20;       "blacklist\_status": null,

&#x20;       "noc\_details": null,

&#x20;       "owner\_number": "1",

&#x20;       "rc\_status": null,

&#x20;       "masked\_name": false,

&#x20;       "challan\_details": null,

&#x20;       "variant": null

&#x20;   },

&#x20;   "status\_code": 200,

&#x20;   "success": true,

&#x20;   "message": null,

&#x20;   "message\_code": "success"

}



#### **2. POST /api/v1/rc/rc-related/challan-details**

##### **Response Example**



***const myHeaders = new Headers();***

***myHeaders.append("Authorization", "Bearer <token>");***

***myHeaders.append("Content-Type", "application/json");***



***const raw = JSON.stringify({***

&#x20;  ***"rc\_number": "HR55AP0244",***

&#x20;  ***"chassis\_number": "MA3JMTB1SPB851591",***

&#x20;  ***"engine\_number": "K10CNC265773",***

&#x20;  ***"state\_only": false,***

&#x20;  ***"state\_portal": \[***

&#x20;     ***"DL",***

&#x20;     ***"TS",***

&#x20;     ***"KA",***

&#x20;     ***"GJ"***

&#x20;  ***]***

***});***



##### **Request Example**



*const requestOptions = {*

&#x20;  *method: "POST",*

&#x20;  *headers: myHeaders,*

&#x20;  *body: raw,*

&#x20;  *redirect: "follow"*

*};*



*fetch("https://kyc-api.surepass.app/api/v1/rc/rc-related/challan-details", requestOptions)*

&#x20;  *.then((response) => response.text())*

&#x20;  *.then((result) => console.log(result))*

&#x20;  *.catch((error) => console.error(error));*



{

&#x20;   "data": {

&#x20;       "client\_id": "rc\_related\_UgaxohwEraUGgovAugEF",

&#x20;       "challan\_details": {

&#x20;           "challans": \[

&#x20;               {

&#x20;                   "number": 1,

&#x20;                   "challan\_number": "DL112345678978",

&#x20;                   "offense\_details": "Disobeying Lawful Directions",

&#x20;                   "challan\_place": null,

&#x20;                   "challan\_date": "2024-01-25",

&#x20;                   "state": "DL",

&#x20;                   "rto": null,

&#x20;                   "upstream\_code": "CENTRAL",

&#x20;                   "accused\_name": "MUNNA BHAIYA",

&#x20;                   "amount": 19500,

&#x20;                   "challan\_status": "Pending",

&#x20;                   "court\_challan": true

&#x20;               },

&#x20;               {

&#x20;                   "number": 2,

&#x20;                   "challan\_number": "DL12345698789",

&#x20;                   "offense\_details": "Allowing Unauthorised Person To Drive",

&#x20;                   "challan\_place": null,

&#x20;                   "challan\_date": "2023-11-25",

&#x20;                   "state": "DL",

&#x20;                   "rto": null,

&#x20;                   "upstream\_code": "CENTRAL",

&#x20;                   "accused\_name": "KALEEN BHAIYA",

&#x20;                   "amount": 15000,

&#x20;                   "challan\_status": "Pending",

&#x20;                   "court\_challan": true

&#x20;               },

&#x20;               {

&#x20;                   "number": 1,

&#x20;                   "challan\_number": "12345678",

&#x20;                   "offense\_details": "OVER SPEED (Light Motor Vehicle)",

&#x20;                   "challan\_place": "MIRZAPUR",

&#x20;                   "challan\_date": "2023-11-26",

&#x20;                   "state": "DL",

&#x20;                   "rto": null,

&#x20;                   "upstream\_code": "DL1",

&#x20;                   "accused\_name": "GUDDU BHAIYA",

&#x20;                   "amount": 2000,

&#x20;                   "challan\_status": null,

&#x20;                   "court\_challan": null

&#x20;               },

&#x20;               {

&#x20;                   "number": 2,

&#x20;                   "challan\_number": "123456",

&#x20;                   "offense\_details": "Violating stop line",

&#x20;                   "challan\_place": "LODHI ROAD",

&#x20;                   "challan\_date": "2022-08-03",

&#x20;                   "state": "DL",

&#x20;                   "rto": null,

&#x20;                   "upstream\_code": "DL1",

&#x20;                   "accused\_name": "RATI SHANKAR SHUKLA",

&#x20;                   "amount": 500,

&#x20;                   "challan\_status": null,

&#x20;                   "court\_challan": null

&#x20;               }

&#x20;           ],

&#x20;           "blacklist": \[]

&#x20;       }

&#x20;   },

&#x20;   "status\_code": 200,

&#x20;   "success": true,

&#x20;   "message": null,

&#x20;   "message\_code": "success"

}



#### **3. POST /api/v1/rc/rc-related/challan-advanced**



##### **Request Example**



const myHeaders = new Headers();

myHeaders.append("Authorization", "Bearer <token>");

myHeaders.append("Content-Type", "application/json");



const raw = JSON.stringify({

&#x20;  "rc\_number": "HR55AP0244"

});



const requestOptions = {

&#x20;  method: "POST",

&#x20;  headers: myHeaders,

&#x20;  body: raw,

&#x20;  redirect: "follow"

};



fetch("https://kyc-api.surepass.app/api/v1/rc/rc-related/challan-advanced", requestOptions)

&#x20;  .then((response) => response.text())

&#x20;  .then((result) => console.log(result))

&#x20;  .catch((error) => console.error(error));



##### **Example Successful Response#**



{

&#x20; "data": {

&#x20;   "client\_id": "CLIENT\_IN\_789456123",

&#x20;   "rc\_number": "MH12DE3456",

&#x20;   "challan\_details": \[

&#x20;     {

&#x20;       "number": 1,

&#x20;       "challan\_number": "MH/TRF/2024/045678",

&#x20;       "offense\_details": "Over speeding - Exceeding speed limit by 25 kmph in 60 kmph zone",

&#x20;       "challan\_place": "Western Express Highway, Andheri East, Mumbai",

&#x20;       "offense\_details\_list": \[

&#x20;         {

&#x20;           "offense\_name": "Over Speeding"

&#x20;         }

&#x20;       ],

&#x20;       "challan\_date": "2024-03-15",

&#x20;       "challan\_date\_time": "2024-03-15T14:30:45",

&#x20;       "state": "MH",

&#x20;       "rto": "Pune West (MH-12)",

&#x20;       "accused\_name": "Rajesh Kumar Sharma",

&#x20;       "amount": "3000",

&#x20;       "challan\_status": "Pending",

&#x20;       "court\_challan": false,

&#x20;       "court\_name": null,

&#x20;       "upstream\_code": "MHTRP\_2024\_3456789"

&#x20;     },

&#x20;   ]

&#x20; },

&#x20; "status\_code": 200,

&#x20; "success": true,

&#x20; "message": null,

&#x20; "message\_code": "success"

}



#### **4. /api/v1/rc/rc-related/challan-advanced**

##### **Request Example**



const myHeaders = new Headers();

myHeaders.append("Authorization", "Bearer <token>");

myHeaders.append("Content-Type", "application/json");



const raw = JSON.stringify({

&#x20;  "rc\_number": "HR55AP0244"

});



const requestOptions = {

&#x20;  method: "POST",

&#x20;  headers: myHeaders,

&#x20;  body: raw,

&#x20;  redirect: "follow"

};



fetch("https://kyc-api.surepass.app/api/v1/rc/rc-related/challan-advanced", requestOptions)

&#x20;  .then((response) => response.text())

&#x20;  .then((result) => console.log(result))

&#x20;  .catch((error) => console.error(error));



##### **Response Example**



{

&#x20;   "data": {

&#x20;       "client\_id": "rc\_challan\_advanced\_fZjEyLJOVdtgBWbWBgTA",

&#x20;       "rc\_number": "HR55AP0244",

&#x20;       "challan\_details": \[

&#x20;           {

&#x20;               "number": 1,

&#x20;               "challan\_number": "MH114168240703225216",

&#x20;               "offense\_details": "Reflectors not fitted",

&#x20;               "challan\_place": "",

&#x20;               "offense\_details\_list": \[

&#x20;                   {

&#x20;                       "offense\_name": "Reflectors not fitted"

&#x20;                   }

&#x20;               ],

&#x20;               "challan\_date": "2024-07-03",

&#x20;               "challan\_date\_time": "2024-07-03T22:52:16",

&#x20;               "state": "MH",

&#x20;               "rto": "",

&#x20;               "accused\_name": "M\*\*\*J",

&#x20;               "amount": "1000",

&#x20;               "challan\_status": "Disposed",

&#x20;               "court\_challan": false,

&#x20;               "court\_name": "",

&#x20;               "upstream\_code": "CENTRAL\_3"

&#x20;           },

&#x20;           {

&#x20;               "number": 2,

&#x20;               "challan\_number": "DL18830230525181743",

&#x20;               "offense\_details": "Improper or Obstructive Parking",

&#x20;               "challan\_place": "SHANKAR MARKEET",

&#x20;               "offense\_details\_list": \[

&#x20;                   {

&#x20;                       "offense\_name": "Improper or Obstructive Parking"

&#x20;                   },

&#x20;                   {

&#x20;                       "offense\_name": "Disobeying Lawful Directions"

&#x20;                   },

&#x20;                   {

&#x20;                       "offense\_name": "Permit Violation"

&#x20;                   },

&#x20;                   {

&#x20;                       "offense\_name": "Driving Without Licence"

&#x20;                   },

&#x20;                   {

&#x20;                       "offense\_name": "Misbehavior with Police Officer"

&#x20;                   }

&#x20;               ],

&#x20;               "challan\_date": "2023-05-25",

&#x20;               "challan\_date\_time": "2023-05-25T18:17:43",

&#x20;               "state": "DL",

&#x20;               "rto": "",

&#x20;               "accused\_name": "Y\*\*\*F",

&#x20;               "amount": "2000",

&#x20;               "challan\_status": "Disposed",

&#x20;               "court\_challan": true,

&#x20;               "court\_name": "MS PADMA LANDOL, MM-04",

&#x20;               "upstream\_code": "CENTRAL\_3"

&#x20;           },

&#x20;           {

&#x20;               "number": 3,

&#x20;               "challan\_number": "DL18830230525182918",

&#x20;               "offense\_details": "Permit Violation",

&#x20;               "challan\_place": "SHANKAR MARKEET",

&#x20;               "offense\_details\_list": \[

&#x20;                   {

&#x20;                       "offense\_name": "Permit Violation"

&#x20;                   },

&#x20;                   {

&#x20;                       "offense\_name": "Allowing Unauthorised Person To Drive"

&#x20;                   }

&#x20;               ],

&#x20;               "challan\_date": "2023-05-25",

&#x20;               "challan\_date\_time": "2023-05-25T18:17:43",

&#x20;               "state": "DL",

&#x20;               "rto": "",

&#x20;               "accused\_name": "E\*T R\*\*T A C\*R P\*\*\*\*\*E L\*\*\*\*\*D",

&#x20;               "amount": "15000.00",

&#x20;               "challan\_status": "Disposed",

&#x20;               "court\_challan": true,

&#x20;               "court\_name": "MS PADMA LANDOL, MM-04",

&#x20;               "upstream\_code": "CENTRAL\_3"

&#x20;           },

&#x20;           {

&#x20;               "number": 4,

&#x20;               "challan\_number": "DL6683250326083652",

&#x20;               "offense\_details": "NO PARKING/ IMPROPER PARKING",

&#x20;               "challan\_place": "KASHMERE GATE",

&#x20;               "offense\_details\_list": \[

&#x20;                   {

&#x20;                       "offense\_name": "NO PARKING/ IMPROPER PARKING"

&#x20;                   }

&#x20;               ],

&#x20;               "challan\_date": "2025-03-26",

&#x20;               "challan\_date\_time": "2025-03-26T08:36:52",

&#x20;               "state": "DL",

&#x20;               "rto": "TRANSPORT DEPARTMENT",

&#x20;               "accused\_name": "E\*T R\*\*T A C\*R P\*\*\*\*\*E L\*\*\*\*\*D",

&#x20;               "amount": "1500",

&#x20;               "challan\_status": "Pending",

&#x20;               "court\_challan": true,

&#x20;               "court\_name": "MS. GOWRI REGHUNATH  JMFC",

&#x20;               "upstream\_code": "CENTRAL\_3"

&#x20;           },

&#x20;           {

&#x20;               "number": 5,

&#x20;               "challan\_number": "DL60154250303135607",

&#x20;               "offense\_details": "Advertisements on Vehicle",

&#x20;               "challan\_place": "CENTUR HOTEL RED LIGHT",

&#x20;               "offense\_details\_list": \[

&#x20;                   {

&#x20;                       "offense\_name": "Advertisements on Vehicle"

&#x20;                   }

&#x20;               ],

&#x20;               "challan\_date": "2025-03-03",

&#x20;               "challan\_date\_time": "2025-03-03T13:56:07",

&#x20;               "state": "DL",

&#x20;               "rto": "South",

&#x20;               "accused\_name": "K\*\*\*\*\*A  K\*\*\*R",

&#x20;               "amount": "1500",

&#x20;               "challan\_status": "Pending",

&#x20;               "court\_challan": true,

&#x20;               "court\_name": "SH. MAYANK SINGHAL ,  MM-02 - IGI",

&#x20;               "upstream\_code": "CENTRAL\_3"

&#x20;           },

&#x20;           {

&#x20;               "number": 6,

&#x20;               "challan\_number": "DL6722241121105830",

&#x20;               "offense\_details": "NO PARKING/ IMPROPER PARKING",

&#x20;               "challan\_place": "ISBT KASHMIRI GATE AREA",

&#x20;               "offense\_details\_list": \[

&#x20;                   {

&#x20;                       "offense\_name": "NO PARKING/ IMPROPER PARKING"

&#x20;                   }

&#x20;               ],

&#x20;               "challan\_date": "2024-11-21",

&#x20;               "challan\_date\_time": "2024-11-21T10:58:30",

&#x20;               "state": "DL",

&#x20;               "rto": "TRANSPORT DEPARTMENT",

&#x20;               "accused\_name": "E\*T R\*\*T A C\*R P\*\*\*\*\*E L\*\*\*\*\*D",

&#x20;               "amount": "500",

&#x20;               "challan\_status": "Pending",

&#x20;               "court\_challan": true,

&#x20;               "court\_name": "MS. GOWRI REGHUNATH  JMFC",

&#x20;               "upstream\_code": "CENTRAL\_3"

&#x20;           },

&#x20;           {

&#x20;               "number": 7,

&#x20;               "challan\_number": "DL19788241111134111",

&#x20;               "offense\_details": "Advertisements on Vehicle",

&#x20;               "challan\_place": "PULLMEN",

&#x20;               "offense\_details\_list": \[

&#x20;                   {

&#x20;                       "offense\_name": "Advertisements on Vehicle"

&#x20;                   }

&#x20;               ],

&#x20;               "challan\_date": "2024-11-11",

&#x20;               "challan\_date\_time": "2024-11-11T13:41:11",

&#x20;               "state": "DL",

&#x20;               "rto": "Outer",

&#x20;               "accused\_name": "K\*\*\*\*\*A  K\*\*\*R",

&#x20;               "amount": "1500",

&#x20;               "challan\_status": "Pending",

&#x20;               "court\_challan": true,

&#x20;               "court\_name": "SH. MAYANK SINGHAL ,  MM-02 - IGI",

&#x20;               "upstream\_code": "CENTRAL\_3"

&#x20;           },

&#x20;           {

&#x20;               "number": 8,

&#x20;               "challan\_number": "DL5206498240904035905",

&#x20;               "offense\_details": "WITHOUT VALID POLLUTION CERTIFICATE",

&#x20;               "challan\_place": "MODEL TOWN",

&#x20;               "offense\_details\_list": \[

&#x20;                   {

&#x20;                       "offense\_name": "WITHOUT VALID POLLUTION CERTIFICATE"

&#x20;                   }

&#x20;               ],

&#x20;               "challan\_date": "2024-08-07",

&#x20;               "challan\_date\_time": "2024-08-07T09:43:00",

&#x20;               "state": "DL",

&#x20;               "rto": "TRANSPORT DEPARTMENT",

&#x20;               "accused\_name": "E\*T R\*\*T A C\*R P\*\*\*\*\*E L\*\*\*\*\*D",

&#x20;               "amount": "10000",

&#x20;               "challan\_status": "Pending",

&#x20;               "court\_challan": true,

&#x20;               "court\_name": "MS. SHRADDHA SRIVASTAVA  JMFC",

&#x20;               "upstream\_code": "CENTRAL\_3"

&#x20;           },

&#x20;           {

&#x20;               "number": 9,

&#x20;               "challan\_number": "DL18210240402183010",

&#x20;               "offense\_details": "Violation of Mandatory Signs(One Way,No Right Turn)",

&#x20;               "challan\_place": "NSG RED LIGHT",

&#x20;               "offense\_details\_list": \[

&#x20;                   {

&#x20;                       "offense\_name": "Violation of Mandatory Signs(One Way,No Right Turn)"

&#x20;                   }

&#x20;               ],

&#x20;               "challan\_date": "2024-04-02",

&#x20;               "challan\_date\_time": "2024-04-02T18:30:10",

&#x20;               "state": "DL",

&#x20;               "rto": "South",

&#x20;               "accused\_name": "D\*\*\*\*\*\*\*U  J\*\*N",

&#x20;               "amount": "500",

&#x20;               "challan\_status": "Pending",

&#x20;               "court\_challan": true,

&#x20;               "court\_name": "Sh. MAYANK SINGHAL , MM-4",

&#x20;               "upstream\_code": "CENTRAL\_3"

&#x20;           },

&#x20;           {

&#x20;               "number": 10,

&#x20;               "challan\_number": "DL214966240330180106",

&#x20;               "offense\_details": "Advertisements on Vehicle",

&#x20;               "challan\_place": "AFRICA AVANU",

&#x20;               "offense\_details\_list": \[

&#x20;                   {

&#x20;                       "offense\_name": "Advertisements on Vehicle"

&#x20;                   }

&#x20;               ],

&#x20;               "challan\_date": "2024-03-30",

&#x20;               "challan\_date\_time": "2024-03-30T18:01:06",

&#x20;               "state": "DL",

&#x20;               "rto": "South West",

&#x20;               "accused\_name": "D\*\*\*\*\*\*\*U  J\*\*N",

&#x20;               "amount": "500",

&#x20;               "challan\_status": "Pending",

&#x20;               "court\_challan": true,

&#x20;               "court\_name": "Mr. Divyam Lila LD. ,MM-04",

&#x20;               "upstream\_code": "CENTRAL\_3"

&#x20;           },

&#x20;           {

&#x20;               "number": 11,

&#x20;               "challan\_number": "HR46416240304014396",

&#x20;               "offense\_details": "35. Violation of road marking",

&#x20;               "challan\_place": "Iffco\_Chowk\_Metro,From\_Hudda\_Metro\_Lane2",

&#x20;               "offense\_details\_list": \[

&#x20;                   {

&#x20;                       "offense\_name": "35. Violation of road marking"

&#x20;                   }

&#x20;               ],

&#x20;               "challan\_date": "2024-02-19",

&#x20;               "challan\_date\_time": "2024-02-19T17:19:42",

&#x20;               "state": "HR",

&#x20;               "rto": "Gurgaon",

&#x20;               "accused\_name": "E\*T R\*\*T A C\*R P\*\*\*\*\*E L\*\*\*\*\*D",

&#x20;               "amount": "500",

&#x20;               "challan\_status": "Pending",

&#x20;               "court\_challan": true,

&#x20;               "court\_name": "sec53 ps area",

&#x20;               "upstream\_code": "CENTRAL\_3"

&#x20;           }

&#x20;       ]

&#x20;   },

&#x20;   "status\_code": 200,

&#x20;   "success": true,

&#x20;   "message": null,

&#x20;   "message\_code": "success"

}



#### **5. POST /api/v1/fastag/verification**



##### **Request Example**

**const myHeaders = new Headers();**

**myHeaders.append("Authorization", "Bearer <token>");**

**myHeaders.append("Content-Type", "application/json");**



**const raw = JSON.stringify({**

&#x20;  **"rc\_number": "GJ05CN4635"**

**});**



**const requestOptions = {**

&#x20;  **method: "POST",**

&#x20;  **headers: myHeaders,**

&#x20;  **body: raw,**

&#x20;  **redirect: "follow"**

**};**



**fetch("https://kyc-api.surepass.app/api/v1/fastag/verification", requestOptions)**

&#x20;  **.then((response) => response.text())**

&#x20;  **.then((result) => console.log(result))**

&#x20;  **.catch((error) => console.error(error));**



##### **Response Example**

**{**

&#x20;   **"data": {**

&#x20;       **"client\_id": "fastag\_verification\_dRKBysWbCksWhLlUpdrx",**

&#x20;       **"rc\_number": "GJ05CN0000",**

&#x20;       **"bank\_name": "",**

&#x20;       **"tag\_id": "0000FA00008EE81FCA123",**

&#x20;       **"status": "Active"**

&#x20;   **},**

&#x20;   **"status\_code": 200,**

&#x20;   **"success": true,**

&#x20;   **"message": "Success",**

&#x20;   **"message\_code": "success"**

**}**



#### **6. /api/v1/fastag/fastag-verification-v2**

##### **Request Example**

const myHeaders = new Headers();

myHeaders.append("Authorization", "Bearer <token>");

myHeaders.append("Content-Type", "application/json");



const raw = JSON.stringify({

&#x20;  "rc\_number": "CG07BC1234"

});



const requestOptions = {

&#x20;  method: "POST",

&#x20;  headers: myHeaders,

&#x20;  body: raw,

&#x20;  redirect: "follow"

};



fetch("https://kyc-api.surepass.app/api/v1/fastag/fastag-verification-v2", requestOptions)

&#x20;  .then((response) => response.text())

&#x20;  .then((result) => console.log(result))

&#x20;  .catch((error) => console.error(error));

##### **Response Example**

{

&#x20;   "data": {

&#x20;       "client\_id": "fastag\_verification\_v2\_rztQxpTMfyoaKoybGskj",

&#x20;       "rc\_number": "CG07BC1234",

&#x20;       "bank\_name": "",

&#x20;       "tag\_id": "34161FA812348EE1234BCFE0",

&#x20;       "transactions": \[

&#x20;           {

&#x20;               "lane\_direction": "S",

&#x20;               "transaction\_date\_time": "2024-07-16T19:00:16",

&#x20;               "seq\_no": "0010012407161901268650",

&#x20;               "toll\_plaza\_geocode": "22.34462627,87.12665241",

&#x20;               "toll\_plaza\_name": "Balibhasa Toll Plaza",

&#x20;               "vehicle\_type": "VC13"

&#x20;           },

&#x20;           {

&#x20;               "lane\_direction": "S",

&#x20;               "transaction\_date\_time": "2024-07-16T21:07:11",

&#x20;               "seq\_no": "0010032407162107431473",

&#x20;               "toll\_plaza\_geocode": "22.180518, 86.636253",

&#x20;               "toll\_plaza\_name": "Jharpokharia Toll Plaza",

&#x20;               "vehicle\_type": "VC13"

&#x20;           },

&#x20;           {

&#x20;               "lane\_direction": "S",

&#x20;               "transaction\_date\_time": "2024-07-17T06:46:41",

&#x20;               "seq\_no": "172117923267624502481",

&#x20;               "toll\_plaza\_geocode": "21.705647,85.697266",

&#x20;               "toll\_plaza\_name": "Khireitangiri Toll Plaza",

&#x20;               "vehicle\_type": "VC13"

&#x20;           },

&#x20;           {

&#x20;               "lane\_direction": "S",

&#x20;               "transaction\_date\_time": "2024-07-17T23:21:31",

&#x20;               "seq\_no": "172123887618924709963",

&#x20;               "toll\_plaza\_geocode": "21.705647,85.697266",

&#x20;               "toll\_plaza\_name": "Khireitangiri Toll Plaza",

&#x20;               "vehicle\_type": "VC13"

&#x20;           }

&#x20;       ],

&#x20;       "status": "Active"

&#x20;   },

&#x20;   "status\_code": 200,

&#x20;   "success": true,

&#x20;   "message": "Success",

&#x20;   "message\_code": "success"

}





#### **7. /api/v1/fastag/rc-to-fastag-balance**

##### **Request Example**

const myHeaders = new Headers();

myHeaders.append("Authorization", "Bearer <token>");

myHeaders.append("Content-Type", "application/json");



const raw = JSON.stringify({

&#x20;  "rc\_number": "MH12VV1999",

&#x20;  "provider\_name": "idfc\_first\_bank"

});



const requestOptions = {

&#x20;  method: "POST",

&#x20;  headers: myHeaders,

&#x20;  body: raw,

&#x20;  redirect: "follow"

};



fetch("https://kyc-api.surepass.app/api/v1/fastag/rc-to-fastag-balance", requestOptions)

&#x20;  .then((response) => response.text())

&#x20;  .then((result) => console.log(result))

&#x20;  .catch((error) => console.error(error));

##### **Response Example**

{

&#x20;   "data": {

&#x20;       "client\_id": "rc\_to\_fastag\_balance\_fChZGKuhyAUEMoTVKrFB",

&#x20;       "rc\_number": "MH12VV1234",

&#x20;       "provider\_name": "idfc\_first\_bank",

&#x20;       "provider\_code": "IDFC88000PATXM",

&#x20;       "customer\_name": "SURAJ SHRIRAM KALE",

&#x20;       "available\_recharge\_limit": "9491",

&#x20;       "available\_balance": "509",

&#x20;       "tag\_status": "Activated",

&#x20;       "vehicle\_class": "4",

&#x20;       "vehicle\_class\_desc": "Car / Jeep / Van",

&#x20;       "model\_name": null

&#x20;   },

&#x20;   "status\_code": 200,

&#x20;   "success": true,

&#x20;   "message": "Success",

&#x20;   "message\_code": "success"

}





#### **8./api/v1/rc/rc-v2**

##### **Request Example**

const myHeaders = new Headers();

myHeaders.append("Authorization", "Bearer <token>");

myHeaders.append("Content-Type", "application/json");



const raw = JSON.stringify({

&#x20;  "id\_number": "DL08AB1234",

&#x20;  "enrich": false

});



const requestOptions = {

&#x20;  method: "POST",

&#x20;  headers: myHeaders,

&#x20;  body: raw,

&#x20;  redirect: "follow"

};



fetch("https://kyc-api.surepass.app/api/v1/rc/rc-v2", requestOptions)

&#x20;  .then((response) => response.text())

&#x20;  .then((result) => console.log(result))

&#x20;  .catch((error) => console.error(error));



##### **Response Example**

{

&#x20;   "data": {

&#x20;       "client\_id": "rc\_v2\_tzomotgoEEkXGfksyLav",

&#x20;       "rc\_number": "DL08AB1234",

&#x20;       "fit\_up\_to": "2032-12-15",

&#x20;       "registration\_date": "2018-01-20",

&#x20;       "owner\_name": "R\*\*\*N K\*\*\*\*R",

&#x20;       "father\_name": "",

&#x20;       "present\_address": "New Delhi, 110034",

&#x20;       "permanent\_address": "New Delhi, 110034",

&#x20;       "mobile\_number": "",

&#x20;       "vehicle\_category": "2WN",

&#x20;       "vehicle\_chasi\_number": "ME3XYZAB1JK456789",

&#x20;       "vehicle\_engine\_number": "XYZAB1JK0\*\*\*\*\*",

&#x20;       "maker\_description": "HONDA MOTORCYCLE \& SCOOTER INDIA PVT LTD",

&#x20;       "maker\_model": "ACTIVA 5G",

&#x20;       "body\_type": "SCOOTER",

&#x20;       "fuel\_type": "PETROL",

&#x20;       "color": "BLACK",

&#x20;       "norms\_type": "BS4",

&#x20;       "financer": "",

&#x20;       "financed": false,

&#x20;       "insurance\_company": "ICICI Lombard General Insurance Co. Ltd.",

&#x20;       "insurance\_policy\_number": "IC1234567890",

&#x20;       "insurance\_upto": "2025-12-20",

&#x20;       "manufacturing\_date": "12/2017",

&#x20;       "manufacturing\_date\_formatted": "2017-12",

&#x20;       "registered\_at": "DELHI, Delhi",

&#x20;       "latest\_by": "2025-08-29",

&#x20;       "less\_info": true,

&#x20;       "tax\_upto": "2032-12-15",

&#x20;       "tax\_paid\_upto": "2032-12-15",

&#x20;       "cubic\_capacity": "109.19",

&#x20;       "vehicle\_gross\_weight": "0",

&#x20;       "no\_cylinders": "1",

&#x20;       "seat\_capacity": "2",

&#x20;       "sleeper\_capacity": null,

&#x20;       "standing\_capacity": null,

&#x20;       "wheelbase": null,

&#x20;       "unladen\_weight": "109",

&#x20;       "vehicle\_category\_description": "Scooter(2WN)",

&#x20;       "pucc\_number": "DL009876543210",

&#x20;       "pucc\_upto": "2025-11-25",

&#x20;       "permit\_number": "",

&#x20;       "permit\_issue\_date": null,

&#x20;       "permit\_valid\_from": null,

&#x20;       "permit\_valid\_upto": null,

&#x20;       "permit\_type": "",

&#x20;       "national\_permit\_number": "",

&#x20;       "national\_permit\_upto": null,

&#x20;       "national\_permit\_issued\_by": null,

&#x20;       "non\_use\_status": null,

&#x20;       "non\_use\_from": null,

&#x20;       "non\_use\_to": null,

&#x20;       "blacklist\_status": "",

&#x20;       "noc\_details": "",

&#x20;       "owner\_number": "1",

&#x20;       "rc\_status": null,

&#x20;       "rto\_code": null,

&#x20;       "response\_metadata": {

&#x20;           "masked\_chassis": true,

&#x20;           "masked\_engine": true,

&#x20;           "masked\_owner\_name": true

&#x20;       }

&#x20;   },

&#x20;   "status\_code": 200,

&#x20;   "success": true,

&#x20;   "message": null,

&#x20;   "message\_code": "success"

}









