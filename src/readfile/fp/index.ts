import { startCase } from 'lodash';

// Function for Default Encoding
export const getDefaultEncoding = () => 'utf8';

// Function to Read the File
const readFile = fsModule => encoding => filename =>
  new Promise((success, failure) =>
    fsModule.readFile(filename, encoding, (error, data) =>
      error ? failure(error) : success(data)
    )
  );

// Function to Parse the File
const parseFile = data =>
  new Promise((resolve, reject) => {
    try {
      const result = JSON.parse(data);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });

// Function to Filter Humans from Array of People Objects
const filterHumans = peeps => peeps.filter(person => person.type === 'Human');

// Function to Format String Names from Humans from a List
const formatNames = humans =>
  humans.map(human => `${human.firstName} ${human.lastName}`);

// Function to Fix Name Casing and Map from a List
const startCaseNames = names => names.map(startCase);

// Function to Provide a Public Interface
export const getPeople = fsModule => encoding => filename =>
  readFile(fsModule)(encoding)(filename)
    .then(parseFile)
    .then(filterHumans)
    .then(formatNames)
    .then(startCaseNames);
