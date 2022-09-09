const documentList = require('../documentList')

class IndexController {

  async getPage(req, res) {
    try {
      res.json(documentList)
    } catch (e) {
      res.status(500)
    }
  }
}


module.exports = new IndexController()
