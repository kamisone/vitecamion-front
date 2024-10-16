import { Calendar } from "@/components/calendar/Calendar";
import { BookingService } from "@/services/server/booking.service";

const bookingService = BookingService.instance;

export default async function Home() {
  const monthsNames = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];

  const response = await bookingService.list();

  if (!response.success) {
    return (
      <p>
        La réservation est actuellement indisponible{" "}
        {response.message +
          " - " +
          process.env.API_BASE_URL_SERVER +
          " - " +
          process.env.API_BASE_URL_BROWSER}
      </p>
    );
  }
  return (
    <main className="text-center h-full grid grid-rows-[auto_1fr] py-4 px-4">
      <section>
        <h1>
          <span className="text-[#0d47a1]">ViteCamion</span> arrive bientôt{" "}
          <span className="text-[#0d47a1]">!</span>
        </h1>
        <p className="text-lg text-[#455a64] mt-2">
          ViteCamion est actuellement en cours de création. Très bientôt, vous
          pourrez facilement réserver un camion pour la collecte de vos
          encombrants partout en Ile-De-France. Restez connectés, nous préparons
          un service rapide, efficace et éco-responsable pour vous simplifier la
          vie !
        </p>
      </section>

      <section className="border border-solid border-blue-500 flex flex-col items-center justify-center gap-2">
        <p>
          <span>{monthsNames[new Date().getMonth()]}</span>{" "}
          <span>{new Date().getFullYear()}</span>
        </p>
        <div className="border border-solid border-[#0d47a1] rounded-md h-1/2 w-1/2 min-w-max p-2 shadow-lg">
          <Calendar
            year={new Date().getFullYear()}
            month={new Date().getMonth() + 1}
            bookings={response.data!}
          />
        </div>
      </section>
    </main>
  );
}
