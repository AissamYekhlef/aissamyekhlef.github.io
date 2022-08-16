
const renderSkillsSection = function ({skillsList}) {
    if (!Array.isArray(skillsList)) {
        alert("Invalid skills section - skills list must be array-")
    }
    const skills_section = document.getElementById('skills')

    let htmlString = '<h2 class="heading">Skills</h2>'
    htmlString += '<ul>'

    for (let index = 0; index < skillsList.length; index++) {
        htmlString +=  `<li>${skillsList[index]['skill']}`
    }

    htmlString += '</ul>'

    skills_section.innerHTML = htmlString
}

const renderAboutMeSection = function ({aboutMeText}) {
    const section = document.getElementById('aboutme_text')
    section.innerHTML = aboutMeText
}

const renderExperienceSection = function ({experiences}) {
    if (!Array.isArray(experiences)) {
        alert("Invalid experience section -experiences must be array-")
    }
    
    const section = document.getElementById('experience')
    let htmlString = '<h2 class="heading">Experience</h2>'
        htmlString +=  `<div id="experience-timeline">`


    for (let index = 0; index < experiences.length; index++) {
        const {employerName, dateStart, dateEnd, jobTitle, description} =  experiences[index]
        htmlString +=   `<div class="vtimeline-point"><div class="vtimeline-block">`
        htmlString +=   `<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>`
        htmlString +=   `<span class="vtimeline-date">${dateStart} - ${dateEnd}</span>`
        htmlString +=   `<div data-date="${dateStart} - ${dateEnd}" class="vtimeline-content">`
        htmlString +=       `<h3>${employerName}</h3>`
        htmlString +=       `<h4>${jobTitle}</h4>`
        htmlString +=       `<p>${description}</p>`
        htmlString +=   `</div></div></div>`
    }

    htmlString +=  `</div>`

    section.innerHTML = htmlString
}

const renderEducationSection = function ({educations}) {
    if (!Array.isArray(educations)) {
        alert("Invalid education section -educations must be array-")
    }

    const section = document.getElementById('education')
    let htmlString = '<h2 class="heading">Education</h2>'

    for (let index = 0; index < educations.length; index++) {
        const {school, dateStart, dateEnd, educationTitle, description} =  educations[index]
        htmlString +=   `<div class="education-block">`
        htmlString +=       `<h3>${school}</h3>`
        htmlString +=       `<span class="education-date">${dateStart} - ${dateEnd}</span>`
        htmlString +=       `<h4>${educationTitle}</h4>`
        htmlString +=       `<p>${description}</p>`
        htmlString +=   `</div></div></div>`
    }

    htmlString +=  `</div>`

    section.innerHTML = htmlString
}



export {
    renderSkillsSection,
    renderAboutMeSection,
    renderExperienceSection,
    renderEducationSection
}