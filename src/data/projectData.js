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
  },
  {
    id: 6,
    category: ['finance', 'data-science'],
    title: 'Time series analysis of US Unemployment Rate',
    subtitle: 'Housing Supply and Interest Rates on Employment Trends',
    image: require('./stats170_hw1_2.png'),
    description: [
      {
        type: 'paragraph',
        content: `This project investigates the relationship between interest rates, housing supply, and unemployment in the United States. With rising interest rates and tech industry layoffs as a backdrop, we explored whether these economic factors could predict changes in unemployment. Additionally, we examined the potential impact of housing supply, hypothesizing that economic stressors may lead to increased real estate listings, which may correlate with shifts in employment patterns.`
      },
      {
        type: 'paragraph',
        content: `Using time series analysis, we analyzed three key datasets: interest rate, unemployment rate, and housing supply. Our analysis utilized methods such as exponential smoothing, polynomial regression, multiple regression, Vector Autoregression (VAR), ARIMA, decomposition, and autocorrelation to explore these relationships. By examining the interplay between these variables, we aimed to better understand the broader economic forces influencing unemployment trends.`
      },
      {
        type: 'paragraph',
        content: `You can download the full project as a PDF <a href="/STATS170_Project1.pdf" target="_blank" rel="noopener noreferrer">here</a>, and in PowerPoint format <a href="/STATS170_Project1_ppt.pdf" target="_blank" rel="noopener noreferrer">here</a>.`
      }
    ],
    details: {
      role: '',
      role_details: 'Conducted time series analysis using R, applied various regression models and explored economic relationships',
      technologies: 'R',
      date: 'January 2023',
      duration: '',
      affiliation: 'UCLA STATS 170 - Time Series',
      link: 'https://github.com/ellenweii/STATS-170'
    }
  },
  {
    id: 7,
    category: ['finance', 'data-science'],
    title: 'Time Series Forecasting with Random Forest and GBM',
    subtitle: 'Benchmarking Unemployment Rate Forecasts Using Machine Learning Models',
    image: require('./STATS170_Project2.png'),
    description: [
      {
        type: 'paragraph',
        content: `This project explores the use of Random Forest (RF) and Gradient Boosting Machine (GBM) models to forecast the US unemployment rate. Using feature engineering techniques, we included lag12, month, and trend as the key predictors in the models. Initial data plots revealed trends and seasonality, justifying the inclusion of these features in our benchmark regression, RF, and GBM models.`
      },
      {
        type: 'paragraph',
        content: `The Random Forest model was trained with 500 trees, and lag12 was identified as the most important variable. It achieved a Mean Absolute Percentage Error (MAPE) of 0.1991 and an RMSE of 0.776. The GBM model, also trained with 500 trees, performed better with a MAPE of 0.1038 and an RMSE of 0.434, showing stronger performance compared to the Random Forest model and the benchmark regression.`
      },
      {
        type: 'paragraph',
        content: `You can download the full project as a PDF <a href="/STATS170_Project2.pdf" target="_blank" rel="noopener noreferrer">here</a>.`
      }
    ],
    details: {
      role: '',
      role_details: 'Developed Random Forest and GBM models to forecast unemployment rate, conducted feature engineering, and benchmarked model performance',
      technologies: 'Python, Sklearn, Statsmodels, Matplotlib',
      date: 'January 2023',
      duration: '',
      affiliation: 'UCLA STATS 170 - Time Series Analysis',
      link: 'https://github.com/ellenweii/STATS-170'
    }
  },
  {
    id: 8,
    category: ['competitions', 'finance'],
    title: 'Datafest 2023',
    subtitle: 'Analyzing Pro Bono Legal Services Across the US',
    image: require('./datafest2023.png'),
    description: [
      {
        type: 'paragraph',
        content: `This project was part of the DataFest 2023 challenge, where we worked with real data provided by the American Bar Association (ABA). The challenge involved analyzing pro bono legal services provided through an online platform. The ABA sought insights on trends in legal questions asked by clients and ways to better prepare volunteer attorneys to address evolving needs across different legal categories.`
      },
      {
        type: 'paragraph',
        content: `Our analysis included time series analysis of legal questions submitted by month, visualizations such as a USA heat map comparing the number of clients and attorneys, and an exploration of trends in the types of questions asked. We also conducted a Kaplan-Meier survival analysis to examine user engagement over time. These insights helped the ABA understand regional demand for legal aid and anticipate future trends, enabling them to optimize volunteer recruitment and outreach strategies.`
      },
      {
        type: 'paragraph',
        content: `You can view our presentation slides <a href="/datafest2023_ppt.pdf" target="_blank" rel="noopener noreferrer">here</a>.`
      }
    ],
    details: {
      role: '',
      role_details: 'Performed time series analysis, geographic visualizations, and survival analysis to assess trends in legal aid',
      technologies: 'R, Python',
      date: 'April 2023',
      duration: '3 days',
      affiliation: 'DataFest 2023 - UCLA',
      link: 'https://github.com/ellenweii/datafest2023'
    }
  },
  {
    id: 9,
    category: ['finance'],
    title: 'Course Project: Cryptocurrencies',
    subtitle: 'Exploring the Financial Architecture and Future of Decentralized Finance',
    image: require('./project_crypto.jpg'),
    description: [
      {
        type: 'paragraph',
        content: `This project, completed as part of ECON 19: Financial Architecture of the United States, focuses on the rise of cryptocurrencies, with a special emphasis on Ethereum. The paper explores the history and evolution of decentralized finance (DeFi) and cryptocurrencies, from early ideas by David Chaum and Wei Dai, to the emergence of Bitcoin and Ethereum as transformative forces in the global financial system.`
      },
      {
        type: 'paragraph',
        content: `The study examines the mechanics of blockchain technology, the role of smart contracts on the Ethereum platform, and the transition of Ethereum from a proof-of-work (PoW) to a proof-of-stake (PoS) system. The implications of DeFi on traditional financial systems, as well as the challenges posed by unregulated ecosystems, are discussed. Furthermore, the project analyzes the impact of key events such as the collapse of FTX and how DeFi might evolve in response to these market disruptions.`
      },
      {
        type: 'paragraph',
        content: `You can download the full paper as a PDF <a href="/ECON19 Paper.pdf" target="_blank" rel="noopener noreferrer">here</a>.`
      }
    ],
    details: {
      role: 'Researcher',
      role_details: 'Conducted in-depth research on the history, technology, and financial implications of cryptocurrencies and DeFi',
      technologies: 'Ethereum, Blockchain, Smart Contracts',
      date: 'December 2022',
      duration: '4 weeks',
      affiliation: 'ECON 19: Financial Architecture of the United States - UCLA',
      link: null
    }
  },
  {
    id: 10,
    category: ['data-science', 'machine-learning-ai'],
    title: 'Object Detection Algorithms',
    subtitle: 'Exploring Transfer Learning on Aerial Maritime Images',
    image: require('./cs188_finalproject.png'),
    description: [
      {
        type: 'paragraph',
        content: `Object detection is a key task in computer vision that involves identifying and localizing objects within images. This project explores various R-CNN-based deep learning algorithms for object detection, focusing on transfer learning performance on a custom dataset of aerial maritime images. We compared five R-CNN models (Faster R-CNN, Cascade R-CNN, Dynamic R-CNN, Grid R-CNN, and Libra R-CNN) using OpenMMLab’s MMDetection toolbox. These models were pretrained on the Microsoft COCO dataset and fine-tuned on a dataset consisting of five classes: car, lift, jet ski, dock, and boat.`
      },
      {
        type: 'paragraph',
        content: `Our hypothesis was that the Cascade, Dynamic, Grid, and Libra R-CNN models would outperform Faster R-CNN on the new dataset due to their enhanced training techniques. The results showed that Cascade, Libra, and Dynamic R-CNN performed better, while Grid R-CNN surprisingly underperformed compared to Faster R-CNN. We analyzed model performance based on mean average precision (mAP) and explored class-wise performance, training time, and model size. We also visualized test outputs for qualitative comparison and examined the models’ robustness against adversarial attacks.`
      }
    ],
    details: {
      role: 'Machine Learning Engineer',
      role_details: 'Compared and evaluated multiple R-CNN models for object detection, performed transfer learning, and analyzed adversarial robustness',
      technologies: 'Python, TensorFlow, OpenMMLab, MMDetection',
      date: 'March 2023',
      duration: '10 weeks',
      affiliation: 'CS188: Deep Learning for Computer Vision - UCLA',
      link: 'https://ucladeepvision.github.io/CS188-Projects-2023Winter/2023/03/26/team20-object-detection.html'
    }
  },
  {
    id: 11,
    category: ['data-science', 'machine-learning-ai'],
    title: 'Computer Vision Course Projects',
    subtitle: 'Exploring Image Classification, Neural Networks, and Advanced Vision Techniques',
    image: require('./cs188_projects.png'),
    description: [
      {
        type: 'paragraph',
        content: `This project showcases a series of assignments completed as part of a Computer Vision course, each focusing on different deep learning and computer vision techniques using the MiniPlaces dataset.`
      },
      {
        type: 'paragraph',
        content: `<strong>1. Image Classification and kNN Classifier:</strong> Prepared data for image classification using the MiniPlaces dataset. I created two new datasets, TinyPlaces-Binary and TinyPlaces-Multiclass, and implemented k-Nearest Neighbor (kNN), linear, logistic, and softmax regression classifiers to evaluate their performance.`
      },
      {
        type: 'paragraph',
        content: `<strong>2. Neural Networks in PyTorch:</strong> Built and trained fully-connected and convolutional neural networks (CNNs) using PyTorch. I also designed and tested a custom model for image classification, competing on a test leaderboard for extra credit.`
      },
      {
        type: 'paragraph',
        content: `<strong>3. ResNet Fine-tuning and Vision Transformers:</strong> Implemented and fine-tuned ResNet models and built a Vision Transformer (ViT) from scratch. Additionally, I visualized the behavior of CNNs to gain insight into their internal workings.`
      },
      {
        type: 'paragraph',
        content: `<strong>4. Segmentation and Generative Models:</strong> Focused on advanced topics such as semantic and instance segmentation, Generative Adversarial Networks (GANs), and Neural Radiance Fields (NeRFs). I applied these models for object detection, image generation, and 3D image representation.`
      },
      {
        type: 'paragraph',
        content: `These assignments provided hands-on experience with image classification, neural networks, and cutting-edge techniques in computer vision.`
      },
    ],
    details: {
      role: null,
      role_details: 'Implemented classifiers, neural networks, ResNet, Vision Transformers, and GANs using PyTorch and various datasets',
      technologies: 'Python, PyTorch, ResNet, Vision Transformer, GANs, NeRFs',
      date: 'March 2023',
      duration: '10 weeks',
      affiliation: 'CS188: Deep Learning for Computer Vision - UCLA',
      link: null
    }
  },
  {
    id: 12,
    category: 'data-science',
    title: 'Data Management Systems Course Projects',
    subtitle: 'Storing, managing, and accessing large-scale data',
    image: require('./cs143_projects.png'),
    description: [
      {
        type: 'paragraph',
        content: `The Data Management Systems course (CS143) is where I learned how to store, manage, and access large-scale data using relational and non-relational databases. The course focused on relational database management systems (RDBMS), SQL, and an introduction to non-relational databases. Key topics included relational models, relational algebra, database design, query execution, transactions, and NoSQL systems.`
      },
      {
        type: 'paragraph',
        content: `<strong>1. SQL Schema Design:</strong> Designed and implemented a complete SQL schema, defining the structure of a relational database to efficiently store and manage data. This involved understanding the relational model, creating entity-relationship diagrams, and applying normalization.`
      },
      {
        type: 'paragraph',
        content: `<strong>2. Writing PostgreSQL Queries with Python:</strong> Developed complex SQL queries using PostgreSQL to perform data analysis and connected to the database via Python for real-world data manipulation and retrieval. This assignment helped me gain mastery of relational query languages and database interaction.`
      },
      {
        type: 'paragraph',
        content: `<strong>3. Functional Dependencies and Relational Design:</strong> Explored functional dependencies and relational design theory to create optimized table structures, reducing redundancy and ensuring data integrity in RDBMS.`
      },
      {
        type: 'paragraph',
        content: `<strong>4. Large-Scale Data Processing with PySpark and Apache Spark:</strong> Worked with PySpark and Apache Spark for distributed data processing, gaining hands-on experience with non-relational data management systems. This assignment covered the basics of processing large datasets using Spark’s parallel computing framework.`
      },
      {
        type: 'paragraph',
        content: `<strong>5. Working with MongoDB:</strong> Used MongoDB, a popular NoSQL database, to manage document-based data. I applied query operations, schema design, and indexing strategies specific to NoSQL systems.`
      },
      {
        type: 'paragraph',
        content: `<strong>6. B+ Trees, Disk Storage, and Join Algorithms:</strong> Studied how B+ trees are used for indexing and optimizing query execution. Additionally, I explored how disk storage works in DBMS and implemented join algorithms for efficient data retrieval.`
      },
      {
        type: 'paragraph',
        content: `<strong>7. Transaction Scheduling and ACID Guarantees:</strong> Learned how to manage transaction scheduling and maintain database consistency through concurrency control. I also gained an understanding of the ACID properties (Atomicity, Consistency, Isolation, Durability) critical to database transactions.`
      },
      {
        type: 'paragraph',
        content: `This course provided a comprehensive understanding of both relational and non-relational database systems, data modeling, and essential database management techniques, preparing me for real-world data analysis and application development.`
      }
    ],
    details: {
      role: 'Data Engineer',
      role_details: 'Designed relational schemas, wrote complex PostgreSQL queries, worked with PySpark and MongoDB, and implemented database storage and transaction scheduling techniques',
      technologies: 'SQL, PostgreSQL, Python, PySpark, Apache Spark, MongoDB, B+ Trees',
      date: 'June 2023',
      duration: '10 weeks',
      affiliation: 'CS143: Data Management Systems - UCLA',
      link: null
    }
  },
  {
    id: 13,
    category: 'data-science',
    title: 'Optimizing Computational Efficiency in Function Optimization',
    subtitle: 'A Comparative Study on Sequential Designs for Function Optimization',
    image: require('./STATS143_project.png'),
    description: [
      {
        type: 'paragraph',
        content: `This project, completed as part of STATS 143: Research in Statistics, focuses on optimizing computational efficiency through sequential designs for function optimization. The study compares different approaches in function optimization by analyzing surrogate models, infill criteria, and initial design algorithms, using R and the mlrMBO toolbox for Bayesian optimization.`
      },
      {
        type: 'paragraph',
        content: `We explored the impact of surrogate models like Kriging and Random Forest, as well as infill criteria such as Expected Improvement (EI) and Confidence Bound (CB). Initial design strategies like Random Latin Hypercube Sampling (LHS), Optimum LHS, and Maximin LHS were also compared to assess their effect on optimization performance.`
      },
      {
        type: 'paragraph',
        content: `I wrote the code, ran the tests, read research papers in preparation, and created visualizations in R to analyze the results. The project provides insights into selecting optimal configurations for diverse optimization tasks by evaluating convergence, computational efficiency, and model accuracy across various function landscapes.`
      },
      {
        type: 'paragraph',
        content: `You can view the full project report as a PDF <a href="https://github.com/ellenweii/STATS143_FinalProject/blob/main/Stats_143_Final_Report.pdf" target="_blank" rel="noopener noreferrer">here</a>,
         or visit my project's GitHub repository <a href="https://github.com/ellenweii/STATS143_FinalProject" target="_blank" rel="noopener noreferrer">here</a>.`
         
      }
    ],
    details: {
      role: 'Researcher',
      role_details: 'Wrote the code, ran tests, reviewed literature, and created visualizations in R to evaluate function optimization methods using Bayesian optimization techniques',
      technologies: 'R, mlrMBO, Kriging, Random Forest',
      date: 'Spring 2024',
      duration: '4 weeks',
      affiliation: 'STATS 143: Research in Statistics - UCLA',
      link: 'https://github.com/ellenweii/STATS143_FinalProject'
    }
  }
  
  
];

export default projectData;
