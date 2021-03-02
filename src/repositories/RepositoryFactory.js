import ActionRepository from './rest/ActionRepository';
import CollectionRepository from './rest/CollectionRepository';

const repositories = {
    'action': ActionRepository,
    'collection': CollectionRepository
}

export default {
  get: name => repositories[name]
}