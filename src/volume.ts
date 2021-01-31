const messages: Record<string, number> = {};

export const handleVolumeRequest = (v: number, deviceId: string) => {
  messages[deviceId] = v;
  const newVolume = getNewVolume();
  return newVolume;
};

const getNewVolume = () => {
  return (
    Object.values(messages).reduce((acc, v) => {
      return (acc += v);
    }) / Object.values(messages).length
  );
};
