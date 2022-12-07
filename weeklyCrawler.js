const axios = require('axios')
const cheerio = require('cheerio')

const getWeeklyContent = async (weeklyUrl) => {
  const response = await axios.get(weeklyUrl)
  const $ = cheerio.load(response.data)
  const title = $('#post h1').text()
  const [number, name] = title.split(' - ')
  return {
    title: `【StarBugs Weekly - ${number} 】${name}`,
    subject: `【StarBugs Weekly - ${number} 】${name}`,
    from: 'starbugsweekly@gmail.com',
    previewText: $('#post p').first().text(),
    content: $('#post').html(),
  }
}

const getTitleList = async () => {
  const baseUrl = 'https://starbugs.netlify.app'
  const response = await axios.get(baseUrl)
  const $ = cheerio.load(response.data)

  let titles = []
  $('a.article-title').each(function () {
    const name = $(this).attr('title')
    const href = baseUrl + $(this).attr('href')
    titles.push({ name, href })
  })
  return titles
}

module.exports = { getWeeklyContent, getTitleList }
