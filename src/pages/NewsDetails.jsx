import { useEffect, useState } from "react";
import Header from "../components/Header";
import RighAside from "../components/homelayout/RighAside";
import NewsDetailsCard from "../components/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
    const data = useLoaderData();
    const{id} = useParams();
    const [news,setNews]=useState({});
    console.log('news :>> ', news);

    useEffect(()=>{
        const newsDetails=data.find((singleNews)=>singleNews.id==id);
        setNews(newsDetails); 
    },[data,id,news])

  return (
    <div>
      <div className="py-3">
        <header>
          <Header></Header>
        </header>
      </div>
      <main className="w-11/12 mx-auto my-3  grid grid-cols-12 gap-5">
        <section className="main col-span-9">
          <NewsDetailsCard news={news}></NewsDetailsCard>
        </section>
        <aside className="col-span-3 sticky top-0 h-fit">
          <RighAside></RighAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
