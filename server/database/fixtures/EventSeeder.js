const event = require("../data/event.json");
const AbstractSeeder = require("./AbstractSeeder");

class EventSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "event", truncate: true });
  }

  run() {
    event.forEach((e, index) => {
      this.insert({
        name: e.name,
        image: e.image,
        artist: e.artist,
        city: e.city,
        description: e.description,
        date: e.date,
        price: e.price,
        category_id: e.category_id,
        refName: `e${index + 1}`,
      });
    });
  }
}

module.exports = EventSeeder;
