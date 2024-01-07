//

import { CardsSection } from "./partials/CardSection";
import ChartSection from "./partials/Chart";
import ProgressBars from "./partials/ProgessBar";

const Dashboard = () => {
  return (
    <div id="home">
      <CardsSection />
      <section className="grid grid-cols-1 lg:grid-cols-[auto,400px] gap-5 mt-4">
        <div className=" flex justify-center items-center w-full max-h-[50vh]  bg-custom_white rounded shadow ">
        <ChartSection/>
        </div>
        <div className=" flex justify-center items-center min-h-[50vh] bg-custom_white rounded shadow">
          <h2>Recent Order</h2>
        </div>
        <div className=" flex justify-center items-center min-h-[20vh] bg-custom_white rounded shadow">
         <ProgressBars/>
        </div>
        <div className=" flex justify-center items-center">
          <h2>Required action</h2>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
