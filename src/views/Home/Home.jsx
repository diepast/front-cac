import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import LayoutMain from "../LayoutMain";
import "./home.css";
export const Home = () => {
  return (
    <>
      <section>
        <div className="home__hero">
          <p>
            Discover a world of exciting experiences and engagements! Click
            below to explore our upcoming event
          </p>
          <Link
            className="bg-white p-3 rounded text-black font-semibold hover:text-red-800"
            to="/events"
          >
            Explore our upcoming events now!
          </Link>
        </div>
      </section>
      <section className="home__carousel">
        <Carousel />
      </section>
    </>
  );
};

export default Home;
