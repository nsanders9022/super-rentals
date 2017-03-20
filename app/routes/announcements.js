import Ember from 'ember';

export default Ember.Route.extend({
  model() {
     return this.store.findAll('announcements');
   },
   actions: {
     saveAnnouncement(params) {
      var newAnnouncement = this.store.createRecord('announcements', params);
      newAnnouncement.save();
      this.transitionTo('index');
    },
     destroyAnnouncement(announcement) {
       announcement.destroyRecord();
       this.transitionTo('index');
     }

   }
});
