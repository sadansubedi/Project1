// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchData } from './actions';
// import { fetchData } from "./../redux/actions/action";
// import { fetchvideoData } from "../../../../redux/actions/action";

import Iits from "./Iits_navbar";
const Lectures = () => {
  // const dispatch = useDispatch();
  // const { data, loading, error } = useSelector((state) => state);
  // console.log(data);
  // useEffect(() => {
  //   dispatch(fetchvideoData());
  // }, [dispatch]);

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>Error: {error}</p>;
  // }

  return (
    <>
      <Iits />
      <div className="syllabus_header text-gray-300 text-center mx-16 px-9 pt-0 pb-5 leading-loose font-serif">  
      
      <iframe width="100%" height="600"
         src="https://www.youtube.com/embed/R18q5NIlxrU"
         title="YouTube Video"
          frameBorder="0"
          allowFullScreen
      ></iframe>
      
      </div>
    </>
  );
};

export default Lectures;
