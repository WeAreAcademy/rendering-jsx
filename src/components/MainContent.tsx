import { capitalise } from "../utils/capitalise";

function MainContent(): JSX.Element {
  const location = {
    city: "Kuala Lumpur",
    country: "Malaysia",
  };
  const aboutMe = {
    firstName: "Sven",
    lastName: "H"
  }

  const numOne = 6;
  const numTwo = 12;

  const noun = "wood";
  const verb = "chuck"


  const threeFavouriteFoods = ["Chocolate", "Noodles", "Pizza"];

  return (
    <main>
      <section>
        <h2>About Me</h2>
        <p>Hi! My name is {aboutMe.firstName} {aboutMe.lastName}.</p>
        <p>
          I currently live in {location.city}, {location.country}.
        </p>
      </section>
      <section>
        <h2>Musing of the month ({location.city}, March 2003)</h2>
        <p>
          Q: How much {noun} could a {noun}{verb} {verb} if a {noun}{verb} could {verb}
          {noun}?
        </p>
        <p>
          A: A {noun}chuck would chuck all the {noun} they could chuck if a
          {noun}chuck would chuck {noun}.
        </p>
      </section>
      <section>
        <h2>Numbers</h2>
        <p>
          Currently, my two favourite numbers are {numOne} and {numTwo}.
        </p>
        <p>Here's how they interact:</p>
        <ol>
          <li>
            Sum, {numOne} + {numTwo} = {numOne + numTwo}
          </li>
          <li>
            Product, {numOne} x {numTwo} = {numOne * numTwo}
          </li>
          <li>
            Division (a), {numOne} / {numTwo} = {numOne / numTwo}
          </li>
          <li>
            Division (b), {numTwo} / {numOne} = {numTwo / numOne}
          </li>
        </ol>
      </section>
      <section>
        <h2>Food</h2>
        <p>My favourite foods are:</p>
        <ul>
          <li>{capitalise(threeFavouriteFoods[0])}</li>
          <li>{capitalise(threeFavouriteFoods[1])}</li>
          <li>{capitalise(threeFavouriteFoods[2])}</li>
        </ul>
        <p>
          Please get in touch if you know any good recipes that combine{" "}
          {threeFavouriteFoods[0]}, {threeFavouriteFoods[1]} and{" "}
          {threeFavouriteFoods[2]}!
        </p>
      </section>
    </main>
  );
}

export default MainContent;
