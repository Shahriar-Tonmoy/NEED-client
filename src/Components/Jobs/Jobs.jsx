import { useEffect, useState } from "react";
import Brand from "../Brand/Brand";

const Jobs = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("brands.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  return (
    <div className="mt-32 mb-32">
      <h1 className="text-center text-5xl font-bold mb-16 text-[#59CE8F]">Jobs</h1>
      sdfsdfsdfasdf
    </div>
  );
};

export default Jobs;