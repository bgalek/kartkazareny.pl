import * as fs from 'fs';
import { GoogleSpreadsheet } from 'google-spreadsheet';

const doc = new GoogleSpreadsheet('1jTYPj_NZ5LcZmPePom_NYX5Aukr0auCm1VCwU0N_5Cw');

await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY,
    sheetsNames: ['Zapotrzebowanie']
});

await doc.loadInfo();

const sheet = [doc.sheetsByIndex[0], doc.sheetsByIndex[1]];
const rows = await Promise.all(sheet.map(it => it.getRows())).then(it => it.flat().filter(it => it['PRZEDMIOT']));

const items = rows.filter(it => it['Brakuje']).map(it => {
    return ({
        name: it['PRZEDMIOT'],
        count: parseInt(it['STAN MAGAZYNOWY']) - parseInt(it['ZAPOTRZEBOWANIE']),
        unit: it['Miara'],
        priority: parseInt(it['Priorytet']) || 9,
        category: it['Kategoria']
    });
});

fs.writeFileSync('./data.json', JSON.stringify({ createdAt: new Date(), items }, null, 2));