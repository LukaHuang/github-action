const core = require('@actions/core');
const github = require('@actions/github');
const createLastCampaign = require('./createLastCampaign');
const sendTestMail = require('./sendTestMail');
const { getTitleList } = require('./weeklyCrawler')
const { EMAIL } = require('./config')

try {
  // `who-to-greet` input defined in action metadata file  
  (async () => {
    const titles = await getTitleList()
    const options = titles.map((e) => ({ title: e.name, value: e.href })).slice(0, 3)
    console.log(options[0])
    const selectedURL = options[0]['value']
    console.log('url:', selectedURL)
    const campaignId = await createLastCampaign.run(selectedURL)
    console.log('CampaignId:', campaignId)
    sendTestMail.run(campaignId, EMAIL)
  })()
} catch (error) {
  core.setFailed(error.message);
}