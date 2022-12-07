const { API_KEY, SERVER_PREFIX } = require('./config')
const mailchimp = require('@mailchimp/mailchimp_marketing')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

mailchimp.setConfig({
  apiKey: API_KEY,
  server: SERVER_PREFIX,
})

const run = async (campaignId) => {
  try {
    await mailchimp.campaigns.send(campaignId)
    console.log('Success!')
  } catch (e) {
    console.log(e)
  }
}

rl.question('Do you want to send weekly to all subscriber?(y/n)', (answer) => {
  if (answer === 'y') {
    rl.question('Please type a campaign id you want to send campaign: ', (campaignId) => {
      run(campaignId)
      rl.close()
    })
  } else {
    rl.close()
  }
})
