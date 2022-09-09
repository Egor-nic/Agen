const documentList = require('../documentList')

class DocumentControler {

  async sortDocList(req, res) {
    try {
      const { title, type } = req.body
      if (type === 'decrease') {
        const result = [...documentList.sort((a, b) => b[title] > a[title] ? 1 : -1)]
        res.json(result)
      } else {
        const result = [...documentList.sort((a, b) => a[title] > b[title] ? 1 : -1)]
        res.json(result)
      }
    } catch (e) {
      res.status(500)
    }
  }

  async searchId(req, res) {
    try {
      const { id } = req.body
      const resultSearchId = documentList.filter(el => el.id === id)
      res.json(resultSearchId)
    } catch (error) {
      res.status(500)
    }
  }

  async searchName(req, res) {
    try {
      const { title } = req.body
      const resultSearchName = documentList.filter(el => el.title.includes(title))
      res.json(resultSearchName)
    } catch (error) {
      res.status(500)
    }
  }

  async searchDate(req, res) {
    try {
      const { start, end } = req.body
      const startDateNumber = new Date(start).getTime()
      const endDateNumber = new Date(end).getTime()
      const resultSearchDate = documentList.filter(el => new Date(el.date).getTime() > startDateNumber && new Date(el.date).getTime() < endDateNumber)
      res.json(resultSearchDate)
    } catch (error) {
      res.status(500)
    }
  }
}

module.exports = new DocumentControler()
