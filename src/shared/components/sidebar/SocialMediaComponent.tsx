"use client";

import { useEffect, useRef, useState } from "react";
import { ThreePoints } from "../svg/generic-icon/ThreePointsIcon";
import PlusCircle from "../svg/generic-icon/PlusCirclueIcon";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SocialMediaComponentProps, SocialMediaModalProps } from "./interfaces";

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
  const [showSettingsElement, setShowSettingsElement] =
    useState<boolean>(false);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [isThreePointsClicked, setThreePointsClicked] =
    useState<boolean>(false);
  const router = useRouter();

  function handleSettingsClick(e: React.MouseEvent) {
    e.stopPropagation();
    setModalOpen((isOpen) => !isOpen);
    setThreePointsClicked(true);
  }

  function handleModalClose() {
    setModalOpen(false);
    setShowSettingsElement(false);
    setThreePointsClicked(false);
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

    setModalOpen(!isModalOpen);
  }

  return (
    <div className="relative">
      <div
        className="space-y-1 cursor-pointer"
        onMouseEnter={() => setShowSettingsElement(true)}
        onMouseLeave={() => !isModalOpen && setShowSettingsElement(false)}
      >
        <div onClick={handleNetworkClick}>{icon}</div>

        {instances.length > 0 ? (
          <div
            className={`${
              showSettingsElement ? "block" : "hidden"
            } px-2 rounded-full w-max bg-primary-base-light m-auto`}
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
        isThreePointsClicked={isThreePointsClicked}
      />
    </div>
  );
}

function SocialMediaModal({
  isOpen,
  icon,
  onClose,
  instances,
  route,
  isThreePointsClicked,
}: SocialMediaModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
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

  return isOpen ? (
    <div
      ref={modalRef}
      className="bg-primary-base absolute left-16 top-5 z-10 ring rounded-lg max-h-40 py-3 min-w-[10rem] overflow-y-auto flex justify-center items-center"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="grid grid-cols-2 gap-2">
        {instances.map((instance) => (
          <div key={instance.id} className="m-auto">
            <Link
              href={`${route}/${instance.id}`}
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
            >
              {icon}
              <p className="text-sm text-primary-light -bottom-5 whitespace-nowrap text-center">
                {instance.name}
              </p>
            </Link>
          </div>
        ))}

        {isThreePointsClicked ? (
          <Link
            href={route}
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          >
            <div className="bg-primary-base-light w-min h-min rounded-full p-[7px] ring ring-primary-dark cursor-pointer m-auto">
              <div className="text-primary-dark hover:text-primary-light duration-200 transition-all">
                <PlusCircle />
              </div>
            </div>
          </Link>
        ) : null}
      </div>
    </div>
  ) : null;
}

export default SocialMediaComponent;
