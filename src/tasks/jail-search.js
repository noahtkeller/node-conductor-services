import jailSearch from '@noahtkeller/scrapers/jail-search';

const name = 'jail_search';

async function handler({ inputData: { inmateRid, facility } }, updater) {
  try {
    const outputData = await jailSearch({ inmateRid, facility });
    await updater.complete({ outputData });
  } catch (error) {
    console.log(error)
  }
}

const options = { pollingIntervals: 1000, autoAck: true, maxRunner: 1 };

const autoStart = true;

export default { name, handler, options, autoStart };
