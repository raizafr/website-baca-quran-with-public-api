import axios from "axios";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isData, setIsData] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://api.npoint.io/99c279bb173a6e28359c/data"
      );
      setIsData(res.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 my-3 container mx-auto lg:px-20 md:px-3">
          {isData.map((data) => {
            return <Card key={data.nomor} data={data} />;
          })}
        </section>
      )}
    </>
  );
};

export default Home;
