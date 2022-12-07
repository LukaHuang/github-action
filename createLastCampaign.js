const mailchimp = require('@mailchimp/mailchimp_marketing')
const inlineCss = require('juice')
const { API_KEY, SERVER_PREFIX } = require('./config')
const { getWeeklyContent, getTitleList } = require('./weeklyCrawler')
const { composeWeeklyTemplate } = require('./weeklyTemplate')


mailchimp.setConfig({
  apiKey: API_KEY,
  server: SERVER_PREFIX,
})

const run = async (weeklyUrl) => {
  try {
    const { title, previewText, content } = await getWeeklyContent(weeklyUrl)
    const campaignSettings = {
      title,
      subject_line: title,
      preview_text: previewText,
      from_name: 'StarBugs Weekly',
      reply_to: 'starbugsweekly@gmail.com',
      status: 'save',
      delivery_status: {
        enabled: true
      }
    }
    const { id: campaignId } = await mailchimp.campaigns.create({
      type: 'regular',
      settings: campaignSettings,
    })

    const contentWithInlineStyle = inlineCss(composeWeeklyTemplate(content))

    await mailchimp.campaigns.setContent(campaignId, {
      html: contentWithInlineStyle,
    })
    console.log(`Success! The campaignId is: ${campaignId}`)
    return campaignId
  } catch (e) {
    console.log(e)
  }
}

module.exports = { run }