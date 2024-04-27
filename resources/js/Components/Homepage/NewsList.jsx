const isNews = (news) => {
    return news.map((data, i) => {
        return (
            <div key={i} className="card w-full lg:w-96 bg-base-100 shadow-xl">
                <figure>
                <img 
                    src={`/storage/${data.image}`} 
                    className="card-img-top w-80 mt-5" 
                    alt={data.name} 
                />
                </figure>
                    <div className="card-body">
                    <h2 className="card-title">
                        {data.title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{data.description}</p>
                    <div className="card-actions justify-end">
                        {/* <div className="badge badge-outline">
                            {data.category}
                        </div> */}
                       <button href="{{ route('download.image', $imageName) }}" className="badge badge-outline border-2 border-green-500 text-green-500 hover:text-white btn btn-warning">Download Now</button>
                    </div>
                </div>
            </div>
        );
    });
};
const noNews = () => {
    return <div>Saat ini belom ada news yag tersedia</div>;
};
const NewsList = ({ news }) => {
    return !news ? noNews() : isNews(news);
};
export default NewsList;
