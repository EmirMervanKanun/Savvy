class Settings {
    constructor(notifications, sound, banner, batch) {
      this.notifications = notifications;
      this.sound = sound;
      this.banner = banner;
      this.batch = batch;
    }
  
    toJSON() {
      return {
        notifications: this.notifications,
        sound: this.sound,
        banner: this.banner,
        batch: this.batch
      };
    }
  
    static fromJSON(json) {
      return new Settings(
        json.notifications,
        json.sound,
        json.banner,
        json.batch
      );
    }
  }
  
  export default Settings;
  