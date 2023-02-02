const projects = [
  {
    projectId: 1,
    projectName: 'Keeping track of hundreds of components',
    projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    imageDesktop: 'img/projects/projectone-img.png',
    gitIcon: 'img/icons/git-icon.svg',
    liveIcon: 'img/icons/liveIcon.svg',
    techMobile: ['Ruby on rails', 'css', 'JavScript'],
    techDesktop: ['Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Codepen'],
    sourceLink: 'https://github.com/jeanbuhendwa/portfolio-website',
    liveLink: 'https://jeanbuhendwa.github.io/portfolio-website/',
  },

  {
    projectId: 2,
    projectName: 'Keeping track of hundreds of components',
    projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    imageDesktop: 'img/projects/projectone-img.png',
    gitIcon: 'img/icons/git-icon.svg',
    liveIcon: 'img/icons/liveIcon.svg',
    techMobile: ['Ruby on rails', 'css', 'JavScript'],
    techDesktop: ['Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Codepen'],
    sourceLink: 'https://github.com/jeanbuhendwa/portfolio-website',
    liveLink: 'https://jeanbuhendwa.github.io/portfolio-website/',
  },

  {
    projectId: 3,
    projectName: 'Keeping track of hundreds of components',
    projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    imageDesktop: 'img/projects/projectone-img.png',
    gitIcon: 'img/icons/git-icon.svg',
    liveIcon: 'img/icons/liveIcon.svg',
    techMobile: ['Ruby on rails', 'css', 'JavScript'],
    techDesktop: ['Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Codepen'],
    sourceLink: 'https://github.com/jeanbuhendwa/portfolio-website',
    liveLink: 'https://jeanbuhendwa.github.io/portfolio-website/',
  },

  {
    projectId: 4,
    projectName: 'Keeping track of hundreds of components',
    projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    imageDesktop: 'img/projects/projectone-img.png',
    gitIcon: 'img/icons/git-icon.svg',
    liveIcon: 'img/icons/liveIcon.svg',
    techMobile: ['Ruby on rails', 'css', 'JavScript'],
    techDesktop: ['Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Codepen'],
    sourceLink: 'https://github.com/jeanbuhendwa/portfolio-website',
    liveLink: 'https://jeanbuhendwa.github.io/portfolio-website/',
  },

  {
    projectId: 5,
    projectName: 'Keeping track of hundreds of components',
    projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    imageDesktop: 'img/projects/projectone-img.png',
    gitIcon: 'img/icons/git-icon.svg',
    liveIcon: 'img/icons/liveIcon.svg',
    techMobile: ['Ruby on rails', 'css', 'JavScript'],
    techDesktop: ['Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Codepen'],
    sourceLink: 'https://github.com/jeanbuhendwa/portfolio-website',
    liveLink: 'https://jeanbuhendwa.github.io/portfolio-website/',
  },

  {
    projectId: 6,
    projectName: 'Keeping track of hundreds of components',
    projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    imageDesktop: 'img/projects/projectone-img.png',
    gitIcon: 'img/icons/git-icon.svg',
    liveIcon: 'img/icons/liveIcon.svg',
    techMobile: ['Ruby on rails', 'css', 'JavScript'],
    techDesktop: ['Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Codepen'],
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

// Fucntion to create the template here
