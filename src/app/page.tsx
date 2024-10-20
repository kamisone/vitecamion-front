import { Calendar } from "@/components/calendar/Calendar";
import { BookingService } from "@/services/server/booking.service";
export const revalidate = 300; // revalidate at most every 5 minutes

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
    return <p>La réservation est actuellement indisponible </p>;
  }
  return (
    <main className=" grid grid-rows-[auto_1fr] py-4 px-4">
      <section className="text-center">
        <h1 className="text-lg sm:text-2xl">
          <span className="text-[#0d47a1]">ViteCamion</span> arrive bientôt{" "}
          <span className="text-[#0d47a1]">!</span>
        </h1>
        <p className="text-sm sm:text-lg text-[#455a64] mt-2">
          ViteCamion est actuellement en cours de création. Très bientôt, vous
          pourrez facilement réserver un camion pour la collecte de vos
          encombrants partout en Ile-De-France. Restez connectés, nous préparons
          un service rapide, efficace et éco-responsable pour vous simplifier la
          vie !
        </p>
      </section>
      <section className="grid grid-rows-[auto_1fr] justify-items-center items-center mt-4 text-center">
        <div className="border border-solid border-[#0d47a150] self-start  rounded-md aspect-square w-full max-w-[500px]   min-w-max p-2 shadow-lg">
          <p className="text-lg font-semibold text-[#0d47a1]">
            <span>{monthsNames[new Date().getMonth()]}</span>{" "}
            <span>{new Date().getFullYear()}</span>
          </p>
          <hr className="bg-[#455a64]" />
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
