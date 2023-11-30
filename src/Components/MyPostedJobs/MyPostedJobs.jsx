import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/authProvider";
import Job from "../Job/Job";
import MyPostedJob from "../MyPostedJob/MyPostedJob";

const MyPostedJobs = () => {
    const [myJobs, setMyJobs] = useState([]);
    const { user, signOutUser } = useContext(AuthContext);

    useEffect(() => {
        document.title = 'N E E D | My Posted Jobs'; 
      }, []);

      useEffect(() => {
        fetch(`http://localhost:5000/jobs?email=${user.email}`)
          .then((res) => res.json())
          .then((data) => setMyJobs(data));
      }, []);

    return (
        <div className="min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 container mx-auto mt-10">
            {
              myJobs.map((job) => (
                
                <MyPostedJob key={job._id} job={job}></MyPostedJob>
              ))
            }
          </div>
        </div>
    );
};

export default MyPostedJobs;