import React, { useMemo } from "react";

import { useVolumeContext } from "../../contexts/VolumeContextProvider";
import { DiscreetOptionSelector } from "../../components/DiscreetOptionSelector";

type VolumeManagerProps = {};

export const VolumeManager: React.FC<VolumeManagerProps> = () => {
  const { setVolume, userVolumeChoice, currentRoomVolume } = useVolumeContext();
  const options = useMemo(() => {
    const o = [];
    for (let i = 1; i < 10; i++) {
      o.push(i);
    }
    return o;
  }, []);

  return (
    <div>
      <p>The volume is currently set at {currentRoomVolume}</p>
      {options.map((o) => (
        <DiscreetOptionSelector
          key={o}
          onClick={() => setVolume(o)}
          value={String(o)}
          active={o === userVolumeChoice}
        />
      ))}
    </div>
  );
};
