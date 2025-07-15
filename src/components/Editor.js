import React, { useEffect, useRef } from "react";
import "codemirror/mode/javascript/javascript";
import "codemirror/theme/night.css";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/closebrackets";
import "codemirror/lib/codemirror.css";
import CodeMirror from "codemirror";
import { ACTIONS } from "../Actions";

function Editor({ socketRef , roomId,onCodeChange }) { 
  const editorRef = useRef(null);
  useEffect(() => {
    const init = async () => {
      const editor = CodeMirror.fromTextArea(
       document.getElementById("realtimeEditor"),
        {
          mode: { name: "javascript", json: true },
          theme: "night",
          autoCloseTags: true,
          autoCloseBrackets: true,
          lineNumbers: true,
        }
      );
     //for  synching the code to each member from each others 
     editorRef.current=editor;

      editor.setSize(null, "100%");

      editorRef.current.on("change", (instance, changes) => {
        
        const { origin } = changes;
        const code = instance.getValue();
       onCodeChange(code);//new users ke liye bhi purana code synch ho jayega 
         
        if(origin!=="setValue"){
          socketRef.current.emit(ACTIONS.CODE_CHANGE , {
            roomId,
            code,
          });
            
        
        };
      });  
      //synching on UI 
      

    };
    init();
  }, []);

   // data receive from server
   useEffect(() => {
    if (socketRef.current) {
      socketRef.current.on(ACTIONS.CODE_CHANGE, ({ code }) => {
        if (code !== null) {
          editorRef.current.setValue(code);
        }
      });
    }
   return () =>{

    socketRef.current.off(ACTIONS.CODE_CHANGE);
   };
  },[socketRef.current]);  



    return (
      <div style={{ height: "600%" }}>
        <textarea id="realtimeEditor"></textarea>
      </div>
  );
};

export default Editor;
