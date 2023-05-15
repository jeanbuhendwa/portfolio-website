const workSection = document.getElementById('work-section-container');
const section = document.createElement('section');
workSection.appendChild(section);

section.innerHTML += `<section class="work-section" id="portfolio">
<h2>My Recent Works</h2>
<div id="hr-line"></div>
<div class="project-container">
  <div class="work work1">
    <div class="project-img">
      <img src="img/projects/jscamp.png" alt="Js Camp">
    </div>
    <div class="project-info">
      <h3>JavaScript Camp</h3>
      <ul>
      <li>JavaScript</li>
        <li>CSS</li>
        <li>HTML</li>
      </ul>
      <button onclick="projectDetails(0)" name="See Project">See Project</button>
    </div>
  </div>
  <div class="work">
    <div class="project-img">
        <img src="img/projects/robot-friend.png" alt="Robot Friends">
    </div>
    <div class="project-info">
      <h3>Robot Friends App</h3>
      <ul>
        <li>React Js</li>
        <li>CSS</li>
        <li>Tachyons</li>
      </ul>
      <button onclick="projectDetails(1)" name="See Project">See Project</button>
    </div>
  </div>
  <div class="work">
    <div class="project-img">
        <img src="img/projects/math-magician.png" alt="Math Magician">
    </div>
    <div class="project-info">
      <h3>Math Magician App</h3>
      <ul>
        <li>React Js</li>
        <li>CSS</li>
        <li>React Router</li>
      </ul>
      <button onclick="projectDetails(2)" name="See Project">See Project</button>
    </div>
  </div>
  <div class="work">
    <div class="project-img">
        <img src="img/projects/space-travel.png" alt="Space Travellers">
    </div>
    <div class="project-info">
      <h3>Space Travellers' Hub</h3>
      <ul>
        <li>React Js</li>
        <li>Redux</li>
        <li>CSS</li>
      </ul>
      <button onclick="projectDetails(3)" name="See Project">See Project</button>
    </div>
  </div>
  <div class="work">
    <div class="project-img">
        <img src="img/projects/covid-app.png" alt="Covid App">
    </div>
    <div class="project-info">
      <h3>CoviStats App</h3>
      <ul>
        <li>React Js</li>
        <li>Redux</li>
        <li>CSS</li>
        <li>API</li>
      </ul>
      <button onclick="projectDetails(4)" name="See Project">See Project</button>
    </div>
  </div>
  <div class="work">
    <div class="project-img">
        <img src="img/projects/meal-app.png" alt="Meal App">
    </div>
    <div class="project-info">
      <h3>The Meal App</h3>
      <ul>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>WebPack</li>
      </ul>
      <button onclick="projectDetails(5)" name="See Project">See Project</button>
    </div>
  </div>
</div>
</section>

`;

