import { nanoid } from 'nanoid';
import omeara from '../assets/images/omeara.jpeg';
import grand from '../assets/images/the_grand.jpeg';
import brixton from '../assets/images/brixton_jamm.webp';
import duo from '../assets/images/duo.webp';


const clubmenu = [
  {
    id: nanoid(),
    image: omeara,
    name: 'Omeara',
    description:
      'Featuring clubbing events, a cracking lineup of musicians, and late-night libations, the hotspot also has a rooftop.',
    price: 20,
  },
  {
    id: nanoid(),
    name: 'The Grand',
    image: grand,
    description:
      "huge Victorian theatre converted into one of SW's biggest London clubs",
    price: 15,
  },
  {
    id: nanoid(),
    name: 'Duo',
    image: duo,
    description:
      'The Camden party den is keeping the energy high from morning till night.',
    price: 17,
  },
  {
    id: nanoid(),
    name: 'Brixton Jamm',
    image: brixton,
    description:
      'The Brixton Courtyard is offering up a whole range of crowd-pleasing events.',
    price: 18,
  },
];

export default clubmenu;
