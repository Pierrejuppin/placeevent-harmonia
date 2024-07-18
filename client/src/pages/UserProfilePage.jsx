import { useEffect, useState } from "react";
import axios from "axios";
import { useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";

export default function UserProfile() {
  const { currentUser } = useOutletContext();
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/reservation/user/${currentUser.user_id}`
        );
        setReservations(response.data);
      } catch (error) {
        toast.error("Erreur lors de la récupération des réservations");
        setReservations([]);
      }
    };

    if (currentUser?.user_id) {
      fetchReservations();
    }
  }, [currentUser]);

  return (
    <>
      <Navbar />
      <div className="bg-cover h-screen bg-backgroundpc3 text-BrownComp container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">
          Profil de {currentUser?.first_name}
        </h1>

        <h2 className="text-xl font-semibold mb-2">Réservations</h2>
        {reservations.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reservations.map((reservation) => (
              <div
                key={reservation.reservation_id}
                className="bg-WhiteComp rounded-lg overflow-hidden shadow-lg p-6"
              >
                <h3 className="text-xl font-bold mb-2">{reservation.name}</h3>
                <p className="text-gray-600 mb-1">{reservation.date}</p>
                <p className="text-gray-600 mb-1">
                  Artiste: {reservation.artist}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p>Aucune réservation trouvée.</p>
        )}
      </div>
    </>
  );
}
