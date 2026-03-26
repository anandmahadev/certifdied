import { parse } from 'csv-parse';
import fs from 'fs';

interface Recipient {
  name: string;
  email: string;
  [key: string]: string;
}

export const parseCSV = (filePath: string): Promise<Recipient[]> => {
  return new Promise((resolve, reject) => {
    const recipients: Recipient[] = [];
    fs.createReadStream(filePath)
      .pipe(parse({ columns: true, skip_empty_lines: true }))
      .on('data', (row) => {
        // Basic mapping for common headers
        const recipient: Recipient = {
          name: row.name || row.Name || row.studentName || '',
          email: row.email || row.Email || row.studentEmail || '',
          ...row
        };
        if (recipient.name && recipient.email) {
          recipients.push(recipient);
        }
      })
      .on('end', () => resolve(recipients))
      .on('error', (err) => reject(err));
  });
};
