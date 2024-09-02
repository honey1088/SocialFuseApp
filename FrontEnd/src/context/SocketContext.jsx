import React, { createContext, useEffect, useState} from 'react';
import socketIoClient from 'socket.io-client';


export const socketContext = createContext();

const WS = 'http://localhost:5000';

const socket = socketIoClient(WS);

export const SocketContext =  ({children}) => {

    <SocketContext.Provider  value={{socket}} >{children}</SocketContext.Provider>
}

