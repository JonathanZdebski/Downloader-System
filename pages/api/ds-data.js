/*API: export default function DsData(req, res) {
  res.status(200).json({
    titulo: "DISCORD UPDATED",
    img: "",
    text: "Discord is an American VoIP, instant messaging and digital distribution platform designed for creating communities. Users communicate with voice calls, video calls, text messaging, media and files in private chats or as part of communities…",
  });
}
*/
import Image from "next/image";
import discordcontent from "../../public/images/discordcontent.png";

export default function DsData() {
  return [
    {
      id: 0,
      titulo: "Discord Updated – Download",
      text: "Oracle VM VirtualBox (formerly Sun VirtualBox, Sun xVM VirtualBox and Innotek VirtualBox) is a free and open-source hosted hypervisor for x86 virtualization, developed by Oracle Corporation. Created by Innotek, it was acquired by Sun Microsystems in 2008, which was in turn acquired by Oracle in 2010. VirtualBox may be installed on Windows, macOS, Linux, Solaris and OpenSolaris. There are also ports to FreeBSD and Genode. It supports the creation and management of guest virtual machines running Windows, Linux, BSD, OS/2, Solaris, Haiku, and OSx86, as well as limited virtualization of macOS guests on Apple hardware. For some guest operating systems, a “Guest Additions” package of device drivers and system applications is available, which typically improves performance, especially that of graphics.",
    },
    {
      id: 1,
      titulo: "GITHUB",
      img: "",
      text: "GitHub is a web-based platform used for version control and collaboration. It helps developers to work together on projects, track changes to code, and manage software releases...",
    },
  ];
}
