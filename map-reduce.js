const Locations = {
  Boston: 'in Boston',
  SF: 'in San Franscisco',
  withCats: 'with their multiple cats',
};

const users = [
  {
    name: 'Matt',
    isFrontend: true,
    location: Locations.Boston
  },
  {
    name: 'Lucas',
    isFrontend: true,
    location: Locations.withCats
  },
  {
    name: 'Jake',
    isFrontend: true,
    location: Locations.SF
  },
  {
    name: 'Evan',
    isFrontend: false,
    location: Locations.Boston
  },
  {
    name: 'Sahil',
    isFrontend: false,
    location: Locations.SF
  }
];

const logger = (value) => console.log(value);

const userFormatter = ({ name, isFrontend, location }) => `${name} is ${isFrontend ? 'a frontend': 'not a frontend developer'} who works ${location}`;

const logUsers = (users) => users.map(userFormatter)
                                 .map(logger);

logUsers(users);
