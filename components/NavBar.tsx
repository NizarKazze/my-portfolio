

const NavBar = () => {
    return (
    <div id="navbar-content" className="p-2 flex justify-center">
        <nav className="w-fit">
            <ul className="flex justify-center gap-6 sm:gap-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-4xl py-4 px-8 text-sm">
            <li><a href="#skills" className="whitespace-nowrap">Skills</a></li>
            <li><a href="#about" className="whitespace-nowrap">About me</a></li>
            <li><a href="#projects" className="whitespace-nowrap">Projects</a></li>
            <li><a href="#contact" className="whitespace-nowrap">Contact</a></li>
            </ul>
        </nav>
    </div>
    )
}

export default NavBar