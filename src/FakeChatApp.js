import { useEffect, useState } from "react";

const channels = [
  {
    id: 1,
    name: 'Channel 1'
  },
  {
    id: 2,
    name: 'Channel 2'
  },
  {
    id: 3,
    name: 'Channel 3'
  }
];

function FakeChatApp() {
  const [currentChannel, setCurrentChannel] = useState(1);

  useEffect(() => {
    const handleChat = (e) => {
      console.log(e.detail);
    }
    window.addEventListener(`channel-${currentChannel}`, handleChat);
    return () => {
      window.removeEventListener(`channel-${currentChannel}`, handleChat);
    }
  }, [currentChannel]);

  return (
    <div>
      {channels.map((channel) => (
        <div key={channel.id}>
          <button
            style={channel.id === currentChannel ? {color: 'yellow', backgroundColor: 'black'} : {}}
            onClick={() => setCurrentChannel(channel.id)}
          >
            {channel.name}
          </button>
        </div>
      ))}
    </div>
  )
}

export default FakeChatApp;