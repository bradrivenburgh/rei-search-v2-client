import config from './config'; //Get Google Streetview keys

export const fakeStats = {
  economic: [
    {
      id: 1,
      statistic: "Price-to-rent ratio",
      advisory: "(Lower is better)",
      CT: "18.00",
      MSA: "18.20",
      USA: "18.30",
    },
    {
      id: 2,
      statistic: "Median income",
      CT: "$40,000",
      MSA: "$40,000",
      USA: "$40,000",
    },
    {
      id: 3,
      statistic: "Top three sectors",
      advisory: "(Ordered by percentage of working population employed)",
      CT: [
        "Health care and social assistance (19.29%)",
        "Retail trade (18.29%)",
        "Accommodation and food services (8.75%)",
      ],
      MSA: [
        "Health care and social assistance (19.29%)",
        "Retail trade (18.29%)",
        "Accommodation and food services (8.75%)",
      ],
      USA: [
        "Health care and social assistance (19.29%)",
        "Retail trade (18.29%)",
        "Accommodation and food services (8.75%)",
      ],
    },
    {
      id: 4,
      statistic: "Top three occupations",
      advisory: "(Ordered by percentage of working population in occupation)",
      CT: [
        "Health care and social assistance (19.29%)",
        "Retail trade (18.29%)",
        "Accommodation and food services (8.75%)",
      ],
      MSA: [
        "Health care and social assistance (19.29%)",
        "Retail trade (18.29%)",
        "Accommodation and food services (8.75%)",
      ],
      USA: [
        "Health care and social assistance (19.29%)",
        "Retail trade (18.29%)",
        "Accommodation and food services (8.75%)",
      ],
    },
  ],

  demographic: [
    {
      id: 1,
      statistic: "Population growth rate",
      advisory: "(Higher is better)",
      CT: "2.18%",
      MSA: "2.40%",
      USA: "2.00%",
    },
    {
      id: 2,
      statistic: "Median age",
      CT: "34",
      MSA: "35",
      USA: "36",
    },
    {
      id: 3,
      statistic: "Race and ethnicity",
      CT: [
        "American Indian (##%)",
        "Asian (##%)",
        "Black (##%)",
        "Pacific Islander (##%)",
        "White (##%)",
      ],
      MSA: [
        "American Indian (##%)",
        "Asian (##%)",
        "Black (##%)",
        "Pacific Islander (##%)",
        "White (##%)",
      ],
      USA: [
        "American Indian (##%)",
        "Asian (##%)",
        "Black (##%)",
        "Pacific Islander (##%)",
        "White (##%)",
      ],
    },
    {
      id: 4,
      statistic: "Employment status",
      CT: ["Employed (##%)", "Unemployed (##%)"],
      MSA: ["Employed (##%)", "Unemployed (##%)"],
      USA: ["Employed (##%)", "Unemployed (##%)"],
    },
  ],
};

export const cities = [
 {
   "city": "Aldan, PA"
 },
 {
   "city": "Alloway, NJ"
 },
 {
   "city": "Ambler, PA"
 },
 {
   "city": "Arcadia University, PA"
 },
 {
   "city": "Arden, DE"
 },
 {
   "city": "Ardencroft, DE"
 },
 {
   "city": "Ardentown, DE"
 },
 {
   "city": "Ardmore, PA"
 },
 {
   "city": "Ashland, NJ"
 },
 {
   "city": "Atglen, PA"
 },
 {
   "city": "Audubon, NJ"
 },
 {
   "city": "Audubon, PA"
 },
 {
   "city": "Audubon Park, NJ"
 },
 {
   "city": "Avondale, PA"
 },
 {
   "city": "Barclay, NJ"
 },
 {
   "city": "Barrington, NJ"
 },
 {
   "city": "Bear, DE"
 },
 {
   "city": "Beckett, NJ"
 },
 {
   "city": "Bellefonte, DE"
 },
 {
   "city": "Bellmawr, NJ"
 },
 {
   "city": "Berlin, NJ"
 },
 {
   "city": "Berwyn, PA"
 },
 {
   "city": "Beverly, NJ"
 },
 {
   "city": "Blackwood, NJ"
 },
 {
   "city": "Blue Bell, PA"
 },
 {
   "city": "Boothwyn, PA"
 },
 {
   "city": "Bordentown, NJ"
 },
 {
   "city": "Bridgeport, PA"
 },
 {
   "city": "Bristol, PA"
 },
 {
   "city": "Brittany Farms-The Highlands, PA"
 },
 {
   "city": "Brookhaven, PA"
 },
 {
   "city": "Brooklawn, NJ"
 },
 {
   "city": "Brookside, DE"
 },
 {
   "city": "Broomall, PA"
 },
 {
   "city": "Browns Mills, NJ"
 },
 {
   "city": "Bryn Athyn, PA"
 },
 {
   "city": "Bryn Mawr, PA"
 },
 {
   "city": "Burlington, NJ"
 },
 {
   "city": "Caln, PA"
 },
 {
   "city": "Camden, NJ"
 },
 {
   "city": "Carneys Point, NJ"
 },
 {
   "city": "Cecilton, MD"
 },
 {
   "city": "Chalfont, PA"
 },
 {
   "city": "Charlestown, MD"
 },
 {
   "city": "Cherry Hill Mall, NJ"
 },
 {
   "city": "Chesapeake City, MD"
 },
 {
   "city": "Chesilhurst, NJ"
 },
 {
   "city": "Chester, PA"
 },
 {
   "city": "Chesterbrook, PA"
 },
 {
   "city": "Chester Heights, PA"
 },
 {
   "city": "Chester Township, PA"
 },
 {
   "city": "Cheyney University, PA"
 },
 {
   "city": "Churchville, PA"
 },
 {
   "city": "Claymont, DE"
 },
 {
   "city": "Clayton, NJ"
 },
 {
   "city": "Clementon, NJ"
 },
 {
   "city": "Clifton Heights, PA"
 },
 {
   "city": "Coatesville, PA"
 },
 {
   "city": "Cochranville, PA"
 },
 {
   "city": "Collegeville, PA"
 },
 {
   "city": "Collingdale, PA"
 },
 {
   "city": "Collingswood, NJ"
 },
 {
   "city": "Colwyn, PA"
 },
 {
   "city": "Conshohocken, PA"
 },
 {
   "city": "Cornwells Heights, PA"
 },
 {
   "city": "Country Lake Estates, NJ"
 },
 {
   "city": "Croydon, PA"
 },
 {
   "city": "Darby, PA"
 },
 {
   "city": "Darby Township, PA"
 },
 {
   "city": "DE City, DE"
 },
 {
   "city": "Devon, PA"
 },
 {
   "city": "Downingtown, PA"
 },
 {
   "city": "Doylestown, PA"
 },
 {
   "city": "Drexel Hill, PA"
 },
 {
   "city": "Dublin, PA"
 },
 {
   "city": "Eagleview, PA"
 },
 {
   "city": "Eagleville, PA"
 },
 {
   "city": "East Greenville, PA"
 },
 {
   "city": "East Lansdowne, PA"
 },
 {
   "city": "East Norriton Township, PA"
 },
 {
   "city": "Echelon, NJ"
 },
 {
   "city": "Eddington, PA"
 },
 {
   "city": "Eddystone, PA"
 },
 {
   "city": "Edgemoor, DE"
 },
 {
   "city": "Elkton, MD"
 },
 {
   "city": "Ellisburg, NJ"
 },
 {
   "city": "Elmer, NJ"
 },
 {
   "city": "Elsmere, DE"
 },
 {
   "city": "Elverson, PA"
 },
 {
   "city": "Evansburg, PA"
 },
 {
   "city": "Exton, PA"
 },
 {
   "city": "Fairless Hills, PA"
 },
 {
   "city": "Feasterville, PA"
 },
 {
   "city": "Fieldsboro, NJ"
 },
 {
   "city": "Florence, NJ"
 },
 {
   "city": "Flourtown, PA"
 },
 {
   "city": "Folcroft, PA"
 },
 {
   "city": "Folsom, PA"
 },
 {
   "city": "Fort Dix, NJ"
 },
 {
   "city": "Fort Washington, PA"
 },
 {
   "city": "Gibbsboro, NJ"
 },
 {
   "city": "Gibbstown, NJ"
 },
 {
   "city": "Gilbertsville, PA"
 },
 {
   "city": "Glasgow, DE"
 },
 {
   "city": "Glassboro, NJ"
 },
 {
   "city": "Glendora, NJ"
 },
 {
   "city": "Glenolden, PA"
 },
 {
   "city": "Glenside, PA"
 },
 {
   "city": "Gloucester City, NJ"
 },
 {
   "city": "Golden Triangle, NJ"
 },
 {
   "city": "Green Lane, PA"
 },
 {
   "city": "Greentree, NJ"
 },
 {
   "city": "Greenville, DE"
 },
 {
   "city": "Haddonfield, NJ"
 },
 {
   "city": "Haddon Heights, NJ"
 },
 {
   "city": "Halfway House, PA"
 },
 {
   "city": "Hancocks Bridge, NJ"
 },
 {
   "city": "Harleysville, PA"
 },
 {
   "city": "Hatboro, PA"
 },
 {
   "city": "Hatfield, PA"
 },
 {
   "city": "Haverford College, PA"
 },
 {
   "city": "Hi-Nella, NJ"
 },
 {
   "city": "Hockessin, DE"
 },
 {
   "city": "Honey Brook, PA"
 },
 {
   "city": "Horsham, PA"
 },
 {
   "city": "Hulmeville, PA"
 },
 {
   "city": "Ivyland, PA"
 },
 {
   "city": "Jenkintown, PA"
 },
 {
   "city": "Juliustown, NJ"
 },
 {
   "city": "Kenilworth, PA"
 },
 {
   "city": "Kennett Square, PA"
 },
 {
   "city": "King of Prussia, PA"
 },
 {
   "city": "Kingston Estates, NJ"
 },
 {
   "city": "Kulpsville, PA"
 },
 {
   "city": "Langhorne, PA"
 },
 {
   "city": "Langhorne Manor, PA"
 },
 {
   "city": "Lansdale, PA"
 },
 {
   "city": "Lansdowne, PA"
 },
 {
   "city": "Laurel Springs, NJ"
 },
 {
   "city": "Lawnside, NJ"
 },
 {
   "city": "Leisuretowne, NJ"
 },
 {
   "city": "Levittown, PA"
 },
 {
   "city": "Lima, PA"
 },
 {
   "city": "Lincoln University, PA"
 },
 {
   "city": "Lindenwold, NJ"
 },
 {
   "city": "Linwood, PA"
 },
 {
   "city": "Lionville, PA"
 },
 {
   "city": "Magnolia, NJ"
 },
 {
   "city": "Malvern, PA"
 },
 {
   "city": "Maple Glen, PA"
 },
 {
   "city": "Marcus Hook, PA"
 },
 {
   "city": "Marlton, NJ"
 },
 {
   "city": "McGuire AFB, NJ"
 },
 {
   "city": "Medford Lakes, NJ"
 },
 {
   "city": "Media, PA"
 },
 {
   "city": "Merchantville, NJ"
 },
 {
   "city": "Middletown, DE"
 },
 {
   "city": "Milford Square, PA"
 },
 {
   "city": "Millbourne, PA"
 },
 {
   "city": "Modena, PA"
 },
 {
   "city": "Montgomeryville, PA"
 },
 {
   "city": "Moorestown-Lenola, NJ"
 },
 {
   "city": "Morrisville, PA"
 },
 {
   "city": "Morton, PA"
 },
 {
   "city": "Mount Ephraim, NJ"
 },
 {
   "city": "Mullica Hill, NJ"
 },
 {
   "city": "Narberth, PA"
 },
 {
   "city": "National Park, NJ"
 },
 {
   "city": "Nether Providence Township, PA"
 },
 {
   "city": "Newark, DE"
 },
 {
   "city": "New Britain, PA"
 },
 {
   "city": "New Castle, DE"
 },
 {
   "city": "Newfield, NJ"
 },
 {
   "city": "New Hope, PA"
 },
 {
   "city": "Newport, DE"
 },
 {
   "city": "Newtown, PA"
 },
 {
   "city": "Newtown Grant, PA"
 },
 {
   "city": "Norristown, PA"
 },
 {
   "city": "North East, MD"
 },
 {
   "city": "North Star, DE"
 },
 {
   "city": "North Wales, PA"
 },
 {
   "city": "Norwood, PA"
 },
 {
   "city": "Oaklyn, NJ"
 },
 {
   "city": "Oak Valley, NJ"
 },
 {
   "city": "Odessa, DE"
 },
 {
   "city": "Olivet, NJ"
 },
 {
   "city": "Oreland, PA"
 },
 {
   "city": "Oxford, PA"
 },
 {
   "city": "Palmyra, NJ"
 },
 {
   "city": "Paoli, PA"
 },
 {
   "city": "Parkesburg, PA"
 },
 {
   "city": "Parkside, PA"
 },
 {
   "city": "Paulsboro, NJ"
 },
 {
   "city": "Pedricktown, NJ"
 },
 {
   "city": "Pemberton, NJ"
 },
 {
   "city": "Pemberton Heights, NJ"
 },
 {
   "city": "Penndel, PA"
 },
 {
   "city": "Pennsauken Township, NJ"
 },
 {
   "city": "Pennsburg, PA"
 },
 {
   "city": "Penns Grove, NJ"
 },
 {
   "city": "Pennsville, NJ"
 },
 {
   "city": "Penn Wynne, PA"
 },
 {
   "city": "Perkasie, PA"
 },
 {
   "city": "Perryville, MD"
 },
 {
   "city": "Philadelphia, PA"
 },
 {
   "city": "Phoenixville, PA"
 },
 {
   "city": "Pike Creek, DE"
 },
 {
   "city": "Pike Creek Valley, DE"
 },
 {
   "city": "Pine Hill, NJ"
 },
 {
   "city": "Pine Valley, NJ"
 },
 {
   "city": "Pitman, NJ"
 },
 {
   "city": "Plumsteadville, PA"
 },
 {
   "city": "Plymouth Meeting, PA"
 },
 {
   "city": "Pomeroy, PA"
 },
 {
   "city": "Port Deposit, MD"
 },
 {
   "city": "Pottsgrove, PA"
 },
 {
   "city": "Pottstown, PA"
 },
 {
   "city": "Presidential Lakes Estates, NJ"
 },
 {
   "city": "Prospect Park, PA"
 },
 {
   "city": "Quakertown, PA"
 },
 {
   "city": "Quinton, NJ"
 },
 {
   "city": "Radnor Township, PA"
 },
 {
   "city": "Ramblewood, NJ"
 },
 {
   "city": "Red Hill, PA"
 },
 {
   "city": "Richboro, PA"
 },
 {
   "city": "Richlandtown, PA"
 },
 {
   "city": "Richwood, NJ"
 },
 {
   "city": "Ridley Park, PA"
 },
 {
   "city": "Riegelsville, PA"
 },
 {
   "city": "Rising Sun, MD"
 },
 {
   "city": "Riverton, NJ"
 },
 {
   "city": "Rockledge, PA"
 },
 {
   "city": "Roebling, NJ"
 },
 {
   "city": "Rose Valley, PA"
 },
 {
   "city": "Royersford, PA"
 },
 {
   "city": "Runnemede, NJ"
 },
 {
   "city": "Rutledge, PA"
 },
 {
   "city": "Salem, NJ"
 },
 {
   "city": "Sanatoga, PA"
 },
 {
   "city": "Schwenksville, PA"
 },
 {
   "city": "Sellersville, PA"
 },
 {
   "city": "Sharon Hill, PA"
 },
 {
   "city": "Silverdale, PA"
 },
 {
   "city": "Skippack, PA"
 },
 {
   "city": "Somerdale, NJ"
 },
 {
   "city": "Souderton, PA"
 },
 {
   "city": "South Coatesville, PA"
 },
 {
   "city": "South Pottstown, PA"
 },
 {
   "city": "Spinnerstown, PA"
 },
 {
   "city": "Spring City, PA"
 },
 {
   "city": "Springdale, NJ"
 },
 {
   "city": "Springfield Township, PA"
 },
 {
   "city": "Spring House, PA"
 },
 {
   "city": "Spring Mount, PA"
 },
 {
   "city": "Stowe, PA"
 },
 {
   "city": "Stratford, NJ"
 },
 {
   "city": "Swarthmore, PA"
 },
 {
   "city": "Swedesboro, NJ"
 },
 {
   "city": "Tavistock, NJ"
 },
 {
   "city": "Telford, PA"
 },
 {
   "city": "Thorndale, PA"
 },
 {
   "city": "Tinicum Township, PA"
 },
 {
   "city": "Toughkenamon, PA"
 },
 {
   "city": "Townsend, DE"
 },
 {
   "city": "Trainer, PA"
 },
 {
   "city": "Trappe, PA"
 },
 {
   "city": "Trevose, PA"
 },
 {
   "city": "Trooper, PA"
 },
 {
   "city": "Trumbauersville, PA"
 },
 {
   "city": "Tullytown, PA"
 },
 {
   "city": "Turnersville, NJ"
 },
 {
   "city": "Upland, PA"
 },
 {
   "city": "Upper Providence Township, PA"
 },
 {
   "city": "Victory Lakes, NJ"
 },
 {
   "city": "Village Green-Green Ridge, PA"
 },
 {
   "city": "Village Shires, PA"
 },
 {
   "city": "Warminster Heights, PA"
 },
 {
   "city": "Wenonah, NJ"
 },
 {
   "city": "West Chester, PA"
 },
 {
   "city": "West Conshohocken, PA"
 },
 {
   "city": "West Grove, PA"
 },
 {
   "city": "West Norriton Township, PA"
 },
 {
   "city": "Westville, NJ"
 },
 {
   "city": "Westwood, PA"
 },
 {
   "city": "Williamstown, NJ"
 },
 {
   "city": "Willow Grove, PA"
 },
 {
   "city": "Wilmington, DE"
 },
 {
   "city": "Wilmington Manor, DE"
 },
 {
   "city": "Woodbourne, PA"
 },
 {
   "city": "Woodbury, NJ"
 },
 {
   "city": "Woodbury Heights, NJ"
 },
 {
   "city": "Woodlyn, PA"
 },
 {
   "city": "Woodlynne, NJ"
 },
 {
   "city": "Woodside, PA"
 },
 {
   "city": "Woodstown, NJ"
 },
 {
   "city": "Woxhall, PA"
 },
 {
   "city": "Wrightstown, NJ"
 },
 {
   "city": "Wyncote, PA"
 },
 {
   "city": "Wyndmoor, PA"
 },
 {
   "city": "Yardley, PA"
 },
 {
   "city": "Yeadon, PA"
 }
]

