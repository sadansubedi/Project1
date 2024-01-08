import React,{useState} from 'react'
import Iits from "./Iits_navbar";
import { useNavigate, useParams} from 'react-router-dom';
import { useCourseMutation } from '../../../../services/userAuthApi';
const Handwrittennotes = () => {
  const navigate = useNavigate()
  const [server_error, setServerError] = useState({})
  const [server_msg, setServerMsg] = useState({})
  const [course] =  useCourseMutation()
  console.log(course);
//   const dispatch = useDispatch();
// // console.log(useSelector((state) => state.chapterPdfData));
//   const { data, loading, error } = useSelector((state) => state.chapterPdfData);
//    console.log(data);
//    console.log(loading);
//    console.log(error);

  //  useEffect(() => {
  //   //dispatch(fetchvideoData());
  //  // dispatch(fetchChapterData());
  //   //  dispatch(fetchChapterPdfData());
  //   // dispatch(fetchCourseData());
    
  // }, [dispatch]);

  return (
    <>
    <Iits/>
         <div className="syllabus_header text-gray-300 text-center mx-16 px-9 pt-0 pb-5 leading-loose font-serif">
            hii hello Lecture sir note dinuhoss na
          
         // </div>
    </>
  )
}

export default Handwrittennotes