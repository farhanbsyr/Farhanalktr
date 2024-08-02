let project = [
  {
    id: "project-1",
    title: "TodoApp",
    linked: "https://notes-app-with-api-ten.vercel.app",
    images: "todoApps.png",
    body: "TodoApps is an application for keeping records of activities that will and have been carried out. In this app I developed using the fetch API and localStorage features for adding, deleting, saving, etc.",
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
    linked: "https://netflixclone-pm371exyl-farhanbsyrs-projects.vercel.app/",
    images: "netflix.png",
    body: "Netflix Clone is a website that duplicates Netflix. This site includes several features, such as the login feature, which will use authentication via Firebase. Then, the movie feature is taken using the fetch API from TMDB. (in progress)",
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
