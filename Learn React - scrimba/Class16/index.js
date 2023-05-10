function Page() {
    return(
        <div>
            <header>
                <nav>
                    <img src="react-logo.png" alt="" width="40px"/>
                </nav>
            </header>
            <h1>Why I want to learn React?</h1>
            <ol>
                <li>Learn React Native</li>
                <li>Get more experience with web development</li>
            </ol>    
            <footer>
                &copy; 2023 Enzo Celeghini. All rights reserved.
            </footer>
        </div>
    )
} 
ReactDOM.render(<Page/>, document.getElementById("root"))