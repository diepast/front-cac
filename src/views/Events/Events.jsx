import { useEffect, useState } from "react";
import { getEvents } from "../../service/eventService";
export function Events() {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("Se monto el component Events");
    getEvents().then((res) => setData(res));

    return () => console.log("Se desmonto el componente");
  }, []);

  console.log(data);

  return (
    <>
      <h2 className="text-white text-5xl">Events</h2>
      {data.length > 0 &&
        data.map((event) => {
          return (
            <div key={event._id} className="bg-white">
              <h2 className="text-red-700">{event.name}</h2>
              <img className="w-[500px]" src={event.image} alt="" />
            </div>
          );
        })}
    </>
  );
}
