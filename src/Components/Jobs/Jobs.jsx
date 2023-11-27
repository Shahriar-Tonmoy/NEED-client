import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Jobs = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("brands.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  return (
    <div className="mt-32 mb-32">
      <h1 className="text-center text-5xl font-bold mb-16 text-[#59CE8F]">
        Jobs
      </h1>
      <Tabs className='w-max mx-auto'>
        <TabList className='border border-[#59CE8F] rounded-lg text-[#59CE8F]'>
          <Tab>Web development</Tab>
          <Tab>Digital marketing</Tab>
          <Tab>Graphics design</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Jobs;
