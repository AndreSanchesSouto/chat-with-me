"use client"

import { useState } from "react";
import ListIcon from "../svg/generic-icon/ListIcon";
import { UserIcon } from "../svg/generic-icon/UserIcon";

function SettingsComponent() {
  const [showSettingModal, setShowSettingModal] = useState<boolean>(false)

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="ring-2 rounded-full">
        <UserIcon />
      </div>
      <button className={`${showSettingModal && 'bg-gray-600/50'} hover:bg-gray-600/60 p-2 transition-all duration-200 rounded-lg cursor-pointer`}
        onClick={() => setShowSettingModal(!showSettingModal)}
      >
        <ListIcon />
      </button>
    </div>
  );
}

function SettingsModal() {
  return(
    <div>

    </div>
  )
}

export default SettingsComponent;
