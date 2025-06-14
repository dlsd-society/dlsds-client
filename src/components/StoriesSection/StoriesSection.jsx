import React from "react";
import "./StoriesSection.css";
import successStories01 from '../../assets/success-stories-01.png'; // Your uploaded image
import successStories02 from '../../assets/success-stories-02.png'; // Your uploaded image

const stories = [
  {
    title: "Impact Story",
    image: successStories01,
    description: `Anusaya : Read Anusaya’s inspirational story from our center in Maharashtra. 
    How from being a single mother with two children and with very little source of income, 
    she developed her professional and digital skills in order to get a job and support her family.`,
  },
  {
    title: "Success Story",
    image: successStories02,
    description: `Read Piyush’s story who has been regularly accessing the Hole-in-the-Wall Learning Station set up at his school. 
    This has helped him perform better at school and he is now helping his peers with their studies as well.`,
  },
  {
    title: "Our Journey",
    video: "https://www.youtube.com/watch?v=bvXrEbAO1YQ&t=1s", // use your actual video link
    description: `As NIIT Foundation completes 15 years working towards social development, 
    click here to read about how it all started and our journey so far.`,
  },
];

const StoriesSection = () => {
  return (
    <section className="stories-section">
      {stories.map((story, index) => (
        <div className="story-card" key={index}>
          <h3>{story.title}</h3>
          {story.image && <img src={story.image} alt={story.title} />}
          {story.video && (
            <iframe
              src={story.video}
              title={story.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          )}
          <p>{story.description}</p>
        </div>
      ))}
    </section>
  );
};

export default StoriesSection;
