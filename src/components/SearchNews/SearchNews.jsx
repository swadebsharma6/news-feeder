

const SearchNews = ({searchNews}) => {
    const {author, title, description, urlToImage, publishedAt } = searchNews;
    return (
        <div  className="col-span-12 mb-6 md:col-span-8">
                {searchNews.urlToImage && (
                  <img className="w-full" src={urlToImage} alt="thumb" />
                )}

                <div className="col-span-12 mt-6 md:col-span-4">
                  <a href="#">
                    <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                      {title}
                    </h3>
                  </a>
                  <p className="text-base text-[#292219]">
                    {description}
                  </p>
                  <p className="mt-5 text-base text-[#94908C]">{publishedAt}</p>
                  <p className="mt-5 text-base text-[#94908C]">{author}</p>
                </div>
              </div>
    );
};

export default SearchNews;