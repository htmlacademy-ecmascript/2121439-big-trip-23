export const pointsData = [
  {
    id: 'b1787d3a-2824-4666-ad29-e9fe1313326c',
    basePrice: 562,
    dateFrom: '2024-06-18T01:28:07.364Z',
    dateTo: '2024-06-19T16:47:07.364Z',
    destination: 'e1844f36-98ed-43d2-8663-0ea4c3dc9c90',
    isFavorite: false,
    offers: ['da88008a-b0f1-4dd9-8f5a-49c4a4ea7a39'],
    type: 'ship',
  },
  {
    id: 'cb9a5cdd-2b14-4183-aa5c-8714832af6d1',
    basePrice: 8347,
    dateFrom: '2024-06-20T01:59:07.364Z',
    dateTo: '2024-06-20T13:16:07.364Z',
    destination: 'e1844f36-98ed-43d2-8663-0ea4c3dc9c90',
    isFavorite: true,
    offers: [],
    type: 'bus',
  },
  {
    id: '9e4e5110-6532-495e-bd8f-b0686aa0c3a5',
    basePrice: 4954,
    dateFrom: '2024-06-21T12:15:07.364Z',
    dateTo: '2024-06-22T06:37:07.364Z',
    destination: '938f2e20-aea8-43a9-9bd7-49333d78cc58',
    isFavorite: true,
    offers: [],
    type: 'flight',
  },
];

export const pointDestinations = [
  {
    id: 'fd711e58-3cac-43b8-a3ce-cfda284d3fcc',
    description: '',
    name: 'Oslo',
    pictures: [],
  },
  {
    id: '570890ce-cb81-443c-9a43-78678678a433',
    description:
      'Kioto - with an embankment of a mighty river as a centre of attraction',
    name: 'Kioto',
    pictures: [
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/10.jpg',
        description:
          'Kioto famous for its crowded street markets with the best street food in Asia',
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/19.jpg',
        description: 'Kioto with a beautiful old town',
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/17.jpg',
        description: 'Kioto a true asian pearl',
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/3.jpg',
        description: 'Kioto in a middle of Europe',
      },
    ],
  },
  {
    id: 'cde4182a-6c82-4de6-9b68-c7f2c2452f67',
    description:
      'Sochi - famous for its crowded street markets with the best street food in Asia',
    name: 'Sochi',
    pictures: [
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/12.jpg',
        description: 'Sochi with a beautiful old town',
      },
    ],
  },
  {
    id: '6f0d0a81-22bd-482b-949f-65db24a0a593',
    description: 'Saint Petersburg - a true asian pearl',
    name: 'Saint Petersburg',
    pictures: [
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/19.jpg',
        description: 'Saint Petersburg with crowded streets',
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/11.jpg',
        description: 'Saint Petersburg middle-eastern paradise',
      },
    ],
  },
  {
    id: 'ee996048-2365-475d-9547-3ae95f553d80',
    description: 'Venice - a true asian pearl',
    name: 'Venice',
    pictures: [
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/1.jpg',
        description: 'Venice in a middle of Europe',
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/1.jpg',
        description: 'Venice middle-eastern paradise',
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/12.jpg',
        description: 'Venice a perfect place to stay with a family',
      },
    ],
  },
  {
    id: 'cd23a18e-0a10-4d4e-b6a7-a39ea89f53bb',
    description: '',
    name: 'Amsterdam',
    pictures: [],
  },
  {
    id: 'e1844f36-98ed-43d2-8663-0ea4c3dc9c90',
    description: '',
    name: 'Tokio',
    pictures: [],
  },
  {
    id: '6ae9f746-9662-483b-aeee-036f3a06b92d',
    description: 'Nagasaki - for those who value comfort and coziness',
    name: 'Nagasaki',
    pictures: [
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/1.jpg',
        description: 'Nagasaki for those who value comfort and coziness',
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/5.jpg',
        description: 'Nagasaki in a middle of Europe',
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/5.jpg',
        description: 'Nagasaki is a beautiful city',
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/20.jpg',
        description: 'Nagasaki for those who value comfort and coziness',
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/9.jpg',
        description: 'Nagasaki for those who value comfort and coziness',
      },
    ],
  },
  {
    id: '938f2e20-aea8-43a9-9bd7-49333d78cc58',
    description: 'Madrid - for those who value comfort and coziness',
    name: 'Madrid',
    pictures: [
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/6.jpg',
        description:
          'Madrid full of of cozy canteens where you can try the best coffee in the Middle East',
      },
    ],
  },
  {
    id: '38f3ccb5-14dd-48ac-9d9b-8e47d51053c9',
    description: 'Vien - with crowded streets',
    name: 'Vien',
    pictures: [],
  },
];

