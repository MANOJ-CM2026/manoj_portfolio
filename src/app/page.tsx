import AboutMe from "./components/home/about-me"
import Contact from "./components/home/contact"
import EducationSkills from "./components/home/education-skills"
import ExperienceSec from "./components/home/experience-sec"
import HeroSection from "./components/home/hero-section"
import LatestWork from "./components/home/latest-work"
import Achievements from "./components/home/achievements"

const page = () => {
  return (
    <>
      <main>
        <HeroSection />
        <AboutMe />
        <ExperienceSec />
        <EducationSkills />
        <LatestWork />
        <Achievements />
        <Contact />
      </main>
    </>
  )
}

export default page