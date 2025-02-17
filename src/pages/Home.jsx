import Banner from "../components/Banner";
import Posters from "../components/Posters";

function Home() {
  return (
    <section className="bg-background flex flex-col items-center w-full min-h-screen">
      <Banner/>
      <Posters/>
    </section>
  )
}

export default Home;