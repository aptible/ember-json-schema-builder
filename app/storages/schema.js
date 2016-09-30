import StorageObject from 'ember-local-storage/local/object';
import schemaSeed from '../utils/schema-seed';

const Storage = StorageObject.extend();

Storage.reopenClass({
  initialState() {
    return { schema: schemaSeed };
  }
});

export default Storage;