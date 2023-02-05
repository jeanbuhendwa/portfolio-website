const workSection = document.getElementById('work-section-container');
const section = document.createElement('section');
workSection.appendChild(section);

section.innerHTML += `<section class="work-section" id="portfolio">
<h2>My Recent Works</h2>
<div id="hr-line"></div>
<div class="project-container">
  <div class="work">
    <div class="project-info">
      <h3>Multi-Post Stories Gain+Glory</h3>
      <ul>
        <li>Ruby on rails</li>
        <li>css</li>
        <li>JavScript</li>
        <li>html</li>
      </ul>
      <button onclick="projectDetails(0)" name="See Project">See Project</button>
    </div>
  </div>
  <div class="work">
    <div class="project-info">
      <h3>Multi-Post Stories Gain+Glory</h3>
      <ul>
        <li>Ruby on rails</li>
        <li>css</li>
        <li>JavScript</li>
        <li>html</li>
      </ul>
      <button onclick="projectDetails(1)" name="See Project">See Project</button>
    </div>
  </div>
  <div class="work">
    <div class="project-info">
      <h3>Multi-Post Stories Gain+Glory</h3>
      <ul>
        <li>Ruby on rails</li>
        <li>css</li>
        <li>JavScript</li>
        <li>html</li>
      </ul>
      <button onclick="projectDetails(2)" name="See Project">See Project</button>
    </div>
  </div>
  <div class="work">
    <div class="project-info">
      <h3>Multi-Post Stories Gain+Glory</h3>
      <ul>
        <li>Ruby on rails</li>
        <li>css</li>
        <li>JavScript</li>
        <li>html</li>
      </ul>
      <button onclick="projectDetails(3)" name="See Project">See Project</button>
    </div>
  </div>
  <div class="work">
    <div class="project-info">
      <h3>Multi-Post Stories Gain+Glory</h3>
      <ul>
        <li>Ruby on rails</li>
        <li>css</li>
        <li>JavScript</li>
        <li>html</li>
      </ul>
      <button onclick="projectDetails(4)" name="See Project">See Project</button>
    </div>
  </div>
  <div class="work">
    <div class="project-info">
      <h3>Multi-Post Stories Gain+Glory</h3>
      <ul>
        <li>Ruby on rails</li>
        <li>css</li>
        <li>JavScript</li>
        <li>html</li>
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
    projectName: 'Bootstrap',
    projectDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageDesktop: 'img/projects/projectone-img.png',
    gitIcon: 'img/icons/git-icon.svg',
    liveIcon: 'img/icons/liveIcon.svg',
    techMobile: ['Ruby on rails', 'css', 'JavScript'],
    techDesktop: [
      'Codekit',
      'GitHub',
      'Javasript',
      'css',
      'Terminal',
      'Codepen',
    ],
    sourceLink: 'https://github.com/jeanbuhendwa/portfolio-website',
    liveLink: 'https://jeanbuhendwa.github.io/portfolio-website/',
  },

  {
    projectId: 2,
    projectName: 'Keeping track of hundreds of components',
    projectDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageDesktop: 'img/projects/projectone-img.png',
    gitIcon: 'img/icons/git-icon.svg',
    liveIcon: 'img/icons/liveIcon.svg',
    techMobile: ['Ruby on rails', 'css', 'JavScript'],
    techDesktop: [
      'Codekit',
      'GitHub',
      'Javasript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    sourceLink: 'https://github.com/jeanbuhendwa/portfolio-website',
    liveLink: 'https://jeanbuhendwa.github.io/portfolio-website/',
  },

  {
    projectId: 3,
    projectName: 'Keeping track of hundreds of components',
    projectDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageDesktop: 'img/projects/projectone-img.png',
    gitIcon: 'img/icons/git-icon.svg',
    liveIcon: 'img/icons/liveIcon.svg',
    techMobile: ['Ruby on rails', 'css', 'JavScript'],
    techDesktop: [
      'Codekit',
      'GitHub',
      'Javasript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    sourceLink: 'https://github.com/jeanbuhendwa/portfolio-website',
    liveLink: 'https://jeanbuhendwa.github.io/portfolio-website/',
  },

  {
    projectId: 4,
    projectName: 'Keeping track of hundreds of components',
    projectDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageDesktop: 'img/projects/projectone-img.png',
    gitIcon: 'img/icons/git-icon.svg',
    liveIcon: 'img/icons/liveIcon.svg',
    techMobile: ['Ruby on rails', 'css', 'JavScript'],
    techDesktop: [
      'Codekit',
      'GitHub',
      'Javasript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    sourceLink: 'https://github.com/jeanbuhendwa/portfolio-website',
    liveLink: 'https://jeanbuhendwa.github.io/portfolio-website/',
  },

  {
    projectId: 5,
    projectName: 'Keeping track of hundreds of components',
    projectDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageDesktop: 'img/projects/projectone-img.png',
    gitIcon: 'img/icons/git-icon.svg',
    liveIcon: 'img/icons/liveIcon.svg',
    techMobile: ['Ruby on rails', 'css', 'JavScript'],
    techDesktop: [
      'Codekit',
      'GitHub',
      'Javasript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    sourceLink: 'https://github.com/jeanbuhendwa/portfolio-website',
    liveLink: 'https://jeanbuhendwa.github.io/portfolio-website/',
  },

  {
    projectId: 6,
    projectName: 'Keeping track of hundreds of components',
    projectDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageDesktop: 'img/projects/projectone-img.png',
    gitIcon: 'img/icons/git-icon.svg',
    liveIcon: 'img/icons/liveIcon.svg',
    techMobile: ['Ruby on rails', 'css', 'JavScript'],
    techDesktop: [
      'Codekit',
      'GitHub',
      'Javasript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    sourceLink: 'https://github.com/jeanbuhendwa/portfolio-website',
    liveLink: 'https://jeanbuhendwa.github.io/portfolio-website/',
  },
];

const popModal = document.getElementById('popUp-modal');

const closeModal = () => {
  popModal.style.display = 'none';
};

window.onclick = function modal(event) {
  if (event.target === popModal) {
    popModal.style.display = 'none';
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

  popModal.style.display = 'block';
}
projectDetails(7);
closeModal();
