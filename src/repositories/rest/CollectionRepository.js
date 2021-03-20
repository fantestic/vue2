import server from "./services/Server"
import Normalizer from './services/Normalizer'


export default {
  removeCollection(collectionId) {
    return new Promise(function (resolve) {
      server.write.delete('/collections/' + collectionId)
      .then(function (payload) {
        resolve(payload)
      })
    })
  },
  createCollection(collection) {
    return new Promise(function (resolve) {
      server.write.post('/collections', collection)
      .then(function (payload) {
        resolve(payload)
      })
    })
  },
  getAll() {
    return new Promise(function (resolve) {
      server.read.get('/collections')
        .then(function (payload) {
            resolve(Normalizer.extractHydraMember(payload.data));
        });
    })
  },
  getScenariosForCollection(collectionId) {
    return new Promise(function (resolve) {
      server.read.get( '/collections/'+collectionId+'/scenarios')
        .then(function (payload) {
            resolve(Normalizer.normalizeScenarioList(payload.data));
        });
    })
  },
  updateScenario(scenario) {
    return new Promise(function (resolve) {
      server.write.put('/scenarios/'+scenario.id, scenario)
      .then(function (payload) {
        resolve(payload)
      })
    })
  },
  createScenario(scenario) {
    return new Promise(function (resolve) {
      server.read.post('/scenarios', scenario)
      .then(function (payload) {
        resolve(payload)
      })
    })
  }
}