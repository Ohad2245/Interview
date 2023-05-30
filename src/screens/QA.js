import { useState ,useEffect} from "react";
import "../App.css";
import React from "react";
import FAQ from '../components/FAQ/FAQ.js';
import img from "../assets/scroll/1.jpg";
import Pagination from '../components/pagination/Pagination';
import { GoPrimitiveDot } from "react-icons/go";
import { useTranslation } from "react-i18next";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import Rating from "../components/rating/Rating";

function QA() {
  const {t} = useTranslation();

  const[test,setTest] = useState([]);

  const [faqs, setFaqs] = useState([
    {
      question: "What is React?",
      answer:
        "React(aka React.js or ReactJS) is an open-source front-end JavaScript library that is used for building composable user interfaces, especially for single-page applications. It is used for handling view layer for web and mobile apps based on components in a declarative approach.React was created by Jordan Walke, a software engineer working for Facebook. React was first deployed on Facebook's News Feed in 2011 and on Instagram in 2012..",
      open: false,
    },
    {
      question: "What is the history behind React evolution?",
      answer:
        "The history of ReactJS started in 2010 with the creation of XHP. XHP is a PHP extension which improved the syntax of the language such that XML document fragments become valid PHP expressions and the primary purpose was used to create custom and reusable HTML elements.The main principle of this extension was to make front-end code easier to understand and to help avoid cross-site scripting attacks. The project was successful to prevent the malicious content submitted by the scrubbing user. But there was a different problem with XHP in which dynamic web applications require many roundtrips to the server, and XHP did not solve this problem. Also, the whole UI was re-rendered for small change in the application. Later, the initial prototype of React is created with the name FaxJ by Jordan inspired from XHP. Finally after sometime React has been introduced as a new library into JavaScript world.Note: JSX comes from the idea of XHP.",
      open: false,
      image: <img src={img} alt="img" width="100" height="100" />,
    },
    {
      question: "How does React Work?",
      answer:
        "React creates a virtual DOM. When state changes in a component it firstly runs a 'diffing' algorithm, which identifies what has changed in the virtual DOM. The second step is reconciliation, where it updates the DOM with the results of diff.",
      open: false,
    },
    {
      question: "What are the major features of React?",
      answer: (
        <p style={{ color: "black" }}>
          <b>
            <GoPrimitiveDot color={"green"} />
          </b>{" "}
          Uses <b>JSX</b> syntax, a syntax extension of JS that allows
          developers to write HTML in their JS code.<br></br>
          <b>
            <GoPrimitiveDot color={"green"} />
          </b>
          It uses <b>Virtual DOM</b> instead of Real DOM considering that Real
          DOM manipulations are expensive.<br></br>
          <b>
            <GoPrimitiveDot color={"green"} />
          </b>
          Supports <b>server-side rendering</b>which is useful for Search Engine
          Optimizations(SEO).<br></br>
          <b>
            <GoPrimitiveDot color={"green"} />
          </b>
          Follows <b>Unidirectional or one-way</b> data flow or data binding.
          <br></br>
          <b>
            <GoPrimitiveDot color={"green"} />
          </b>
          Uses<b>reusable/composable</b> UI components to develop the view.
        </p>
      ),
      open: false,
    },
    {
      question: "What is SPA?",
      answer: (
        <p>
          SPA stands for <b>Single Page Application</b>, and it refers to a web
          application that dynamically updates a single HTML page instead of
          loading multiple pages as a traditional web application would. SPA can
          provide a smoother user experience, faster load times, and reduce
          server load since only the necessary components are loaded
          dynamically. However, they can also have drawbacks such as increased
          complexity, difficulty with search engine optimization, and issues
          with browser history management
        </p>
      ),
      open: false,
    },

    {
      question: "What is JSX?",
      answer: (
        <p>
          JSX stands for JavaScript XML and it is an XML-like syntax extension
          to ECMAScript. Basically it just provides the syntactic sugar for the
          React.createElement(type, props, ...children) function, giving us
          expressiveness of JavaScript along with HTML like template syntax.In
          the example below, the text inside tag is returned as JavaScript
          function to the render function.
        </p>
      ),
      open: false,
    },
    {
      question: "What is the difference between Element and Component",
      answer: (
        <p>
          An Element is a plain object describing what you want to appear on the
          screen in terms of the DOM nodes or other components. Elements can
          contain other Elements in their props. Creating a React element is
          cheap. Once an element is created, it cannot be mutated. The
          JavaScript representation(Without JSX) of React Element would be as
          follows: <img src="/1.png" width="100%" /> <br></br>and this element
          can be simiplified using JSX <img src="/2.png" width="100%" />
          <br></br>The above React.createElement() function returns an object as
          below:
          <img src="/3.png" width="100%" />
          <br></br>
          Finally, this element renders to the DOM using ReactDOM.render().
          <br></br>
          Whereas a <b>component</b> can be declared in several different ways.
          It can be a class with a render() method or it can be defined as a
          function. In either case, it takes props as an input, and returns a
          JSX tree as the output:
          <b></b>
          <img src="/4.png" width="100%" />
          <b></b>
          Then JSX gets transpiled to a React.createElement() function tree:
          <img src="/5.png" width="100%" />
        </p>
      ),
      open: false,
    },
    {
      question:
        "When to use a Class Component over a Function Component?      ",
      answer: (
        <p>
          After the addition of Hooks(i.e. React 16.8 onwards) it is always
          recommended to use Function components over Class components in React.
          Because you could use state, lifecycle methods and other features that
          were only available in class component present in function component
          too. But even there are two reasons to use Class components over
          Function components. If you need a React functionality whose Function
          component equivalent is not present yet, like Error Boundaries. In
          older versions, If the component needs state or lifecycle methods then
          you need to use class component. Note: You can also use reusable react
          error boundary third-party component without writing any class. i.e,
          No need to use class components for Error boundaries. The usage of
          Error boundaries from the above library is quite straight forward.
          <img src="/6.png" width="100%" />
        </p>
      ),
      open: false,
    },
    {
      question: "What are Pure Components?",
      answer: (
        <p>
          Pure components are the components which render the same output for
          the same state and props. In function components, you can achieve
          these pure components through memoized React.memo() API wrapping
          around the component. This API prevents unnecessary re-renders by
          comparing the previous props and new props using shallow comparison.
          So it will be helpful for performance optimizations. But at the same
          time, it won't compare the previous state with the current state
          because function component itself prevents the unnecessary rendering
          by default when you set the same state again. The syntactic
          representation of memoized components looks like below,
          <br></br>
          <code>
            const MemoizedComponent = memo(SomeComponent, arePropsEqual?);
          </code>
          Below is the example of how child component(i.e., EmployeeProfile) prevents re-renders for the same props passed by parent component(i.e.,EmployeeRegForm).
        <br></br>
        

          
</p>
      ),
      open: false,
    },
    {
      question: "What your name?",
      answer: "Ohad",
      open: false,
      rating:<Rating/>

    },
    {
      question: "What is SPA?",
      answer: "Single pages",
      open: false,
    },
    {
      question: "Who is the mose awesome person?",
      answer: "You,The Viewer",
      open: false,
    },
    {
      question: "Who is the mose awesome person?",
      answer: "You,The Viewer",
      open: false,
    },
    {
      question: "Who is the mose awesome person?",
      answer: "You,The Viewer",
      open: false,
    },
    {
      question: "Who is the mose awesome person?",
      answer: "You,The Viewer",
      open: false,
    },
    {
      question: "Who is the mose awesome person?",
      answer: "You,The Viewer",
      open: false,
    },
    {
      question: "Who is the mose awesome person?",
      answer: "You,The Viewer",
      open: false,
    },
    {
      question: "Who is the mose awesome person?",
      answer: "You,The Viewer",
      open: false,
    },
    {
      question: "Who is the mose awesome person?",
      answer: "You,The Viewer",
      open: false,
    },
    {
      question: "Who is the mose awesome person?",
      answer: "You,The Viewer",
      open: false,
    },
    {
      question: "Who is the mose awesome person?",
      answer: "You,The Viewer",
      open: false,
    },
    {
      question: "Who is the mose awesome person?",
      answer: "You,The Viewer",
      open: false,
    },
    {
      question: "Who is the mose awesome person?",
      answer: "You,The Viewer",
      open: false,
    },
    {
      question: "Who is the mose awesome person?",
      answer: "You,The Viewer",
      open: false,
    },
    {
      question: "Who is the mose awesome person?",
      answer: "You,The Viewer",
      open: false,
    },
    {
      question: "Who is the mose awesome person?",
      answer: "You,The Viewer",
      open: false,
    },
    {
      question: "Who is the mose awesome person?",
      answer: "You,The Viewer",
      open: false,
    },
    {
      question: "אקדא",
      answer: "ק'א,קא קר",
      open: false,
    },
  ]);

  const [levels, setLevels] = useState(new Array(faqs.length).fill(0));

  const calculateAverageLevel = () => {
    const total = levels.reduce((sum, level) => sum + level, 0);
    const average = total / levels.length;
  }
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  const currentPosts = faqs.slice(firstPostIndex, lastPostIndex);

  const toggleFAQ = (index) => {
    const actualIndex = firstPostIndex + index;
    setFaqs(
      faqs.map((faq, i) => {
        if (i === actualIndex) {
          faq.open = !faq.open;
          levels[i] = levels;

          
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDocs(collection(db, "questions"));
      const faqsData = data.docs.map((doc) => ({
        question: doc.data().question,
        answer: doc.data().answer,
        open: false,
      }));
      setTest(faqsData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="faqs text-center  ">
        {currentPosts.map((faq, i) => (
          <FAQ faq={faq} key={i} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
      <Pagination
        totalPosts={faqs.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      
    </div>
  );
}

export default QA;