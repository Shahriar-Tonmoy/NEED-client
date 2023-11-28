import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/authProvider";

const Details = () => {
  const allJobs = useLoaderData();
  const { user, signOutUser } = useContext(AuthContext);
  const { id } = useParams();
  const selectedJob = allJobs.find((job) => job._id == id);

  const { _id, ...newSelectedPro } = selectedJob;
  const {
    email,
    title,
    deadline,
    description,
    category,
    minimumPrice,
    maximumPrice,
    imageURL,
  } = selectedJob;

  const handleCart = () => {
    fetch(
      "https://brand-website-server-9lu7pgb34-mirza-shahriar-tonmoys-projects.vercel.app/cart_products",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newSelectedPro),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          toast("Your product is successfully added to cart!!");
        }
      });
  };
  return (
    <div>
      <ToastContainer></ToastContainer>
      {/* <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={imageURL} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold text-[#59CE8F]">{name}</h1>
            <p className="py-6">{description}</p>
            <p className="py-4 text-2xl font-bold">{minimumPrice}</p>
            <p className="py-4 text-2xl font-bold">{maximumPrice}</p>
            <p className="py-4 text-2xl font-bold">{deadline}</p>
            <button onClick={handleCart} className="btn bg-[#59CE8F]  text-white hover:bg-orange-500">
              Add to cart
            </button>
          </div>
        </div>
      </div> */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-[#59CE8F]">{title}</h1>
            <p className="py-6">
              {description}
            </p>
            <p className="text-[#59CE8F] text-xl">Deadline: {deadline}</p>
            <p className="text-[#59CE8F] text-xl">{minimumPrice} - {maximumPrice}</p>
          </div>

          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border border-[#59CE8F]">
            <h1 className="text-[#59CE8F] text-5xl font-extrabold text-center">Place Your Bid</h1>
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="Price"
                  className="input input-bordered"
                  name="price"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Deadline</span>
                </label>
                <input
                  type="date"   
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  defaultValue={user.email}
                  placeholder=""
                  className="input input-bordered"
                  name="email"
                  readOnly                
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Buyer Email</span>
                </label>
                <input
                  type="text"
                  defaultValue={email}
                  placeholder=""
                  className="input input-bordered"
                  name="email"
                  readOnly                
                />
              </div>
              <div className="form-control mt-6">
                <button className={`btn border-[#59CE8F] text-white hover:bg-[#59CE8F]`} disabled={user.email === email ? true : false} >Bid on the project</button>
                {/*  */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