export const additionalPointOffers = [
  {
    type: 'taxi',
    offers: [
      {
        id: '55f1ea4a-9b51-4a53-bf38-d606c73dffab',
        title: 'Upgrade to a business class',
        price: 78,
      },
      {
        id: '67cbdeea-1708-4c3f-817e-708414901df4',
        title: 'Choose the radio station',
        price: 142,
      },
      {
        id: '551d5aac-ab8b-4b63-8eae-7b75b204b60d',
        title: 'Choose temperature',
        price: 119,
      },
      {
        id: 'dba262fc-ba7b-4bd9-86f8-e40364fd754f',
        title: 'Drive quickly, I\'m in a hurry',
        price: 157,
      },
      {
        id: 'd5512a06-8fb4-4e4f-a014-6d69794f6256',
        title: 'Drive slowly',
        price: 134,
      },
    ],
  },
  {
    type: 'bus',
    offers: [
      {
        id: '3c8441f6-ab42-4f11-b71d-70d36c52a557',
        title: 'Infotainment system',
        price: 150,
      },
      {
        id: 'dfdc8d23-201b-4207-a1cc-98db868782f6',
        title: 'Order meal',
        price: 170,
      },
      {
        id: 'e8a21320-37c3-4dc9-bab9-3e826fe8a5e7',
        title: 'Choose seats',
        price: 179,
      },
    ],
  },
  {
    type: 'train',
    offers: [
      {
        id: '6165ac14-30fa-4379-a8c4-12310b1a8693',
        title: 'Book a taxi at the arrival point',
        price: 184,
      },
      {
        id: 'f2448762-9c90-4d9d-9cce-4ad4531bacc6',
        title: 'Order a breakfast',
        price: 186,
      },
      {
        id: '666c4bdc-5b92-472d-931e-1359008d7625',
        title: 'Wake up at a certain time',
        price: 92,
      },
    ],
  },
  {
    type: 'flight',
    offers: [
      {
        id: '2b8d3044-a1ab-46e6-a5ed-9ea129e06d8c',
        title: 'Choose meal',
        price: 138,
      },
      {
        id: '224a68db-3228-4795-a8f7-d8fe7d277961',
        title: 'Choose seats',
        price: 100,
      },
      {
        id: '54f0f8c5-8aba-4145-b222-e31104c15744',
        title: 'Upgrade to comfort class',
        price: 161,
      },
      {
        id: 'bb11b5a1-54c8-4cad-bff3-4e3e130daf24',
        title: 'Upgrade to business class',
        price: 79,
      },
      {
        id: '3c342fea-9f7e-43f7-b707-e2f68945443e',
        title: 'Add luggage',
        price: 189,
      },
      {
        id: '7db912b8-a478-4677-b58e-6a04ebf4c3b4',
        title: 'Business lounge',
        price: 196,
      },
    ],
  },
  {
    type: 'check-in',
    offers: [
      {
        id: '15bb6ba7-adbf-49ae-84dc-f9b9e4bb0d9f',
        title: 'Choose the time of check-in',
        price: 81,
      },
      {
        id: 'ab61db35-0ec4-4f45-a8a8-e0383ebd4028',
        title: 'Choose the time of check-out',
        price: 57,
      },
      {
        id: '0c961ae0-a71d-4bf8-9b3d-b7399b41f95c',
        title: 'Add breakfast',
        price: 90,
      },
      {
        id: 'cd0dfc92-1928-4feb-af70-1a44df73e49f',
        title: 'Laundry',
        price: 105,
      },
      {
        id: '75237586-adb2-41f7-9562-5d0d780c8412',
        title: 'Order a meal from the restaurant',
        price: 179,
      },
    ],
  },
  {
    type: 'sightseeing',
    offers: [],
  },
  {
    type: 'ship',
    offers: [
      {
        id: '15b4720c-b607-4c6c-bba7-db623da74460',
        title: 'Choose meal',
        price: 121,
      },
      {
        id: '041cab8c-ee74-419b-961f-d6396b33a5dc',
        title: 'Choose seats',
        price: 100,
      },
      {
        id: '5444d058-d066-4de8-b26c-6e84ce3ad616',
        title: 'Upgrade to comfort class',
        price: 152,
      },
      {
        id: '5a3846c2-39f1-4a31-95bf-65ba6b421065',
        title: 'Upgrade to business class',
        price: 200,
      },
      {
        id: 'b3f82299-bd1a-4477-83d1-1fcee825bbb0',
        title: 'Add luggage',
        price: 197,
      },
      {
        id: 'da88008a-b0f1-4dd9-8f5a-49c4a4ea7a39',
        title: 'Business lounge',
        price: 102,
      },
    ],
  },
  {
    type: 'drive',
    offers: [
      {
        id: 'e887140a-118b-404a-be12-62250e4be9c1',
        title: 'With automatic transmission',
        price: 149,
      },
      {
        id: '3209ff9e-f4cb-4de2-98b6-06040e8ed1b8',
        title: 'With air conditioning',
        price: 90,
      },
    ],
  },
  {
    type: 'restaurant',
    offers: [
      {
        id: '98aed58a-b092-4cbd-b6b7-f91e9f8a3221',
        title: 'Choose live music',
        price: 176,
      },
      {
        id: 'ac939d9e-5cd1-4a3b-b8ac-727d1c4084b3',
        title: 'Choose VIP area',
        price: 177,
      },
    ],
  },
];

export const nameCitiesDestination = [
  'Oslo',
  'Kioto',
  'Sochi',
  'Saint Petersburg',
  'Venice',
  'Amsterdam',
  'Nagasaki',
  'Madrid',
  'Vien',
];
