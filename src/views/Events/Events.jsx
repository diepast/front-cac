import { useEffect, useState, useRef } from "react";
import { getEvents } from "../../service/eventService";
import { Link } from "react-router-dom";
export function Events() {
  const [data, setData] = useState([]);
  const [filtrados, setFiltrados] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getEvents().then((res) => {
      setCategories(res.map((event) => event.category));
      setData(res);
      setFiltrados(res);
    });
  }, []);

  const handleChange = (e) => {
    if (e.target.value == "all") {
      setFiltrados(data);
    } else {
      const filtered = data.filter((event) => event.category == e.target.value);
      setFiltrados(filtered);
    }
  };
  return (
    <>
      <h2 className="text-white text-5xl">Events</h2>
      <input type="text" onChange={(e) => console.log(e.target.value)} />
      <select onInput={handleChange}>
        <option value="all">All</option>
        {categories.length > 0 &&
          categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
      </select>
      <div className="flex flex-wrap gap-5 justify-center">
        {filtrados.length > 0 &&
          filtrados.map((event) => {
            return (
              <div key={event._id} className="bg-white">
                <h2 className="text-red-700">{event.name}</h2>
                <img className="w-[500px]" src={event.image} alt="" />
                <Link to={`/event/${event._id}`} className="text-black">
                  {" "}
                  Details{" "}
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
}
