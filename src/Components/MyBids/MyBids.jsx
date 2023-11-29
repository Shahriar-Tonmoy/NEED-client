import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/authProvider";

const MyBids = () => {
    const [bidJobs, setBidJobs] = useState([]);
    const { user, signOutUser } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/bidJobs?email=${user.email}`)
          .then((res) => res.json())
          .then((data) => setBidJobs(data));
      }, []);
    
      console.log(bidJobs);

    const handleUpdateStatus = id =>{
        fetch(`http://localhost:5000/bidJobs/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'complete'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                //update status
                const remaining = bidJobs.filter(job => job._id!==id);
                const updated = bidJobs.find(job => job._id === id);
                updated.status = 'complete';
                const newBidJobs = [updated, ...remaining];
                setBidJobs(newBidJobs);
            }
        })
    }

  return (
    <div className="min-h-screen">
      <h1 className="text-center text-5xl font-bold mb-16 text-[#59CE8F]">
        My Bids
      </h1>
      <div className="overflow-x-auto container mx-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th className="text-[#59CE8F] text-lg">Job Title</th>
              <th className="text-[#59CE8F] text-lg">Email</th>
              <th className="text-[#59CE8F] text-lg">Deadline</th>
              <th className="text-[#59CE8F] text-lg">Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                bidJobs.map(job => (
                <tr key={job._id} className="border border-[#59CE8F]">
                    <td>{job.title}</td>
                    <td>{job.buyerEmail}</td>
                    <td>{job.deadline}</td>
                    <td>{job.status}</td>
                    <button onClick={() => handleUpdateStatus(job._id)} className={`hover:text-[#59CE8F] mt-3 ${(job.status === 'in progress') ? `block` : `hidden`}`}>Complete</button>
                  </tr>))
            }
            {/* row 2 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBids;
