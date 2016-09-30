import StorageArray from 'ember-local-storage/local/array';
import schemaSeed from '../utils/schema-seed';

const Storage = StorageArray.extend();

Storage.reopenClass({
  initialState() {
    return [ schemaSeed ];
  }
});

export default Storage;
