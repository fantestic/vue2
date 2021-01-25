import ActionRepository from './test/ActionRepository';
import CollectionRepository from './test/CollectionRepository';

const repositories = {
    'action': ActionRepository,
    'collection': CollectionRepository
}

export default {
  get: name => repositories[name]
}