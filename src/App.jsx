import Buttons from "./components/Buttons/Buttons"
import UfoList from "./components/UFOLIST/UfoList"
import Header from "./components/Header/header"
import Nav from "./components/Nav/Nav"
import DogsBox from "./components/DogsBox/DogsBox"

import "./App.css"




const App = () => {
    const rubrik = "Hello"
    const rubrik2 = "goodbye"
    const age = 19
    const checkAge = (age) => {
        if (age >= 18)
            return rubrik
        else
            return rubrik2
    }

    return (< >
        <Header />
        <Nav />
        <h2>{checkAge(age)}</h2>
        <section>
            <Buttons />
            <Buttons />
            <Buttons />
        </section>
        <DogsBox />
        
        <UfoList />

    </>)
}

export default App;