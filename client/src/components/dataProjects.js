const pathServerTest = "https://node-api-image-moshe-brizel-website.vercel.app";

export let lisetProjects = [
  {
    srcGif: pathServerTest + "/tic tac to.gif",
    textH2: "Tic Tac Toe with machine learning",
    hrefGit: "https://github.com/MosheBrizel/tic-tac-toe-game-AI",
    buttonWeb: false,
    hrefPlay: "",
    textProject:
      "I created a playable tic tac toe game with a GUI interface in Python using Tkinter. The game includes an AI opponent that leverages reinforcement learning to progressively improve its strategy. \nThe AI player maintains a dictionary tracking which moves lead to wins or losses based on past games. It utilizes this data to choose moves with the highest historical win rates. \n Over repeated self-play, the AI learns favorable moves leading to victories. The learned data persists between sessions by saving to a file. \n This project demonstrates applying basic reinforcement learning to a game AI, allowing it to start with no knowledge and improve through experience. The end result is an AI that continuously refines its strategy presenting an increasing challenge.",
  },
  {
    srcGif: pathServerTest + "/network.gif",
    textH2: "Correspondence within an internal network",
    hrefGit:
      "https://github.com/MosheBrizel/Correspondence-within-an-internal-network",
    buttonWeb: false,
    hrefPlay: "",
    textProject:
      "I developed a chat application using Python and Tkinter for internal communication within a network. It allows multiple clients to connect to a central server and chat both publicly and privately. \nThe server handles coordinating connections and relaying messages between clients. Each client is identified by a unique username. Public group chats are visible to all connected clients. Clients can also chat privately 1-on-1.\n The server and client GUIs are built using Tkinter for a user-friendly interface. Messaging is handled asynchronously using threads to ensure a smooth chatting experience. \n This project demonstrates core networking concepts like servers, clients, sockets, and threading in Python. The reusable client-server structure provides a foundation for building more advanced chat apps and other networked applications. \n This internal chat application enables secure communication within a private network.",
  },
  {
    srcGif: pathServerTest + "/booms.gif",
    textH2: "Minesweeper in Hebrew",
    hrefGit: "https://github.com/MosheBrizel/Minesweeper-game-in-Hebrew",
    buttonWeb: false,
    hrefPlay: "",
    textProject:
      "The code implements a single player Minesweeper game in Python using the Tkinter module for the graphical interface. \nPlayers can choose beginner, expert, or custom difficulty levels to set the grid size and number of mines. Left-clicking reveals cells, sho wing numbers for adjacent mines. Right-click marks potential mines. \n The game manages the board grid, random mine placement, cell reveal logic, win/lose conditions, and Tkinter GUI. \nKey classes handle the cell, board, and overall game logic. Main functions include generating the board, checking for mine clicks, recursively revealing blank cells, and checking win conditions.\nOverall, it's a classic Minesweeper implementation with multiple difficulty levels, using Python and Tkinter for game logic and graphical interface. \n",
  },
  {
    srcGif: pathServerTest + "/snak.gif",
    textH2: "Snake game",
    hrefGit: "https://github.com/MosheBrizel/Snake-Game/",
    buttonWeb: true,
    hrefPlay: "https://moshebrizel.github.io/Snake-Game/",
    textProject:
      "I created a browser-based version of the classic Snake game using HTML, CSS, and JavaScript. This project was built without the use of external libraries or frameworks. \nThe player uses the arrow keys to control the direction of the snake as it moves around the screen. The goal is to eat randomly spawned food items to make the snake grow in length. Each food item eaten increases the score. \n Hitting the screen walls wraps the snake back around to the other side. Colliding with the snake's tail ends the game. Additional features include adjustable snake speed and color options. \nThis project shows skills in core web development languages to implement game logic and graphics.",
  },
  {
    srcGif: pathServerTest + "/Black ball gif.gif",
    textH2: "Blak ball game",
    hrefGit: "https://github.com/MosheBrizel/black-ball",
    buttonWeb: true,
    hrefPlay: "https://black-ball.vercel.app/",
    textProject:
      "I created a puzzle game called Ball Jumping Game with React. The goal is to eliminate all white balls by jumping over them, leaving only one black ball.\n It features levels of increasing difficulty with different arrangements of colored balls in rows. Players click on a ball to initiate a jump to an empty space, which removes the jumped over ball. \nValid moves highlight in green. The player wins by removing all white balls through jumps. Losing occurs if no more valid jumps remain. \nThe game includes 47 levels, instructions modal, level select dropdown, and reset board button. Styling was done with CSS.\nI utilized React capabilities for creating components like Ball, LevelSelect, and Game. React Hooks API managed state for board data, level status, etc. \nThis project shows my skills in building interactive applications with React. It combines game logic programming with clean component architecture. I enjoyed creating an engaging puzzle game to demonstrate React in a fun way.",
  },
  {
    srcGif: "",
    textH2: "",
    hrefGit: "",
    buttonWeb: false,
    hrefPlay: "",
    textProject: "",
  },
];
