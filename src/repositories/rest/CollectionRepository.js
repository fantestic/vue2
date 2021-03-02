import axios from "axios"
import Normalizer from './services/Normalizer'

export default {
  getAll() {
    return new Promise(function (resolve) {
        axios.get(process.env.VUE_APP_FANTESTIC_API + '/collections')
        .then(function (payload) {
            resolve(Normalizer.extractHydraMember(payload.data));
        });
    })
  },
  getScenariosForCollection(collectionId) {
    return new Promise(function (resolve) {
        axios.get(process.env.VUE_APP_FANTESTIC_API + '/collections/'+collectionId+'/scenarios')
        .then(function (payload) {
            resolve(Normalizer.extractHydraMember(payload.data));
        });
    })
  },
  updateScenario(collectionId, scenario) {
    console.log(collectionId, scenario);
  },
  createScenario(scenario) {
    console.log(scenario);
  }
}