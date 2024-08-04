let project = [
  {
    id: "project-1",
    title: "TodoApp",
    linked: "https://notes-app-with-api-ten.vercel.app",
    github: "https://github.com/farhanbsyr/NotesApp-WithAPI",
    images: "todoApps.png",
    body: "TodoApps is a web application designed for managing and organizing your tasks and notes. This application offers a range of features to help you efficiently keep track of your activities. Below are the key features implemented:",
    detailBD: [
      "Add Notes, allows users to input new notes using the Fetch API. The inputted data is also stored in local storage to ensure persistence even after the page is refreshed.",
      "Saved Notes, facilitates the separation of completed notes from ongoing ones, helping users manage their tasks more effectively.",
      "Delete Notes, provides the functionality to remove notes from local storage, ensuring that outdated or irrelevant notes can be cleared out.",
      "Undo Notes, Enables users to restore notes that have been saved but need to be placed back among unsaved notes, allowing for easy recovery and reorganization.",
    ],
    skills: [
      {
        icon: "html-icon.svg",
        altt: "html",
        lebar: "30px",
      },
      {
        icon: "css-icon.svg",
        altt: "css",
        lebar: "30px",
      },
      {
        icon: "js.png",
        altt: "javascript",
        lebar: "30px",
      },
    ],
  },
  {
    id: "project-2",
    title: "Netflix Clone",
    linked: "https://clone-netflix-portfolio.vercel.app/",
    github: "https://github.com/farhanbsyr/Clone_Netflix",
    images: "netflix.png",
    body: "Netflix Clone is a web application designed to replicate the core functionalities of Netflix, complete with a range of features to enhance the user experience. This project is intended for portfolio purposes. Below are the key features implemented:",
    detailBD: [
      "Login Feature, Users can access the homepage using dummy email and password credentials. This feature includes validation to ensure accurate login data and minimize errors.",
      "Logout Feature, Allows users to log out of their accounts and return to the login page with ease, ensuring session security and privacy.",
      "SignUp Feature, Users can register by entering a dummy username, email, and password. This feature includes strict validation to ensure data integrity in the database",
      "Authentication Feature, Utilizes Firebase for managing user sessions, including login and logout. This feature enables real-time tracking of user status and ensures secure access to the main page.",
      "Movie List Feature, Displays a list of movies using the Fetch API integrated with TMDB (The Movie Database). Users can browse a variety of movies and obtain up-to-date information.",
      "Movie Detail Feature, Provides comprehensive details about movies using the Fetch API from TMDB. Users can view clips and relevant descriptions of the films.",
    ],
    skills: [
      {
        icon: "physics.png",
        altt: "reactJS",
        lebar: "30px",
      },
      {
        icon: "css-icon.svg",
        altt: "vanilla css",
        lebar: "30px",
      },
    ],
  },
  {
    id: "project-3",
    title: "Traffic Pricing",
    linked: "https://interactive-pricing-hazel-alpha.vercel.app",
    github: "https://github.com/farhanbsyr/InteractivePricing",
    images: "TrafficPricing.png",
    body: "Traffic Pricing is an interactive feature for users to determine the appropriate price for purchasing a service.",
    skills: [
      {
        icon: "html-icon.svg",
        altt: "html",
        lebar: "30px",
      },
      {
        icon: "css-icon.svg",
        altt: "css",
        lebar: "30px",
      },
      {
        icon: "js.png",
        altt: "javascript",
        lebar: "30px",
      },
    ],
  },
  {
    id: "project-4",
    title: "Homzy",
    linked: "https://github.com/farhanbsyr/Homzy-Real-Estate.git",
    github: "https://github.com/farhanbsyr/Homzy-Real-Estate.git",
    images: "homzy.png",
    body: "Homzy is a digital platform that provides some of the best properties that are livable. This website aims to make it easier for sellers to promote their properties to buyers.",
    skills: [
      {
        icon: "physics.png",
        altt: "react",
        lebar: "35px",
      },
      {
        icon: "tailwind-css-icon.svg",
        altt: "css",
        lebar: "35px",
      },
    ],
  },
];

function getAllNotes() {
  return project;
}

function getNote(id) {
  const foundedNote = notes.find((note) => note.id === id);
  return foundedNote;
}

function getActiveNotes() {
  const activeNotes = notes.filter((note) => !note.archived);
  return activeNotes;
}

function getArchivedNotes() {
  const archivedNotes = notes.filter((note) => note.archived);
  return archivedNotes;
}

function addNote({ title, body }) {
  notes = [
    ...notes,
    {
      id: `notes-${+new Date()}`,
      title: title || "(untitled)",
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    },
  ];
}

function deleteNote(id) {
  notes = notes.filter((note) => note.id !== id);
}

function archiveNote(id) {
  notes = notes.map((note) => {
    if (note.id === id) {
      console.log(note);
      return { ...note, archived: true };
    }
    return note;
  });
}

function unarchiveNote(id) {
  notes = notes.map((note) => {
    if (note.id === id) {
      return { ...note, archived: false };
    }

    return note;
  });
}

function editNote({ id, title, body }) {
  const noteToEdit = notes.find((note) => note.id === id);
  noteToEdit.title = title;
  noteToEdit.body = body;

  notes = notes.map((note) => {
    if (note.id === id) {
      return note;
    }
    return note;
  });
}

export {
  getAllNotes,
  getActiveNotes,
  getArchivedNotes,
  deleteNote,
  editNote,
  getNote,
  archiveNote,
  unarchiveNote,
  addNote,
};
