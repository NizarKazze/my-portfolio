

const NavBar = () => {
    return (
        <div id="navbar-contnet" className="p-4">
            <nav>
                <ul className="flex gap-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-4xl py-4 px-8 class-effect">
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#skills">About me</a></li>
                    <li><a href="#skills">Projects</a></li>
                    <li><a href="#skills">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar