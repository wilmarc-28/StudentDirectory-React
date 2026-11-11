import { useState } from "react";
import FormContainer from "../components/FormContainer";
import HeaderContainer from "../components/HeaderContainer";
import ListContainer from "../components/ListContainer";

const StudentPage =() =>{
    const [students, setStudents] = useState([]);
        
    const getData = async () => {
        const response = await fetch('http://127.0.0.1:3000/student/');
        if(!response.ok){
            throw new Error('Unable to fetch data!');
        }
        const data = await response.json();
        return data;
    }
    getData().then((result) => {
        setStudents(result);
    }).catch((e) => {
        console.log(e.message);
    })

    return(
        <>
            <HeaderContainer />
            <FormContainer />
            <ListContainer data={students}/>
        </>
    )
}

export default StudentPage;