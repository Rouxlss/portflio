import { AboutContainer } from "./components/AboutContainer";
import { HomeContainer } from "./components/HomeContainer";
import { Navigation } from "./components/Navigation";
import { SkillsContainer } from "./components/SkillsContainer";

function App() {
    return (
        <>
            <Navigation />
            <main>
                <HomeContainer />
                {/* <AboutContainer /> */}
                <SkillsContainer />
            </main>
        </>
    );
}

export default App;