export const placeholderProfile = {
  address: {
    streetAddress: "Placeholder St.",
    city: "Somewhere",
    state: "PA",
    zipcode: "00000",
    neighborhood: null,
    community: null,
    subdivision: null,
  },
  bedrooms: '2',
  bathrooms: '2',
  price: '200000',
  yearBuilt: 1980,
  longitude: -75.10820770263672,
  latitude: 39.98884201049805,
  description:
    "Placeholder description.",
  livingArea: 1000,
  currency: "USD",
  photos: [
  ],
}

export const fakeProps = [
  {
    address: {
      streetAddress: "332 E Somerset St",
      city: "Philadelphia",
      state: "PA",
      zipcode: "19134",
      neighborhood: null,
      community: null,
      subdivision: null,
    },
    bedrooms: 3,
    bathrooms: 1,
    price: 80000,
    yearBuilt: 1935,
    longitude: -75.12525177001953,
    latitude: 39.99158477783203,
    description:
      "A Great Opportunity to own a Property near a Developing Neighborhood and local to the Subway Line.  \nThis Affordable Rowhome, with very little investment, could be move-in ready or a great income-producing property! Schedule your appointment today!",
    livingArea: 1065,
    currency: "USD",
    url:
      "https://www.zillow.com/homedetails/332-E-Somerset-St-Philadelphia-PA-19134/10203588_zpid/",
    photos: [
      "https://photos.zillowstatic.com/fp/7a1264a3d683bd48ba1a96ec3ff8b5cb-p_f.jpg",
      "https://photos.zillowstatic.com/fp/62ff661fa1557f45ec3c111da9e06e25-p_f.jpg",
      "https://photos.zillowstatic.com/fp/ab1204ce7b773ffd46477000ec60ccb9-p_f.jpg",
      "https://photos.zillowstatic.com/fp/b2f0c47f3534119fb041e5683f28b6f4-p_f.jpg",
      "https://photos.zillowstatic.com/fp/c7bacbed57c8eea701e5a1b085f8b48b-p_f.jpg",
      "https://photos.zillowstatic.com/fp/0170fdf237dcc5e64f1f2a49fa4a31f8-p_f.jpg",
      "https://photos.zillowstatic.com/fp/6221c6753da1d27c0bd3b98373863b21-p_f.jpg",
    ],
  },
  {
    address: {
      streetAddress: "3033 Weikel St",
      city: "Philadelphia",
      state: "PA",
      zipcode: "19134",
      neighborhood: null,
      community: null,
      subdivision: null,
    },
    bedrooms: 3,
    bathrooms: 2,
    price: 260000,
    yearBuilt: 1925,
    longitude: -75.1115951538086,
    latitude: 39.987884521484375,
    description:
      "Welcome to 3033 Weikel St - This soon to be completely renovated 3 bed 1.5 bath home is located in the heart of Port Richmond, surrounded by top eateries and bars  such as Tacconelli's Pizza,  Her Daughter's Cafe, Gaul House, Em's Place, Nemi, Tin Can Bar  and much more!  This home will feature vinyl hardwood floors, quartz countertops, white cabinetry,  tile backsplash, ample lighting, and much more! There's still some time to customize the finishing touches!  Prefer matte black hardware over  gold?!  Let us know, and the builder will be happy to install your preference! This  home won't last  long. Make your offer today!",
    livingArea: 904,
    currency: "USD",
    url:
      "https://www.zillow.com/homedetails/3033-Weikel-St-Philadelphia-PA-19134/10301177_zpid/",
    photos: [
      "https://photos.zillowstatic.com/fp/b3d1df88c8f7056868e9a4d72176bde2-p_f.jpg",
      "https://photos.zillowstatic.com/fp/9d836faf09d9ae98706a376e7cef3704-p_f.jpg",
      "https://photos.zillowstatic.com/fp/f39bc2b16f09081687cb120206417c8a-p_f.jpg",
      "https://photos.zillowstatic.com/fp/f017ec58e08bb5fdca964bc7590d5446-p_f.jpg",
    ],
  },
  {
    address: {
      streetAddress: "1216 E Susquehanna Ave",
      city: "Philadelphia",
      state: "PA",
      zipcode: "19125",
      neighborhood: null,
      community: null,
      subdivision: null,
    },
    bedrooms: 2,
    bathrooms: 1,
    price: 320000,
    yearBuilt: 1925,
    longitude: -75.1253433227539,
    latitude: 39.97256088256836,
    description:
      "Calling all builders and developers or those looking to build their dream home.  An amazing opportunity to own this 20 foot wide by 120 foot deep property located in one of the most popular and rapidly developing neighborhoods in the country! Steps away from everything Fishtown has to offer and close to major thoroughfares.  Easy access to 95 and 676.  Bring your contractors / architects and turn this large lot into something special!",
    livingArea: 1031,
    currency: "USD",
    url:
      "https://www.zillow.com/homedetails/1216-E-Susquehanna-Ave-Philadelphia-PA-19125/10257539_zpid/",
    photos: [
      "https://photos.zillowstatic.com/fp/76ed77d99109b7b6fb44e6098aa99714-p_f.jpg",
      "https://photos.zillowstatic.com/fp/c3b737f18e48218f506e4ffa037e19bb-p_f.jpg",
      "https://photos.zillowstatic.com/fp/bf947aa418f6ad34cd73e1d161da7cd2-p_f.jpg",
    ],
  },
  {
    address: {
      streetAddress: "2567 E Ontario St",
      city: "Philadelphia",
      state: "PA",
      zipcode: "19134",
      neighborhood: null,
      community: null,
      subdivision: null,
    },
    bedrooms: 4,
    bathrooms: 2,
    price: 349900,
    yearBuilt: 1925,
    longitude: -75.09884643554688,
    latitude: 39.98819351196289,
    description:
      "This 2188 square foot single family home has 4 bedrooms and 2.0 bathrooms. This home is located at 2567 E Ontario St, Philadelphia, PA 19134.",
    livingArea: 2188,
    currency: "USD",
    url:
      "https://www.zillow.com/homedetails/2567-E-Ontario-St-Philadelphia-PA-19134/10442725_zpid/",
    photos: [
      "https://photos.zillowstatic.com/fp/f2ce07b3ae79f931c6caacc6a537761c-cc_ft_1152.jpg",
    ],
  },
  {
    address: {
      streetAddress: "2669 Cedar St",
      city: "Philadelphia",
      state: "PA",
      zipcode: "19125",
      neighborhood: null,
      community: null,
      subdivision: null,
    },
    bedrooms: 3,
    bathrooms: 2,
    price: 335000,
    yearBuilt: 1900,
    longitude: -75.1185302734375,
    latitude: 39.98126220703125,
    description:
      "Lovely Row home on a quiet block with Off-street parking! This home boasts exposed brick walls, tons of character, hardwood flooring, pocket doors, and a great location. Within close proximity to tons of restaurants, bars, parks, shopping, and transportation, you really can't go wrong. Call for a showing today!",
    livingArea: 973,
    currency: "USD",
    url:
      "https://www.zillow.com/homedetails/2669-Cedar-St-Philadelphia-PA-19125/10323936_zpid/",
    photos: [
      "https://photos.zillowstatic.com/fp/d6c60038393da92482a90a88c6b8e720-p_f.jpg",
      "https://photos.zillowstatic.com/fp/0ee48e5e5be2646f370ba96f0b5c4b2b-p_f.jpg",
      "https://photos.zillowstatic.com/fp/35980b58338c57c25f9e3e91a9acb3e9-p_f.jpg",
      "https://photos.zillowstatic.com/fp/d56873dc9751f3b05fa0aae8edcc3e71-p_f.jpg",
      "https://photos.zillowstatic.com/fp/b6b0d52dd9f7a9511038d19f815ead3a-p_f.jpg",
      "https://photos.zillowstatic.com/fp/84ec11419aa0456a8acabec76caa5b95-p_f.jpg",
      "https://photos.zillowstatic.com/fp/789f2c4baf6d84adf6368136bebd59a9-p_f.jpg",
      "https://photos.zillowstatic.com/fp/3564f2d3be07f82ec2b22d9f4765c05c-p_f.jpg",
      "https://photos.zillowstatic.com/fp/1e9446768a2a9484cc0a4873e3ef4efa-p_f.jpg",
      "https://photos.zillowstatic.com/fp/95b0cf88fc3c2e8fba1597b974434ad7-p_f.jpg",
      "https://photos.zillowstatic.com/fp/a4be0f30fee8609062f87942606f1558-p_f.jpg",
      "https://photos.zillowstatic.com/fp/34427042ebc4c185dac93f32f41678b7-p_f.jpg",
      "https://photos.zillowstatic.com/fp/1ef579eaddf1d4add5a2a8eb4e3215e9-p_f.jpg",
      "https://photos.zillowstatic.com/fp/69bba218aa0dba57207f764d9a695f9f-p_f.jpg",
      "https://photos.zillowstatic.com/fp/e64270e5b61ddcb0618795ae1690d85d-p_f.jpg",
      "https://photos.zillowstatic.com/fp/a746ec15fcc868d1e92d2464bdde1117-p_f.jpg",
      "https://photos.zillowstatic.com/fp/b0dca4ffc4298410b824d8e6c3bf449e-p_f.jpg",
      "https://photos.zillowstatic.com/fp/ae8dec90127cb92ca9581aaf8d860554-p_f.jpg",
      "https://photos.zillowstatic.com/fp/c1f8ce6bbf37e032c2d9927e8a9348c0-p_f.jpg",
      "https://photos.zillowstatic.com/fp/e1b4a1a41e50af26aff7b089e13d6ab0-p_f.jpg",
      "https://photos.zillowstatic.com/fp/a93fdd0b5489f731e36c7c3a81c58212-p_f.jpg",
      "https://photos.zillowstatic.com/fp/cc5256d3a58aa768d928e0ba6250e507-p_f.jpg",
      "https://photos.zillowstatic.com/fp/646c9c4d0b021fc0ab50a333f7402404-p_f.jpg",
      "https://photos.zillowstatic.com/fp/04e9c686bda45c67f4a2df991d556b9e-p_f.jpg",
      "https://photos.zillowstatic.com/fp/bd2586cdd7c476d776fb22cb0357f145-p_f.jpg",
      "https://photos.zillowstatic.com/fp/6a27d21b2f6b71f44522a353f03437bb-p_f.jpg",
      "https://photos.zillowstatic.com/fp/dbd5aca9ee916806df8a2f33c839cb22-p_f.jpg",
    ],
  },
  {
    address: {
      streetAddress: "3156 Agate St",
      city: "Philadelphia",
      state: "PA",
      zipcode: "19134",
      neighborhood: null,
      community: null,
      subdivision: null,
    },
    bedrooms: 2,
    bathrooms: 2,
    price: 189000,
    yearBuilt: 1925,
    longitude: -75.10820770263672,
    latitude: 39.98884201049805,
    description:
      "updated two bedroom and two full bath.  kitchen and hard floor. new central heating and air system.  finish basement.",
    livingArea: 868,
    currency: "USD",
    url:
      "https://www.zillow.com/homedetails/3156-Agate-St-Philadelphia-PA-19134/10300883_zpid/",
    photos: [
      "https://photos.zillowstatic.com/fp/0647ed438a88992401b0770eea7ef6be-p_f.jpg",
      "https://photos.zillowstatic.com/fp/08764bbc8318cbd7b76e0a706ef0a21b-p_f.jpg",
      "https://photos.zillowstatic.com/fp/a6bf9b4463bb8994998c82c5e61f70ec-p_f.jpg",
      "https://photos.zillowstatic.com/fp/47d47afafc0dcc768967162131156275-p_f.jpg",
      "https://photos.zillowstatic.com/fp/95e99c919746f020d78e5ae3fa2e2625-p_f.jpg",
      "https://photos.zillowstatic.com/fp/4ca9cde6a51789ec05465030a0b48561-p_f.jpg",
      "https://photos.zillowstatic.com/fp/4325f75f05976ef91786884faa5be3f6-p_f.jpg",
    ],
  },
  {
    address: {
      streetAddress: "2663 Amber St",
      city: "Philadelphia",
      state: "PA",
      zipcode: "19125",
      neighborhood: null,
      community: null,
      subdivision: null,
    },
    bedrooms: 3,
    bathrooms: 3,
    price: 499900,
    yearBuilt: 2017,
    longitude: -75.1220474243164,
    latitude: 39.9857177734375,
    description:
      "This gorgeous contemporary townhome boasts 3 levels (plus a finished basement), of bright sunny rooms with clean finishes, tons of storage space, luxurious details, and best of all, secure off-street parking for 2 vehicles! Enter into the main level, which has a sunny living room, kitchen with breakfast bar, and a dining area. The kitchen features granite countertops, an island for prep and seating, pendant lighting over the bar, and espresso shaker cabinets. There's a  glass door to your private parking spaces out back, where you and your neighbors have exclusive access for added convenience and peace of mind. The finished basement has clean wall-to-wall carpeting and a full bathroom, making this a great guest bedroom or den with lots of privacy. The upper level has your laundry room with full size washer and dryer, the second full bathroom, with a window in the tub for a bright and airy atmosphere, and your first two bedrooms, each with modern ceiling fans, plush carpeting, great closet space, and large windows. The third floor is dedicated to the primary suite: a huge bedroom with hardwood floors, walk-in closet with built-in shelving, and a gorgeous primary bath, complete with dual sinks, an oversized stall shower, and a full tub with tile surround. Climb the last set of stairs to the private roof deck, where you can enjoy the nice weather with skyline views of the city and plenty of space for furniture! Located just a few blocks from the York-Dauphin MFL Septa station, you'll have quick access to everything Fishtown and Center City have to offer! Local favorites like Martha, Pizza Brain, Hello Donuts + Coffee, Salsa, Philadelphia Brewing, Thin & Crispy, Cook and Shaker, Flow State Coffee Bar, Urban Axes, Memphis Taproom, and much more are all within walking distance. Schedule your showing today!",
    livingArea: 1873,
    currency: "USD",
    url:
      "https://www.zillow.com/homedetails/2663-Amber-St-Philadelphia-PA-19125/246161891_zpid/",
    photos: [
      "https://photos.zillowstatic.com/fp/95545f82137c5e64727bc158ed5679eb-p_f.jpg",
      "https://photos.zillowstatic.com/fp/26135d77e75af330882b3076259a6426-p_f.jpg",
      "https://photos.zillowstatic.com/fp/a394a185903139b1f2988bbaa152b5e0-p_f.jpg",
      "https://photos.zillowstatic.com/fp/229d67e62e23543fe47d884a87e69ef8-p_f.jpg",
      "https://photos.zillowstatic.com/fp/0fa487ce8e0888fb66a5a5249c1389bc-p_f.jpg",
      "https://photos.zillowstatic.com/fp/033122d8d72efd08b968fd699ebd74c8-p_f.jpg",
      "https://photos.zillowstatic.com/fp/ef7069395cb780a3aae4a5aa5399b8fe-p_f.jpg",
      "https://photos.zillowstatic.com/fp/ad1a13d13954bb90e5a504a396216d16-p_f.jpg",
      "https://photos.zillowstatic.com/fp/c9529139cdb4b543f08d037f38164a18-p_f.jpg",
      "https://photos.zillowstatic.com/fp/75994f24c65bad5892d3446922a5ef14-p_f.jpg",
      "https://photos.zillowstatic.com/fp/f2a52030f22839b417c416a7c191b436-p_f.jpg",
      "https://photos.zillowstatic.com/fp/ce3fd05b718d203f2b614236ecdcf6a0-p_f.jpg",
      "https://photos.zillowstatic.com/fp/ba0eb3035fe556431ee00e7af48d1049-p_f.jpg",
      "https://photos.zillowstatic.com/fp/a990f6759acb28ae308dfa7a1dcaf02f-p_f.jpg",
      "https://photos.zillowstatic.com/fp/1e312bd76500326fbb2ba900d0157e76-p_f.jpg",
      "https://photos.zillowstatic.com/fp/bb811a7324949de329ff36249a7f146e-p_f.jpg",
      "https://photos.zillowstatic.com/fp/ecaf5ea43de8bc04ac1dfcc582e0f5b3-p_f.jpg",
      "https://photos.zillowstatic.com/fp/61403151091f14c392a60f65d85fcf97-p_f.jpg",
      "https://photos.zillowstatic.com/fp/00171d46378719a9bc480e247918f6df-p_f.jpg",
      "https://photos.zillowstatic.com/fp/e51b39d13d07f937a1437b0c268272f8-p_f.jpg",
      "https://photos.zillowstatic.com/fp/2edfd5b7d4a18977ad73db2f1d9d67e6-p_f.jpg",
      "https://photos.zillowstatic.com/fp/e5e9ced44f68de85a6162b2dca61c6a3-p_f.jpg",
      "https://photos.zillowstatic.com/fp/073fce90f1d11260e2c6e60b50ecc83b-p_f.jpg",
      "https://photos.zillowstatic.com/fp/5006e1f02da198bd742472b345fa8b47-p_f.jpg",
      "https://photos.zillowstatic.com/fp/9fc5d3976fbe53bf4e7518a0f188a217-p_f.jpg",
    ],
  },
  {
    address: {
      streetAddress: "3618 Belgrade St",
      city: "Philadelphia",
      state: "PA",
      zipcode: "19134",
      neighborhood: null,
      community: null,
      subdivision: null,
    },
    bedrooms: 2,
    bathrooms: 1,
    price: 223999,
    yearBuilt: 1946,
    longitude: -75.09461212158203,
    latitude: 39.99154281616211,
    description:
      "This is a must see!!!!! Total rehabbed home in the desirable Port Richmond area.  The owner's attention to detail will blow you away when you walk into  this beauty. Just unpack your bags and move right in. This home features new hard wood flooring, new heating, central air conditioner and hot water heater. When you walk in through the door you will see all that this house has to offer. If you are impressed with the first floor wait till you go down to the finished basement. The updates are too many to list.  Schedule your appointment today. Don't miss your opportunity to make this your home!!!!!!",
    livingArea: 717,
    currency: "USD",
    url:
      "https://www.zillow.com/homedetails/3618-Belgrade-St-Philadelphia-PA-19134/10444612_zpid/",
    photos: [
      "https://photos.zillowstatic.com/fp/8cfee08ca1a4a15c84f05c56e11a298d-p_f.jpg",
      "https://photos.zillowstatic.com/fp/ecac64c70389a663651fa684f791e19b-p_f.jpg",
      "https://photos.zillowstatic.com/fp/3878f5248177cb280674762196039dc0-p_f.jpg",
      "https://photos.zillowstatic.com/fp/4ad6d629125dd97660f386424baa092b-p_f.jpg",
      "https://photos.zillowstatic.com/fp/53186557295c8fb35c5921bc46e5e969-p_f.jpg",
      "https://photos.zillowstatic.com/fp/6ad9a4cbf20f5c1d1cb1a9a9870bdf26-p_f.jpg",
      "https://photos.zillowstatic.com/fp/86cfe0b25901906a08ae3edfda0f5fd0-p_f.jpg",
      "https://photos.zillowstatic.com/fp/7fb7d5b7ad696488e3e5a16ac47ccbd8-p_f.jpg",
      "https://photos.zillowstatic.com/fp/9c505cf21c6019f94e8af6369b85ea3a-p_f.jpg",
      "https://photos.zillowstatic.com/fp/0e85f8788841ec6dfeba6d061a93e59b-p_f.jpg",
      "https://photos.zillowstatic.com/fp/893694bd2b8bc5091269d7a8c6115d97-p_f.jpg",
      "https://photos.zillowstatic.com/fp/1fadd381d5ec0046b7bfc6fb3bd23d61-p_f.jpg",
      "https://photos.zillowstatic.com/fp/439df72ae12b2254c9d1659d83fc15ed-p_f.jpg",
      "https://photos.zillowstatic.com/fp/fe26168404fa75d7cf90290cabba78b8-p_f.jpg",
      "https://photos.zillowstatic.com/fp/b88d59959287c8f487db8cdd099413ef-p_f.jpg",
      "https://photos.zillowstatic.com/fp/ff4aec76c8b82904086a36f6f9c960fb-p_f.jpg",
      "https://photos.zillowstatic.com/fp/ee9b83d901fceb6703b32af0f8dac208-p_f.jpg",
      "https://photos.zillowstatic.com/fp/5d80c2472d05f2c08377bfcf4de4202f-p_f.jpg",
      "https://photos.zillowstatic.com/fp/7dc90a701faf51917c1d51c1b7dd8ec1-p_f.jpg",
      "https://photos.zillowstatic.com/fp/15ad2b33c8a3d57820ae1a81dfddbd2c-p_f.jpg",
      "https://photos.zillowstatic.com/fp/cab7da4d0b747942f04761ddf2f932e1-p_f.jpg",
      "https://photos.zillowstatic.com/fp/543aa5b9b24108206e4bbd08999a363a-p_f.jpg",
      "https://photos.zillowstatic.com/fp/6a34af5090e4316bcf85cff0d10b13d6-p_f.jpg",
      "https://photos.zillowstatic.com/fp/0ef18513c642a1f20829b5637309976b-p_f.jpg",
      "https://photos.zillowstatic.com/fp/ac30443d3870d90ae199212a387af9c0-p_f.jpg",
      "https://photos.zillowstatic.com/fp/758ee1e9d371da09cbbd24990344a449-p_f.jpg",
      "https://photos.zillowstatic.com/fp/f7b8a75d8974ffb80c1921e166cb9794-p_f.jpg",
      "https://photos.zillowstatic.com/fp/a838060108d881e988f69e6ee3a59495-p_f.jpg",
      "https://photos.zillowstatic.com/fp/312f1e5234f8c38b717d8bdafcbfdcb5-p_f.jpg",
    ],
  },
  {
    address: {
      streetAddress: "2943 Memphis St",
      city: "Philadelphia",
      state: "PA",
      zipcode: "19134",
      neighborhood: null,
      community: null,
      subdivision: null,
    },
    bedrooms: 3,
    bathrooms: 1,
    price: 165000,
    yearBuilt: 1925,
    longitude: -75.1126937866211,
    latitude: 39.98567199707031,
    description:
      "2943 Memphis St., Philadelphia PA 19134 is a three bedroom one bathroom, row home located in the Port Richmond neighborhood of Philadelphia. This home is great for entertainment and has great indoor and outdoor space. In the front of the home is a large beautifully tiled front porch and large yard in the rear of the property. The interior of this home features beautifully kept originalÂ  hardwood floors, high ceilings and modernize ceiling fans & lighting. The kitchen of this home is very beautiful and spacious with beautiful wood cabinets, nice tile floors an  abundance of countertop space great for cooking. The top floor of this home features three large bedrooms, a beautiful three-piece bathroom, and more well kept original hardwood floors. Asking price for this home is $165,000. Book your showing today!",
    livingArea: 1152,
    currency: "USD",
    url:
      "https://www.zillow.com/homedetails/2943-Memphis-St-Philadelphia-PA-19134/10298243_zpid/",
    photos: [
      `https://maps.googleapis.com/maps/api/streetview?size=1025x768&location=39.98567199707031,-75.1126937866211&key=${config.STREETVIEW_API_KEY}&signature=${config.STREETVIEW_SIGNATURE}`,
    ],
  },
  {
    address: {
      streetAddress: "2354 E Letterly St",
      city: "Philadelphia",
      state: "PA",
      zipcode: "19125",
      neighborhood: null,
      community: null,
      subdivision: null,
    },
    bedrooms: 2,
    bathrooms: 2,
    price: 299900,
    yearBuilt: 1920,
    longitude: -75.12352752685547,
    latitude: 39.979331970214844,
    description:
      "Here's the home you've been looking for! Newly renovated, move in ready, AND a large backyard in sought after Fishtown.  This fun and stylish townhome has wide plank white oak floors throughout. The open living and dining area provides plenty of space for your cozy nights at home. A convenient first floor powder room with contemporary porcelain tile is off the dining area. The beautiful and functional galley kitchen boasts rich dark cabinets with real wood countertops. Look out your kitchen window to enjoy a large back yard for dining, grilling, and gardening. Upstairs you will find a sunny office or nursery with plenty of closet space. The large full bath makes a statement with beautiful blue polished ceramic tile around the tub, and large hexagon porcelain tile on the floor. Towards the front of the home, you'll find the main bedroom overlooking a precious tree lined block. Please note the basement is not complete, but will have a new concrete slab prior to closing, providing a clean unfinished space for laundry and storage.  Last but definitely not least: LOCATION! Within a quick walk, you'll find Loco Pez, Green Eggs, Memphis Tap Room, Greensgrow Farms, CVS, and Fishtown Crossing. Come see this gem before it's gone!",
    livingArea: 1560,
    currency: "USD",
    url:
      "https://www.zillow.com/homedetails/2354-E-Letterly-St-Philadelphia-PA-19125/10326114_zpid/",
    photos: [
      "https://photos.zillowstatic.com/fp/fc4b00d5456b64ad4b834a0d9dc75b23-p_f.jpg",
      "https://photos.zillowstatic.com/fp/06d83ddbf603c8fb2e89eb86978e1928-p_f.jpg",
      "https://photos.zillowstatic.com/fp/f745124a5768a5a5308ac4558e1000d4-p_f.jpg",
      "https://photos.zillowstatic.com/fp/96f5db124650aa268e92d4e1b38331bb-p_f.jpg",
      "https://photos.zillowstatic.com/fp/2db8375d9d5c1206d657778684abef59-p_f.jpg",
      "https://photos.zillowstatic.com/fp/176eea015afa018abf9b6843a1fa5629-p_f.jpg",
      "https://photos.zillowstatic.com/fp/2f0843877805d08a552a23b649aeaba4-p_f.jpg",
      "https://photos.zillowstatic.com/fp/75b4b2350b429f25cac360e266f76732-p_f.jpg",
      "https://photos.zillowstatic.com/fp/2910a5a650625e3b646f38c6c95b8c86-p_f.jpg",
      "https://photos.zillowstatic.com/fp/c3aaa03937c54a7332feb9d558f824ea-p_f.jpg",
      "https://photos.zillowstatic.com/fp/7b901b91f220f4427da5b6dcb4b220d8-p_f.jpg",
      "https://photos.zillowstatic.com/fp/29a096b70a971efdc88a60d2ee4a4b70-p_f.jpg",
      "https://photos.zillowstatic.com/fp/5f81425c7d3297e804183b6bf66cb6b5-p_f.jpg",
      "https://photos.zillowstatic.com/fp/d0460c95d2ff73147f73f4ac58f617e3-p_f.jpg",
      "https://photos.zillowstatic.com/fp/776d6da092068ad211cbf3820255b0bb-p_f.jpg",
      "https://photos.zillowstatic.com/fp/968c29a0aad84bca39fdc8add48524ab-p_f.jpg",
      "https://photos.zillowstatic.com/fp/1dccd93ac663326a8d3b232bd4fe99fd-p_f.jpg",
      "https://photos.zillowstatic.com/fp/fd95047788391485d38feaafeb322f39-p_f.jpg",
      "https://photos.zillowstatic.com/fp/e2c666ba0d4a12600592b4e762c43e94-p_f.jpg",
      "https://photos.zillowstatic.com/fp/133e0f9618f9ff42274ab5c59ff1b254-p_f.jpg",
      "https://photos.zillowstatic.com/fp/b7ed9aa9d3a4093c824fe58b5efc9e58-p_f.jpg",
      "https://photos.zillowstatic.com/fp/9e9d768bbd9cf2f1c0f7620083692124-p_f.jpg",
      "https://photos.zillowstatic.com/fp/0215a0c95d9064742e17a0b206b33863-p_f.jpg",
      "https://photos.zillowstatic.com/fp/f7b1fb56947ea98fe64de0e771aa6564-p_f.jpg",
      "https://photos.zillowstatic.com/fp/9d27c23e144b60a6356d1190981467e8-p_f.jpg",
      "https://photos.zillowstatic.com/fp/2c3427284eec8bf186d88e3b0f7a26e9-p_f.jpg",
    ],
  },
];

