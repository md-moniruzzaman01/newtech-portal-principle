//

import { CardsSection } from "./partials/CardSection";

const Dashboard = () => {
  return (
    <div id="home">
      <CardsSection />
      <section className="grid grid-cols-1 lg:grid-cols-[auto,400px]">
        <div className=" flex justify-center items-center min-h-[50vh] border-2 border-primary">
          <h2>chart</h2>
        </div>
        <div className=" flex justify-center items-center min-h-[50vh] border-2 border-secondary">
          <h2>Recent Order</h2>
        </div>
        <div className=" flex justify-center items-center min-h-[20vh] border-2 border-orange-500">
          <h2>progess bar</h2>
        </div>
        <div className=" flex justify-center items-center">
          <h2>Required action</h2>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
