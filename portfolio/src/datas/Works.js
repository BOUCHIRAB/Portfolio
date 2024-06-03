import kasa from "./../assets/projets/kasa.webp"
import archi from "./../assets/projets/archi.webp"
import booki from "./../assets/projets/booki.webp"
import carducci from "./../assets/projets/carducci.webp"
import QWENTA from "./../assets/projets/QWENTA.webp"
import grimmoire from "./../assets/projets/grimmoire.webp"
import portfolio from "./../assets/projets/portfolio.webp"

export const ListWorks = [
  {
    id: "1",
    title: "Création d'une application web de location immobilière avec React",
    obj:
      "L'objectif de ce projet d'étude est la refonte totale du site de Kasa (entreprise de location d'appartements entre particuliers) pour passer à une stack complète en JavaScript avec NodeJS côté back-end, et React côté front-end.",
    skills: [
      "Initialiser une application avec Create React App",
      "Construire une Single Page Application complète qui respecte une architecture robuste",
      "Configurer la navigation entre les pages de l'application avec React Router",
      "Développer des éléments de l'interface d'un site web grâce à des composants React",
      "Développer une interface web avec Sass",
      "Mettre en œuvre des animations CSS dynamiques",
    ],
    tools: "JAVASCRIPT, REACT, SASS, HTML",
    repo: "https://github.com/BOUCHIRAB/OpenClassroomsProjet5.git",
    website: "https://ibkasa.netlify.app#",
    pictures: kasa,
  },
  {
    id: "2",
    title:
      "Création de la page d'accueil d'une agence de voyage avec HTML & CSS",
    obj:
      "L'entreprise BOOKI souhaite développer un site Internet qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix. Dans ce projet d'étude, j'ai été chargée d'intégrer l'interface du site avec du code HTML et CSS.",
    skills: [
      "Implémenter une interface responsive avec HTML5 et CSS3",
      "Garantir un code de qualité, validé auprès du W3C",
      "Intégrer des maquettes avec précision",
      "Versionner son projet avec Git et Github",
      "Installer un environnement de développement front-end",
    ],
    tools: "HTML, CSS, GITHUB, FIGMA",
    repo: "https://github.com/BOUCHIRAB/OpenClassroomsProjet2.git",
    website: "https://bouchirab.github.io/OpenClassroomsProjet2/",
    pictures: booki,
  },
  {
    id: "3",
    title: "Création d'une page web dynamique avec javascript",
    obj:
      "Ce projet d'étude porte sur la conception du site portfolio d'une architecte d'intérieur. Il comporte notamment la page de présentation des travaux de l'architecte, une page de connexion de l'administrateur du site et une modale permettant d'uploader de nouveaux médias.",
    skills: [
      "Gérer les événements utilisateurs avec javascript",
      "Manipuler les éléments du DOM avec javascript",
      "Récupérer les données utilisateurs dans le javascript via des formulaires",
      "Interagir avec un service web à l'aide d'une API",
      "Faire persister les données et tester les fonctionnalités",
      "Gérer la connexion de l'utilisateur et la différence entre un utilisateur connecté et non connecté ",
    ],
    tools: "JAVASCRIPT, NODE, HTML, CSS, GITHUB",
    repo: "https://github.com/BOUCHIRAB/OpenclassroomsProjet3.git",
    pictures: archi,
  },
  {
    id: "4",
    title: "Débuggage et optimisation d'un site de photographe",
    obj:
      "Ce projet consiste à optimiser le référencement d'un site existant, en améliorant sa performance et son accessibilité. Il s'agit d'identifier les problèmes de chargement et de référencement , proposer puis mettre en pratique les recommandations pour améliorer la vitesse de chargement, la structure du code, et le référencement, de rédiger un rapport illustrant les résultats avant et après les modifications. ",
    skills: [
      "Auditer et optimiser les performances d'un site web",
      "Débugger un site web grâce aux Chrome devtools",
      "Diagnostiquer et corriger la crawlabilité d'un site",
      "Rédiger un cahier de recette pour tester un site",
      "Mettre en place le référencement local en utilisant Schema.org ",
      "Ajouter les metas pour les réseaux sociaux ",
      "Faire les modifications liées à l'accessibilité du site",
      "Produire un rapport d'optimisation",
      "Augmenter la vitesse d'un site",
      "Optimiser le SEO d'un site construit avec un framework javascript",
    ],
    tools:
      "Chrome devtools, Lighthouse, GTMETRIX, WAVE, HTML, Javascript        ",
    repo: "https://github.com/BOUCHIRAB/OpenClassroomsProjet4.git",
    pictures: carducci,
  },
  {
    id: "5",
    title: "Planification du développement d'un site pour un client",
    obj:
      "L'agence Qwenta souhaite faire développer un “Menu Maker” : un site permettant aux restaurateurs d'afficher et de mettre en page leurs menus facilement, en quelques clics. L'objectif de ce projet d'étude est la préparation et la planification complète du projet.",
    skills: [
      "Planifier et assurer la gestion de projet avec la méthode agile",
      "Traduire des besoins fonctionnels en spécifications techniques et organiser le travail de développement ",
      "Mettre en place une méthode de veille technologique",
      "Présenter la solution technique au client",
      "Suivre le déroulement d'un projet grâce à un outil de gestion de projet",
    ],
    tools: "Notion, Wakelet",
    pictures: QWENTA,
  },
  {
    id: "6",
    title: "Développement du back-end d'un site de notation de livres",
    obj:
      "Une petite chaîne de librairies souhaite ouvrir un site de référencement et de notation de livres : Mon Vieux Grimoire. L'objectif de ce projet d'étude est la réalisation du backend du site permettant d'ajouter un nouveau livre, le modifier, le supprimer, le noter et d'afficher une note moyenne visible par le public.",
    skills: [
      "Créer une API REST avec Node, Express et Mongodb ",
      "Mettre en place un système d'authentification sur une application Express ",
      "Gérer des fichiers utilisateur sur une application Express. ",
      "Implémenter un modèle logique de données conformément à la réglementation",
      "Mettre en œuvre des opérations CRUD de manière sécurisée",
      "Stocker des données de manière sécurisée",
      "Respecter les bonnes pratiques du Green Code pour réduire l'empreinte écologique du site",
    ],
    tools: "NODE, EXPRESS, MONGODB, Javascript",
    repo: "https://github.com/BOUCHIRAB/OpenclassroomsProjet6.git",
    pictures: grimmoire,
  },
  {
    id: "7",
    title: "Création et publication d'un portfolio de développeur",
    obj:
      "Ce projet d'étude consiste à créer et publier en ligne son portfolio de développeur, permettant de présenter son parcours, ses compétences et ses projets de manière professionnelle.",
    skills: [
      "Conception complète d'un site web dynamique en React",
      "Construction d'une Single Page Application complète qui respecte une architecture robuste",
      "Déploiement du site en ligne",
    ],
    tools: "HTML, SASS, JAVASCRIPT, REACT, BOOTSTRAP, MUI MATERIAL, GITHUB ",
    repo: "https://github.com/BOUCHIRAB/Portfolio.git",
    website: "https://bouchirab.fr/",
    pictures: portfolio,
  },
]
