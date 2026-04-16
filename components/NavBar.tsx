

const NavBar = () => {
    return (
    <div id="navbar-content" className="p-4 flex justify-center">
        <nav className="w-fit">
            <ul className="flex justify-center gap-4 sm:gap-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-4xl py-4 px-8 text-sm">
            <li><a href="#skills">Skills</a></li>
            <li><a href="#about">About me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </div>
    )
}

export default NavBar