import React, { useMemo } from "react";
import {
  useVolumeContext,
  VolumeContextProvider,
} from "../../contexts/VolumeContextProvider";
import { useWSContext } from "../../contexts/WSContextProvider";
import { Page } from "../../components/Page";
import { VolumeManager } from "./VolumeManager";

export const Vote: React.FC = () => {
  const { sendMessage, messages } = useWSContext();

  return (
    <Page>
      <VolumeContextProvider messages={messages} sendMessage={sendMessage}>
        <VolumeManager />
      </VolumeContextProvider>
    </Page>
  );
};
