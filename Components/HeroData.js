import zoomlogoP from "../public/images/zoomlogoP.png";
import bravelogo from "../public/images/bravelogoP.png";
import visualstudio from "../public/images/visualstudio.png";
import obs from "../public/images/obs.png";
import netbeans from "../public/images/netbeanslogoP.png";
import discord from "../public/images/discord.png";

const HeroData = [
  {
    id: 1,
    imgsrc: zoomlogoP,
    title: "Zoom Video",
    text: "Zoom Video Communications, Inc. (or simply Zoom) is an American communications technology company headquartered in San Jose, California. It provides videotelephony...",
    view: "/communication/zoom",
  },
  {
    id: 2,
    imgsrc: bravelogo,
    title: "Brave Browser",
    text: "Brave is a free and open-source web browser developed by Brave Software, Inc. based on the Chromium web browser. It blocks ads and website trackers, and provides a way for users to send...",
    view: "/browsers/brave",
  },
  {
    id: 3,
    imgsrc: visualstudio,
    title: "Visual Studio Code",
    text: "Visual Studio Code is a free source-code editor made by Microsoft for Windows, Linux and macOS. Features include support for debugging, syntax highlighting…",
    view: "/windows/visual-studio-code",
  },
  {
    id: 4,
    imgsrc: obs,
    title: "OBS Studio 27.0",
    text: "Open Broadcaster Software (OBS) is a free and open-source cross-platform streaming and recording program built with Qt and maintained by the OBS Project. As of 2016, the software is now referred…",
    view: "/streamming/obs-studio",
  },
  {
    id: 5,
    imgsrc: netbeans,
    title: "NetBeans IDE 8.2",
    text: "NetBeans is an integrated development environment (IDE) for Java. NetBeans allows applications to be developed from a set of modular software components called modules. NetBeans runs on Microsoft...",
    view: "/windows/netbeans-8.2",
  },
  {
    id: 6,
    imgsrc: discord,
    title: "Discord Updated",
    text: "Discord is an American VoIP, instant messaging and digital distribution platform designed for creating communities. Users communicate with voice calls, video calls, text messaging, media and files in private chats or as part of communities…",
    view: "/communication/discord",
  },
];

export default HeroData;
