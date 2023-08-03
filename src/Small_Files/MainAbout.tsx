import { Link } from "react-router-dom";


export default function MainAbout(){
    return(
        <main className="main-about--container">
            <h1>About us</h1>
            <h4>Our mission is to make a positive impact on shelters and the animals they care for. We provide a platform that connects passionate volunteers with shelters in need, allowing them to offer vital support and donations.</h4>
            <h4>Our user-friendly interface makes it easy for volunteers to find local shelters seeking assistance. Whether you want to donate essential supplies, offer your time and skills, or contribute in any other way, we've got you covered.</h4>
            <h4>We believe in the power of collective compassion. By bringing together volunteers and shelters, we create a caring community dedicated to the well-being of shelter animals.</h4>
            <h4>Join us today in making a difference. Together, we can bring joy and comfort to the lives of countless animals and support the shelters that tirelessly care for them. Thank you for being a part of our mission to spread love and kindness to those who need it most.</h4>
            <img src="Images/shelter_tutorial.jpg" />
            <button className="help--btn">
                <Link to="/donating">I wanna help!</Link>
            </button>
        </main>
    );
}