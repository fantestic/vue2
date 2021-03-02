import axios from "axios"
import Normalizer from './services/Normalizer'

export default {
    getAll() {
        return new Promise(function (resolve) {
            axios.get(process.env.VUE_APP_FANTESTIC_API + '/actions')
            .then(function (payload) {
                resolve(Normalizer.extractHydraMember(payload.data));
            });
        })
    }
}