let projects = [];

function addProject(event) {
    event.preventDefault();

    let name = document.getElementById('input-name').value;
    let description = document.getElementById('input-description').value;
    let image = document.getElementById('input-image');
    let tech = document.querySelectorAll('.input-tech:checked')
    let startDate = document.getElementById('input-start-date').value;
    let endDate = document.getElementById('input-end-date').value;

    let techHtml = ''
    let i = 0;
    for (i; i < tech.length; i++) {
        techHtml += `<img class="icon" src="./assets/${tech[i].value}.png" alt="">`
    }

    image = URL.createObjectURL(image.files[0])

    let project = {
        name,
        description,
        image,
        tech: techHtml,
        startDate: new Date(startDate),
        endDate: new Date(endDate)
    }

    projects.push(project)
    renderProject()


}

function renderProject() {
    let lengthData = projects.length

    let projectContainer = document.getElementById('project-card-container');
    projectContainer.innerHTML = firstProject()

    let i = 0;
    for (i; i < lengthData; i++) {
        projectContainer.innerHTML += `<div class="project-card">
        <img class="image" src="${projects[i].image}" alt="">
        <p class="title">${projects[i].name}</p>
        <p class="durasi">durasi : ${getDistance(projects[i].startDate, projects[i].endDate)}</p>
        <p class="description">${projects[i].description}</p>
        <div class="icon-container">
            ${projects[i].tech}
        </div>
        <div class="button-container">
            <button>edit</button>
            <button>delete</button>
        </div>
    </div>`
    }
}

function firstProject() {
    return `<div class="project-card">
    <img class="image" src="./assets/square.jpg" alt="">
    <p class="title">Dumbways Mobile App - 2021</p>
    <p class="durasi">durasi : 3 bulan</p>
    <p class="description">App that used for dumbways student, It was
        deployed and can downloaded on playstore. Happy download.
    </p>
    <div class="icon-container">
        <img class="icon" src="./assets/node-js.png">
        <img class="icon" src="./assets/react-js.png">
        <img class="icon" src="./assets/next-js.png">
    </div>
    <div class="button-container">
        <button>edit</button>
        <button>delete</button>
    </div>
</div>`
}

function getDistance(startDate, endDate) {
    const distance = endDate - startDate;

    const miliseconds = 1000;
    const secondsInMinute = 60;
    const minutesInHour = 60;
    const secondsInHour = secondsInMinute * minutesInHour;
    const hoursInDay = 24;
    const secondsInDay = secondsInHour * hoursInDay;
    const daysInWeek = 7;
    const daysInMonth = 29;

    let monthDistane = distance / (miliseconds * secondsInDay * daysInMonth)

    if (monthDistane >= 1) {
        return Math.floor(monthDistane) + ' bulan'
    } else {
        let weekDistance = distance / (miliseconds * secondsInDay * daysInWeek)
        if (weekDistance >= 1) {
            return Math.floor(weekDistance) + ' minggu'
        } else {
            const dayDistance = distance / (miliseconds * secondsInDay)
            return Math.floor(dayDistance) + ' hari'
        }
    }

}

let detailDurationStart = new Date('2021-01-12');
let detailDurationEnd = new Date('2021-02-11');
document.getElementById('detail-duration-value').innerHTML = getDistance(detailDurationStart, detailDurationEnd).replace('bulan', 'month')