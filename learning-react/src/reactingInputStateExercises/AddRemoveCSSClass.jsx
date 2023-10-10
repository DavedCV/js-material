/* 
Make it so that clicking on the picture removes the background--active CSS 
class from the outer <div>, but adds the picture--active class to the <img>. 
Clicking the background again should restore the original CSS classes.

Visually, you should expect that clicking on the picture removes the purple 
background and highlights the picture border. Clicking outside the picture 
highlights the background, but removes the picture border highlight.
*/

/* 
export default function Picture() {
  return (
    <div className="background background--active">
      <img
        className="picture"
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
      />
    </div>
  );
}
*/

import { useState } from "react";

export default function Picture() {
  const [imageFocus, setImageFocus] = useState(false);

  return (
    <div
      className={!imageFocus ? "background background--active" : "background"}
      onClick={() => setImageFocus(false)}
    >
      <img
        className={imageFocus ? "picture picture--active" : "picture"}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
        onClick={(e) => {
          e.stopPropagation();
          setImageFocus(true);
        }}
      />
    </div>
  );
}
