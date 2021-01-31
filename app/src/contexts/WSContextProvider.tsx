import React, { useContext, useEffect, useRef, useState } from "react";

type Messages = Array<string>;

const WebSocketAddress = "ws://localhost:8999/";

export const useWSConnection = (): [(m: string) => void, Messages] => {
  const connection: any = useRef(null);
  const [messages, setMessages] = useState<Messages>([]);

  useEffect(() => {
    connection.current = new WebSocket(WebSocketAddress);
    connection.current.onmessage = (evt: { data: string }) => {
      setMessages((prev) => [...prev, evt.data]);
    };
  }, []);

  const sendMessage = (message: string) => {
    if (!connection.current) {
      return;
    }
    connection.current.send(message);
  };

  return [sendMessage, messages];
};

type WSContextValues = {
  sendMessage: (m: string) => void;
  messages: Messages;
};

const WSContext = React.createContext<WSContextValues>({
  sendMessage: (m: string) => null,
  messages: [],
});

export const WSContextProvider: React.FC = ({ children }) => {
  const [sendMessage, messages] = useWSConnection();

  return (
    <WSContext.Provider value={{ sendMessage, messages }}>
      {children}
    </WSContext.Provider>
  );
};

export const useWSContext = () => {
  return useContext(WSContext);
};
