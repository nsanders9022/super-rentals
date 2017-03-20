import Ember from 'ember';

export default Ember.Route.extend({
  model() {
     return this.store.findAll('announcements');
   },
   actions: {
     destroyAnnouncement(announcement) {
       announcement.destroyRecord();
       this.transitionTo('index');
     }

   }
});
