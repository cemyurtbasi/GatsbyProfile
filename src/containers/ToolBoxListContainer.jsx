import React, { useState, useEffect } from "react";
import ToolBoxList from "../components/ToolBoxList";
import ToolBoxPopOver from "../components/ToolBoxPopOver";

const ToolBoxListContainer = () => {
  const [items] = useState([
    {
      id: 1,
      label: "JavaScript",
      description: `Often abbreviated as <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank">JS</a>, 
        it is a high-level, dynamic, weakly typed,
        prototype-based, multi-paradigm, and interpreted programming language.`,
      comment: `That's the only programing language I use on a daily basis. 
        <b>And I love it!</b>`
    },
    {
      id: 7,
      label: "React",
      description: `A JavaScript <a href="https://reactjs.org/" target="_blank">library</a> for building user interfaces. 
        React makes it painless to create interactive UIs. Build encapsulated components 
        that manage their own state and then compose them to make complex UIs.`,
      comment: `I've been in love since using it for the first time.`
    },
    {
      id: 10,
      label: "Next Js",
      description: `A The React Framework for Production
        <a href="https://nextjs.org/" target="_blank">Next.js</a>.`
    },
    {
      id: 11,
      label: "Node Js",
      description: `As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications
        <a href="https://nodejs.org/" target="_blank">Node.js</a>.`
    },
    {
      id: 16,
      label: "Postgre Sql",
      description: `An open source database with lots of power. Easy to use and maintain. This monster can safely store and scale the most complicated data workloads.`
    },
    {
      id: 15,
      label: "PERN Stack",
      description: `The PERN stack consists of PostgreSQL, Express, React, and Node. js.`,
      comment: `I built exactly one <a href="https://spotify.cemyurtbasi.com/" target="_blank">site</a>.`
    },
    {
      id: 2,
      label: "ES2015",
      description: `It's a pseudonym for the latest version of the 
        <a href="https://en.wikipedia.org/wiki/ECMAScript#6th_Edition_-_ECMAScript_2015" target="_blank">
        ECMAScript</a> aka JavaScript.`,
      comment: `ES6 makes my coding easier.`
    },
    {
      id: 3,
      label: "HTML5",
      description: `A markup language used for structuring and presenting content on the 
        World Wide Web. It is the fifth and current major version of the 
        <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank">HTML</a> standard.`,
      comment: `There is no web without HTML.`
    },
    {
      id: 4,
      label: "CSS / CSS3",
      description: `Cascading Style Sheets - a style sheet 
        <a href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets" target="_blank">language</a> 
        used for describing the presentation of a document written in HTML.`,
      comment: `CSS makes the web beautiful.`
    },
    {
      id: 21,
      label: "SCSS/SASS",
      description: `A scripting <a href="http://sass-lang.com/" target="_blank">language</a> 
      that is interpreted or compiled into Cascading Style Sheets (CSS).`,
      comment: `SASS helps me write and manage CSS code faster.`
    },
    {
      id: 5,
      label: "BEM",
      description: `BEM (Block, Element, Modifier) is a component-based 
        <a href="https://en.bem.info/" target="_blank">approach</a> to web development.`
    },
    {
      id: 6,
      label: "Git",
      description: `Git is a <a href="https://en.wikipedia.org/wiki/Git" target="_blank">version control</a> system for tracking changes 
        in computer files and coordinating work on those files among multiple people.`,
      comment: `It saved my life, a couple of times ;)`
    },
    {
      id: 19,
      label: "Github",
      description: `A web-based Git version control repository hosting service.`,
      comment: `That's my <a href="https://github.com/cemyurtbasi" target="_blank">Github</a>`
    },
    {
      id: 9,
      label: "Gatsby",
      description: `A static PWA (Progressive Web App) 
        <a href="https://www.gatsbyjs.org/" target="_blank">generator</a>. Gatsby lets 
        you build blazing-fast sites with your data, whatever the source.`,
      comment: `The website you are looking at now is built with Gatsby.`
    },
    {
      id: 12,
      label: "npm",
      description: `A package <a href="https://www.npmjs.com/" target="_blank">manager</a> for 
        the JavaScript programming language.`
    },
    {
      id: 13,
      label: "Webpack",
      description: `An open-source JavaScript module <a href="https://webpack.js.org/" target="_blank">bundler</a>.
        Webpack takes modules with dependencies and generates static assets representing those modules.`
    },
    {
      id: 14,
      label: "jQuery",
      description: `A cross-platform JavaScript <a href="https://jquery.com/" target="_blank">library</a> designed to simplify 
        the client-side scripting of HTML.`,
      comment: `I used it much and often`
    },
    {
      id: 17,
      label: ".Net",
      description: `NET Framework is a software development framework for building and running applications on Windows`,
      comment: `I can stil produce quilty code but for now, im working on Reach and Next.js.`
    },
    {
      id: 18,
      label: ".Net core",
      description: `ASP.NET Core is the open-source version of ASP.NET, that runs on macOS, Linux, and Windows.`,
      comment: `I can stil produce quilty code but for now, im working on Reach and Next.js.`
    }
  ]);

  const [activatedItem, setActivatedItem] = useState(null);
  const [popOver, setPopOver] = useState({
    isActive: false,
    topPx: "auto",
    bottomPx: "auto",
    leftPx: "auto",
    rightPx: "auto",
    description: "",
    comment: ""
  });
  const [popOverPosition, setPopOverPosition] = useState(null);

  const deactivatePopOver = () => {
    setPopOver({ isActive: false });
    setActivatedItem(null);
    setPopOverPosition(null);
  };

  const windowKeyDownHandler = (e) => {
    if (activatedItem && e.key === "Escape") {
      deactivatePopOver();
    }
  };

  const windowResizeHandler = () => {
    if (activatedItem) {
      deactivatePopOver();
    }
  };

  const windowClickHandler = (e) => {
    const isValidClickTarget =
      e.target.nodeName === "A" || e.target.nodeName === "BUTTON";
    if (!isValidClickTarget && activatedItem) {
      deactivatePopOver();
    }
  };

  const itemListOnClickHandler = (e, id) => {
    const anchor = {
      offsetTop: e.target.offsetTop,
      offsetLeft: e.target.offsetLeft,
      offsetWidth: e.target.offsetWidth,
      offsetHeight: e.target.offsetHeight
    };
    const popOverData = items.find((el) => el.id === id);
    positionPopOver(anchor, popOverData);
    setActivatedItem(id);
  };

  const positionPopOver = (anchor, popOverData) => {
    const popWidth = 200;
    const popHeight = 100;
    const body = document.querySelector("body");

    const spaceUnder =
      body.offsetHeight - anchor.offsetTop - anchor.offsetHeight;
    const spaceOnRight =
      body.offsetWidth - anchor.offsetLeft - anchor.offsetWidth;

    const verticalPositionUnder = spaceUnder >= anchor.offsetTop;
    const horizontalPositionOnRight = spaceOnRight >= anchor.offsetLeft;

    const topPx = verticalPositionUnder
      ? `${anchor.offsetTop + anchor.offsetHeight}px`
      : `auto`;
    const bottomPx = verticalPositionUnder
      ? `auto`
      : `${body.offsetHeight - anchor.offsetTop}px`;
    const leftPx = horizontalPositionOnRight
      ? `${anchor.offsetLeft}px`
      : `auto`;
    const rightPx = horizontalPositionOnRight
      ? `auto`
      : `${body.offsetWidth - anchor.offsetLeft - anchor.offsetWidth}px`;

    setPopOver({
      isActive: true,
      topPx,
      bottomPx,
      leftPx,
      rightPx,
      description: popOverData.description,
      comment: popOverData.comment
    });
    setPopOverPosition(verticalPositionUnder ? "under" : "above");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", windowResizeHandler);
      window.addEventListener("click", windowClickHandler);
      window.addEventListener("keydown", windowKeyDownHandler);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", windowResizeHandler);
        window.removeEventListener("click", windowClickHandler);
        window.removeEventListener("keydown", windowKeyDownHandler);
      }
    };
  }, [activatedItem]);

  return (
    <div>
      <ToolBoxList
        items={items}
        activatedItem={activatedItem}
        itemOnClick={itemListOnClickHandler}
        popOverPosition={popOverPosition}
      />
      {popOver.isActive && (
        <ToolBoxPopOver
          top={popOver.topPx}
          bottom={popOver.bottomPx}
          left={popOver.leftPx}
          right={popOver.rightPx}
          description={popOver.description}
          comment={popOver.comment}
          onClick={deactivatePopOver}
        />
      )}
    </div>
  );
};

export default ToolBoxListContainer;
