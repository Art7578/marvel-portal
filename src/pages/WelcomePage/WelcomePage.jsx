import React from "react";
import css from "./WelcomePage.module.css"; 

const WelcomePage = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Welcome to the Marvel Universe!</h1>
      <p className={css.text}>
        Explore the vast and thrilling world of Marvel characters, where heroes
        and villains clash in epic battles to protect or conquer the universe.
        Dive into the stories of legendary figures like Iron Man, Spider-Man,
        Captain America, and many more.
      </p>
      <p className={css.text}>
        Whether you're a devoted fan or a newcomer, there's something
        extraordinary waiting for you in every corner of this universe.
        Discover your favorite characters, uncover their origins, and immerse
        yourself in the endless adventures that define the Marvel legacy.
      </p>
    </div>
  );
};

export default WelcomePage;