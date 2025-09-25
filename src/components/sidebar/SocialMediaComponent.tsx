"use client";

import { SetStateAction, useState } from "react";
import { ThreePoints } from "../svg/generic-icon/ThreePointsIcon";
import PlusCircle from "../svg/generic-icon/PlusCirclueIcon";

interface SocialMediaModalProps {
  showSettingsModal: boolean;
  icon: React.ReactNode;
}

interface SocialMediaComponentProps {
  icon: React.ReactNode;
  type: string;
  instances: {name: string, id: string}[]
  showSettingsModal: boolean;
  setShowSettingsModal: React.Dispatch<SetStateAction<boolean>>
}

function SocialMediaComponent({ icon, type, instances,showSettingsModal, setShowSettingsModal }: SocialMediaComponentProps) {
  const [showSettingsElement, setShowSettingsElement] = useState<boolean>(false);

  return (
    <div className="relative">
      <div
        className="space-y-1 cursor-pointer"
        onMouseEnter={() => setShowSettingsElement(true)}
        onMouseLeave={() => !showSettingsModal && setShowSettingsElement(false)}
      >
        <div className="bg-primary-base-light rounded-full p-[7px] ring">
          {icon}
        </div>
        {instances.length ? 
          <div
            className={`${showSettingsElement ? "block" : "hidden"}
            px-2 rounded-full w-max bg-primary-base-light m-auto 
          `}
            onClick={() => setShowSettingsModal(!showSettingsModal)}
          >
            <ThreePoints />
          </div>
        : null}
      </div>
      <SocialMediaModal showSettingsModal={showSettingsModal} icon={icon} />
    </div>
  );
}

function SocialMediaModal({ showSettingsModal, icon }: SocialMediaModalProps) {
  return showSettingsModal ? (
    <div className="bg-primary-base absolute left-1/2 top-5 z-10 ring rounded-lg max-h-30 min-w-[8rem] overflow-y-auto">
      <div className="grid grid-cols-2 gap-2 p-3">
        <div className="ring w-min h-min rounded-full p-1 bg-primary-base-light">
          {icon}
        </div>
        <button className="cursor-pointer">
          <PlusCircle />
        </button>
      </div>
    </div>
  ) : null;
}

export default SocialMediaComponent;
