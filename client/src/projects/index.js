// {
// ? backgroundColor = couleur du fond de la carte et du bouton
// ? bannerTitle = titre de la carte
// ? galleryLength = nombre d'images pour le carousel
// ! pour galleryLength les images commencent à step_0 et non pas step_1
// ? href = lien du projet
// ? projectName = sert pour rediriger vers une url et utiliser dans le bon dossier images
// }

const projects = [
  {
    backgroundColor: 'rgba(75, 54, 124, 0.85)',
    bannerTitle: 'Twitch remake',
    galleryLength: 4,
    href: 'http://app-twitch.herokuapp.com/#/',
    projectName: 'twitch',
    tags: ['React', 'Redux', 'Twitch API', 'Sass', 'Responsive', 'Heroku']
  },
  {
    backgroundColor: 'rgba(136, 167, 127, 0.85)',
    bannerTitle: 'Football',
    galleryLength: 5,
    href: 'http://app-football.herokuapp.com/#/',
    projectName: 'football',
    tags: ['React', 'Sass', 'Responsive', 'Heroku']
  },
  {
    backgroundColor: 'rgba(63, 81, 181, 0.85)',
    bannerTitle: 'Calendar',
    galleryLength: 10,
    href: 'http://cld-peda.herokuapp.com/#/',
    projectName: 'calendar',
    tags: [
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
    galleryLength: 10,
    href: 'https://github.com/Bakhaw/Hipip-In',
    projectName: 'hipipin',
    tags: [
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
    galleryLength: 13,
    href: 'https://github.com/Bakhaw/avocado',
    projectName: 'avocado',
    tags: [
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
    bannerTitle: 'Netflix remake',
    galleryLength: 2,
    href: 'https://github.com/Bakhaw/flouflix',
    projectName: 'flouflix',
    tags: ['React', 'React Hooks', 'Sass']
  }
];

export default projects;
