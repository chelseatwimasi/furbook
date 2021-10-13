import React from "react";
import "./css/descriptions.css";

function Descriptions() {
  return (
    <div className="container-fluid Descriptions">
      <div className="row">
        <div className="col">
          <h5 className="title-text">Creepy Cats</h5>
          <p className="sub-text">
            Cats are very creepy and disturbing. Everytime you look at one,
            they're ready to attack you with not type of hesitation. Try not to
            be near one, for if they get their paws on you and scratch you, you
            may not like it.
          </p>
        </div>
        <div className="col">
          <h5 className="title-text">Dirty Disturbing Dogs</h5>
          <p className="sub-text">
            Dogs are even more annoying than cats. They're always running around
            and trying to chase after you when you just could be simply minding
            your own business and getting lost in your own wrold. Everytime you
            walk by them, you have to be cautious of how you approach them, for
            they will see you as a threat and just attack you. They also don't
            know how to clean after themselves. They poop everywhere and
            anywhere and think that it is fine.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Descriptions;
