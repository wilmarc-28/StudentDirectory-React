import FormContainer from "../components/FormContainer";
import HeaderContainer from "../components/HeaderContainer";
import ListContainer from "../components/ListContainer";

const StudentPage =() =>{
    const students = [
        {id: 1, name: "Gon Freecs", srcode: "24-12345", program: "BSIT"},
        {id: 2, name: "Killua Zoldyck", srcode: "24-23456", program: "BSIT"},
        {id: 3, name: "Kurapika Kurta", srcode: "24-34567", program: "BSIT"},
    ];

    return(
        <>
            <HeaderContainer />
            <FormContainer />
            <ListContainer data={students}/>
        </>
    )
}

export default StudentPage;