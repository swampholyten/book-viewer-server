import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class DataService {
  async getData(): Promise<any> {
    const filePath = path.join(__dirname, '..', '..', 'data10.json');
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          try {
            resolve(JSON.parse(data));
          } catch (parseErr) {
            reject(parseErr);
          }
        }
      });
    });
  }
}
