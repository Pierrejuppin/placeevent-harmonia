import { useEffect, useState } from "react";
import axios from "axios";
import { useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";

export default function UserProfilePage() {
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
    <div className="bg-cover h-screen bg-backgroundpc3 text-BrownComp">
      <h1 className="text-2xl font-bold mb-4 p-2">
        Vos réservations{" "}
        <span className="text-GreenComp">{currentUser?.first_name}</span> :
      </h1>
      {reservations.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
          {reservations.map((reservation) => (
            <div
              key={reservation.reservation_id}
              className="bg-WhiteComp rounded-lg overflow-hidden shadow-lg p-6"
            >
              <h3 className="text-xl font-bold mb-2">{reservation.name}</h3>
              <p className="text-gray-600 mb-1">{reservation.date}</p>
              <p className="text-gray-600 mb-1">{reservation.artist}</p>
              <p className="text-gray-600 mb-1">{reservation.city}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Aucune réservation trouvée.</p>
      )}
    </div>
  );
}
