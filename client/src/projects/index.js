// {
// ? backgroundColor = couleur du fond de la carte et du bouton
// ? bannerTitle = titre de la carte
// ? description = clé i18n de la desription du projet
// ? galleryLength = nombre d'images pour le carousel
// ! pour galleryLength les images commencent à step_0 et non pas step_1
// ? href = lien du projet
// ? projectName = sert pour rediriger vers une url et utiliser dans le bon dossier images
// }

const projects = [
  {
    backgroundColor: 'rgba(75, 54, 124, 0.85)',
    bannerTitle: 'Twitch',
    description: 'Twitch__description', // ? i18n
    galleryLength: 4,
    links: {
      github: 'https://github.com/Bakhaw/twitch-app',
      online: 'https://app-twitch.herokuapp.com/#/'
    },
    projectName: 'twitch',
    technos: ['React', 'Redux', 'Twitch API', 'Sass', 'Responsive', 'Heroku']
  },
  {
    backgroundColor: 'rgba(136, 167, 127, 0.85)',
    bannerTitle: 'Football',
    description: 'Football__description', // ? i18n
    galleryLength: 5,
    links: {
      github: 'https://github.com/Bakhaw/football-app',
      online: 'https://app-football.herokuapp.com/#/'
    },
    projectName: 'football',
    technos: ['React', 'Sass', 'Responsive', 'Heroku']
  },
  {
    backgroundColor: 'rgba(63, 81, 181, 0.85)',
    bannerTitle: 'Calendar',
    description: 'Calendar__description', // ? i18n
    galleryLength: 10,
    links: {
      github: 'https://github.com/Bakhaw/cld-peda',
      online: 'https://cld-peda.herokuapp.com/#/'
    },
    projectName: 'calendar',
    technos: [
      'React',
      'React Hooks',
      'Context API',
      'Express.js',
      'MongoDB',
      'Sass',
      'Responsive',
      'Heroku'
    ]
  },
  {
    backgroundColor: 'rgba(62, 70, 85, 0.85)',
    bannerTitle: 'Hipin In',
    description: 'Hipipin__description', // ? i18n
    galleryLength: 10,
    links: {
      github: 'https://github.com/Bakhaw/Hipip-In',
      online: null
    },
    projectName: 'hipipin',
    technos: [
      'React',
      'Context API',
      'Express.js',
      'MongoDB',
      'Sass',
      'Responsive',
      'Hackathon'
    ]
  },
  {
    backgroundColor: 'rgba(226, 54, 68, 0.75)',
    bannerTitle: 'Avocado',
    description: 'Avocado__description', // ? i18n
    galleryLength: 13,
    links: {
      github: 'https://github.com/Bakhaw/avocado',
      online: null
    },
    projectName: 'avocado',
    technos: [
      'React',
      'React Hooks',
      'Express.js',
      'MongoDB',
      'Sass',
      'Responsive'
    ]
  },
  {
    backgroundColor: 'rgba(20, 20, 20, 0.90)',
    bannerTitle: 'Netflix',
    description: 'Netflix__description', // ? i18n
    galleryLength: 2,
    links: {
      github: 'https://github.com/Bakhaw/flouflix',
      online: null
    },
    projectName: 'flouflix',
    technos: ['React', 'React Hooks', 'Sass']
  }
];

export default projects;
