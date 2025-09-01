import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import Cta from "@/components/Cta";
import { recentSessions } from "@/constants";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>

      <section className="home-section">
        <CompanionCard
          id="123"
          name="Neura the brainy Explora"
          topic="Neura Network of the Brain"
          subject="Science"
          duration={45}
          color="#E5D0FF"
        />
        <CompanionCard
          id="123"
          name="Countsy the Number Wizard"
          topic="Derivatives and Integrals"
          subject="Maths"
          duration={30}
          color="#FFDA6E"
        />
        <CompanionCard
          id="123"
          name="Verba the Vocabulary Builder"
          topic="English Literature "
          subject="Language"
          duration={30}
          color="#BDE7FF"
        />
      </section>

      <div className="home-section">
        <CompanionsList
          title="Recently completely sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <Cta />
      </div>
    </main>
  );
};

export default Page;
