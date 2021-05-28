import needle from 'needle';

export { getZones };

async function getZones(id, source, text) {
  const zoneData = JSON.stringify({
    arret_id: id,
    source: source,
    text: text,
  });
  const response = await needle('post', 'http://10.16.64.7:8090/zonage', zoneData, {
    json: true,
  });
  delete response.body.arret_id;
  return response.body;
}
