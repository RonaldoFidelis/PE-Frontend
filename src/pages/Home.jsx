import Banner from "../components/Banner";
import Posters from "../components/Posters";

function Home() {
  return (
    <section className="flex flex-col items-center h-full">
      <Banner/>
      <Posters/>
    </section>
  )
}

export default Home;