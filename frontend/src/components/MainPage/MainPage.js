import './MainPage.css';

function MainPage(){
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    return(
        <>
            <h3>Today is {date}</h3>
            <h1 className="header">Hello</h1>
        </>
    )
}

export default MainPage;
