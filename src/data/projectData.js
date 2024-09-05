// src/data/projectData.js

const projectData = [
  {
    id: 1,
    category: 'competitions',
    title: 'Datafest 2022',
    subtitle: 'Best Visualization Award Runner-Up',
    image: require('./datafest_group.jpg'),
    description: [
      {
        type: 'paragraph',
        content: `The project was awarded the Best Visualization runner-up award at the annual DataFest @ UCLA, a 48-hour data competition where hundreds of undergraduate students from UCLA, UC Riverside, Pomona, Fullerton, and other universities analyze rich, complex datasets. The judging panel consisted of 21 statisticians and data scientists from academia, industry, and government.`
      },
      {
        type: 'paragraph',
        content: `The challenge in this DataFest was to assist the researchers who created Elm City Stories in determining whether their game might be useful in understanding real-life behavior. The task involved characterizing, measuring, observing, and displaying patterns of play within the game. Elm City Stories is an educational video game designed for middle and high school students. Developed by researchers at the Play2Prevent Lab within the Yale School of Medicine, the game aims to prevent negative health outcomes such as HIV, sexually transmitted infections, and substance misuse in at-risk teens (ages 11-14) by increasing their perception of risk and helping them acquire healthy skills to avoid engaging in risky behavior.`
      },
      {
        type: 'paragraph',
        content: `The team conducted player segmentation based on time series analysis of gameplay, delving into how players change over time by analyzing their behavior across sessions. The research explored different types of players, concluding that the avatars players chose were purely cosmetic and that the player's personality had a greater influence on their gameplay style. This categorization of players could be valuable for further psychological research aligned with the research organization’s original goals.`
      },
      {
        type: 'paragraph',
        content: `The project culminated in clear visualizations and a well-written presentation that illustrated how players change over time and identified different types of players. The team's work was recognized for its clarity and thoroughness, effectively demonstrating the changes in player behavior over time and the categorization of different player types. These insights could be leveraged in future research to enhance the understanding of player behavior and its implications for psychological studies.`
      }
    ],
    details: {
      role: 'Machine Learning, Data Analyst',
      role_details: 'Developed research questions, data cleaning and feature engineering, built KNN and hierarchical clustering models, led the team, managed scheduling, presented pitch to judges',
      technologies: 'R, Python',
      date: 'April 2022',
      duration: '48 hours',
      affiliation: 'UCLA Datafest Team Data Dive',
      link: 'https://github.com/ellenweii/datafest2022'
    }
  },
  {
    id: 2,
    category: 'competitions',
    title: 'Hack With A Pro 2024',
    subtitle: '3rd Place with OurFridge',
    image: require('./project_ourfridge.png'),
    description: [
      {
        type: 'paragraph',
        content: `Our 3rd-place-winning final project is Our Fridge, an easy ingredient sharing website that allows users to share leftover ingredients with their friends through a communal fridge. Our Fridge uses email notifications to let a friend know that a user wants an ingredient, and generates easy recipes that can use the leftover ingredients accumulated by the group.`
      }
    ],
    details: {
      role: 'Frontend developer, UI/UX',
      role_details: 'Ideated and designed product, wrote code for the frontend',
      technologies: 'React, HTML, CSS, Figma, Git',
      date: 'April 2024',
      duration: '12 hours',
      affiliation: 'Team Members: Jacky Dai, Helen Feng, Warrick He, Yifan Tang, Chanh Tran, Ellen Wei',
      link: 'https://github.com/hailenwashere/hackwapro'
    }
  },
  {
    id: 3,
    category: 'competitions',
    title: 'LA Hacks 2024',
    subtitle: 'BioQuest - Nature classification app',
    image: require('./project_bioquest.png'),
    description: [
      {
        type: 'paragraph',
        content: `BioQuest is a mobile app available for iOS and Android that revolutionizes outdoor exploration. Simply snap a picture of any animal or plant, and our advanced model instantly identifies the species for you. Dive deeper with detailed information about each species and build your own digital journal of encounters. Engage in fun quizzes to test your knowledge and compete with friends, earning points and tracking your progress as you discover and document new species.`
      },
      {
        type: 'paragraph',
        content: `In an increasingly digital world, it's easy to become glued to our screens, losing touch with the natural world around us. Today’s children, in particular, seem to prefer the glow of screens to the wonders of outdoor play. However, adventure awaits us in every corner of nature – from the familiar creatures we encounter daily to the rare and elusive species that spark our curiosity. We are driven by a desire to bridge the gap between technology and the natural world, rekindling our connection with the environment and igniting a sense of wonder and curiosity within us all. Our aim is simple yet profound: to inspire everyone to step outside, explore, and discover the incredible diversity of life on our planet – all in a way that's engaging, educational, and above all, fun!`
      },
      {
        type: 'paragraph',
        content: `Our mobile app consists of three interconnected parts. Our backend model harnesses the power of Intel Developer Cloud, Tensorflow, Python, and OpenCV to accurately identify species from user-submitted images. The backend infrastructure is supported by MongoDB and the Gemini API, with Flask handling the server-side logic. The Gemini model enriches user experiences by generating quiz questions, crafting engaging descriptions, and providing additional species information. These change often, keeping users constantly engaged. On the frontend, we utilized React Native for the mobile app development, while Figma served as our design tool, ensuring a seamless and visually appealing user interface.`
      }
    ],
    details: {
      role: 'Machine Learning/AI Engineer, Product Design',
      role_details: 'Optimized a TensorFlowLite image classification model and deployed it on Intel Developer Cloud for further performance efficiency',
      technologies: 'React, Python, Intel Developer Cloud, OpenCV, MongoDB, Gemini API, Flask, Figma, Git',
      date: 'April 2024',
      duration: '3 days',
      affiliation: 'Team Members: Yifan Tang, Warrick He, Arnold He, Ellen Wei',
      link: 'https://devpost.com/software/bioquest'
    }
  },
  // Add more projects as needed
  {
    id: 4,
    category: 'finance',
    title: 'Portfolio Optimization',
    subtitle: 'Statistical Models in Finance Final Course Project',
    image: require('./statsc183.jpg'),
    description: [
      {
        type: 'paragraph',
        content: `In this course, I implemented and evaluated stock market portfolio performance using various financial models to optimize portfolio allocation and manage risk effectively. The models I applied include the **single index**, **multigroup**, **multi-index**, **efficient frontier**, and **Black-Scholes**, focusing on both portfolio optimization and options pricing strategies.`
      },
      {
        type: 'heading',
        content: '**Key topics covered:**'
      },
      {
        type: 'bullet',
        content: '**Portfolio Management**:'
      },
      {
        type: 'sub-bullet',
        content: 'Constructing portfolios from individual stocks, analyzing risk and expected return.'
      },
      {
        type: 'sub-bullet',
        content: 'Maximizing return for a given level of risk, or minimizing risk for a target return.'
      },
      {
        type: 'sub-bullet',
        content: 'Explored the **minimum variance set** and the properties of the **efficient frontier**.'
      },
      {
        type: 'sub-bullet',
        content: 'Applied the **single index model** and **constant correlation model**, considering cases with and without short sales.'
      },
      {
        type: 'sub-bullet',
        content: 'Worked with **multigroup** and **multi-index models** to assess portfolio performance.'
      },
      {
        type: 'bullet',
        content: '**Options Pricing and Investment Strategies**:'
      },
      {
        type: 'sub-bullet',
        content: 'Developed investment strategies using options and explored advanced pricing models.'
      },
      {
        type: 'sub-bullet',
        content: 'Applied the **binomial model**, **Weiner and Markov processes**, and **Ito’s Lemma**.'
      },
      {
        type: 'sub-bullet',
        content: 'Investigated the **Black-Scholes model**, analyzing key metrics such as the Greeks and implied volatility.'
      },
      {
        type: 'sub-bullet',
        content: 'Conducted simulations and explored **Value at Risk (VaR)** to manage and quantify portfolio risk.'
      },
      {
        type: 'paragraph',
        content: `Relevant materials included concepts from **Modern Portfolio Theory**, **Investment Analysis**, and **Options Futures and Other Derivatives**.`
      }
    ],
    details: {
      role: '',
      role_details: 'Financial Modeling, Risk Management, Statistical Analysis, Investment Strategy Development, Quantitative Finance',
      technologies: 'Python, R',
      date: 'Fall 2023',
      duration: '1 quarter',
      affiliation: 'UCLA Course: Statistical Models in Finance STATS C183/C283 (concurrently offered graduate course)',
      link: ''
    }
  },
  {
    id: 5,
    category: ['finance', 'machine-learning-ai'],
    title: 'Paper Review: Stable Neural Stochastic Differential Equations',
    subtitle: 'Robust Time-Series Analysis with Neural SDEs',
    image: require('./ece239as_paper_review.png'),
    description: [
      {
        type: 'paragraph',
        content: `This paper review of Stable Neural Stochastic Differential Equations in Analyzing Irregular Time Series Data (<a href="https://arxiv.org/abs/2402.14989" target="_blank" rel="noopener noreferrer">arXiv</a>) explores the application of <strong>Neural Stochastic Differential Equations (Neural SDEs)</strong> to analyze irregular time series data, addressing challenges such as missing data and distribution shifts, which are common in fields like healthcare and finance. Classic deep learning models like RNNs and LSTMs struggle with irregular sampling, leading to unstable results when data is incomplete or erratically distributed. This study introduces three classes of Neural SDEs—<strong>Langevin-type SDE</strong>, <strong>Linear Noise SDE</strong>, and <strong>Geometric SDE</strong>—designed to maintain robustness and stability in the presence of missing data.`
      },
      {
        type: 'paragraph',
        content: `The models were rigorously tested using multiple datasets for interpolation, forecasting, and classification tasks, demonstrating superior performance over traditional models, especially when the missing data rate was as high as 70%. By leveraging stochastic processes through well-defined drift and diffusion functions, Neural SDEs show unique advantages in improving time series analysis under uncertain conditions. The project highlights the effectiveness of these models in real-world applications and suggests next steps for optimizing computational efficiency and expanding their use in other domains like finance.`
      },
      {
        type: 'paragraph',
        content: `You can download the full paper review as a PDF <a href="/ECE239AS Final Paper Review.pdf" target="_blank" rel="noopener noreferrer">here</a>.`
      }
    ],
    details: {
      role: '',
      role_details: '',
      technologies: '',
      date: 'February 2024',
      duration: '',
      affiliation: 'Decision Making in Stochastic Systems (UCLA ECE 239AS Graduate Course)',
      link: ''
    }
  }
];

export default projectData;
