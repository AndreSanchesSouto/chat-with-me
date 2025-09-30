import { LuCircleUserRound } from "react-icons/lu";

function ChatList({colorTheme}: {colorTheme?: string}) {
  return (
    <button className={`w-full bg-primary-base-dark border-t border-b flex items-center py-2 gap-2 px-2 hover:border-[${colorTheme}] hover:text-[${colorTheme}] cursor-pointer transition-colors`}>
      <LuCircleUserRound size={40} strokeWidth={1} />
      <div className="text-left">
        <p className="text-lg font-semibold">username</p>
        <p className="text-sm text-neutral-300 truncate">lastMessage</p>
      </div>
    </button>
  );
}

export default ChatList;
