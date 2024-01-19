
import instr from '../data/json/instructor.json';
import instructor_course from '../data/json/instructor_course';
import course from '../data/json/course';
import students from '../data/json/student';
import student_course from '../data/json/student_course';
import grades from '../data/json/grades';
import courseWithoutInstructor from '../data/json/course_without_instructor';



export const csvReader =()=>{

    const toJson = () =>{
        
        return instructor_course;
    }

    const getModules = (instructor) =>{
        var coursePerson = instructor_course.filter(co =>co.PERSON_ID ==instructor);

        if(coursePerson.length >0){
            return course.filter(c =>c.ID==coursePerson[0].COURSE_ID);
        }else{
            return [];
        }
    }

    const getCourseByCourseID = (courseId)=>{
        var c =  instructor_course.filter(co =>co.COURSE_ID == courseId);
        return c[0].NAME;
    }

    const checkInstructorsHandle =(instructor)=>{
        var coursePerson = instructor_course.filter(co =>{
            return (co.PERSON_ID !=null && co.PERSON_ID ==instructor)
        })
        return coursePerson.length;

    }

    const getStudentsByCourse =(courseId)=>{
        var students = student_course.filter(stc =>stc.COURSE_ID ==courseId)
        return students;
    }

    const getStudentById = (id) =>{
        var student = students.filter(st =>st.ID ==id)
        return student;
    }

    const getStudentGrade =(studentCourseId)=>{
        console.log(studentCourseId);
        var grade = grades.filter(co =>co.PERSON_COURSE_ID ==studentCourseId)
       
        return randomGrades();
    }

    const randomGrades = ()=>{
        var array = [1.0,1.5,1.25,1.50,1.75,2.0,2.5,2.25,2.75,3.0]
        const random = Math.floor(Math.random() * array.length);
        return array[random]
    }

    const getCourseWithoutInstructor = () =>{
        return courseWithoutInstructor;
    }

    const getInstructor = (instructor) =>{
        var instrutor = instr.filter(f=>f.ID=instructor);
        return instrutor[0];
    }
        



    return{
        toJson,
        getModules,
        getCourseByCourseID,
        getStudentsByCourse,
        getStudentById,
        getStudentGrade,
        getCourseWithoutInstructor,
        getInstructor
    }

    

}
