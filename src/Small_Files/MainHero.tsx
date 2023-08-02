import background from "../Images/hero.jpg"

export default function MainHero(){

    const styles = {backgroundImage: `url(${background})`};
    return(
        <main className="main-hero--container" style={styles}>
            
        </main>
    );
}