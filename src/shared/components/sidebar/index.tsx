"use client";

import DiscordIcon from "../svg/social-media/DIscordIcon";
import InstagramIcon from "../svg/social-media/InstagramIcon";
import TelegramIcon from "../svg/social-media/TelegramIcon";
import WhatsAppIcon from "../svg/social-media/WhatsAppIcon";
import SettingsComponent from "./SettingsComponent";
import SocialMediaComponent from "./SocialMediaComponent";
import MessagerIcon from "../svg/social-media/MessagerIcon";
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
              <div className="bg-primary-base-light w-min h-min rounded-full p-[7px] ring ring-primary-dark">
                <div
                  className={`${
                    pathname.startsWith("/wa-connect")
                      ? "text-lime-400"
                      : "text-primary-dark"
                  }
                  hover:text-lime-500 duration-200 transition-all
                `}
                >
                  <WhatsAppIcon />
                </div>
              </div>
            ),
            type: "whatsapp",
            instances: jsonReq.whatsappInstances,
            route: "/wa-connect",
          },
          {
            icon: (
              <div className="bg-primary-base-light w-min h-min rounded-full p-[7px] ring ring-primary-dark">
                <div
                  className={`${
                    pathname.startsWith("/te-connect")
                      ? "text-cyan-400"
                      : "text-primary-dark"
                  }
                  hover:text-cyan-500 duration-200 transition-all
                `}
                >
                  <TelegramIcon />
                </div>
              </div>
            ),
            type: "telegram",
            instances: jsonReq.telegramInstances,
            route: "/te-connect",
          },
          {
            icon: (
              <div className="bg-primary-base-light w-min h-min rounded-full p-[7px] ring ring-primary-dark">
                <div
                  className={`${
                    pathname.startsWith("/disc-connect")
                      ? "text-sky-400"
                      : "text-primary-dark"
                  }
                  hover:text-sky-500 duration-200 transition-all
                `}
                >
                  <DiscordIcon />
                </div>
              </div>
            ),
            type: "discord",
            instances: jsonReq.discordInstances,
            route: "/disc-connect",
          },
          {
            icon: (
              <div className="bg-primary-base-light w-min h-min rounded-full p-[7px] ring ring-primary-dark">
                <div
                  className={`${
                    pathname.startsWith("/ins-connect")
                      ? "text-pink-500"
                      : "text-primary-dark"
                  }
                  hover:text-pink-600 duration-200 transition-all
                `}
                >
                  <InstagramIcon />
                </div>
              </div>
            ),
            type: "instagram",
            instances: jsonReq.instagramInstances,
            route: "/ins-connect",
          },
          {
            icon: (
              <div className="bg-primary-base-light w-min h-min rounded-full p-[7px] ring ring-primary-dark">
                <div
                  className={`${
                    pathname.startsWith("/mess-connect")
                      ? "text-blue-400"
                      : "text-primary-dark"
                  }
                  hover:text-blue-500 duration-200 transition-all
                `}
                >
                  <MessagerIcon />
                </div>
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
