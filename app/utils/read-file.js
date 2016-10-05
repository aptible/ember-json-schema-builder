import Ember from 'ember';
export function readFile(file) {
  const reader = new FileReader();

  return new Ember.RSVP.Promise((resolve) => {
    reader.onload = function(event) {
      resolve({
        file: file.name,
        type: file.type,
        data: event.target.result,
        size: file.size
      });
    };

    reader.readAsText(file);
  });
}