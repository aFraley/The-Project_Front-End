import Ember from 'ember';

export default Ember.Component.extend({

  init() {
    this._super(...arguments);
    this.showPerHour = true;
    this.showRetweet = false;
  },

  actions: {
    getPerHour() {
      this.set('showPerHour', true);
      this.set('showRetweet', false);
    },

    getRetweet() {
      this.set('showPerHour', false);
      this.set('showRetweet', true);
    }

  } // actions

});
