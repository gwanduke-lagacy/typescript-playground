import fs from 'fs';

export class ReadFile {
  readFile(filename: string, encoding = DEFAULT_ENCODING) {
    return new Promise((resolve, reject) => {
      fs.readFile(filename, encoding, (err, data) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(data);
      });
    });
  }
}

export const DEFAULT_ENCODING = 'utf8';
