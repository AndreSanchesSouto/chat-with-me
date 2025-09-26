"use client";

import DiscordIcon from "../svg/social-media/DIscordIcon";
import InstagramIcon from "../svg/social-media/InstagramIcon";
import TelegramIcon from "../svg/social-media/TelegramIcon";
import WhatsAppIcon from "../svg/social-media/WhatsAppIcon";
import SettingsComponent from "./SettingsComponent";
import SocialMediaComponent from "./SocialMediaComponent";
import MessagerIcon from "../svg/social-media/MessagerIcon";

const jsonReq = {
  whatsappInstances: [
    {
      id: "1",
      name: "andre",
    }
  ],
  telegramInstances: [
    {
      id: "1",
      name: "andre",
    },
    {
      id: "2",
      name: "andre",
    }
  ],
  discordInstances: [],
  instagramInstances: [],
  messagerInstances: [],
};

function Sidebar() {
  const chatsNetwork = [
    {
      icon: <WhatsAppIcon />,
      type: "whatsapp",
      instances: jsonReq.whatsappInstances,
      route: '/wa-connect'
    },
    {
      icon: <TelegramIcon />,
      type: "telegram",
      instances: jsonReq.telegramInstances,
      route: '/te-connect'
    },
    {
      icon: <DiscordIcon />,
      type: "discord",
      instances: jsonReq.discordInstances,
      route: '/disc-connect'
    },
    {
      icon: <InstagramIcon />,
      type: "instagram",
      instances: jsonReq.instagramInstances,
      route: '/ins-connect'
    },
    {
      icon: <MessagerIcon />,
      type: "messager",
      instances: jsonReq.messagerInstances,
      route: '/mess-connect'
    }
  ]

  return (
    <nav className="bg-primary-base min-h-full p-2 flex flex-col justify-between border-r-2 ">
      <ul className="flex flex-col gap-3">
        {chatsNetwork.map(chat => 
          <li key={chat.type}>
            <SocialMediaComponent
              icon={chat.icon}
              type={chat.type}
              instances={chat.instances}
              route={chat.route}
            />
          </li>
        )}
      </ul>
      <SettingsComponent />
    </nav>
  );
}

export default Sidebar;
