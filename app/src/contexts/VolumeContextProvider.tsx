import React, { useContext, useState, useEffect } from "react";

type VolumeContextValue = {
  currentRoomVolume: number;
  userVolumeChoice: number;
  setVolume: (v: number) => void;
};

type VolumeContextProviderProps = {
  messages: Array<string>;
  sendMessage: (m: string) => void;
};

export const VolumeContext = React.createContext<VolumeContextValue>({
  currentRoomVolume: 0,
  userVolumeChoice: 0,
  setVolume: (v: number) => null,
});

export const VolumeContextProvider: React.FC<VolumeContextProviderProps> = ({
  children,
  messages,
  sendMessage,
}) => {
  const [currentRoomVolume, setCurrentRoomVolume] = useState(0);
  const [userVolumeChoice, setUserVolumeChoice] = useState(0);

  useEffect(() => {
    if (!messages || messages.length < 1) {
      return;
    }

    const volume = parseInt(JSON.parse(messages[messages.length - 1])?.volume);
    setCurrentRoomVolume(volume);
  }, [messages]);

  const setVolume = (n: number) => {
    setUserVolumeChoice(n);
    sendMessage(JSON.stringify({ volume: n }));
  };

  return (
    <VolumeContext.Provider
      value={{ currentRoomVolume, userVolumeChoice, setVolume }}
    >
      {children}
    </VolumeContext.Provider>
  );
};

export const useVolumeContext = () => useContext(VolumeContext);
