import React from 'react'


import StudentGradesTable from 'components/course_grades'


function grades() {
   
    // const params = useParams()
    // const search = useLocation().search;
    // const qty = new URLSearchParams(search).get('qty');

    // console.log(params);
  return (
    <div><StudentGradesTable/></div>
  )
}

export default grades