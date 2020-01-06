import { startCase } from 'lodash';

class ParseFile {
  _fileData = '';
  _names: string[] = [];

  get names() {
    return this._names;
  }

  constructor(data: any) {
    this._fileData = data;
  }

  parseFileContents() {
    let people = JSON.parse(this._fileData);
    this._names = [];
    for (let p = 0; p < people.length; p++) {
      const person = people[p];
      if (person.type === 'Human') {
        const name = this._personToName(person);
        this._names.push(name);
      }
    }
  }

  _personToName(person: any): string {
    const name = `${person.firstName} ${person.lastName}`;
    return startCase(name);
  }
}

export default ParseFile;
