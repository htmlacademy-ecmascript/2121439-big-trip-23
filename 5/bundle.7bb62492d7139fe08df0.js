(()=>{"use strict";const e="afterbegin";function t(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}function i(e,t,i="beforeend"){t.insertAdjacentElement(i,e.getElement())}const a=[{value:"Day",isChecked:!0},{value:"Event",isDisabled:!0},{value:"Time",isChecked:!1},{value:"Price",isChecked:!1},{value:"Offers",isDisabled:!0}],s="form-add",n=["Everything","Future","Present","Past"],d=6e4;class o{getTemplate(){return'\n    <section class="trip-main__trip-info trip-info">\n      <div class="trip-info__main">\n        <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n        <p class="trip-info__dates">18&nbsp;&mdash;&nbsp;20 Mar</p>\n      </div>\n      <p class="trip-info__cost">\n        Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n      </p>\n    </section>\n  '}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class c{getTemplate(){return`<form class="trip-filters" action="#" method="get">\n            ${n.map((e=>`<div class="trip-filters__filter">\n              <input id="filter-${e.toLocaleLowerCase()}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${e.toLocaleLowerCase()}">\n              <label class="trip-filters__filter-label" for="filter-${e.toLocaleLowerCase()}">${e}</label>\n            </div>\n            `)).join("")}\n            <button class="visually-hidden" type="submit">Accept filter</button>\n          </form>`}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class r{getTemplate(){return`\n    <form class="trip-events__trip-sort trip-sort" action="#" method="get">\n      ${a.map((e=>`<div class="trip-sort__item  trip-sort__item--${e.value.toLocaleLowerCase()}">\n                <input id="sort-${e.value.toLocaleLowerCase()}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" item.value="sort-${e.value.toLocaleLowerCase()}"\n                ${e.isChecked?"checked":""}\n                ${e.isDisabled?"disabled":""}>\n                <label class="trip-sort__btn" for="sort-${e.value.toLocaleLowerCase()}">${e.value}</label>\n            </div>`)).join("")}\n    </form>\n`}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class l{getTemplate(){return'<ul class="trip-events__list"></ul>'}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class f{constructor(e){this.contentElement=e}getTemplate(){return`<li class="trip-events__item">\n          ${this.contentElement}\n    </li>`}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class p{constructor(e,t){this.points=e,this.pointOffers=t}getTemplate(){return e=this.points,t=this.pointOffers,e.map((e=>{const{dateFrom:i,dateTo:a,type:s,basePrice:n,offers:o,isFavorite:c}=e,{pointDateEndTime:r,pointDateFromTime:l,startTime:f,endTime:p,pointDateTime:b,pointDateStartTime:m,timeCalculation:h}=((e,t)=>{const i=new Date(e),a=new Date(t),s=i.getFullYear(),n=i.getDate(),o=i.getMonth()+1,c=i.toLocaleString("EN-en",{month:"long"}).substring(0,3).toUpperCase(),r=Math.abs(i-a);let l="";const f=`${c} ${n} `,p=`${s}-${o}-${n}`,b=`${i.toISOString().slice(0,16).split("-").join("-")}`,m=`${a.toISOString().slice(0,16).split("-").join("-")}`,h=`${i.toISOString().slice(11,-8).split("-").join("-")}`,v=`${a.toISOString().slice(11,-8).split("-").join("-")}`;return l=Math.floor(r/d)>=60?`${Math.floor(r/d/60)}H`:`${Math.floor(r/d)}M`,{pointDateFromTime:f,pointDateTime:p,pointDateStartTime:b,pointDateEndTime:m,startTime:h,endTime:v,timeCalculation:l}})(i,a);return`<div class="event">\n        <time class="event__date" datetime="${b}">${l}</time>\n        <div class="event__type">\n          <img class="event__type-icon" width="42" height="42" src="img/icons/${s.toLowerCase()}.png" alt="Event type icon">\n        </div>\n        <h3 class="event__title">${s} Amsterdam</h3>\n        <div class="event__schedule">\n          <p class="event__time">\n            <time class="event__start-time" datetime="${m}">${f}</time>\n            &mdash;\n            <time class="event__end-time" datetime="${r}">${p}</time>\n          </p>\n          <p class="event__duration">${h}</p>\n        </div>\n        <p class="event__price">\n          &euro;&nbsp;<span class="event__price-value">${n}</span>\n        </p>\n        <h4 class="visually-hidden">Offers:</h4>\n        ${((e,t)=>`<ul class="event__selected-offers">\n  ${((e,t)=>{const i=[];return t.map((t=>{t.offers.map((t=>{var a;a=t,e.find((e=>{a.id===e&&i.push(a)}))}))})),i.map((e=>`<li class="event__offer" >\n      <span class="event__offer-title">${e.title}</span>\n      &plus;&euro;&nbsp;\n      <span class="event__offer-price">${e.price}</span>\n    </li>`)).join("")})(e,t)}\n</ul>`)(o,t)}\n\n        <button class="${(e=>"event__favorite-btn "+(e?"event__favorite-btn--active":""))(c)}" type="button">\n          <span class="visually-hidden">Add to favorite</span>\n          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n          </svg>\n        </button>\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </div>`})).join("");var e,t}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class b{constructor(e,t,i){this.formTypeSelect=e,this.pointDestinations=[...t],this.pointOffers=[...i]}getTemplate(){return((e,t,i)=>`\n        <form class="event event--edit" action="#" method="post">\n        ${((e,t)=>`<header class="event__header">\n  ${((e="img/icons/flight.png",t)=>`<div class="event__type-wrapper">\n  <label class="event__type  event__type-btn" for="event-type-toggle-1">\n  <span class="visually-hidden">Choose event type</span>\n  <img class="event__type-icon" width="17" height="17" src="${e}" alt="Event type icon">\n</label>\n<input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">${(e=>`<div class="event__type-list">\n  <fieldset class="event__type-group">\n    <legend class="visually-hidden">Event type</legend>\n    ${(e=>e.map((e=>`<div class="event__type-item">\n    <input id="event-type-${e.type.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${e.type.toLowerCase()}">\n    <label class="event__type-label  event__type-label--${e.type.toLowerCase()}" for="event-type-${e.type.toLowerCase()}-1">${e.type}</label>\n  </div>`)))(e).join("")}\n  </fieldset>\n</div>`)(t)}</div>`)("img/icons/flight.png",t)}\n  <div class="event__field-group  event__field-group--destination">\n  <label class="event__label  event__type-output" for="event-destination-1">\n    Flight\n  </label>\n  <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Chamonix" list="destination-list-1">\n  <datalist id="destination-list-1">\n    <option value="Amsterdam"></option>\n    <option value="Geneva"></option>\n    <option value="Chamonix"></option>\n  </datalist>\n</div>\n  <div class="event__field-group  event__field-group--time">\n  <label class="visually-hidden" for="event-start-time-1">From</label>\n  <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/03/19 12:25">\n  —\n  <label class="visually-hidden" for="event-end-time-1">To</label>\n  <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/03/19 13:35">\n</div>\n  <div class="event__field-group  event__field-group--price">\n  <label class="event__label" for="event-price-1">\n    <span class="visually-hidden">Price</span>\n    €\n  </label>\n  <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="160">\n</div>\n  \n  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n  ${(e=>`<button class="event__reset-btn" type="reset">${e===s?"Cancel":"Delete"}</button>`)(e)}\n  ${e===s?"":'<button class="event__rollup-btn" type="button">\n  <span class="visually-hidden">Open event</span>\n  </button>'}\n\n</header>`)(e,i)}\n        ${((e,t,i)=>`<section class="event__details">\n    ${(e=>`<section class="event__section  event__section--offers">\n            <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n              <div class="event__available-offers">\n                  ${(e=>e[4].offers.map((e=>` <div class="event__offer-selector">\n                <input class="event__offer-checkbox  visually-hidden" id="event-offer-${e.type}-1" type="checkbox" name="event-offer-${e.type}" ${e.isChecked?"checked":""}>\n                <label class="event__offer-label" for="event-offer-${e.type}-1">\n                  <span class="event__offer-title">${e.title}</span>\n                  +€&nbsp;\n                  <span class="event__offer-price">${e.price}</span>\n                </label>\n              </div>\n            `)))(e).join("")}\n              </div>\n          </section>`)(i)}\n    ${((e,t)=>{return`\n  <section class="event__section  event__section--destination">\n    <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n    <p class="event__destination-description">${t[1].description}</p>\n\n    ${e===s?(i=t[1],`<div class="event__photos-container">\n  <div class="event__photos-tape">\n\n    ${(a=i,a.pictures.map((e=>`<img class="event__photo" src="${e.src}" alt="Event photo">`))).join("")}\n  </div>\n</div>`):""}\n\n  </section>\n`;var i,a})(e,t)}\n  </section>`)(e,t,i)}\n        </form>\n`)(this.formTypeSelect,this.pointDestinations,this.pointOffers)}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}const m=document.querySelector(".page-header__container").querySelector(".trip-main"),h=m.querySelector(".trip-main__trip-controls"),v=document.querySelector(".trip-events"),u=[{id:"b1787d3a-2824-4666-ad29-e9fe1313326c",basePrice:562,dateFrom:"2024-06-18T01:28:07.364Z",dateTo:"2024-06-19T16:47:07.364Z",destination:"e1844f36-98ed-43d2-8663-0ea4c3dc9c90",isFavorite:!1,offers:["da88008a-b0f1-4dd9-8f5a-49c4a4ea7a39"],type:"ship"},{id:"cb9a5cdd-2b14-4183-aa5c-8714832af6d1",basePrice:8347,dateFrom:"2024-06-20T01:59:07.364Z",dateTo:"2024-06-20T13:16:07.364Z",destination:"e1844f36-98ed-43d2-8663-0ea4c3dc9c90",isFavorite:!0,offers:[],type:"bus"},{id:"9e4e5110-6532-495e-bd8f-b0686aa0c3a5",basePrice:4954,dateFrom:"2024-06-21T12:15:07.364Z",dateTo:"2024-06-22T06:37:07.364Z",destination:"938f2e20-aea8-43a9-9bd7-49333d78cc58",isFavorite:!0,offers:[],type:"flight"},{id:"1b44cc20-c617-43e9-8ea1-acbe32abeee6",basePrice:4425,dateFrom:"2024-06-23T13:21:07.364Z",dateTo:"2024-06-24T18:31:07.364Z",destination:"ee996048-2365-475d-9547-3ae95f553d80",isFavorite:!0,offers:["666c4bdc-5b92-472d-931e-1359008d7625"],type:"train"},{id:"08d3f2ba-63e4-4f5b-ab4c-82dea5602f28",basePrice:1023,dateFrom:"2024-06-25T02:08:07.364Z",dateTo:"2024-06-26T04:05:07.364Z",destination:"38f3ccb5-14dd-48ac-9d9b-8e47d51053c9",isFavorite:!1,offers:["f2448762-9c90-4d9d-9cce-4ad4531bacc6","666c4bdc-5b92-472d-931e-1359008d7625"],type:"train"},{id:"ef015eb4-fd1f-44bd-91b4-5ccf73f877d7",basePrice:7338,dateFrom:"2024-06-27T21:33:07.364Z",dateTo:"2024-06-29T11:51:07.364Z",destination:"38f3ccb5-14dd-48ac-9d9b-8e47d51053c9",isFavorite:!0,offers:["bb11b5a1-54c8-4cad-bff3-4e3e130daf24","3c342fea-9f7e-43f7-b707-e2f68945443e","7db912b8-a478-4677-b58e-6a04ebf4c3b4"],type:"flight"},{id:"c87de263-cd00-4e69-a7c0-f5286acbb81e",basePrice:2658,dateFrom:"2024-07-01T11:53:07.364Z",dateTo:"2024-07-03T02:13:07.364Z",destination:"570890ce-cb81-443c-9a43-78678678a433",isFavorite:!1,offers:[],type:"sightseeing"},{id:"43346a8a-6513-46c2-9c3d-cb095e23f0b7",basePrice:8345,dateFrom:"2024-07-04T12:15:07.364Z",dateTo:"2024-07-05T23:54:07.364Z",destination:"570890ce-cb81-443c-9a43-78678678a433",isFavorite:!0,offers:["cd0dfc92-1928-4feb-af70-1a44df73e49f","75237586-adb2-41f7-9562-5d0d780c8412"],type:"check-in"},{id:"e579e3ae-dbd3-415e-84f7-8d4517680cb8",basePrice:2243,dateFrom:"2024-07-07T14:45:07.364Z",dateTo:"2024-07-08T05:43:07.364Z",destination:"6f0d0a81-22bd-482b-949f-65db24a0a593",isFavorite:!0,offers:[],type:"sightseeing"},{id:"db727260-764d-4703-a4b2-1049dc29874f",basePrice:9140,dateFrom:"2024-07-10T00:11:07.364Z",dateTo:"2024-07-11T22:55:07.364Z",destination:"6ae9f746-9662-483b-aeee-036f3a06b92d",isFavorite:!0,offers:["b3f82299-bd1a-4477-83d1-1fcee825bbb0","da88008a-b0f1-4dd9-8f5a-49c4a4ea7a39"],type:"ship"},{id:"fdc93f6e-381b-4625-912a-026ecd230b5a",basePrice:6368,dateFrom:"2024-07-12T18:54:07.364Z",dateTo:"2024-07-14T14:08:07.364Z",destination:"ee996048-2365-475d-9547-3ae95f553d80",isFavorite:!1,offers:["cd0dfc92-1928-4feb-af70-1a44df73e49f","75237586-adb2-41f7-9562-5d0d780c8412"],type:"check-in"},{id:"1de25fcf-a3d6-4e3d-a044-d88229bdbd42",basePrice:4574,dateFrom:"2024-07-15T17:58:07.364Z",dateTo:"2024-07-16T11:21:07.364Z",destination:"938f2e20-aea8-43a9-9bd7-49333d78cc58",isFavorite:!1,offers:["3c342fea-9f7e-43f7-b707-e2f68945443e","7db912b8-a478-4677-b58e-6a04ebf4c3b4"],type:"flight"},{id:"1ac07a92-7f8e-4aea-bb23-757dc915b629",basePrice:9096,dateFrom:"2024-07-18T08:04:07.364Z",dateTo:"2024-07-20T08:37:07.364Z",destination:"938f2e20-aea8-43a9-9bd7-49333d78cc58",isFavorite:!1,offers:["98aed58a-b092-4cbd-b6b7-f91e9f8a3221","ac939d9e-5cd1-4a3b-b8ac-727d1c4084b3"],type:"restaurant"},{id:"394d1959-25d3-4013-9d53-80531903b6ca",basePrice:9381,dateFrom:"2024-07-21T07:48:07.364Z",dateTo:"2024-07-22T20:25:07.364Z",destination:"6f0d0a81-22bd-482b-949f-65db24a0a593",isFavorite:!1,offers:["666c4bdc-5b92-472d-931e-1359008d7625"],type:"train"},{id:"93f77005-8967-4ccc-a787-3b130d36d5c2",basePrice:817,dateFrom:"2024-07-23T09:15:07.364Z",dateTo:"2024-07-24T02:48:07.364Z",destination:"ee996048-2365-475d-9547-3ae95f553d80",isFavorite:!0,offers:[],type:"sightseeing"},{id:"cbe124ca-6941-4f4d-b6e9-dc23b53bf363",basePrice:8627,dateFrom:"2024-07-25T02:31:07.364Z",dateTo:"2024-07-25T10:49:07.364Z",destination:"cde4182a-6c82-4de6-9b68-c7f2c2452f67",isFavorite:!0,offers:["6165ac14-30fa-4379-a8c4-12310b1a8693","f2448762-9c90-4d9d-9cce-4ad4531bacc6","666c4bdc-5b92-472d-931e-1359008d7625"],type:"train"},{id:"edd18d20-4444-4eef-90a3-ff6d61df0e2f",basePrice:8376,dateFrom:"2024-07-26T17:47:07.364Z",dateTo:"2024-07-28T14:14:07.364Z",destination:"38f3ccb5-14dd-48ac-9d9b-8e47d51053c9",isFavorite:!0,offers:["2b8d3044-a1ab-46e6-a5ed-9ea129e06d8c","224a68db-3228-4795-a8f7-d8fe7d277961","54f0f8c5-8aba-4145-b222-e31104c15744","bb11b5a1-54c8-4cad-bff3-4e3e130daf24","3c342fea-9f7e-43f7-b707-e2f68945443e","7db912b8-a478-4677-b58e-6a04ebf4c3b4"],type:"flight"},{id:"6cba4f4e-82f5-49cd-a9d9-f177afd6cdcd",basePrice:9299,dateFrom:"2024-07-30T07:53:07.364Z",dateTo:"2024-07-30T16:13:07.364Z",destination:"ee996048-2365-475d-9547-3ae95f553d80",isFavorite:!1,offers:["6165ac14-30fa-4379-a8c4-12310b1a8693","f2448762-9c90-4d9d-9cce-4ad4531bacc6","666c4bdc-5b92-472d-931e-1359008d7625"],type:"train"},{id:"7d8bc58b-7c3f-441b-a50d-6ffa641605fe",basePrice:7252,dateFrom:"2024-07-31T15:14:07.364Z",dateTo:"2024-08-01T12:54:07.364Z",destination:"938f2e20-aea8-43a9-9bd7-49333d78cc58",isFavorite:!1,offers:["e887140a-118b-404a-be12-62250e4be9c1","3209ff9e-f4cb-4de2-98b6-06040e8ed1b8"],type:"drive"},{id:"8dcee987-903c-4c62-949d-cf906b1eccbe",basePrice:2142,dateFrom:"2024-08-02T08:56:07.364Z",dateTo:"2024-08-02T22:41:07.364Z",destination:"ee996048-2365-475d-9547-3ae95f553d80",isFavorite:!0,offers:[],type:"bus"},{id:"38f4ea96-af9a-424d-b758-02df9b8423af",basePrice:7712,dateFrom:"2024-08-03T07:33:07.364Z",dateTo:"2024-08-03T21:30:07.364Z",destination:"fd711e58-3cac-43b8-a3ce-cfda284d3fcc",isFavorite:!1,offers:[],type:"ship"},{id:"af45da94-3f8c-4fcb-a73a-e314a11fd12c",basePrice:9726,dateFrom:"2024-08-05T08:04:07.364Z",dateTo:"2024-08-07T03:56:07.364Z",destination:"38f3ccb5-14dd-48ac-9d9b-8e47d51053c9",isFavorite:!1,offers:[],type:"drive"},{id:"b806b7ce-9202-4911-b939-375cb0c48707",basePrice:7594,dateFrom:"2024-08-08T02:10:07.364Z",dateTo:"2024-08-09T04:20:07.364Z",destination:"e1844f36-98ed-43d2-8663-0ea4c3dc9c90",isFavorite:!1,offers:["0c961ae0-a71d-4bf8-9b3d-b7399b41f95c","cd0dfc92-1928-4feb-af70-1a44df73e49f","75237586-adb2-41f7-9562-5d0d780c8412"],type:"check-in"},{id:"6f0bf020-7044-462e-9c0a-99447fa6cde6",basePrice:5194,dateFrom:"2024-08-10T04:13:07.364Z",dateTo:"2024-08-10T15:56:07.364Z",destination:"ee996048-2365-475d-9547-3ae95f553d80",isFavorite:!0,offers:["cd0dfc92-1928-4feb-af70-1a44df73e49f","75237586-adb2-41f7-9562-5d0d780c8412"],type:"check-in"},{id:"bd91ae7a-6193-4351-b00a-46fa8af75f22",basePrice:177,dateFrom:"2024-08-12T11:46:07.364Z",dateTo:"2024-08-12T20:02:07.364Z",destination:"cde4182a-6c82-4de6-9b68-c7f2c2452f67",isFavorite:!0,offers:["3c8441f6-ab42-4f11-b71d-70d36c52a557","dfdc8d23-201b-4207-a1cc-98db868782f6","e8a21320-37c3-4dc9-bab9-3e826fe8a5e7"],type:"bus"}],_=[{id:"fd711e58-3cac-43b8-a3ce-cfda284d3fcc",description:"",name:"Oslo",pictures:[]},{id:"570890ce-cb81-443c-9a43-78678678a433",description:"Kioto - with an embankment of a mighty river as a centre of attraction",name:"Kioto",pictures:[{src:"https://23.objects.htmlacademy.pro/static/destinations/10.jpg",description:"Kioto famous for its crowded street markets with the best street food in Asia"},{src:"https://23.objects.htmlacademy.pro/static/destinations/19.jpg",description:"Kioto with a beautiful old town"},{src:"https://23.objects.htmlacademy.pro/static/destinations/17.jpg",description:"Kioto a true asian pearl"},{src:"https://23.objects.htmlacademy.pro/static/destinations/3.jpg",description:"Kioto in a middle of Europe"}]},{id:"cde4182a-6c82-4de6-9b68-c7f2c2452f67",description:"Sochi - famous for its crowded street markets with the best street food in Asia",name:"Sochi",pictures:[{src:"https://23.objects.htmlacademy.pro/static/destinations/12.jpg",description:"Sochi with a beautiful old town"}]},{id:"6f0d0a81-22bd-482b-949f-65db24a0a593",description:"Saint Petersburg - a true asian pearl",name:"Saint Petersburg",pictures:[{src:"https://23.objects.htmlacademy.pro/static/destinations/19.jpg",description:"Saint Petersburg with crowded streets"},{src:"https://23.objects.htmlacademy.pro/static/destinations/11.jpg",description:"Saint Petersburg middle-eastern paradise"}]},{id:"ee996048-2365-475d-9547-3ae95f553d80",description:"Venice - a true asian pearl",name:"Venice",pictures:[{src:"https://23.objects.htmlacademy.pro/static/destinations/1.jpg",description:"Venice in a middle of Europe"},{src:"https://23.objects.htmlacademy.pro/static/destinations/1.jpg",description:"Venice middle-eastern paradise"},{src:"https://23.objects.htmlacademy.pro/static/destinations/12.jpg",description:"Venice a perfect place to stay with a family"}]},{id:"cd23a18e-0a10-4d4e-b6a7-a39ea89f53bb",description:"",name:"Amsterdam",pictures:[]},{id:"e1844f36-98ed-43d2-8663-0ea4c3dc9c90",description:"",name:"Tokio",pictures:[]},{id:"6ae9f746-9662-483b-aeee-036f3a06b92d",description:"Nagasaki - for those who value comfort and coziness",name:"Nagasaki",pictures:[{src:"https://23.objects.htmlacademy.pro/static/destinations/1.jpg",description:"Nagasaki for those who value comfort and coziness"},{src:"https://23.objects.htmlacademy.pro/static/destinations/5.jpg",description:"Nagasaki in a middle of Europe"},{src:"https://23.objects.htmlacademy.pro/static/destinations/5.jpg",description:"Nagasaki is a beautiful city"},{src:"https://23.objects.htmlacademy.pro/static/destinations/20.jpg",description:"Nagasaki for those who value comfort and coziness"},{src:"https://23.objects.htmlacademy.pro/static/destinations/9.jpg",description:"Nagasaki for those who value comfort and coziness"}]},{id:"938f2e20-aea8-43a9-9bd7-49333d78cc58",description:"Madrid - for those who value comfort and coziness",name:"Madrid",pictures:[{src:"https://23.objects.htmlacademy.pro/static/destinations/6.jpg",description:"Madrid full of of cozy canteens where you can try the best coffee in the Middle East"}]},{id:"38f3ccb5-14dd-48ac-9d9b-8e47d51053c9",description:"Vien - with crowded streets",name:"Vien",pictures:[]}],g=[{type:"taxi",offers:[{id:"55f1ea4a-9b51-4a53-bf38-d606c73dffab",title:"Upgrade to a business class",price:78},{id:"67cbdeea-1708-4c3f-817e-708414901df4",title:"Choose the radio station",price:142},{id:"551d5aac-ab8b-4b63-8eae-7b75b204b60d",title:"Choose temperature",price:119},{id:"dba262fc-ba7b-4bd9-86f8-e40364fd754f",title:"Drive quickly, I'm in a hurry",price:157},{id:"d5512a06-8fb4-4e4f-a014-6d69794f6256",title:"Drive slowly",price:134}]},{type:"bus",offers:[{id:"3c8441f6-ab42-4f11-b71d-70d36c52a557",title:"Infotainment system",price:150},{id:"dfdc8d23-201b-4207-a1cc-98db868782f6",title:"Order meal",price:170},{id:"e8a21320-37c3-4dc9-bab9-3e826fe8a5e7",title:"Choose seats",price:179}]},{type:"train",offers:[{id:"6165ac14-30fa-4379-a8c4-12310b1a8693",title:"Book a taxi at the arrival point",price:184},{id:"f2448762-9c90-4d9d-9cce-4ad4531bacc6",title:"Order a breakfast",price:186},{id:"666c4bdc-5b92-472d-931e-1359008d7625",title:"Wake up at a certain time",price:92}]},{type:"flight",offers:[{id:"2b8d3044-a1ab-46e6-a5ed-9ea129e06d8c",title:"Choose meal",price:138},{id:"224a68db-3228-4795-a8f7-d8fe7d277961",title:"Choose seats",price:100},{id:"54f0f8c5-8aba-4145-b222-e31104c15744",title:"Upgrade to comfort class",price:161},{id:"bb11b5a1-54c8-4cad-bff3-4e3e130daf24",title:"Upgrade to business class",price:79},{id:"3c342fea-9f7e-43f7-b707-e2f68945443e",title:"Add luggage",price:189},{id:"7db912b8-a478-4677-b58e-6a04ebf4c3b4",title:"Business lounge",price:196}]},{type:"check-in",offers:[{id:"15bb6ba7-adbf-49ae-84dc-f9b9e4bb0d9f",title:"Choose the time of check-in",price:81},{id:"ab61db35-0ec4-4f45-a8a8-e0383ebd4028",title:"Choose the time of check-out",price:57},{id:"0c961ae0-a71d-4bf8-9b3d-b7399b41f95c",title:"Add breakfast",price:90},{id:"cd0dfc92-1928-4feb-af70-1a44df73e49f",title:"Laundry",price:105},{id:"75237586-adb2-41f7-9562-5d0d780c8412",title:"Order a meal from the restaurant",price:179}]},{type:"sightseeing",offers:[]},{type:"ship",offers:[{id:"15b4720c-b607-4c6c-bba7-db623da74460",title:"Choose meal",price:121},{id:"041cab8c-ee74-419b-961f-d6396b33a5dc",title:"Choose seats",price:100},{id:"5444d058-d066-4de8-b26c-6e84ce3ad616",title:"Upgrade to comfort class",price:152},{id:"5a3846c2-39f1-4a31-95bf-65ba6b421065",title:"Upgrade to business class",price:200},{id:"b3f82299-bd1a-4477-83d1-1fcee825bbb0",title:"Add luggage",price:197},{id:"da88008a-b0f1-4dd9-8f5a-49c4a4ea7a39",title:"Business lounge",price:102}]},{type:"drive",offers:[{id:"e887140a-118b-404a-be12-62250e4be9c1",title:"With automatic transmission",price:149},{id:"3209ff9e-f4cb-4de2-98b6-06040e8ed1b8",title:"With air conditioning",price:90}]},{type:"restaurant",offers:[{id:"98aed58a-b092-4cbd-b6b7-f91e9f8a3221",title:"Choose live music",price:176},{id:"ac939d9e-5cd1-4a3b-b8ac-727d1c4084b3",title:"Choose VIP area",price:177}]}],y=new class{points=[...u];getPointData(){return this.points}init(){this.getPointData()}},T=new class{additionalPointOffers=[...g];getAdditionalOffer(){return this.additionalPointOffers}},w=new class{pointDestinations=[..._];getPointDestinations(){return this.pointDestinations}},$=new class{constructor(e,t,i){this.pointsModel=e,this.additionalOfferModel=t,this.pointDestinationsModel=i}renderTripInfoView(){i(new o,m,e)}renderTripFilterView(){i(new c,h)}renderTripFormSortView(){i(new r,v)}renderTripListView(){i(new l,v)}renderTripEventsItemView(){this.tripEventsList=v.querySelector(".trip-events__list"),i(new f(new p(this.points,this.pointOffers).getTemplate()),this.tripEventsList)}renderTripFormEditPointView(t){i(new f(new b(t,this.pointDestinations,this.pointOffers).getTemplate()),this.tripEventsList,e)}renderTripFormPointAddView(t){i(new f(new b(t,this.pointDestinations,this.pointOffers).getTemplate()),this.tripEventsList,e)}init(){this.points=[...this.pointsModel.getPointData()],this.pointOffers=[...this.additionalOfferModel.getAdditionalOffer()],this.pointDestinations=[...this.pointDestinationsModel.getPointDestinations()],this.renderTripFormSortView(),this.renderTripFilterView(),this.renderTripInfoView(),this.renderTripListView(),this.renderTripEventsItemView(),this.renderTripFormPointAddView(s),this.renderTripFormEditPointView("form-edit")}}(y,T,w);$.init()})();
//# sourceMappingURL=bundle.7bb62492d7139fe08df0.js.map