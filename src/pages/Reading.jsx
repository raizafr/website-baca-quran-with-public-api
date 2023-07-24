import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

const Reading = () => {
  const [isData, setIsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const getData = async () => {
    try {
      const res = await axios.get(
        `https://api.npoint.io/99c279bb173a6e28359c/surat/${id}`
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
        <section className="container mx-auto lg:px-20 md:px-3 text-white">
          <ul className="">
            {isData.map((data) => {
              return (
                <li
                  key={data.nomor}
                  className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50 space-y-2"
                >
                  <div className="flex flex-row-reverse justify-start gap-2 text-lg">
                    <p>{data.ar}</p>
                    <p className="border-white border text-xs flex items-center px-2 py-0.5 rounded-full">
                      {data.nomor}
                    </p>
                  </div>
                  <p>
                    {data.nomor}. {data.id}
                  </p>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </>
  );
};

export default Reading;
