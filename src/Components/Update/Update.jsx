import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Update = () => {

    const loadedProduct = useLoaderData();
    const { name, image, brandName, type, price, shortDescription, rating } = loadedProduct;
    const handleUpdateProduct = e =>{
        e.preventDefault();
        const form  = e.target;
        const fName = form.name.value;
        const fImage = form.image.value;
        const fBrandName = form.brandName.value;
        const fType = form.type.value;
        const fPrice = form.price.value;
        const fShortDescription = form.shortDescription.value;
        const fRating = form.rating.value;
        const updatedProduct = {fName, fImage, fBrandName, fType, fPrice, fShortDescription, fRating};
        console.log(updatedProduct);
        
        fetch(`https://brand-website-server-9lu7pgb34-mirza-shahriar-tonmoys-projects.vercel.app/products/${loadedProduct._id}`,{
            method:'PUT',
            headers:{
                'content-type': "application/json"
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount > 0){
                    toast('Updated Successfully!!')
                }
            })
        
    }

  return (
    <div className="hero min-h-screen bg-base-200">
        <ToastContainer></ToastContainer>
      <div className="hero-content flex-col lg:flex-row-reverse w-full">
        <div className="text-center lg:text-left"></div>
        <div className="card flex-shrink-0 w-full  shadow-2xl border border-[#59CE8F] bg-base-100 py-20 px-5">
          <h1 className="text-[#59CE8F] text-center text-3xl font-bold">
            Update Product here
          </h1>
          <form className="card-body" onSubmit={handleUpdateProduct}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  name="name"
                  defaultValue={name}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="text"
                  placeholder="Image URL"
                  className="input input-bordered"
                  name="image"
                  defaultValue={image}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Brand Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Brand Name"
                  className="input input-bordered"
                  name="brandName"
                  defaultValue={brandName}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Type</span>
                </label>
                <input
                  type="text"
                  placeholder="Type"
                  className="input input-bordered"
                  name="type"
                  defaultValue={type}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="Price"
                  className="input input-bordered"
                  name="price"
                  defaultValue={price}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Short description</span>
                </label>
                <input
                  type="text"
                  placeholder="Short description"
                  className="input input-bordered"
                  name="shortDescription"
                  defaultValue={shortDescription}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="type"
                  placeholder="Rating"
                  className="input input-bordered"
                  name="rating"
                  defaultValue={rating}
                  required
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-opacity-0 border-[#59CE8F] hover:bg-opacity-0 hover:border-orange-200 w-[30%] mx-auto">
                Update
              </button>
            </div>
          </form>
          <div className="text-center">
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
