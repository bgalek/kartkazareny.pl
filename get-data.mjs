import * as fs from 'fs';
import { GoogleSpreadsheet } from 'google-spreadsheet';

const doc = new GoogleSpreadsheet('1I66y4Jtntt3vz96yAkHluUTY4bfQvqjcGBGyZIYZ0Fc');

await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY,
    sheetsNames: ['Zapotrzebowanie']
});

await doc.loadInfo();

const sheet = doc.sheetsByIndex[0];
const rows = await sheet.getRows();

const items = rows.filter(it => it['Brakuje']).slice(1).map(it => ({
    name: it['PRZEDMIOT'],
    count: it['Brakuje'],
    priority: it['Priorytet']
}));

fs.writeFileSync('./data.json', JSON.stringify({ createdAt: new Date(), items }, null, 2));