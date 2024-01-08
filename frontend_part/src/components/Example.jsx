// Your React component
import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {fetchvideoData,fetchChapterData,fetchChapterPdfData,fetchCourseData } from './../redux/actions/action';// fetchCourseData,
//import {fetchvideoData } from './../redux/actions/action';// fetchCourseData,
const MyComponent = () => {
  // const dispatch = useDispatch();
  //  const { data, loading, error } = useSelector((state) => state);
  
  
     //console.log(data);
  //  console.log(loading);
  //  console.log(error);
  
  
   
  // useEffect(() => {
  //  // const dataType = 'VIDEO';
  //   // dispatch(fetchvideoData());
  //   //  dispatch(fetchChapterData());
  //   //  dispatch(fetchChapterPdfData());
  //   //  dispatch(fetchCourseData());
    
  // }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

   if (error) {
    return <p>Error: {error}</p>;
 }

  return(
    <>
    {/* <h1 key={data.id}>{data.video_file}</h1> */}
     {data && data.map((item, index) => (
  <div key={index}>
    <p className="h-10 bg-green-500">
      {item.video_file}
    </p> 
  </div>
  
))} 

     
</>
  )
  
};

export default MyComponent;

