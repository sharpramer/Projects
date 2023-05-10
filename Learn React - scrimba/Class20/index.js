function Header() {
    return (
        <header>
            <nav className= "nav">
                <img src="./react-logo.png" className="img"/>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function Footer() {
    return (
        <footer>
            &copy; 2023 Enzo Celeghini. All rights reserved.
        </footer>
    )
}

function MainContent() {
    return (
        <div>
            <h1>Why I want to learn React</h1>
            <ol>
                <li>Learn React Native</li>
                <li>Get more experience with web development</li>
            </ol>
        </div>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))