import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';


export default Base.extend({
  restore(data) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      if (!Ember.isEmpty(data.token)) {
        resolve(data);
      } else {
        reject();
      }
    });
  },

  authenticate(username, password) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.post('http://localhost:8000/api-token-auth/', {username, password})
        .then((response) => {
          Ember.run(function () {
            resolve({
              token: response.token
            })
          })
        })
    });
  }
});
