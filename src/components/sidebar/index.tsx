"use client"

import { useRouter } from "next/navigation";
import DiscordIcon from "../svg/social-media/DIscordIcon";
import FacebookIcon from "../svg/social-media/FacebookIcon";
import InstagramIcon from "../svg/social-media/InstagramIcon";
import TelegramIcon from "../svg/social-media/TelegramIcon";
import WhatsAppIcon from "../svg/social-media/WhatsAppIcon";
import SettingsComponent from "./SettingsComponent";
import SocialMediaComponent from "./SocialMediaComponent";
import { useState } from "react";

const jsonReq = {
  whatsappInstances: [
    {
      id:"1", 
      name: "andre",
    },
    {
      id:"2", 
      name: "andre_souto",
    }
  ], 
  instagremInstances: [{
    id:"1", 
    name: "andre", 
  }],
  discordInstances: [], 
  instagramInstances: [], 
  messagerInstances: [], 
}


function Sidebar() {
  const [showSettingsModal, setShowSettingsModal] = useState<boolean>(false);
  const route = useRouter();

  function handleNetworkClick(type :string, instances: any[]) {
    if(instances.length < 2) {
      switch(type) {
        case "whatsapp":
          route.push('wa-connect')
      }
    }
    setShowSettingsModal(true)
  }

  return (
    <nav className="bg-primary-base min-h-full p-2 flex flex-col justify-between border-r-2 ">
      <ul className="flex flex-col gap-3">
        <li onClick={(e) => handleNetworkClick("whatsapp", jsonReq.whatsappInstances) }>
          <SocialMediaComponent
            showSettingsModal={showSettingsModal}
            setShowSettingsModal={setShowSettingsModal}
            icon={<WhatsAppIcon />}
            type={"whatsapp"}
            instances={jsonReq.whatsappInstances}
          />
        </li>
        <li onClick={(e) => handleNetworkClick("telegram", jsonReq.instagremInstances) }>
          <SocialMediaComponent
            showSettingsModal={showSettingsModal}
            setShowSettingsModal={setShowSettingsModal}
            icon={<TelegramIcon />}
            type={"telegram"}
            instances={jsonReq.instagremInstances}
          />
        </li>
        <li onClick={(e) => handleNetworkClick("discord", jsonReq.discordInstances) }>
            <SocialMediaComponent
              showSettingsModal={showSettingsModal}
            setShowSettingsModal={setShowSettingsModal}
              icon={<DiscordIcon />}
              type={"discord"}
              instances={jsonReq.discordInstances}
            />
        </li>
        <li onClick={(e) => handleNetworkClick("instagram", jsonReq.instagramInstances)} >
          <SocialMediaComponent
            showSettingsModal={showSettingsModal}
            setShowSettingsModal={setShowSettingsModal}
            icon={<InstagramIcon />}
            type={"instagram"}
            instances={jsonReq.instagramInstances}
          />
        </li>
        <li onClick={(e) => handleNetworkClick("facebook", jsonReq.messagerInstances)} >
          <SocialMediaComponent
            showSettingsModal={showSettingsModal}
            setShowSettingsModal={setShowSettingsModal}
            icon={<FacebookIcon />}
            type={"facebook"}
            instances={jsonReq.messagerInstances}
          />
        </li>
      </ul>
      <SettingsComponent />
    </nav>
  );
}

export default Sidebar;