export const savedProps = [
  {
    address: {
      streetAddress: "332 E Somerset St",
      city: "Philadelphia",
      state: "PA",
      zipcode: "19134",
      neighborhood: null,
      community: null,
      subdivision: null,
    },
    bedrooms: 3,
    bathrooms: 1,
    price: 80000,
    yearBuilt: 1935,
    longitude: -75.12525177001953,
    latitude: 39.99158477783203,
    description:
      "A Great Opportunity to own a Property near a Developing Neighborhood and local to the Subway Line.  \nThis Affordable Rowhome, with very little investment, could be move-in ready or a great income-producing property! Schedule your appointment today!",
    livingArea: 1065,
    currency: "USD",
    url:
      "https://www.zillow.com/homedetails/332-E-Somerset-St-Philadelphia-PA-19134/10203588_zpid/",
    photos: [
      "https://photos.zillowstatic.com/fp/7a1264a3d683bd48ba1a96ec3ff8b5cb-p_f.jpg",
      "https://photos.zillowstatic.com/fp/62ff661fa1557f45ec3c111da9e06e25-p_f.jpg",
      "https://photos.zillowstatic.com/fp/ab1204ce7b773ffd46477000ec60ccb9-p_f.jpg",
      "https://photos.zillowstatic.com/fp/b2f0c47f3534119fb041e5683f28b6f4-p_f.jpg",
      "https://photos.zillowstatic.com/fp/c7bacbed57c8eea701e5a1b085f8b48b-p_f.jpg",
      "https://photos.zillowstatic.com/fp/0170fdf237dcc5e64f1f2a49fa4a31f8-p_f.jpg",
      "https://photos.zillowstatic.com/fp/6221c6753da1d27c0bd3b98373863b21-p_f.jpg",
    ],
  },
  {
    address: {
      streetAddress: "3033 Weikel St",
      city: "Philadelphia",
      state: "PA",
      zipcode: "19134",
      neighborhood: null,
      community: null,
      subdivision: null,
    },
    bedrooms: 3,
    bathrooms: 2,
    price: 260000,
    yearBuilt: 1925,
    longitude: -75.1115951538086,
    latitude: 39.987884521484375,
    description:
      "Welcome to 3033 Weikel St - This soon to be completely renovated 3 bed 1.5 bath home is located in the heart of Port Richmond, surrounded by top eateries and bars  such as Tacconelli's Pizza,  Her Daughter's Cafe, Gaul House, Em's Place, Nemi, Tin Can Bar  and much more!  This home will feature vinyl hardwood floors, quartz countertops, white cabinetry,  tile backsplash, ample lighting, and much more! There's still some time to customize the finishing touches!  Prefer matte black hardware over  gold?!  Let us know, and the builder will be happy to install your preference! This  home won't last  long. Make your offer today!",
    livingArea: 904,
    currency: "USD",
    url:
      "https://www.zillow.com/homedetails/3033-Weikel-St-Philadelphia-PA-19134/10301177_zpid/",
    photos: [
      "https://photos.zillowstatic.com/fp/b3d1df88c8f7056868e9a4d72176bde2-p_f.jpg",
      "https://photos.zillowstatic.com/fp/9d836faf09d9ae98706a376e7cef3704-p_f.jpg",
      "https://photos.zillowstatic.com/fp/f39bc2b16f09081687cb120206417c8a-p_f.jpg",
      "https://photos.zillowstatic.com/fp/f017ec58e08bb5fdca964bc7590d5446-p_f.jpg",
    ],
  },
  {
    address: {
      streetAddress: "1216 E Susquehanna Ave",
      city: "Philadelphia",
      state: "PA",
      zipcode: "19125",
      neighborhood: null,
      community: null,
      subdivision: null,
    },
    bedrooms: 2,
    bathrooms: 1,
    price: 320000,
    yearBuilt: 1925,
    longitude: -75.1253433227539,
    latitude: 39.97256088256836,
    description:
      "Calling all builders and developers or those looking to build their dream home.  An amazing opportunity to own this 20 foot wide by 120 foot deep property located in one of the most popular and rapidly developing neighborhoods in the country! Steps away from everything Fishtown has to offer and close to major thoroughfares.  Easy access to 95 and 676.  Bring your contractors / architects and turn this large lot into something special!",
    livingArea: 1031,
    currency: "USD",
    url:
      "https://www.zillow.com/homedetails/1216-E-Susquehanna-Ave-Philadelphia-PA-19125/10257539_zpid/",
    photos: [
      "https://photos.zillowstatic.com/fp/76ed77d99109b7b6fb44e6098aa99714-p_f.jpg",
      "https://photos.zillowstatic.com/fp/c3b737f18e48218f506e4ffa037e19bb-p_f.jpg",
      "https://photos.zillowstatic.com/fp/bf947aa418f6ad34cd73e1d161da7cd2-p_f.jpg",
    ],
  },
];

