/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/1.21.6-pre4.png";

const imageAltText = "1.21.6-pre4";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Wikibreakers",
    description:
      "A community of Wikibreakers, people who are passionate about breaking down barriers to technology and making it accessible to all. This is a place for us to share our knowledge, skills, and experiences.",
    url: "https://wdf.ink/6OUp",
  },
  {
    title: "wikibreakers.com",
    description:
      "A website for Wikibreakers, a community of people who are passionate about breaking down barriers to technology and making it accessible to all. This is a place for us to share our knowledge, skills, and experiences.",
    url: "https://wdf.ink/6OUp",
  },
  {
    title: "Resume Workshop",
    description:
      "A workshop for Wikibreakers to help them create a resume that highlights their skills and experiences. This is a place for us to share our knowledge, skills, and experiences.",
    url: "https://wdf.ink/6OUp",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
