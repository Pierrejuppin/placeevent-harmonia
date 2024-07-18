import { useState, useEffect } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";

export default function ReservationPage() {
  const { id } = useParams();
  const { currentUser } = useOutletContext();
  const [eventDetails, setEventDetails] = useState(null);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/event/${id}`
        );
        setEventDetails(response.data);
      } catch (error) {
        toast.error(
          "Erreur lors de la récupération des détails de l'événement"
        );
      }
    };

    fetchEventDetails();
  }, [id]);

  const handleReservation = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/reservation`, {
        userId: currentUser.user_id,
        eventId: id,
      });
      toast.success("Votre réservation est prise en compte !");
    } catch (error) {
      toast.error("Erreur lors de la réservation");
    }
  };

  if (!eventDetails) {
    return null;
  }

  return (
    <div className="bg-cover h-screen bg-backgroundpc3 no-scrollbar">
      <Navbar />
      <h1 className="text-3xl font-bold mb-4">Page de réservation</h1>
      <div className="bg-WhiteComp w-full max-w-xs mx-auto overflow-hidden rounded-lg shadow-lg ">
        <img
          src="https://plus.unsplash.com/premium_photo-1709311418063-35661a7e3343?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt={eventDetails.name}
          className="object-cover w-full h-40"
        />
        <div className="py-5 px-4 text-center">
          <h2 className="text-xl font-bold mb-2">{eventDetails.name}</h2>
          <p className="text-BrownComp mb-2">{eventDetails.city}</p>
          <p className="text-BrownComp mb-2">{eventDetails.date}</p>
          <p className="text-BrownComp mb-4">{eventDetails.description}</p>
          <div className="text-BrownComp mb-2">
            Artiste: {eventDetails.artist}
          </div>
          <div className="text-BrownComp mb-4">Prix: {eventDetails.price}€</div>
          <button
            type="button"
            onClick={handleReservation}
            className="bg-BrownComp text-GreenComp px-4 py-2 rounded"
          >
            Réserver
          </button>
        </div>
      </div>
    </div>
  );
}
