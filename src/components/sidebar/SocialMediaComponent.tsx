"use client";

import { useEffect, useRef, useState } from "react";
import { ThreePoints } from "../svg/generic-icon/ThreePointsIcon";
import PlusCircle from "../svg/generic-icon/PlusCirclueIcon";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SocialMediaComponentProps, SocialMediaModalProps } from "./interface";

const ROUTES: Record<string, string> = {
  whatsapp: "/wa-connect",
  telegram: "/te-connect",
  discord: "/disc-connect",
  instagram: "/ins-connect",
  messager: "/mess-connect",
};

function SocialMediaComponent({
  icon,
  type,
  instances,
  route,
}: SocialMediaComponentProps) {
  const [showSettingsElement, setShowSettingsElement] = useState<boolean>(false);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const router = useRouter();

  function handleSettingsClick(e: React.MouseEvent) {
    e.stopPropagation();
    setModalOpen((s) => !s);
  }

  function handleModalClose() {
    setModalOpen(false);
    setShowSettingsElement(false);
  }

  function handleNetworkClick(e?: React.MouseEvent) {
    e?.stopPropagation();

    const base = ROUTES[type];
    if (!base) return;

    if (instances.length === 0) {
      router.push(base);
      return;
    }

    if (instances.length === 1) {
      router.push(`${base}/${instances[0].id}`);
      return;
    }

    setModalOpen(true);
  }

  return (
    <div className="relative">
      <div
        className="space-y-1 cursor-pointer"
        onMouseEnter={() => setShowSettingsElement(true)}
        onMouseLeave={() => !isModalOpen && setShowSettingsElement(false)}
      >
        <div
          className="bg-primary-base-light rounded-full p-[7px] ring"
          onClick={handleNetworkClick}
        >
          {icon}
        </div>

        {instances.length > 0 ? (
          <div
            className={`${showSettingsElement ? "block" : "hidden"} px-2 rounded-full w-max bg-primary-base-light m-auto`}
            onClick={handleSettingsClick}
          >
            <ThreePoints />
          </div>
        ) : null}
      </div>

      <SocialMediaModal
        isOpen={isModalOpen}
        instances={instances}
        icon={icon}
        onClose={handleModalClose}
        route={route}
      />
    </div>
  );
}

function SocialMediaModal({ isOpen, icon, onClose, instances, route }: SocialMediaModalProps) {
  if (!isOpen) return null;

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose(); // Fecha modal se clicou fora
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div 
      ref={modalRef}
      className="bg-primary-base absolute left-1/2 top-5 z-10 ring rounded-lg max-h-30 min-w-[8rem] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="grid grid-cols-2 gap-2 p-3">
        {instances.map((instance) => (
          <div
            key={instance.id}
            className="relative ring w-min h-min rounded-full p-1 bg-primary-base-light flex items-center justify-center"
          >
            <Link 
              href={`${route}/${instance.id}`}
              onClick={(e) => {
                e.stopPropagation()
                onClose()
              }}>
              {icon}
            </Link>
            <p className="absolute text-sm text-primary-light -bottom-5 whitespace-nowrap">
              {instance.name}
            </p>
          </div>
        ))}

        <Link 
          href={route}
          onClick={(e) => {
            e.stopPropagation()
            onClose()
          }}
          className="cursor-pointer flex items-center justify-center"
        >
          <PlusCircle />
        </Link>
      </div>
    </div>
  );
}

export default SocialMediaComponent;
