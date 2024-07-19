import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ListEventPage() {
  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/event`
        );
        setEvents(response.data);
      } catch (error) {
        console.error("Erreur :", error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/category`
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Erreur :", error);
      }
    };

    fetchEvents();
    fetchCategories();
  }, []);

  const filteredEvents =
    selectedCategory === "all"
      ? events
      : events.filter(
          (event) => event.category_id === Number(selectedCategory)
        );

  return (
    <div className="bg-cover bg-repeat bg-backgroundpc4 no-scrollbar">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Liste des événements</h1>

        <div className="mb-4">
          <label
            className="block mb-2 text-BrownComp font-bold"
            htmlFor="category"
          >
            Sélectionner votre catégorie:
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="block w-48 text-sm appearance-none bg-WhiteComp border border-BrownComp hover:border-BrownComp px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="all">Toutes les catégories</option>
            {categories.map((category) => (
              <option key={category.category_id} value={category.category_id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-10">
          {filteredEvents.map((event) => (
            <div
              key={event.event_id}
              className="bg-WhiteComp rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-32 object-cover"
              />
              <div className="py-2 px-2 text-center">
                <h2 className="font-bold mb-1 text-sm">{event.name}</h2>
                <p className="text-BrownComp mb-1 text-xs">{event.city}</p>
                <p className="text-BrownComp mb-1 text-xs">{event.date}</p>
                <p className="text-BrownComp mb-2 text-xs">
                  {event.description}
                </p>
                <div className="text-BrownComp mb-1 text-xs">
                  Artiste: {event.artist}
                </div>
                <div className="text-BrownComp mb-2 text-xs">
                  Prix: {event.price}€
                </div>
                <Link
                  to={`/reservation/${event.event_id}`}
                  className="text-GreenComp hover:text-GreenComp"
                >
                  <button
                    type="button"
                    className="text-GreenComp font-main bg-BrownComp text-xs mx-auto px-2 py-1 rounded-md flex justify-center items-center gap-4 lg:mx-0"
                  >
                    Réserver
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
