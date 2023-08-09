import { useState, useEffect } from "react";
import styles from "./css/Movie.css";

return(
    <>
    <html>
<head>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="stylesheet" type="text/css" href="index.css">
    <title>
       Rahul Goyal
    </title>
</head>
<body>
    <div class="comment-box">
        <h3>Enter your Suggestion</h3>
        <form id="comment-form">
          <input type="text" id="name" placeholder="Your Name" required>
          <input type="text" id="name" placeholder="College ID" required>
          <input type="text" id="name" placeholder="Suggestion" required>
          <button type="submit">Submit</button>
        </form>
        <div id="comment-list"></div>
      </div>
      <script src="/js/index.js"></script>
    </body>
</html> 
</>

)