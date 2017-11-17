import Ember from 'ember';

export default Ember.Service.extend({
  tweetPerHour() {
    let data = [];
    Ember.$.ajax({
        method: 'GET',
        dataType: "json",
        url: 'http://localhost:8000/api/tweet-per-hour/',
        async: false,
        success: (res, status) => {
          console.log('Tweet per hour call:', status);
          data = res;
        }
    });
    return data;
  },

  maxRetweet() {
    let data = [];
    Ember.$.ajax({
        method: 'GET',
        dataType: "json",
        url: 'http://localhost:8000/api/max-retweet/',
        async: false,
        success: (res, status) => {
          console.log('Max Retweet per day call:', status);
          data = res;
        }
    });
    return data;
  },

  processTweetPerHour(data) {
    let tweetPerHour = [];

    let chart = {
      labels: [],
      data: []
    };

    let chartData = {
      labels: [],
      datasets: [{
        label: '',
        backgroundColor: '',
        data: []
      }]
    };

    tweetPerHour = data;

    let arrayLength = tweetPerHour.length;

    for (var i = 0; i < arrayLength; i++) {
      let date = new Date(tweetPerHour[i].tweet_hour);
      tweetPerHour[i].tweet_hour = date.toLocaleString();
      chart.labels.push(tweetPerHour[i].tweet_hour);
      chart.data.push(tweetPerHour[i].tweet_cnt);
    }

    chartData = {
      labels: chart.labels,
      datasets: [{
        label: 'Tweets Per Hour',
        backgroundColor: 'rgb(142, 142, 142)',
        data: chart.data,
      }]
    };

    return chartData;
  },

  processMaxRetweet(data) {

    let maxRetweet = data;
    let chart = {
      labels: [],
      data: []
    };
    let chartData = {
      labels: [],
      datasets: [{
        label: '',
        backgroundColor: '',
        data: []
      }]
    };
    let arrayLength = maxRetweet.length;

    console.log(maxRetweet);

    for (let i = 0; i < arrayLength; i++) {
      chart.labels.push(maxRetweet[i].tweet_day);
      chart.data.push(maxRetweet[i].tweet_retweet_cnt);
    }

    chartData = {
      labels: chart.labels,
      datasets: [{
        label: 'Max Retweet Per Day',
        backgroundColor: 'rgb(142, 142, 142)',
        data: chart.data
      }]
    };

    console.log(chart.labels);

    return chartData;
  }
});
