import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

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
    <div className="bg-backgroundpc3 bg-cover h-screen">
      <Navbar />
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
            className="block appearance-none w-full bg-WhiteComp border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="all">Toutes les catégories</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredEvents.map((event) => (
            <div
              key={event.event_id}
              className="bg-WhiteComp rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{event.name}</h2>
                <p className="text-BrownComp mb-2">{event.city}</p>
                <p className="text-BrownComp mb-2">{event.date}</p>
                <p className="text-BrownComp mb-4">{event.description}</p>
                <div className="text-BrownComp mb-2">
                  Artiste: {event.artist}
                </div>
                <div className="text-BrownComp mb-4">Prix: {event.price}€</div>
                <Link
                  to={`/reservation/${event.event_id}`}
                  className="text-GreenComp hover:text-GreenComp"
                >
                  Réserver
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
