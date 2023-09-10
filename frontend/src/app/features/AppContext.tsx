"use client";
import React, { useState } from "react";
import { AppContext, socket } from "../../context/appContext"

export function AppContextProvider({children}: {children: React.ReactNode}){
    const [rooms, setRooms] = useState([]);
  const [currentRoom, setCurrentRoom] = useState([]);
  const [members, setMembers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [privateMembersMsg, setPrivateMembersMsg] = useState({});
  const [newMessages, setNewMessages] = useState({})
    return (
        <AppContext.Provider value={{ socket, rooms, setRooms, currentRoom, setCurrentRoom, members, setMembers, messages, setMessages, privateMembersMsg, setPrivateMembersMsg, newMessages, setNewMessages }}>
        {children}
        </AppContext.Provider>
    )
}