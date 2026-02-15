const courseSelect = document.getElementById("courseSelect");
const subjectFilter = document.getElementById("subjectFilter");
const content = document.getElementById("content");

function loadCourses() {
  data.courses.forEach(course => {
    const option = document.createElement("option");
    option.value = course.name;
    option.textContent = course.name;
    courseSelect.appendChild(option);
  });
}

function loadSubjects() {
  Object.values(data.sharedSubjects).forEach(subject => {
    const option = document.createElement("option");
    option.value = subject.name;
    option.textContent = subject.name;
    subjectFilter.appendChild(option);
  });
}

function render() {
  const selectedCourse = courseSelect.value;
  const selectedSubject = subjectFilter.value;

  content.innerHTML = "";

  if (!selectedCourse) return;

  const course = data.courses.find(c => c.name === selectedCourse);

  course.subjects.forEach(key => {
    const subject = data.sharedSubjects[key];

    if (selectedSubject && subject.name !== selectedSubject) return;

    const card = document.createElement("div");
    card.className = "subject-card";

    card.innerHTML = `<h2>${subject.name}</h2>`;

    if (subject.parts) {
      subject.parts.forEach(part => {
        card.innerHTML += `<h3>${part.title}</h3>`;
        part.links.forEach(link => {
          card.innerHTML += `<a href="${link}" target="_blank">Open Playlist</a>`;
        });
      });
    }

    if (subject.whole) {
      card.innerHTML += `<h3>Whole Subject</h3>`;
      subject.whole.forEach(item => {
        card.innerHTML += `<a href="${item.link}" target="_blank">${item.channel}</a>`;
      });
    }

    content.appendChild(card);
  });
}

courseSelect.addEventListener("change", render);
subjectFilter.addEventListener("change", render);

loadCourses();
loadSubjects();
