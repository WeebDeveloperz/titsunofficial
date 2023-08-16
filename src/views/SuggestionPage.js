import { useState } from "react";
import styles from "./css/SuggestionPage.module.css";
//import { saveSuggestion } from "../getters";

class Suggestion {
  constructor() {
    this.text = "";
    this.submitter_name = "";
    this.submitter_college_id = "";
  }
}

export default function SuggestionPage() {
  const [suggestion, setSuggestion] = useState(new Suggestion());

  const handleSubmit = e => {
    e.preventDefault();
/*
    saveSuggestion(suggestion,
      data => {
        console.log(data);
        alert("thank you for your suggestion")
      }, 
      err => {
        console.log(err)
        alert("an error occoured")
      }
    );*/
  }

  return(
    <div className={styles.page}>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input 
            value={suggestion.submitter_name}
            onChange={e => setSuggestion(i => ({...i, "submitter_name": e.target.value}))}
          />
        </label>

        <label>
          College ID:
          <input 
            value={suggestion.submitter_college_id}
            onChange={e => setSuggestion(i => ({...i, "submitter_college_id": e.target.value}))}
          />
        </label>

        <label>
          Suggestion:          
          <input 
            value={suggestion.text}
            onChange={e => setSuggestion(i => ({...i, "text": e.target.value}))}
          />
        </label>
        <div className={styles.buttonWrapper}>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}
