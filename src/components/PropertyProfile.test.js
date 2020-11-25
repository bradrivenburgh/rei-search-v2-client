import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PropertyProfile from './PropertyProfile';

const property = {
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
};


jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useLocation: () => ({
    pathname: '/property-profile',
    hash: '',
    search: '',
    state: {property}  
  })
}));

test('renders PropertyProfile', () => {
  render(<BrowserRouter><PropertyProfile /></BrowserRouter>);
});
