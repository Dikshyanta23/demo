import { nanoid } from 'nanoid';
import shipyard from '../assets/images/shipyard.jpeg';
import guiness from '../assets/images/guiness.jpeg';
import carlsberg from '../assets/images/carlsberg.webp';
import moretti from '../assets/images/moretti.jpeg';
import tequilla from '../assets/images/tequilla.jpeg';
import jackdaniels from '../assets/images/jack-daniels.jpeg';
import zubrowska from '../assets/images/zubrowska.jpeg';
import mixed from '../assets/images/mixed.jpeg';

const drinkmenu = [
  {
    id: nanoid(),
    image: shipyard,
    name: 'Shipyard',
    category: 'beer',
    description: 'American Pale Ale',
    price: 4,
  },
  {
    id: nanoid(),
    name: 'Guiness',
    image: guiness,
    category: 'beer',
    description: 'Irish draught',
    price: 5,
  },
  {
    id: nanoid(),
    name: 'Carlsberg',
    image: carlsberg,
    category: 'beer',
    description: 'Scandinavian pilsner',
    price: 3,
  },
  {
    id: nanoid(),
    name: 'Moretti',
    image: moretti,
    category: 'beer',
    description: 'Italian classic',
    price: 4,
  },
  {
    id: nanoid(),
    name: 'Tequilla',
    image: tequilla,
    category: 'Shots',
    description: 'a shots of tequilla',
    price: 2,
  },
  {
    id: nanoid(),
    name: 'Jack Daniels',
    image: jackdaniels,
    category: 'Shots',
    description: 'a shots of JD',
    price: 2,
  },
  {
    id: nanoid(),
    name: 'Vodka',
    image: zubrowska,
    category: 'Shots',
    description: 'a shots of zubrowska',
    price: 2,
  },
  {
    id: nanoid(),
    name: 'Mega deal',
    image: mixed,
    category: 'Shots',
    description: 'a shots of tequilla, JD and Vodka',
    price: 5,
  },
];

export default drinkmenu;
