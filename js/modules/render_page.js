// import CV from "./cv.js"
import {
    renderSkillsSection,
    renderAboutMeSection,
    renderExperienceSection,
    renderEducationSection,
} from "./render_sections.js"


const CV_PATH_URI = 'js/modules/cv.json'
// render page part


const CV = await fetch(CV_PATH_URI).then(r => r.json())


// Render skills section
const aboutMeText = CV.sections.aboutMe.section_content
renderAboutMeSection({aboutMeText})

// Render experience section
renderExperienceSection({experiences: CV.sections.experience.experiences});

//TODO 
// Render education section
renderEducationSection({educations: CV.sections.education.educations});

//TODO 
// Render projects section

// Render skills section
renderSkillsSection({skillsList: CV.sections.skills})
// End render page part

