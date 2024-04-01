/* Surprise! You probably thought you could just forget
the line of code you just learned! Nope, not on my watch!

Try to write that 1-liner of React code again! This time,
see if you can figure out how to render an <ul> with 2+ <li>s inside*/

const navbar = (
    <nav className="navbar">
        <h1 className="heading1">
            Great Websites R Us
        </h1>
        <ul>
            <li>Pricing</li>
            <li>Work</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(navbar, document.getElementById('root'));