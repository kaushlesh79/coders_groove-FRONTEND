import React from 'react'
import { useState } from 'react'
import { v4 as uuid} from "uuid"
import { toast } from "react-hot-toast"
import {useNavigate} from "react-router-dom";
function Home() {
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const navigate=useNavigate(); 

const generateRoomId = (e) => {
  e.preventDefault();
    const id = uuid();
    setRoomId(id);
    toast.success("Congrats,RoomID is generated you can create your room");
  };

  const joinRoom = (e) => {
    e.preventDefault();
    if (!roomId || !username) {
      toast.error("oops,looklike u don't have room id or username");
      return;
    }
    //navigte to editorPage
    navigate(`/editor/${roomId}`, {//agar dono shi enter kiya to editor page ka addresss editor/roomId hoga
      state:{username},
    })
    toast.success("Hey, lets's code something cool !!");
  };

  return (
  <div className="container-fluid">
          <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-12 col-md-6">
          <div className="card shadow-sm p-2 mb-5 bg-secondary rounded">
            <div className="card-body text-center bg-dark-blue">
              <img 
                src="/images/Logo.png"
                alt="Logo"
                className="img-fluid mx-auto d-block"
                style={{ maxWidth: "150px" ,paddingBottom: "15px"}}
              />
              <h4 className=" card-title text-dark mb-4">Enter the Details</h4>

              <div className="form-group">
                <input
                  type="text"
                  
                  value={roomId}

                 onChange={(e) => setRoomId(e.target.value)}

                  className="form-control mb-2"
                  placeholder="ROOM ID"
                 // onKeyUp={handleInputEnter}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"

                  value={username}

                  onChange={(e) => setUsername(e.target.value)}

                  className="form-control mb-2"
                  placeholder="USERNAME"
                 // onKeyUp={handleInputEnter}
                />
              </div>
              <button
               onClick={joinRoom}
                className="btn btn-dark btn-lg btn-block"
              >
                JOIN
              </button>
              <p className="mt-3 text-light">
                Don't have a room ID? create{" "}
                <span
          
                  className=" text-bold text-info p-2"
                  style={{ cursor: "pointer" }}
                  onClick={generateRoomId}
                >
                  {" "}
                  New Room
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    );

       
  
}

export default Home
