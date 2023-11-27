import { Link, useParams } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Brand = ({ brand }) => {
    const {id, name, image} = brand;
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div >
      <Link to={`/products/${name}`}>
      <div data-aos="fade-right"
     data-aos-duration="1000" className="  md:w-max mx-auto ">
        <figure className="px-10 pt-10 ">
          <img
            
            src={image}
            alt="Shoes"
            className="rounded-xl h-40 md:w-full mx-auto"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <div className="card-actions">
            {/* <Link to={`/Details/${id}`}><button className="btn btn-primary bg-green-500 border-0 hover:bg-green-500">Details</button></Link> */}
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Brand;