const projects = [
  {
    projectId: 1,
    projectName: 'JavaScript Camp',
    projectDescription:
      'The aim was to develop a website at the end of the module that will mainly use HTML, CSS and JavaScript as primary languages',
    imageDesktop: 'img/projects/jscamp.png',
    gitIcon: 'img/icons/git-icon.svg',
    liveIcon: 'img/icons/liveIcon.svg',
    techMobile: ['HTML', 'CSS', 'JavScript'],
    techDesktop: [
      'Codekit',
      'GitHub',
      'Javasript',
      'CSS',
      'HTML',
      'Terminal',
      'Codepen',
    ],
    sourceLink: 'https://github.com/jeanbuhendwa/capstone-project1',
    liveLink: 'https://jeanbuhendwa.github.io/capstone-project1/',
  },

  {
    projectId: 2,
    projectName: 'Robot Friends',
    projectDescription:
      'Robot Friends is an app built with react & react component. The app gives a friendly UI, easy to use and to look for a robot card.',
    imageDesktop: 'img/projects/robot-friend.png',
    gitIcon: 'img/icons/git-icon.svg',
    liveIcon: 'img/icons/liveIcon.svg',
    techMobile: ['React js', 'CSS', 'Tachyons'],
    techDesktop: [
      'React js',
      'GitHub',
      'Javasript',
      'Tachyons',
      'Terminal',
      'Gitflow',
    ],
    sourceLink: 'https://github.com/jeanbuhendwa/robot-friends',
    liveLink: 'https://jeanbuhendwa.github.io/robot-friends/',
  },

  {
    projectId: 3,
    projectName: 'Math Magician',
    projectDescription:
      'Math Magician is an online calculator app designed to help users solve a variety of math problems quickly and easily. In addition, the app includes random motivational quotes to help users stay inspired and motivated while working on challenging math problems.',
    imageDesktop: 'img/projects/math-magician.png',
    gitIcon: 'img/icons/git-icon.svg',
    liveIcon: 'img/icons/liveIcon.svg',
    techMobile: ['React js', 'CSS', 'JavScript'],
    techDesktop: [
      'React js',
      'GitHub',
      'Javasript',
      'Bootstrap',
      'React Router',
      'Jest',
    ],
    sourceLink: 'https://github.com/jeanbuhendwa/math-magician',
    liveLink: 'https://math-magician-550k.onrender.com/',
  },

  {
    projectId: 4,
    projectName: "Space Travelers' Hub",
    projectDescription:
      "React Space Travellers' Hub retrieves data from that api and allow you to book a rocket and join a space mission",
    imageDesktop: 'img/projects/space-travel.png',
    gitIcon: 'img/icons/git-icon.svg',
    liveIcon: 'img/icons/liveIcon.svg',
    techMobile: ['React js', 'Redux', 'JavScript'],
    techDesktop: [
      'React js',
      'GitHub',
      'Javasript',
      'Redux',
      'Terminal',
      'Bootstrap',
    ],
    sourceLink: 'https://github.com/jeanbuhendwa/space-traveller',
    liveLink: 'https://space-hub-traveller.netlify.app/',
  },

  {
    projectId: 5,
    projectName: 'CoviStats App',
    projectDescription:
      'CovidApp is a capstone project built with react js & redux that provides information about corona virus in different countries.',
    imageDesktop: 'img/projects/covid-app.png',
    gitIcon: 'img/icons/git-icon.svg',
    liveIcon: 'img/icons/liveIcon.svg',
    techMobile: ['React js', 'css', 'JavScript'],
    techDesktop: [
      'React js',
      'GitHub',
      'Javasript',
      'Bootstrap',
      'Terminal',
      'Redux',
    ],
    sourceLink: 'https://john-covidapp.netlify.app/',
    liveLink: 'https://jeanbuhendwa.github.io/portfolio-website/',
  },

  {
    projectId: 6,
    projectName: 'The Meal App',
    projectDescription:
      'The Meal app that can Send and receive data from an API that give more information about the recipe',
    imageDesktop: 'img/projects/meal-app.png',
    gitIcon: 'img/icons/git-icon.svg',
    liveIcon: 'img/icons/liveIcon.svg',
    techMobile: ['Html', 'css', 'JavScript'],
    techDesktop: ['HTML', 'GitHub', 'Javasript', 'CSS', 'Terminal', 'Webpack'],
    sourceLink: 'https://github.com/jeanbuhendwa/Meal-app',
    liveLink: 'https://jeanbuhendwa.github.io/Meal-app/dist/',
  },
];

const popModal = document.getElementById('popUp-modal');

const closeModal = () => {
  // popModal.style.display = "none";
  popModal.classList.remove('active');
};

window.onclick = function modal(event) {
  if (event.target === popModal) {
    // popModal.style.display = "none";
    popModal.classList.remove('active');
  }
};

function projectDetails(data) {
  const myProject = projects[data];
  popModal.innerHTML = `<div class="content-modal">
    <div class="modal-header">
        <div class="modal-bg-img">
            <span onclick="closeModal()" id="close-btn" class="close-btn">&times;</span>
            <img class="desktop-img" src="${myProject.imageDesktop}"/>
        </div>
    </div>
    <div class="modal-body">
        <div class="title-container">
            <h3 id="title">${myProject.projectName}</h3>
        </div>
        <ul class="tech-tags" id="tech-desktop">
            <li>${myProject.techDesktop[0]}</li>
            <li>${myProject.techDesktop[1]}</li>
            <li>${myProject.techDesktop[2]}</li>
            <li>${myProject.techDesktop[3]}</li>
            <li>${myProject.techDesktop[4]}</li>
            <li>${myProject.techDesktop[5]}</li>
        </ul>
        <ul class="tech-tags" id="tech-mobile">
            <li>${myProject.techMobile[0]}</li>
            <li>${myProject.techMobile[1]}</li>
            <li>${myProject.techMobile[2]}</li>
        </ul>
        <p id="projectDescription">${myProject.projectDescription}</p>
        <div class="modal-footer">
            <a href="${myProject.liveLink}" class="btn-links" target="_blank">
                <button type="submit" class="show-project-btn">
                    <span>See Live</span>
                    <img src="${myProject.liveIcon}" alt="See live icon" />
                </button>
            </a>
            <a href="${myProject.sourceLink}" class="btn-links" target="_blank">
                <button type="submit" class="show-project-btn">
                    <span>See Source</span>
                    <img src="${myProject.gitIcon}" alt="source code icon" /> 
                </button>
            </a>
        </div>
    </div>
    </div>
    `;

  // popModal.style.display = "block";
  popModal.classList.add('active');
}
projectDetails(7);
closeModal();
