import React, { useEffect, useState } from "react";
import "../index.css";
export default function Test() {
  const [answer, setanswer] = useState(null);
  const [button, setbutton] = useState(false);
  const [mark, setmark] = useState(0);
  const [next, setnext] = useState(0);
  const [flag, setflag] = useState("green");

  var list = [
    {
      question:
        "Which attribute specifies a unique alphanumeric identifier to be associated with an element?",
      wronganswer: ["class", "id", "article", "html"],
      answer: ["id"]
    },
    {
      question:
        "Which attribute is used to provide an advisory text about an element or its contents?",
      wronganswer: ["tooltip", "dir", "title", "head"],
      answer: ["title"]
    },
    {
      question:
        "Which of the following is the attribute that is used to set a global identifier for a microdata item?",
      wronganswer: ["key", "id", "itemclass", "itemid"],
      answer: ["itemid"]
    },
    {
      question:
        "Which of the following property is used to change the face of a font?",
      wronganswer: ["font-family", "font-style", "font-variant", "font-weight"],
      answer: ["font-family"]
    },
    {
      question:
        "Which of the following property is used to set the text shadow around a text?",
      wronganswer: [
        "white-space",
        "text-shadow",
        "text-decoration",
        "text-transform"
      ],
      answer: ["text-shadow"]
    }
  ];
  const btnstyle1 = {
    backgroundColor: flag,
    width: "60%",
    padding: 8,
    borderRadius: 18,
    margin: 10
  };
  const btnstyle = {
    backgroundColor: "#d0d0d07a",
    width: "60%",
    padding: 8,
    borderRadius: 18,
    margin: 10
  };
  useEffect(() => {
    if (answer != null) {
      let ans = list?.[next]?.wronganswer?.[answer];
      let opt = list?.[next]?.answer[0];
      if (ans === opt) {
        setflag("#00be00b5");
        setmark(mark + 1);
      } else {
        setflag("#ff0505b0");
      }
      setbutton(true);
    }
  }, [answer]);

  return (
    <div>
    <h1 style={{color:"white",textAlign:"center"}}>Online Test</h1>
      <div style={{ display: next === list.length - 1 ? "none" : "display" }}>
        <h1 style={{ textAlign: "right", color: "white" }}>Mark {mark}</h1>
        <div className="content">
          {next + 1}
          {") "}
          {list?.[next]?.question}
          <br />
          <button
            style={answer === 0 ? btnstyle1 : btnstyle}
            onClick={() => setanswer(0)}
            disabled={button}
          >
            {list?.[next]?.wronganswer[0]}
          </button>
          <br />
          <button
            style={answer === 1 ? btnstyle1 : btnstyle}
            onClick={() => setanswer(1)}
            disabled={button}
          >
            {list?.[next]?.wronganswer[1]}
          </button>
          <br />
          <button
            style={answer === 2 ? btnstyle1 : btnstyle}
            onClick={() => setanswer(2)}
            disabled={button}
          >
            {list?.[next]?.wronganswer[2]}
          </button>
          <br />
          <button
            disabled={button}
            style={answer === 3 ? btnstyle1 : btnstyle}
            onClick={() => setanswer(3)}
          >
            {list?.[next]?.wronganswer[3]}
          </button>
          <br />
          <button
            style={{ float: "right" }}
            onClick={() => {
              if (next < list.length - 1 && button) {
                setnext(next + 1);
                setbutton(false);
                setanswer(null);
                console.log(next, list.length);
              }
            }}
          >
            {next === list.length - 1 ? "submit" : "next"}
          </button>
        </div>
      </div>
      <div
        className="content"
        style={{
          marginTop: "15%",
          display: next === list.length - 1 ? "block" : "none"
        }}
      >
        <h1>Your Marks {mark} </h1>
      </div>
    </div>
  );
}
