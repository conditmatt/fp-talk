const Locations = {
  Boston: 'in Boston',
  SF: 'in San Franscisco',
  withCats: 'with their multiple cats', // 🐈
};

const users = [
  {
    name: 'Matt',
    isFrontend: true,
    location: Locations.Boston,
  },
  {
    name: 'Lucas',
    isFrontend: true,
    location: Locations.withCats,
  },
  {
    name: 'Jake',
    isFrontend: true,
    location: Locations.SF,
  },
  {
    name: 'Evan',
    isFrontend: false,
    location: Locations.Boston,
  },
  {
    name: 'Sahil',
    isFrontend: false,
    location: Locations.SF,
  },
];

const logger = (value) => { console.log(value); return value; };

const userFormatter = ({ name, isFrontend, location, }) => `${name} is ${isFrontend ? 'a frontend' : 'not a frontend developer'} who works ${location}`;

const stringConcatonatorReducer = (sentence, nextString) => `${sentence}, ${nextString}`;

const isFrontendDeveloper = ({ isFrontend, }) => !!isFrontend;

// note: this is cheaty ❌
const sortByName = (A, B) => (A.name < B.name) ? -1 : A.name > B.name ? 1 : 0;

const logUsers = (users) => users.filter(isFrontendDeveloper)
                                 .sort(sortByName) // ❌ note: sorts are bad but I didn't want to make all of these actually pure
                                 .map(userFormatter)
                                 .map(logger);

const SFUsers = users.filter(({ location, }) => location === Locations.SF);

logUsers(users);
