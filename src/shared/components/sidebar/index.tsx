"use client";

import DiscordIcon from "../../svg/social-media/DIscordIcon";
import InstagramIcon from "../../svg/social-media/InstagramIcon";
import TelegramIcon from "../../svg/social-media/TelegramIcon";
import WhatsAppIcon from "../../svg/social-media/WhatsAppIcon";
import SettingsComponent from "./SettingsComponent";
import SocialMediaComponent from "./SocialMediaComponent";
import MessagerIcon from "../../svg/social-media/MessagerIcon";
import { usePathname } from "next/navigation";

const jsonReq = {
  whatsappInstances: [
    {
      id: "1",
      name: "andre",
    },
  ],
  telegramInstances: [
    {
      id: "1",
      name: "andre",
    },
    {
      id: "2",
      name: "andre_sot",
    },
  ],
  discordInstances: [],
  instagramInstances: [],
  messagerInstances: [],
};

function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="bg-primary-base min-h-full p-2 flex flex-col justify-between border-r-2 ">
      <ul className="flex flex-col gap-3">
        {[
          {
            icon: (
              <div className={`${pathname.startsWith("/wa-connect")
                  ? "text-lime-400 ring-lime-400"
                  : "text-primary-dark ring-primary-dark"
                } hover:text-lime-500 hover:ring-lime-500 duration-200 transition-all bg-primary-base-light w-min h-min rounded-full p-[7px] ring-[1.5px]`}
              >
                <WhatsAppIcon />
              </div>
            ),
            type: "whatsapp",
            instances: jsonReq.whatsappInstances,
            route: "/wa-connect",
          },
          {
            icon: (
              <div className={`${pathname.startsWith("/te-connect")
                  ? "text-cyan-400 ring-cyan-400"
                  : "text-primary-dark ring-primary-dark"
                } hover:text-cyan-500 hover:ring-cyan-500 duration-200 transition-all bg-primary-base-light w-min h-min rounded-full p-[7px] ring-[1.5px]`}
              >
                <TelegramIcon />
              </div>
            ),
            type: "telegram",
            instances: jsonReq.telegramInstances,
            route: "/te-connect",
          },
          {
            icon: (
              <div className={`${pathname.startsWith("/disc-connect")
                  ? "text-sky-400 ring-sky-400"
                  : "text-primary-dark ring-primary-dark"
                } hover:text-sky-500 hover:ring-sky-500 duration-200 transition-all bg-primary-base-light w-min h-min rounded-full p-[7px] ring-[1.5px]`}
              >
                <DiscordIcon />
              </div>
            ),
            type: "discord",
            instances: jsonReq.discordInstances,
            route: "/disc-connect",
          },
          {
            icon: (
              <div className={`${pathname.startsWith("/ins-connect")
                  ? "text-pink-500 ring-pink-500"
                  : "text-primary-dark ring-primary-dark"
                } hover:text-pink-600 hover:ring-pink-600 duration-200 transition-all bg-primary-base-light w-min h-min rounded-full p-[7px] ring-[1.5px]`}
              >
                <InstagramIcon />
              </div>
            ),
            type: "instagram",
            instances: jsonReq.instagramInstances,
            route: "/ins-connect",
          },
          {
            icon: (
              <div className={`${pathname.startsWith("/mess-connect")
                  ? "text-blue-600 ring-blue-600"
                  : "text-primary-dark ring-primary-dark"
                } hover:text-blue-700 hover:ring-blue-700 duration-200 transition-all bg-primary-base-light w-min h-min rounded-full p-[7px] ring-[1.5px]`}
              >
                <MessagerIcon />
              </div>
            ),
            type: "messager",
            instances: jsonReq.messagerInstances,
            route: "/mess-connect",
          },
        ].map((chat) => (
          <li key={chat.type}>
            <SocialMediaComponent
              icon={chat.icon}
              type={chat.type}
              instances={chat.instances}
              route={chat.route}
            />
          </li>
        ))}
      </ul>
      <SettingsComponent />
    </nav>
  );
}

export default Sidebar;
