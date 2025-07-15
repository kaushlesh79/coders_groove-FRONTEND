import React, { useState,useRef,useEffect } from 'react'
import Client from './Client';
import Editor from './Editor';

import { initSocket } from '../socket';

import { toast } from 'react-hot-toast';

import {useNavigate ,useLocation , useParams,Navigate,} from 'react-router-dom';

import { ACTIONS } from '../Actions';



function EditorPage() {
 
  const [clients,setClient]=useState([]);


  const socketRef=useRef(null);
  const location =useLocation();
  const { roomId }=useParams();
  const navigate = useNavigate();
  const codeRef=useRef(null);
  
  useEffect(() => {
   
    const init = async () => {

    socketRef.current= await initSocket();

    socketRef.current.on('connect_error', (err) => handleError(err));
    socketRef.current.on('connect_failed', (err) => handleError(err));

    const handleError = (e) => {
      console.log("socket error " ,e);
      toast.error("socket connection failed");
      navigate('/');//if any error occur navigate it to homepage 
    };


    socketRef.current.emit(ACTIONS.JOIN, {
        roomId,
        username:location.state?.username,  

    });

    socketRef.current.on(ACTIONS.JOINED, ({clients,username,socketId}) => { 

      if(username!==location.state?.username){//agar mere alawa koi aur joined hoga to pop up aayega user joined the room 
        toast.success(`${username} joined the room`);
        
      }
      setClient(clients);//jb bhi naye user joined hone client array mei dal dena 
      socketRef.current.emit(ACTIONS.SYNC_CODE, {
        code:codeRef.current , socketId,
    });



    });
    //disconnected ke liye listen kr rhe 

    socketRef.current.on(ACTIONS.DISCONNECTED ,({socketId , username}) => {
      toast.success(`${username} left the room`);
      setClient((prev) =>{
         return prev.filter((client) => client.socketId !== socketId);
    });
  });
};


  init();

  return () => {
    socketRef.current && socketRef.current.disconnect();
    socketRef.current.off(ACTIONS.JOINED);
    socketRef.current.off(ACTIONS.DISCONNECTED); 
  };

    
  },[]);



    


    if(!location.state){

      return <Navigate to="/" />; 
    }

    const copyRoomId = async () => {
      try {
        await navigator.clipboard.writeText(roomId);
        toast.success(`roomIs is copied`);
      } catch (error) {
        console.log(error);
        toast.error("unable to copy the room Id");
      }
    };

    const leaveRoom = async () => {
      navigate("/");
    };


    return (
        <div className="container-fluid vh-100">
          <div className="row h-100">
            {/* client panel */}
            <div
              className="col-md-2 bg-dark  text-light d-flex flex-column h-100"
              style={{ boxShadow: "2px 0px 4px rgba(0, 0, 0, 0.1)" }}
            >
              <img
                src="/images/logo.png"
                alt="Logo"
                className="img-fluid mx-auto"
                style={{ maxWidth: "150px", marginTop: "33px", marginBottom: "70px" }}
              />
              <hr style={{ marginTop: "-3rem" }} />
    
              {/* Client list container */}
              <div className="d-flex flex-column flex-grow-1 overflow-auto">
              {clients.map((client) => (

             <Client key={client.socketId} username={client.username}/> 
                  
              ))}
                
              </div>
    
             
              {/* Buttons */}
              <div className="mt-auto" >
              <hr />
              <button className="btn btn-success"  onClick={copyRoomId}>  Copy Room ID  </button>
                <button
                  className="btn btn-danger mt-2 mb-2 px-3 btn-block" onClick={leaveRoom}>
                  Leave Room
                </button>
              </div>
            </div>
            {/* Editor */}
            <div className="col-md-10 text-light d-flex flex-column h-100 ">
            <Editor
            socketRef={socketRef}
            roomId={roomId}
            onCodeChange={(code) => {
              codeRef.current = code;
            }}
                 />
            </div>
            
          </div>
        </div>
      );
    }
    

export default EditorPage
