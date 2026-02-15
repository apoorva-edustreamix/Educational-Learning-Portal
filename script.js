const container = document.getElementById("content");

edustreamixData.programs.forEach(program => {

    const programCard = document.createElement("div");
    programCard.className = "program-card";

    programCard.innerHTML = `
        <div class="program-title">${program.programName}</div>
        <div class="subject-grid"></div>
    `;

    const grid = programCard.querySelector(".subject-grid");

    program.subjects.forEach(subject => {

        const subjectCard = document.createElement("div");
        subjectCard.className = "subject-card";

        let resourcesHTML = "";

        subject.resources.forEach(resource => {
            resourcesHTML += `
                <div class="resource">
                    <strong>${resource.title}</strong><br>
                    <a href="${resource.link}" target="_blank">Open Playlist</a>
                </div>
            `;
        });

        subjectCard.innerHTML = `
            <h3>${subject.subjectName}</h3>
            ${resourcesHTML}
        `;

        grid.appendChild(subjectCard);
    });

    container.appendChild(programCard);
});
