import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';


export default Ember.Route.extend(AuthenticatedRouteMixin, {

  tweetApi: Ember.inject.service(),

  model() {
    let modelData = {
      tweetPerHour: {},
      maxRetweet: {},
      barOptions: {
        responsive: true
      }
    };
    let tweetPerHour = this.get('tweetApi').tweetPerHour();
    modelData.tweetPerHour = this.get('tweetApi').processTweetPerHour(tweetPerHour);

    let maxRetweet = this.get('tweetApi').maxRetweet();
    modelData.maxRetweet = this.get('tweetApi').processMaxRetweet(maxRetweet);

    console.log(modelData.maxRetweet);

    return modelData;

  }

});
