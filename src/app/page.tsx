export default function Home() {
  return (
    <main className="text-center h-full grid py-4">
      <section>
        <h1>
          <span className="text-[#0d47a1]">ViteCamion</span> arrive bientôt{" "}
          <span className="text-[#0d47a1]">!</span>
        </h1>
        <p className="text-lg text-[#455a64] mt-2">
          Notre plateforme est actuellement en cours de création. Très bientôt,
          vous pourrez facilement réserver un camion pour la collecte de vos
          encombrants partout en Ile-De-France. Restez connectés, nous préparons
          un service rapide, efficace et éco-responsable pour vous simplifier la
          vie !
        </p>
      </section>

      <p className="align self-end">Un grand merci à <span className="text-red-400">&#9829;</span> Mme Godeau <span className="text-red-400">&#9829;</span> pour son aide</p>
    </main>
  );
}
