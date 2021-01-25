import rawCollections from './collections/all.js'

const collections = rawCollections

export default {
  getAll() {
    return new Promise(function (resolve) {
      window.setTimeout(function () {
        resolve(collections.map(item => ({'id': item['id']})))
      }, 500)
    });
  },
  getScenariosForCollection(collectionId) {
    return new Promise(function(resolve) {
      window.setTimeout(function () {
        const collection = collections.filter(option => {
          return (option.id == collectionId)
        })
        resolve(collection[0]['scenarios'])
      }, 500)
    })
  },
  updateScenario(collectionId, scenario) {
    return new Promise(function (resolve) {
      window.setTimeout(function() {
        let collectionIndex
        collections.some((option, index) => {
          collectionIndex = index
          return (option.id == collectionId)
        })
        let scenarioIndex
        collections[collectionIndex]['scenarios'].some((option, index) => {
          scenarioIndex = index
          return (option.id == collectionId)
        })
        collections[collectionIndex]['scenarios'][scenarioIndex] = scenario
        console.info('Saving scenario', scenario)
        resolve()
      }, 500)
    })
  },
  createScenario(scenario) {
    return new Promise(function(resolve) {
      window.setTimeout(function () {
        console.info('Creating Scenario', scenario)
        resolve()
      })
    })
  }
}