export const phillyMSAGeoJson = {
  "type": "FeatureCollection",
  "features": [{
    "type": "Feature",
    "geometry": {
      "bbox": [
        -76.23327974765701,
        39.290566999999996,
        -74.389708,
        40.608579999999996
      ],
      "type": "MultiPolygon",
      "coordinates": [
        [
          [
            [
              -75.581696,
              39.603414
            ],
            [
              -75.560188,
              39.592175
            ],
            [
              -75.564927,
              39.583248
            ],
            [
              -75.578977,
              39.585888
            ],
            [
              -75.58491,
              39.593318
            ],
            [
              -75.581696,
              39.603414
            ]
          ]
        ],
        [
          [
            [
              -76.23327974765701,
              39.7216465489498
            ],
            [
              -76.13576390585031,
              39.7219073562293
            ],
            [
              -76.119924,
              39.736363999999995
            ],
            [
              -76.102479,
              39.724033
            ],
            [
              -76.10204999999999,
              39.739883999999996
            ],
            [
              -76.067427,
              39.75965
            ],
            [
              -76.041365,
              39.797196
            ],
            [
              -76.04929299999999,
              39.802003
            ],
            [
              -76.029592,
              39.812998
            ],
            [
              -76.03763599999999,
              39.826917
            ],
            [
              -76.01738399999999,
              39.833487999999996
            ],
            [
              -76.022823,
              39.849844
            ],
            [
              -76.006734,
              39.853958
            ],
            [
              -76.00170899999999,
              39.874697999999995
            ],
            [
              -75.991284,
              39.868738
            ],
            [
              -75.995133,
              39.898916
            ],
            [
              -75.997165,
              39.928671
            ],
            [
              -75.985056,
              39.937871
            ],
            [
              -75.988005,
              39.939561999999995
            ],
            [
              -75.994644,
              39.95225
            ],
            [
              -75.97240699999999,
              39.98751
            ],
            [
              -75.951398,
              40.016421
            ],
            [
              -75.93587000000001,
              40.037465999999995
            ],
            [
              -75.936135,
              40.078585
            ],
            [
              -75.94243999999999,
              40.106515
            ],
            [
              -75.937998,
              40.111139
            ],
            [
              -75.873375,
              40.137107
            ],
            [
              -75.80786599999999,
              40.177654
            ],
            [
              -75.743178,
              40.21672100000001
            ],
            [
              -75.696782,
              40.241862999999995
            ],
            [
              -75.63882799999999,
              40.312772
            ],
            [
              -75.569274,
              40.397892
            ],
            [
              -75.559753,
              40.409723
            ],
            [
              -75.52969399999999,
              40.446995
            ],
            [
              -75.490104,
              40.422191999999995
            ],
            [
              -75.48405699999999,
              40.418451
            ],
            [
              -75.409733,
              40.487984
            ],
            [
              -75.333514,
              40.537057
            ],
            [
              -75.329489,
              40.539043
            ],
            [
              -75.29901699999999,
              40.558600999999996
            ],
            [
              -75.25654000000002,
              40.582730999999995
            ],
            [
              -75.196803,
              40.608579999999996
            ],
            [
              -75.195923,
              40.606788
            ],
            [
              -75.192291,
              40.602675999999995
            ],
            [
              -75.190369434453,
              40.59164200333671
            ],
            [
              -75.190146,
              40.590359
            ],
            [
              -75.19079599999999,
              40.58683800000001
            ],
            [
              -75.194656,
              40.581939999999996
            ],
            [
              -75.195114,
              40.579688999999995
            ],
            [
              -75.19487,
              40.578590999999996
            ],
            [
              -75.194046,
              40.576256
            ],
            [
              -75.192352,
              40.574256999999996
            ],
            [
              -75.186737,
              40.569406
            ],
            [
              -75.183151,
              40.567354
            ],
            [
              -75.17530700000002,
              40.564996
            ],
            [
              -75.168609,
              40.564111
            ],
            [
              -75.162871,
              40.564096
            ],
            [
              -75.158446,
              40.565286
            ],
            [
              -75.147368,
              40.573152
            ],
            [
              -75.14190599999999,
              40.575273
            ],
            [
              -75.136748,
              40.575731
            ],
            [
              -75.11729199999999,
              40.573211
            ],
            [
              -75.110903,
              40.570671
            ],
            [
              -75.100325,
              40.567811
            ],
            [
              -75.09570000000001,
              40.564401
            ],
            [
              -75.078503,
              40.548296
            ],
            [
              -75.068615,
              40.542223
            ],
            [
              -75.067257,
              40.539584
            ],
            [
              -75.066402,
              40.536532
            ],
            [
              -75.06509,
              40.526148
            ],
            [
              -75.06585299999999,
              40.519495
            ],
            [
              -75.066001,
              40.510715999999995
            ],
            [
              -75.065275,
              40.504681999999995
            ],
            [
              -75.062373,
              40.491689
            ],
            [
              -75.061937,
              40.486362
            ],
            [
              -75.062227,
              40.481391
            ],
            [
              -75.06432699999999,
              40.476794999999996
            ],
            [
              -75.067776,
              40.472826999999995
            ],
            [
              -75.06805,
              40.468578
            ],
            [
              -75.06730200000001,
              40.464954
            ],
            [
              -75.070568,
              40.456348000000006
            ],
            [
              -75.070568,
              40.455165
            ],
            [
              -75.067425,
              40.448322999999995
            ],
            [
              -75.062923,
              40.433406999999995
            ],
            [
              -75.061489,
              40.422847999999995
            ],
            [
              -75.06066217472039,
              40.4213505727709
            ],
            [
              -75.058848,
              40.418065
            ],
            [
              -75.056102,
              40.416066
            ],
            [
              -75.04647299999999,
              40.413792
            ],
            [
              -75.0444082558835,
              40.412463450655196
            ],
            [
              -75.043071,
              40.411603
            ],
            [
              -75.0417605522261,
              40.4100258484186
            ],
            [
              -75.041651,
              40.409894
            ],
            [
              -75.036616,
              40.406796
            ],
            [
              -75.02831499999999,
              40.403883
            ],
            [
              -75.02477499999999,
              40.403455
            ],
            [
              -75.01722099999999,
              40.404638
            ],
            [
              -75.003351,
              40.407849999999996
            ],
            [
              -74.998651,
              40.410092999999996
            ],
            [
              -74.99637799999999,
              40.410528
            ],
            [
              -74.988901,
              40.408773
            ],
            [
              -74.985467,
              40.405935
            ],
            [
              -74.98273499999999,
              40.404432
            ],
            [
              -74.969597,
              40.39977
            ],
            [
              -74.965508,
              40.39733700000001
            ],
            [
              -74.96399699999999,
              40.395246
            ],
            [
              -74.9540018446549,
              40.376648218234095
            ],
            [
              -74.95369699999999,
              40.376081
            ],
            [
              -74.948722,
              40.364768
            ],
            [
              -74.946006,
              40.35730600000001
            ],
            [
              -74.945088,
              40.347332
            ],
            [
              -74.943776,
              40.342563999999996
            ],
            [
              -74.9429542775691,
              40.3416426197195
            ],
            [
              -74.93971100000002,
              40.338006
            ],
            [
              -74.933111,
              40.333106
            ],
            [
              -74.92681,
              40.329406000000006
            ],
            [
              -74.91740999999999,
              40.322406
            ],
            [
              -74.90831,
              40.316907
            ],
            [
              -74.90330999999999,
              40.315607
            ],
            [
              -74.89640899999999,
              40.315107
            ],
            [
              -74.891609,
              40.313007
            ],
            [
              -74.887109,
              40.310307
            ],
            [
              -74.88060899999999,
              40.305606999999995
            ],
            [
              -74.868209,
              40.295207
            ],
            [
              -74.86469199999999,
              40.290684
            ],
            [
              -74.860492,
              40.284583999999995
            ],
            [
              -74.85650799999999,
              40.277407
            ],
            [
              -74.853118148928,
              40.269729984337
            ],
            [
              -74.85310799999999,
              40.269707000000004
            ],
            [
              -74.84660800000002,
              40.258807999999995
            ],
            [
              -74.842308,
              40.250507999999996
            ],
            [
              -74.83630699999999,
              40.246207999999996
            ],
            [
              -74.82390699999999,
              40.241507999999996
            ],
            [
              -74.819507,
              40.238507999999996
            ],
            [
              -74.795306,
              40.229408
            ],
            [
              -74.781206,
              40.221508
            ],
            [
              -74.77136,
              40.215399
            ],
            [
              -74.770406,
              40.214507999999995
            ],
            [
              -74.766905,
              40.207709
            ],
            [
              -74.7608412405874,
              40.1992389868522
            ],
            [
              -74.760605,
              40.198909
            ],
            [
              -74.756905,
              40.189409
            ],
            [
              -74.755605,
              40.186709
            ],
            [
              -74.754305,
              40.185209
            ],
            [
              -74.7519933317261,
              40.1835197039537
            ],
            [
              -74.751705,
              40.183309
            ],
            [
              -74.74410499999999,
              40.181008999999996
            ],
            [
              -74.737205,
              40.177609
            ],
            [
              -74.73380399999999,
              40.174509
            ],
            [
              -74.722304,
              40.160609
            ],
            [
              -74.721504,
              40.158409
            ],
            [
              -74.721604,
              40.15381
            ],
            [
              -74.7224939093264,
              40.1504283445596
            ],
            [
              -74.70626899999999,
              40.161792999999996
            ],
            [
              -74.710099,
              40.181283
            ],
            [
              -74.674668,
              40.173691
            ],
            [
              -74.677311,
              40.167279
            ],
            [
              -74.66202299999999,
              40.16493
            ],
            [
              -74.62338199999999,
              40.142711
            ],
            [
              -74.602419,
              40.136976
            ],
            [
              -74.58783500000001,
              40.138253999999996
            ],
            [
              -74.553105,
              40.07913
            ],
            [
              -74.50641,
              39.991301
            ],
            [
              -74.49685099999999,
              39.973137
            ],
            [
              -74.434223,
              39.855157
            ],
            [
              -74.389708,
              39.773283
            ],
            [
              -74.390399,
              39.596036999999995
            ],
            [
              -74.39811999999999,
              39.576575
            ],
            [
              -74.41883299999999,
              39.568583
            ],
            [
              -74.41739299999999,
              39.557255
            ],
            [
              -74.43835,
              39.551313
            ],
            [
              -74.436119,
              39.541264999999996
            ],
            [
              -74.446722,
              39.559061
            ],
            [
              -74.453446,
              39.548573
            ],
            [
              -74.475664,
              39.55146
            ],
            [
              -74.517023,
              39.574151
            ],
            [
              -74.52863099999999,
              39.56999
            ],
            [
              -74.542641,
              39.57912
            ],
            [
              -74.55355999999999,
              39.598161999999995
            ],
            [
              -74.575749,
              39.598395
            ],
            [
              -74.588718,
              39.611802
            ],
            [
              -74.621028,
              39.626691
            ],
            [
              -74.652998,
              39.626587
            ],
            [
              -74.658728,
              39.630981
            ],
            [
              -74.660479,
              39.66879900000001
            ],
            [
              -74.66621099999999,
              39.681291
            ],
            [
              -74.675895,
              39.691159
            ],
            [
              -74.723856,
              39.722063
            ],
            [
              -74.736216,
              39.729775
            ],
            [
              -74.80008699999999,
              39.67486400000001
            ],
            [
              -74.859173,
              39.623957999999995
            ],
            [
              -74.87725999999999,
              39.608352
            ],
            [
              -74.91188199999999,
              39.578461999999995
            ],
            [
              -74.985271,
              39.514967
            ],
            [
              -75.061854,
              39.568746
            ],
            [
              -75.074457,
              39.544564
            ],
            [
              -75.07969899999999,
              39.501433999999996
            ],
            [
              -75.073183,
              39.485375
            ],
            [
              -75.080309,
              39.460648
            ],
            [
              -75.083823,
              39.457353999999995
            ],
            [
              -75.177916,
              39.521060999999996
            ],
            [
              -75.23843400000001,
              39.559039
            ],
            [
              -75.270059,
              39.531236
            ],
            [
              -75.31801999999999,
              39.492039999999996
            ],
            [
              -75.342376,
              39.490621999999995
            ],
            [
              -75.368213,
              39.456479
            ],
            [
              -75.39983,
              39.46227100000001
            ],
            [
              -75.414305,
              39.453054
            ],
            [
              -75.40875299999999,
              39.423784999999995
            ],
            [
              -75.418911,
              39.410417
            ],
            [
              -75.40729390306001,
              39.3819544443261
            ],
            [
              -75.422099,
              39.386520999999995
            ],
            [
              -75.431803,
              39.391625
            ],
            [
              -75.442393,
              39.402291
            ],
            [
              -75.465212,
              39.43893
            ],
            [
              -75.47627899999999,
              39.438126
            ],
            [
              -75.483572,
              39.440824
            ],
            [
              -75.50567199999999,
              39.452926999999995
            ],
            [
              -75.508383,
              39.459131
            ],
            [
              -75.536431,
              39.460558999999996
            ],
            [
              -75.54289399999999,
              39.470447
            ],
            [
              -75.54436799999999,
              39.47960200000001
            ],
            [
              -75.542693,
              39.496567999999996
            ],
            [
              -75.528088,
              39.498114
            ],
            [
              -75.527141,
              39.500112
            ],
            [
              -75.52936799999999,
              39.501228999999995
            ],
            [
              -75.53014,
              39.505373
            ],
            [
              -75.529978,
              39.510816999999996
            ],
            [
              -75.526654,
              39.526638
            ],
            [
              -75.526787,
              39.531439999999996
            ],
            [
              -75.527676,
              39.535278
            ],
            [
              -75.531575,
              39.536825
            ],
            [
              -75.534014,
              39.540701999999996
            ],
            [
              -75.532342,
              39.543279999999996
            ],
            [
              -75.526003,
              39.548488000000006
            ],
            [
              -75.519026,
              39.555400999999996
            ],
            [
              -75.51475599999999,
              39.562612
            ],
            [
              -75.511932,
              39.567616
            ],
            [
              -75.512732,
              39.578
            ],
            [
              -75.515228,
              39.580752
            ],
            [
              -75.519628,
              39.583248
            ],
            [
              -75.521596,
              39.583088
            ],
            [
              -75.525677,
              39.584047999999996
            ],
            [
              -75.531133,
              39.587984
            ],
            [
              -75.534477,
              39.590384
            ],
            [
              -75.537213,
              39.592943999999996
            ],
            [
              -75.53954,
              39.594251
            ],
            [
              -75.539949,
              39.594384
            ],
            [
              -75.543965,
              39.596000000000004
            ],
            [
              -75.545405,
              39.596784
            ],
            [
              -75.553502,
              39.602000000000004
            ],
            [
              -75.55587,
              39.605824
            ],
            [
              -75.5583634034576,
              39.6055740017641
            ],
            [
              -75.561934,
              39.605216
            ],
            [
              -75.56769400000002,
              39.613744
            ],
            [
              -75.571759,
              39.623584
            ],
            [
              -75.570798,
              39.626768
            ],
            [
              -75.559446,
              39.629812
            ],
            [
              -75.556246,
              39.634912
            ],
            [
              -75.550645,
              39.637912
            ],
            [
              -75.547197,
              39.640527999999996
            ],
            [
              -75.542045,
              39.646012
            ],
            [
              -75.539245,
              39.646111999999995
            ],
            [
              -75.535144,
              39.647211999999996
            ],
            [
              -75.526744,
              39.655113
            ],
            [
              -75.526844,
              39.655713
            ],
            [
              -75.526344,
              39.656413
            ],
            [
              -75.522343,
              39.660813
            ],
            [
              -75.518343,
              39.663913
            ],
            [
              -75.51464299999999,
              39.668613
            ],
            [
              -75.511743,
              39.674313
            ],
            [
              -75.50934199999999,
              39.685313
            ],
            [
              -75.509742,
              39.686113
            ],
            [
              -75.529744,
              39.692613
            ],
            [
              -75.5300418313125,
              39.692284022030904
            ],
            [
              -75.55659985812079,
              39.6629486051198
            ],
            [
              -75.562246,
              39.656712000000006
            ],
            [
              -75.5846612667907,
              39.6515810004134
            ],
            [
              -75.58714700000002,
              39.651012
            ],
            [
              -75.611969,
              39.621968
            ],
            [
              -75.613153,
              39.62096
            ],
            [
              -75.613377,
              39.620287999999995
            ],
            [
              -75.614065,
              39.61832
            ],
            [
              -75.614929,
              39.615952
            ],
            [
              -75.61427300000001,
              39.61464
            ],
            [
              -75.613345,
              39.613056
            ],
            [
              -75.61366500000001,
              39.612559999999995
            ],
            [
              -75.61323300000001,
              39.60740800000001
            ],
            [
              -75.6134736873228,
              39.606868426370596
            ],
            [
              -75.613477,
              39.606860999999995
            ],
            [
              -75.613473,
              39.606832
            ],
            [
              -75.613793,
              39.606192
            ],
            [
              -75.611905,
              39.597567999999995
            ],
            [
              -75.611873,
              39.597408
            ],
            [
              -75.60464,
              39.58992
            ],
            [
              -75.603584,
              39.58896
            ],
            [
              -75.592224,
              39.583568
            ],
            [
              -75.591984,
              39.583248
            ],
            [
              -75.587744,
              39.580672
            ],
            [
              -75.58720000000001,
              39.580256
            ],
            [
              -75.586608,
              39.57888
            ],
            [
              -75.586016,
              39.578448
            ],
            [
              -75.57159899999999,
              39.567727999999995
            ],
            [
              -75.57078299999999,
              39.56728
            ],
            [
              -75.563034,
              39.562239999999996
            ],
            [
              -75.5641182880885,
              39.5606837276848
            ],
            [
              -75.564649,
              39.559922
            ],
            [
              -75.565636,
              39.558509
            ],
            [
              -75.56935899999999,
              39.540589
            ],
            [
              -75.569418,
              39.539124
            ],
            [
              -75.570362,
              39.527223
            ],
            [
              -75.560728,
              39.520472
            ],
            [
              -75.56693299999999,
              39.508272999999996
            ],
            [
              -75.576436,
              39.509195
            ],
            [
              -75.587729,
              39.496353
            ],
            [
              -75.587729,
              39.495369
            ],
            [
              -75.593068,
              39.479186
            ],
            [
              -75.593068,
              39.477996
            ],
            [
              -75.589901,
              39.462022
            ],
            [
              -75.589439,
              39.460812
            ],
            [
              -75.580185,
              39.450786
            ],
            [
              -75.578914,
              39.44788
            ],
            [
              -75.570985,
              39.442485999999995
            ],
            [
              -75.57182999999999,
              39.438897
            ],
            [
              -75.55588999999999,
              39.430351
            ],
            [
              -75.538512,
              39.416502
            ],
            [
              -75.535977,
              39.409383999999996
            ],
            [
              -75.523583,
              39.391583
            ],
            [
              -75.521682,
              39.387871
            ],
            [
              -75.512996,
              39.366153
            ],
            [
              -75.5123720823948,
              39.3656561384634
            ],
            [
              -75.535849,
              39.350617
            ],
            [
              -75.551626,
              39.35394
            ],
            [
              -75.55620499999999,
              39.335325
            ],
            [
              -75.584341,
              39.308718
            ],
            [
              -75.609385,
              39.308800999999995
            ],
            [
              -75.619136,
              39.310079
            ],
            [
              -75.64856999999999,
              39.295026
            ],
            [
              -75.66581099999999,
              39.290566999999996
            ],
            [
              -75.68486299999999,
              39.296898
            ],
            [
              -75.7603074473469,
              39.2967999434366
            ],
            [
              -75.76689499999999,
              39.377499
            ],
            [
              -75.7669076051649,
              39.3776534737305
            ],
            [
              -75.806073,
              39.375257999999995
            ],
            [
              -75.809817,
              39.379768
            ],
            [
              -75.816313,
              39.380654
            ],
            [
              -75.818829,
              39.382299
            ],
            [
              -75.823658,
              39.381412999999995
            ],
            [
              -75.83117299999999,
              39.374173
            ],
            [
              -75.842385,
              39.370978
            ],
            [
              -75.85543,
              39.364562
            ],
            [
              -75.867614,
              39.367813
            ],
            [
              -75.885864,
              39.360797
            ],
            [
              -75.92658899999999,
              39.370993999999996
            ],
            [
              -75.942337,
              39.367751999999996
            ],
            [
              -75.96406499999999,
              39.374725
            ],
            [
              -75.98269599999999,
              39.367492
            ],
            [
              -76.0024625818479,
              39.3764396702885
            ],
            [
              -76.00251366511979,
              39.3848053915462
            ],
            [
              -76.002515,
              39.38502400000001
            ],
            [
              -76.035568,
              39.386179999999996
            ],
            [
              -76.039932,
              39.388079999999995
            ],
            [
              -76.040962,
              39.394237
            ],
            [
              -76.03500199999999,
              39.401993999999995
            ],
            [
              -76.016531,
              39.408465
            ],
            [
              -76.00688,
              39.414527
            ],
            [
              -75.997396,
              39.430313999999996
            ],
            [
              -75.982585,
              39.435286999999995
            ],
            [
              -75.976747,
              39.444627
            ],
            [
              -75.9766982061703,
              39.4456901039194
            ],
            [
              -75.976601,
              39.447807999999995
            ],
            [
              -75.990005,
              39.458646
            ],
            [
              -75.9901278394547,
              39.4586242569264
            ],
            [
              -75.99827599999999,
              39.457181999999996
            ],
            [
              -76.002513,
              39.450204
            ],
            [
              -76.009452,
              39.449200999999995
            ],
            [
              -76.012312,
              39.453115
            ],
            [
              -76.002926,
              39.469642
            ],
            [
              -75.99656999999999,
              39.476658
            ],
            [
              -75.99413500000001,
              39.48874300000001
            ],
            [
              -75.98629799999999,
              39.510397999999995
            ],
            [
              -75.976057,
              39.529968
            ],
            [
              -75.966955,
              39.53865
            ],
            [
              -75.967185973007,
              39.5486269919204
            ],
            [
              -75.967221,
              39.55014
            ],
            [
              -75.970337,
              39.557637
            ],
            [
              -75.9805692697898,
              39.560143208527194
            ],
            [
              -75.992633,
              39.563098
            ],
            [
              -75.999669,
              39.56048800000001
            ],
            [
              -76.00019023082581,
              39.5596961541291
            ],
            [
              -76.00634099999999,
              39.550352000000004
            ],
            [
              -76.03041965569359,
              39.548784184972895
            ],
            [
              -76.04687636287069,
              39.547712652029496
            ],
            [
              -76.06337939727939,
              39.546638102616704
            ],
            [
              -76.063811,
              39.54661
            ],
            [
              -76.07571439122009,
              39.5430317138944
            ],
            [
              -76.085972,
              39.559011
            ],
            [
              -76.094472,
              39.56781
            ],
            [
              -76.106083,
              39.580525
            ],
            [
              -76.147474,
              39.619406999999995
            ],
            [
              -76.173575,
              39.660006
            ],
            [
              -76.212676,
              39.686405
            ],
            [
              -76.23327974765701,
              39.7216465489498
            ]
          ]
        ]
      ]
    },
    "properties": {
      "CSAFP": "428",
      "CBSAFP": "37980",
      "AFFGEOID": "310M300US37980",
      "GEOID": "37980",
      "NAME": "Philadelphia-Camden-Wilmington, PA-NJ-DE-MD",
      "LSAD": "M1",
      "ALAND": 11920554988,
      "AWATER": 693717226
    }
  }]}

  export const tractGeoJson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          bbox: [-75.130448, 39.97388, -75.117355, 39.984755],
          type: "Polygon",
          coordinates: [
            [
              [-75.130448, 39.978589],
              [-75.127623, 39.981429999999996],
              [-75.125062, 39.982372999999995],
              [-75.12267899999999, 39.983488],
              [-75.120252, 39.984755],
              [-75.118522, 39.982825],
              [-75.117355, 39.981480999999995],
              [-75.11769699999999, 39.980903999999995],
              [-75.118611, 39.978879],
              [-75.11976299999999, 39.976369],
              [-75.120431, 39.975697],
              [-75.122592, 39.97388],
              [-75.123391, 39.974402999999995],
              [-75.124321, 39.975003],
              [-75.12520099999999, 39.975558],
              [-75.12613600000002, 39.976082],
              [-75.12862799999999, 39.977533],
              [-75.130448, 39.978589],
            ],
          ],
        },
        properties: {
          STATEFP: "42",
          COUNTYFP: "101",
          TRACTCE: "016000",
          AFFGEOID: "1400000US42101016000",
          GEOID: "42101016000",
          NAME: "160",
          LSAD: "CT",
          ALAND: 721031,
          AWATER: 0,
        },
      },
    ],
  };

  export const countyGeoJson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          bbox: [-75.280266, 39.8670515524317, -74.955777, 40.137992],
          type: "Polygon",
          coordinates: [
            [
              [-75.280266, 39.974964],
              [-75.276482, 39.976959],
              [-75.275871, 39.977244999999996],
              [-75.273552, 39.978279],
              [-75.271309, 39.979275],
              [-75.269257, 39.980185999999996],
              [-75.267973, 39.980757],
              [-75.26556599999999, 39.981832],
              [-75.25947599999999, 39.984955],
              [-75.255676, 39.987499],
              [-75.253999, 39.988304],
              [-75.251438, 39.989504],
              [-75.25, 39.99018],
              [-75.249214, 39.990547],
              [-75.247948, 39.991138],
              [-75.237331, 39.996128],
              [-75.235298, 39.99707],
              [-75.230896, 39.99913],
              [-75.227462, 40.000746],
              [-75.226402, 40.001255],
              [-75.220665, 40.003944],
              [-75.213745, 40.00716],
              [-75.208221, 40.009947],
              [-75.205771, 40.011629],
              [-75.207599, 40.012719],
              [-75.20800799999999, 40.012997],
              [-75.21221899999999, 40.015460999999995],
              [-75.21475199999999, 40.017784],
              [-75.21805599999999, 40.020942999999995],
              [-75.219583, 40.021713],
              [-75.22215299999999, 40.022614],
              [-75.223694, 40.023712],
              [-75.226652, 40.025267],
              [-75.228149, 40.026030999999996],
              [-75.232094, 40.027994],
              [-75.23483999999999, 40.030075],
              [-75.237762, 40.031934],
              [-75.24149299999999, 40.035140999999996],
              [-75.245598, 40.037655],
              [-75.249039, 40.041848],
              [-75.25129799999999, 40.043504999999996],
              [-75.254678, 40.045924],
              [-75.25509799999999, 40.046122],
              [-75.257655, 40.047610999999996],
              [-75.264431, 40.054094],
              [-75.255006, 40.062704000000004],
              [-75.24328799999999, 40.073494],
              [-75.232952, 40.083618],
              [-75.2305, 40.086022],
              [-75.22361, 40.092907],
              [-75.213388, 40.087042],
              [-75.212375, 40.085995],
              [-75.211868, 40.086086],
              [-75.209396, 40.08492700000001],
              [-75.200378, 40.079589999999996],
              [-75.19760099999999, 40.077991],
              [-75.18920299999999, 40.073174],
              [-75.18846099999999, 40.07275],
              [-75.18609599999999, 40.075123],
              [-75.182053, 40.079102],
              [-75.18090099999999, 40.080219],
              [-75.179756, 40.081333],
              [-75.17769600000001, 40.083377999999996],
              [-75.17643799999999, 40.084649],
              [-75.172951, 40.082581],
              [-75.16991399999999, 40.080818],
              [-75.163399, 40.07695],
              [-75.16128499999999, 40.075764],
              [-75.158417, 40.074169],
              [-75.154076, 40.071732],
              [-75.151596, 40.070327999999996],
              [-75.148331, 40.068484999999995],
              [-75.146683, 40.067547],
              [-75.14518699999999, 40.066691999999996],
              [-75.14311699999999, 40.065493],
              [-75.140897, 40.064239],
              [-75.139427, 40.063358],
              [-75.136719, 40.061820999999995],
              [-75.13512399999999, 40.060989],
              [-75.130135, 40.057795999999996],
              [-75.129021, 40.057091],
              [-75.12631999999999, 40.055481],
              [-75.124916, 40.054684],
              [-75.122147, 40.053177],
              [-75.118652, 40.051186],
              [-75.117104, 40.050304],
              [-75.112363, 40.047563],
              [-75.110985, 40.046769],
              [-75.109431, 40.045874],
              [-75.10940599999999, 40.04584],
              [-75.10789, 40.048195],
              [-75.10323, 40.051355],
              [-75.102413, 40.051792],
              [-75.10093499999999, 40.052699],
              [-75.10089599999999, 40.052723],
              [-75.095078, 40.056090999999995],
              [-75.093504, 40.057241],
              [-75.087425, 40.063598999999996],
              [-75.089518, 40.064786],
              [-75.09037, 40.065284999999996],
              [-75.096733, 40.068988999999995],
              [-75.090317, 40.075115],
              [-75.086906, 40.078648],
              [-75.082456, 40.082884],
              [-75.077805, 40.08577],
              [-75.076363, 40.087264999999995],
              [-75.07127, 40.092532],
              [-75.069456, 40.094411],
              [-75.058342, 40.105892],
              [-75.054321, 40.108692],
              [-75.0493, 40.112199],
              [-75.048542, 40.112729],
              [-75.04385599999999, 40.115997],
              [-75.03784200000001, 40.120213],
              [-75.02489100000001, 40.129216],
              [-75.02057099999999, 40.132273999999995],
              [-75.01506599999999, 40.137992],
              [-75.00911700000002, 40.134355],
              [-75.003255, 40.131012],
              [-74.997885, 40.127815999999996],
              [-74.994187, 40.131516],
              [-74.993595, 40.132266],
              [-74.992288, 40.130682],
              [-74.993687, 40.126584],
              [-74.989014, 40.12607],
              [-74.98719299999999, 40.123286],
              [-74.98352299999999, 40.123671],
              [-74.982213, 40.122057000000005],
              [-74.982748, 40.120886999999996],
              [-74.980058, 40.119883],
              [-74.973219, 40.119890999999996],
              [-74.970119, 40.117201],
              [-74.96452599999999, 40.118372],
              [-74.96408, 40.117765999999996],
              [-74.963129, 40.114978],
              [-74.96345, 40.110012999999995],
              [-74.965194, 40.107777],
              [-74.96349099999999, 40.106739999999995],
              [-74.96115600000002, 40.103446],
              [-74.960807, 40.101572],
              [-74.96163, 40.097804],
              [-74.961049, 40.097431],
              [-74.958749, 40.096928999999996],
              [-74.956063, 40.095569999999995],
              [-74.955777, 40.095103],
              [-74.95650599999999, 40.093115],
              [-74.95803599999999, 40.089665],
              [-74.958392, 40.084508],
              [-74.95828399999999, 40.084145],
              [-74.95884099999999, 40.082502999999996],
              [-74.96273699999999, 40.077839],
              [-74.964883, 40.077273],
              [-74.96987899999999, 40.076657],
              [-74.970537, 40.076281],
              [-74.97102799999999, 40.075981],
              [-74.971268, 40.073744],
              [-74.97715199999999, 40.068222999999996],
              [-74.98052500000001, 40.065702],
              [-74.980688, 40.065007],
              [-74.980718, 40.06472],
              [-74.980378, 40.060348999999995],
              [-74.984302, 40.05585],
              [-74.983904, 40.054994],
              [-74.982202, 40.053804],
              [-74.97969499999999, 40.053399],
              [-74.97431985326, 40.04889913332],
              [-74.974713, 40.048711000000004],
              [-74.983540729443, 40.0429537851459],
              [-74.983913, 40.042711],
              [-74.9869972233608, 40.0393469567366],
              [-74.988884, 40.037289],
              [-74.990215350337, 40.0363725639031],
              [-75.007469, 40.024496],
              [-75.01111499999999, 40.021311],
              [-75.0137957681416, 40.0202143221239],
              [-75.0138034952734, 40.0202111610245],
              [-75.015515, 40.019511],
              [-75.0211950666745, 40.018207388098595],
              [-75.0304678308145, 40.0160792289794],
              [-75.034216, 40.015218999999995],
              [-75.042889, 40.012032],
              [-75.04296644895139, 40.0119934506647],
              [-75.043218536113, 40.01186797714529],
              [-75.04709, 40.009941],
              [-75.04712071178679, 40.00991486944879],
              [-75.053405, 40.004568],
              [-75.05372388596429, 40.004080276035694],
              [-75.058089, 39.997403999999996],
              [-75.059017, 39.992512],
              [-75.0597922716131, 39.9915372740575],
              [-75.06417499999999, 39.986027],
              [-75.0653927507667, 39.98503032350259],
              [-75.0676640966386, 39.9831713248389],
              [-75.0686043012039, 39.982401807940505],
              [-75.06880199999999, 39.98224],
              [-75.075605, 39.978041],
              [-75.085831, 39.975102],
              [-75.093718, 39.974412],
              [-75.09371907941859, 39.9744116926869],
              [-75.1075409360153, 39.970476576233395],
              [-75.108119, 39.970312],
              [-75.11277110412401, 39.968258553445004],
              [-75.1189552837088, 39.9655288462145],
              [-75.11922, 39.965412],
              [-75.1238629772435, 39.96281916855229],
              [-75.1254163616611, 39.9619516941373],
              [-75.12692, 39.961112],
              [-75.13011999999999, 39.958712],
              [-75.1302170895175, 39.9585892103161],
              [-75.13351999999999, 39.954412],
              [-75.13397386650959, 39.95290598840011],
              [-75.13571999999999, 39.947112],
              [-75.13611999999999, 39.933912],
              [-75.13588759459459, 39.932517567567594],
              [-75.13534618918919, 39.9292691351351],
              [-75.135022972973, 39.9273298378378],
              [-75.13502, 39.927312],
              [-75.13282, 39.921611999999996],
              [-75.13011999999999, 39.917013],
              [-75.12792, 39.911812999999995],
              [-75.1290044117647, 39.9074753529412],
              [-75.13082, 39.900213],
              [-75.13342, 39.896212999999996],
              [-75.1359848633979, 39.893195957332196],
              [-75.1400064847137, 39.888465333817194],
              [-75.14022100000001, 39.888213],
              [-75.142421, 39.886413],
              [-75.14532381843439, 39.8842842664814],
              [-75.145421, 39.884212999999995],
              [-75.15072099999999, 39.882712999999995],
              [-75.17453546617179, 39.8821969289728],
              [-75.18302299999999, 39.882013],
              [-75.1888215120831, 39.880816481633595],
              [-75.189323, 39.880713],
              [-75.19501799999999, 39.877521],
              [-75.1952172947686, 39.877343945193196],
              [-75.199857, 39.873222],
              [-75.1999409685009, 39.87318194126829],
              [-75.204087, 39.871204],
              [-75.21151593114269, 39.8670515524317],
              [-75.21603900000001, 39.871114999999996],
              [-75.21578699999999, 39.875052],
              [-75.215722, 39.876087],
              [-75.21977, 39.875479],
              [-75.22376299999999, 39.875858],
              [-75.22998500000001, 39.876847],
              [-75.234122, 39.877181],
              [-75.23637, 39.876187],
              [-75.24047, 39.872381000000004],
              [-75.24174599999999, 39.872585],
              [-75.24682399999999, 39.875142],
              [-75.248431, 39.876484999999995],
              [-75.253515, 39.876014999999995],
              [-75.261245, 39.876484],
              [-75.26253899999999, 39.876577999999995],
              [-75.263328, 39.879712],
              [-75.264928, 39.881112],
              [-75.264433, 39.882166999999995],
              [-75.261937, 39.883],
              [-75.26460200000001, 39.884737],
              [-75.262844, 39.885682],
              [-75.265153, 39.887142],
              [-75.264878, 39.887927],
              [-75.262485, 39.888405999999996],
              [-75.261743, 39.891774],
              [-75.259112, 39.892436],
              [-75.256789, 39.895188999999995],
              [-75.257362, 39.895844],
              [-75.255093, 39.898756],
              [-75.255597, 39.899595999999995],
              [-75.251288, 39.904402999999995],
              [-75.253492, 39.905584999999995],
              [-75.2525, 39.906614],
              [-75.25031899999999, 39.907626],
              [-75.249929, 39.909352],
              [-75.251498, 39.910050999999996],
              [-75.2472, 39.913578],
              [-75.24694, 39.916871],
              [-75.24734099999999, 39.918541],
              [-75.247484, 39.919242],
              [-75.24745899999999, 39.921343],
              [-75.247759, 39.921707999999995],
              [-75.247321, 39.922177999999995],
              [-75.245679, 39.924882],
              [-75.24433599999999, 39.926249999999996],
              [-75.24364299999999, 39.930897],
              [-75.243369, 39.931908],
              [-75.24190899999999, 39.933544],
              [-75.237617, 39.932525999999996],
              [-75.23683299999999, 39.93376800000001],
              [-75.234979, 39.936222],
              [-75.235002, 39.938127],
              [-75.24020999999999, 39.938283],
              [-75.23941099999999, 39.940608],
              [-75.24036699999999, 39.942170999999995],
              [-75.24302600000001, 39.942211],
              [-75.24354199999999, 39.942305999999995],
              [-75.246822, 39.942969999999995],
              [-75.247028, 39.943414],
              [-75.247208, 39.943903999999996],
              [-75.250118, 39.94697],
              [-75.251609, 39.951465999999996],
              [-75.251577, 39.952127],
              [-75.250816, 39.953475],
              [-75.24900600000001, 39.956907],
              [-75.249499, 39.957189],
              [-75.250883, 39.959024],
              [-75.24854599999999, 39.960269],
              [-75.247688, 39.962817],
              [-75.248056, 39.964074],
              [-75.25031299999999, 39.965069],
              [-75.25413999999999, 39.965404],
              [-75.25711, 39.963719],
              [-75.259078, 39.965692],
              [-75.260491, 39.966313],
              [-75.26544799999999, 39.965257],
              [-75.267386, 39.966215],
              [-75.27000199999999, 39.967479],
              [-75.27059799999999, 39.96866],
              [-75.27539399999999, 39.969575],
              [-75.27754, 39.971126999999996],
              [-75.280266, 39.974964],
            ],
          ],
        },
        properties: {
          STATEFP: "42",
          PLACEFP: "60000",
          PLACENS: "01215531",
          AFFGEOID: "1600000US4260000",
          GEOID: "4260000",
          NAME: "Philadelphia",
          LSAD: "25",
          ALAND: 347520038,
          AWATER: 22086063,
        },
      },
    ],
  };