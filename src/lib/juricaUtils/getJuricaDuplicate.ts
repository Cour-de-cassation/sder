import { decisionType } from '../..';

export { getJuricaDuplicate };

async function getJuricaDuplicate(id: decisionType['_id']) {
  const { MongoClient } = require('mongodb');

  const client = new MongoClient(process.env.MONGO_URI, {
    useUnifiedTopology: true,
  });
  await client.connect();

  const database = client.db(process.env.MONGO_DBNAME);
  const rawJurica = database.collection(process.env.MONGO_JURICA_COLLECTION);
  const rawJurinet = database.collection(process.env.MONGO_JURINET_COLLECTION);

  const juricaDoc = await rawJurica.findOne({ _id: id });
  if (juricaDoc === null) {
    await client.close();
    throw new Error(`JuricaUtils.GetJurinetDuplicate: Jurica document ${id} not found.`);
  }

  if (!juricaDoc._portalis) {
    await client.close();
    throw new Error(`JuricaUtils.GetJurinetDuplicate: Jurica document ${id} has no Portalis ID.`);
  }

  const juricaDate = new Date(Date.parse(juricaDoc.JDEC_DATE));
  const juricaDateTop = new Date(Date.parse(juricaDoc.JDEC_DATE));
  const juricaDateBottom = new Date(Date.parse(juricaDoc.JDEC_DATE));
  juricaDateTop.setDate(juricaDateTop.getDate() + 1);
  juricaDateBottom.setDate(juricaDateBottom.getDate() - 1);

  let found = null;
  let jurinetDoc;
  const cursor = await rawJurinet.find({ _portalis: juricaDoc._portalis }, { allowDiskUse: true });
  while ((jurinetDoc = await cursor.next())) {
    const jurinetDate = jurinetDoc.DT_DECISION;
    if (
      found === null &&
      ((juricaDate.getFullYear() === jurinetDate.getFullYear() &&
        juricaDate.getMonth() === jurinetDate.getMonth() &&
        juricaDate.getDate() === jurinetDate.getDate()) ||
        (juricaDateTop.getFullYear() === jurinetDate.getFullYear() &&
          juricaDateTop.getMonth() === jurinetDate.getMonth() &&
          juricaDateTop.getDate() === jurinetDate.getDate()) ||
        (juricaDateBottom.getFullYear() === jurinetDate.getFullYear() &&
          juricaDateBottom.getMonth() === jurinetDate.getMonth() &&
          juricaDateBottom.getDate() === jurinetDate.getDate()))
    ) {
      found = jurinetDoc._id;
    }
  }
  await client.close();
  return found;
}
