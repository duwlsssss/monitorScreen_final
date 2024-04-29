import InternetExplorer from "./InternetExplorer";
import Minesweeper from "./Minesweeper";
import ErrorBox from "./ErrorBox";
import MyComputer from "./MyComputer";
import Notepad from "./Notepad";
import Paint from "./Paint";

import kimIcon from "assets/windowsIcons/kimIcon.png";

import iePaper from "assets/windowsIcons/ie-paper.png";
import ie from "assets/windowsIcons/ie.png";
import mine from "assets/minesweeper/mine-icon.png";
import error from "assets/windowsIcons/897(16x16).png";
import computer from "assets/windowsIcons/676(16x16).png";
import computerLarge from "assets/windowsIcons/676(32x32).png";
import notepad from "assets/windowsIcons/327(16x16).png";
import notepadLarge from "assets/windowsIcons/327(32x32).png";
import paintLarge from "assets/windowsIcons/680(32x32).png";
import paint from "assets/windowsIcons/680(16x16).png";
import KimMyoungsaFinal from "./KimMyoungsaFinal";

const gen = () => {
  let id = -1;
  return () => {
    id += 1;
    return id;
  };
};
const genId = gen();
const genIndex = gen();
export const defaultAppState = [
  {
    component: InternetExplorer,
    header: {
      title: "Internet Explorer",
      icon: iePaper
    },
    defaultSize: {
      width: 700,
      height: 500
    },
    defaultOffset: {
      x: 140,
      y: 30
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    id: genId(),
    zIndex: genIndex()
  },
  {
    component: Minesweeper,
    header: {
      title: "Minesweeper",
      icon: mine
    },
    defaultSize: {
      width: 0,
      height: 0
    },
    defaultOffset: {
      x: 190,
      y: 420
    },
    resizable: false,
    minimized: false,
    maximized: false,
    id: genId(),
    zIndex: genIndex()
  },
  {
    component: MyComputer,
    header: {
      title: "My Computer",
      icon: computer
    },
    defaultSize: {
      width: 660,
      height: 500
    },
    defaultOffset: {
      x: 260,
      y: 50
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    id: genId(),
    zIndex: genIndex()
  },
  {
    component: KimMyoungsaFinal,
    header: {
      title: "KimMyoungsa",
      icon: kimIcon
    },
    defaultSize: {
      width: 900,
      height: 700
    },
    defaultOffset: {
      x: 400,
      y: 90
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    id: genId(),
    zIndex: genIndex()
  },
];

export const defaultIconState = [
  {
    id: 0,
    icon: ie,
    title: "Internet Explorer",
    component: InternetExplorer,
    isFocus: false
  },
  {
    id: 1,
    icon: kimIcon,
    title: "KimMyoungsa",
    component: KimMyoungsaFinal,
    isFocus: false
  },
  {
    id: 2,
    icon: mine,
    title: "지뢰 찾기",
    component: Minesweeper,
    isFocus: false
  },
  {
    id: 3,
    icon: computerLarge,
    title: "내 컴퓨터",
    component: MyComputer,
    isFocus: false
  },
  {
    id: 4,
    icon: notepadLarge,
    title: "메모장",
    component: Notepad,
    isFocus: false
  },
  {
    id: 5,
    icon: paintLarge,
    title: "그림판",
    component: Paint,
    isFocus: false
  }
];

export const appSettings = {
  "Internet Explorer": {
    header: {
      icon: iePaper,
      title: "InternetExplorer"
    },
    component: InternetExplorer,
    defaultSize: {
      width: 700,
      height: 500
    },
    defaultOffset: {
      x: 140,
      y: 30
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: true
  },
  "KimMyoungsa": {
    header: {
      icon: kimIcon,
      title: "김씨네 명함 사무소"
    },
    component: KimMyoungsaFinal,
    defaultSize: {
      width: 800,
      height: 600
    },
    defaultOffset: {
      x: 250,
      y: 40
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: true
  },
  Minesweeper: {
    header: {
      icon: mine,
      title: "Minesweeper"
    },
    component: Minesweeper,
    defaultSize: {
      width: 0,
      height: 0
    },
    defaultOffset: {
      x: 190,
      y: 180
    },
    resizable: false,
    minimized: false,
    maximized: false,
    multiInstance: true
  },
  Error: {
    header: {
      icon: error,
      title: "C:\\",
      buttons: ["close"],
      noFooterWindow: true
    },
    component: ErrorBox,
    defaultSize: {
      width: 380,
      height: 0
    },
    defaultOffset: {
      x: window.innerWidth / 2 - 190,
      y: window.innerHeight / 2 - 60
    },
    resizable: false,
    minimized: false,
    maximized: false,
    multiInstance: true
  },
  "My Computer": {
    header: {
      icon: computer,
      title: "내 컴퓨터"
    },
    component: MyComputer,
    defaultSize: {
      width: 660,
      height: 500
    },
    defaultOffset: {
      x: 260,
      y: 50
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: false
  },
  Notepad: {
    header: {
      icon: notepad,
      title: "글로벌미디어학부 졸업전시회 BLOOM 2024"
    },
    component: Notepad,
    defaultSize: {
      width: 660,
      height: 500
    },
    defaultOffset: {
      x: 270,
      y: 60
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: true
  },
  Paint: {
    header: {
      icon: paint,
      title: "글로벌미디어학부 졸업전시회 BLOOM 2024"
    },
    component: Paint,
    defaultSize: {
      width: 660,
      height: 500
    },
    defaultOffset: {
      x: 280,
      y: 70
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: true
  }
};
export {
  InternetExplorer,
  KimMyoungsaFinal,
  Minesweeper,
  ErrorBox,
  MyComputer,
  Notepad
};
