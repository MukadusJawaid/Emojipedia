import React from "react";
import Entry from "./Entry.jsx";
import emojipedia from "../emojipedia.js";
export default function App() {
  return (
    <div>
      <h1>Emojipedia</h1>
      <dl className="dictionary">{emojipedia.map(emojiTerm =>
       <Entry key={emojiTerm.id}
        emoji={emojiTerm.emoji}
        name={emojiTerm.name}
        description={emojiTerm.meaning} />)}
      </dl>
    </div>);}
