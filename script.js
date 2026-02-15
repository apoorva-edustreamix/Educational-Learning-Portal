const app = document.getElementById("app");
const searchInput = document.getElementById("searchInput");

function renderPrograms(filter = "") {
  app.innerHTML = "";

  edustreamixData.programs.forEach(program => {

    const programCard = document.createElement("div");
    programCard.className = "card";

    const title = document.createElement("div");
    title.className = "program-title";
    title.textContent = program.programName;

    programCard.appendChild(title);

    program.subjects.forEach(subject => {

      if (!subject.subjectName.toLowerCase().includes(filter.toLowerCase()))
        return;

      const subjectDiv = document.createElement("div");
      subjectDiv.className = "subject";
      subjectDiv.textContent = subject.subjectName;

      const channelContainer = document.createElement("div");
      channelContainer.className = "channels";

      subject.channels.forEach(channel => {
        channel.links.forEach(link => {
          const a = document.createElement("a");
          a.href = link;
          a.target = "_blank";
          a.className = "channel-link";
          a.textContent = channel.name;
          channelContainer.appendChild(a);
        });
      });

      subjectDiv.addEventListener("click", () => {
        channelContainer.style.display =
          channelContainer.style.display === "block" ? "none" : "block";
      });

      subjectDiv.appendChild(channelContainer);
      programCard.appendChild(subjectDiv);
    });

    app.appendChild(programCard);
  });
}

/* Search with animation */
searchInput.addEventListener("input", () => {
  renderPrograms(searchInput.value);
});

/* Initial Render */
renderPrograms();
