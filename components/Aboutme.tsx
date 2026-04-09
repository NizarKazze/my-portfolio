import { useTheme } from '@/context/ThemeContext';

const Aboutme = () => {
    const { tokens } = useTheme();

    return (
        <div id="about-me-content" className="grid grid-cols-1  sm:grid-cols-2 gap-4 px-10">
            <div className="mt-24">
                <h2 className="mb-6 text-5xl" style={{ color: tokens.titleColor }}>About me</h2>
                <p className="mb-2 text-lg">I’m Nizar Kazze, a Full Stack Web Developer born in Ibiza. I’m passionate about building modern, efficient, 
                    and user-friendly web applications.</p>
                <p className="mb-2 text-lg">I enjoy continuously learning new technologies, frameworks, and programming languages to stay up to date in the ever-evolving world of web development. 
                    Curiosity and improvement are a big part of how I work and grow as a developer.</p>
                <p className="mb-2 text-lg">Currently, I work at We Love Media, where I collaborate on developing and maintaining digital solutions, focusing on both performance and user experience.</p>
            </div>
        </div>
    )
}

export default Aboutme