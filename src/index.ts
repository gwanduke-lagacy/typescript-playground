// import PeopleParser from './readfile/oop/PropleParser';

// PeopleParser.getPeople()
//   .then(console.log)
//   .catch(console.error);

import fs from 'fs';
import { getPeople, getDefaultEncoding } from './readfile/fp';

getPeople(fs)(getDefaultEncoding())(__dirname + '/readfile/people.txt')
  .then(console.log)
  .catch(console.error);
