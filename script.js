const container = document.getElementById("content");

function renderData(data) {
    const semesterCard = document.createElement("div");
    semesterCard.className = "semester-card";

    semesterCard.innerHTML = `
        <h2>${data.semester}</h2>
        <p>${data.program}</p>
        <div class="subject-grid"></div>
    `;

    const grid = semesterCard.querySelector(".subject-grid");

    data.subjects.forEach(subject => {
        const subjectCard = document.createElement("div");
        subjectCard.className = "subject-card";

        let channelsHTML = "";

        subject.channels.forEach(channel => {
            channel.links.forEach(link => {
                channelsHTML += `
                    <div class="playlist">
                        <strong>${channel.name}</strong><br>
                        <a href="${link}" target="_blank">Open Playlist</a>
                    </div>
                `;
            });
        });

        subjectCard.innerHTML = `
            <h3>${subject.name}</h3>
            ${channelsHTML}
        `;

        grid.appendChild(subjectCard);
    });

    container.appendChild(semesterCard);
}

renderData(edustreamixData);
