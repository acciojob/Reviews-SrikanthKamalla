import React, { useState } from "react";

const App = () => {
  const list = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

  const [index, setIndex] = useState(0);

  function nextButton() {
    setIndex((prev) => (prev + 1) % list.length);
  }

  function previousButton() {
    setIndex((prev) => (prev - 1 + list.length) % list.length);
  }

  function randomButton() {
    let random;
    do {
      random = Math.floor(Math.random() * list.length);
    } while (random === index);
    setIndex(random);
  }

  return (
    <main>
      <section className="container">
        <h1 id="review-heading">Our Reviews</h1>
        <div className="review">
          <p className="author" id={`author-${list[index].id}`}>
            {list[index].name}
          </p>
          <p className="job">{list[index].job}</p>
          <p className="info">{list[index].text}</p>
          <img
            src={list[index].image}
            className="person-img"
            alt={list[index].name}
          />
          <button onClick={previousButton} className="prev-btn">
            previous
          </button>
          <button onClick={nextButton} className="next-btn">
            next
          </button>
          <button onClick={randomButton} className="random-btn">
            surprise me
          </button>
        </div>
      </section>
    </main>
  );
};

export default App;
