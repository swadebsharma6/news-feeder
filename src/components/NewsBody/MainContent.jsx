import { useEffect, useState } from "react";

const MainContent = () => {
  const [news, setNews] = useState([]);
  const url = `http://localhost:8000/v2/top-headlines`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.articles);
        setNews(data.articles);
      });
  }, [url]);

  return (
    <main className="my-10 lg:my-14">
      <div className="container mx-auto grid grid-cols-12 gap-8">
        {/*Left Side*/}
        <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
          <div className="col-span-12 grid grid-cols-12 gap-4">
          {
            news.map((news, idx) => (
                <div key={idx} className="col-span-12 md:col-span-6 lg:col-span-4">
                {news.urlToImage && (
                  <img className="w-full" src={news.urlToImage} alt="thumb" />
                )}
                <div className="col-span-12 md:col-span-4">
                  <a href="#">
                    <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
                     {news.title}
                    </h3>
                  </a>
                  <p className="text-base text-[#292219]">
                    {news?.description}
                  </p>
                  <p className="mt-5 text-base text-[#94908C]">{news.publishedAt}</p>
                </div>
              </div>

            ))
          }
           
          </div>
        </div>
        {/*Right Side*/}
        <div className="col-span-12 self-start xl:col-span-4">
          <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
            {news.slice(0, 15).map((news, idx) => (
              <div key={idx} className="col-span-12 mb-6 md:col-span-8">
                {news.urlToImage && (
                  <img className="w-full" src={news.urlToImage} alt="thumb" />
                )}

                <div className="col-span-12 mt-6 md:col-span-4">
                  <a href="#">
                    <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                      {news.title}
                    </h3>
                  </a>
                  <p className="text-base text-[#292219]">
                    Self-driving cars were meant to be its future
                  </p>
                  <p className="mt-5 text-base text-[#94908C]">25 Feb 2021</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
