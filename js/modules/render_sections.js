
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
        const {school, dateStart, dateEnd, educationTitle, description, certificateUrl} =  educations[index]
        htmlString +=   `<div class="education-block">`
        htmlString +=       `<h3>${school}</h3>`
        htmlString +=       `<span class="education-date">${dateStart} - ${dateEnd}</span>`
        htmlString +=       `<h4>${educationTitle}`
        htmlString +=       `<p>${description}</p>`
        htmlString +=       `<h4> ${certificateUrl ? '<a href="' + certificateUrl + '" target="_blank"> See certificate </a>' : ''}</h4>`
        htmlString +=   `</div></div></div>`
    }

    htmlString +=  `</div>`

    section.innerHTML = htmlString
}

const renderProjectsSection = function ({projects}) {
    if (!Array.isArray(projects)) {
        alert("Invalid projects section -projects must be array-")
    }

    const section = document.getElementById('projects')
    let htmlString = `<h2 class="heading">Projects</h2><div class="container"><div class="row">`

    for (let index = 0; index < projects.length; index++) {
        const project =  projects[index]
        htmlString +=   `<div class="project shadow-large">`
        htmlString +=       `<div class="project-image"><img src="${project.pictureUrl}"  width="300" height="300" /></div>`
        htmlString +=       `<div class="project-info">`
        htmlString +=       `<h3>${project.name}</h3>`
        htmlString +=       `<p style="text-align: left;"><span style="font-weight: bold">Description</span>: ${project.description}</p>`
        htmlString +=       `<p style="text-align: left;"><span style="font-weight: bold">Technologies</span>: ${project.technologies.join(', ')}</p>`
        htmlString +=       `<a class="btn-rounded-white" style="color: blue;" href="${project.url}" target="_blank">Project Code</a class="btn-rounded-white">`
        htmlString +=       `<a class="btn-rounded-white" style="color: blue;" href="${project.demoUrl}" target="_blank">Project Demo</a>`
        htmlString +=   `</div></div>`
    }

    htmlString +=  `</div>`

    section.innerHTML = htmlString
}



export {
    renderSkillsSection,
    renderAboutMeSection,
    renderExperienceSection,
    renderEducationSection,
    renderProjectsSection
}