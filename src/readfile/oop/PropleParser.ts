import ParseFile from './ParseFile';
import { ReadFile, DEFAULT_ENCODING } from './ReadFile';

class PeopleParser {
  static async getPeople() {
    try {
      const reader = new ReadFile();
      const fileData = await reader.readFile(
        __dirname + '/../people.txt',
        DEFAULT_ENCODING
      );
      const parser = new ParseFile(fileData);
      parser.parseFileContents();
      return parser.names;
    } catch (error) {
      console.error(error);
    }
  }
}

export default PeopleParser;
