import Order from "../OrderBy/OrderBy.tsx";
import Filter from "../FilterBy/FilterBy.tsx";
import Searcher from "../Searcher/Searcher.tsx";
import { IoHome } from "react-icons/io5";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
// import { useEffect, useState } from "react";

function App() {
//   const [peliculas, setPeliculas] = useState<any[]>([])

//   const obtenerPeliculas = async () => {
//     const url =
//       "https://api.themoviedb.org/3/trending/movie/week?api_key=c5e986b2bcf31cbecdbbc18d973b9cff";
//     const res = await fetch(url);
//     const data = await res.json();
//     setPeliculas(data.results);
//   };

//   useEffect(() => {
//     obtenerPeliculas();
//   }, []);

  return (
    <div>
      <GoArrowRight className="rightArrow" />
      <GoArrowLeft className="leftArrow" />
      <IoHome className="IconHome" />
      <Searcher />
      <Filter />
      <Order />
    </div>

    // <div>
    //   {
    //   peliculas.map(pelicula => {
    //     <div key={pelicula.id}>
    //       <p>{pelicula.name}</p>

    //     </div>
    //   })
    // }
    // </div>

  );

}
export default App;
