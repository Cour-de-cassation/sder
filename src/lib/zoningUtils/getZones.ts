import needle from 'needle';

export { getZones };

async function getZones(id: number, source: string, text: string) {
  const zoneData = JSON.stringify({
    arret_id: id,
    source,
    text,
  });
  const response = await needle('post', 'http://10.16.64.7:8090/zonage', zoneData, {
    json: true,
  });
  delete response.body.arret_id;
  return response.body;
}
