import ChatList from "@/shared/components/chat";

function WhatsAppChat() {

  return(
    <div className="w-full h-full flex">
      <div className="max-w-72 bg-primary-base-light w-full overflow-y-auto border-r">
        <ChatList colorTheme="#9ae600"/>
        <ChatList/>
        <ChatList/>
        <ChatList/>
      </div>
      <div className="w-full">

      </div>
    </div>
  )
}

export default WhatsAppChat;