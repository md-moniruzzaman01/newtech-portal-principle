//
"use client";
import { useEffect, useState } from "react";
import { CardsSection } from "./partials/CardSection";
import ChartSection from "./partials/Chart";
import ProgressBars from "./partials/ProgessBar";
import axios from "axios";

const Dashboard = () => {
  const [ProductCount, setProductCount] = useState([]);
  const [ProductCountTotal, setProductCountTotal] = useState(0);

  async function getProductCount() {
    const url = `http://localhost:5000/api/loading/product/count/MSI`;
    try {
      const response = await axios.get(url).then(function (response) {
        if (response.status === 200) {
          setProductCount(response.data.result);
          setProductCountTotal(response.data.total);
        } else {
          alert(response.data.msg);
        }
      });
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    getProductCount();
  }, []);
  return (
    <div id="home">
      <CardsSection ProductCount={ProductCount} />
      <section className="grid grid-cols-1 lg:grid-cols-[auto,400px] gap-5 mt-4">
        <div className=" flex justify-center items-center w-full max-h-[50vh]  bg-custom_white rounded shadow ">
          <ChartSection ProductCount={ProductCount} />
        </div>
        <div className=" flex justify-center items-center min-h-[50vh] bg-custom_white rounded shadow">
          <h2>Recent Order</h2>
        </div>
        <div className=" flex justify-center items-center min-h-[20vh] bg-custom_white rounded shadow">
          <ProgressBars
            ProductCount={ProductCount}
            ProductCountTotal={ProductCountTotal}
          />
        </div>
        <div className=" flex justify-center items-center">
          <h2>Required action</h2>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
