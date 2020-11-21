import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import Fade from 'react-reveal/Fade';

import './Home.scss';
import Store from '../../utils/stores/Stores';
import { WhatIDoSVG } from '../../utils/JSHelpers/Helper';
import ProjectCard from 'components/ProjectCard/ProjectCard';

const Home = () => {
  const stores = useContext(Store);

  //if the second value of useEffect is empty array [], the behavior its the same as componentDidMount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  stores.uiStore.actualLink = 0;

  return (
    <div className="Home">

      <div className="Home-top">
        <Fade top timeout={1250}>
          <div style={{ backgroundImage: "url('./img/imgPortada.jpg')" }} className="Home-img">
            <svg viewBox="0 0 14 165" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.89062 16.1299L7.60254 16.125C7.99967 16.125 8.35286 16.1803 8.66211 16.291C8.97135 16.3984 9.2334 16.5563 9.44824 16.7646C9.65983 16.9697 9.82096 17.222 9.93164 17.5215C10.0423 17.8177 10.0977 18.1562 10.0977 18.5371C10.0977 18.8952 10.0423 19.2191 9.93164 19.5088C9.82096 19.7952 9.65983 20.041 9.44824 20.2461C9.23665 20.4512 8.97624 20.6107 8.66699 20.7246C8.35449 20.8353 7.99967 20.8906 7.60254 20.8906L2.89062 20.8857L2.89062 19.5137L7.60254 19.5088C8.06152 19.5055 8.4082 19.4225 8.64258 19.2598C8.87695 19.0937 8.99414 18.8529 8.99414 18.5371C8.99414 18.2018 8.87695 17.9463 8.64258 17.7705C8.4082 17.5915 8.06152 17.5003 7.60254 17.4971L2.89062 17.4922L2.89062 16.1299ZM5.43945 12.4531L2.89062 11.1885L2.89062 9.57715L6.41601 11.5791L10 9.52832L10 11.1299L7.41211 12.4336L10 13.7324L10 15.3535L6.41601 13.3027L2.89062 15.2998L2.89062 13.6982L5.43945 12.4531Z" fill="#232323" />
              <path d="M2.89062 83.1299L7.60254 83.125C7.99967 83.125 8.35286 83.1803 8.66211 83.291C8.97135 83.3984 9.2334 83.5563 9.44824 83.7646C9.65983 83.9697 9.82096 84.222 9.93164 84.5215C10.0423 84.8177 10.0977 85.1562 10.0977 85.5371C10.0977 85.8952 10.0423 86.2191 9.93164 86.5088C9.82096 86.7952 9.65983 87.041 9.44824 87.2461C9.23665 87.4512 8.97624 87.6107 8.66699 87.7246C8.35449 87.8353 7.99967 87.8906 7.60254 87.8906L2.89062 87.8857L2.89062 86.5137L7.60254 86.5088C8.06152 86.5055 8.4082 86.4225 8.64258 86.2598C8.87695 86.0937 8.99414 85.8529 8.99414 85.5371C8.99414 85.2018 8.87695 84.9463 8.64258 84.7705C8.4082 84.5915 8.06152 84.5003 7.60254 84.4971L2.89062 84.4922L2.89062 83.1299ZM2.89062 81.5576L2.89062 77.4463L3.99902 77.4463L3.99902 78.833L8.89648 78.833L8.89648 77.4463L10 77.4463L10 81.5576L8.89648 81.5576L8.89648 80.2051L3.99902 80.2051L3.99902 81.5576L2.89062 81.5576Z" fill="#232323" />
              <path d="M10 157.898L2.89062 157.898L2.89062 156.058C2.89062 155.586 2.972 155.159 3.13477 154.778C3.29427 154.394 3.51888 154.067 3.80859 153.797C4.09505 153.523 4.43848 153.313 4.83887 153.167C5.23926 153.017 5.67871 152.942 6.15723 152.942L6.74316 152.942C7.22168 152.942 7.66113 153.017 8.06152 153.167C8.45866 153.313 8.80208 153.52 9.0918 153.787C9.37825 154.054 9.60124 154.375 9.76074 154.749C9.92025 155.123 10 155.537 10 155.989L10 157.898ZM4.00391 156.517L8.89648 156.517L8.89648 155.989C8.89648 155.732 8.84766 155.503 8.75 155.301C8.65234 155.096 8.51074 154.923 8.32519 154.783C8.13965 154.64 7.91504 154.531 7.65137 154.456C7.38444 154.381 7.08171 154.344 6.74316 154.344L6.14746 154.344C5.82845 154.344 5.53874 154.381 5.27832 154.456C5.01465 154.528 4.78841 154.637 4.59961 154.783C4.41081 154.926 4.26432 155.105 4.16016 155.32C4.05599 155.532 4.00391 155.778 4.00391 156.058L4.00391 156.517ZM6.88476 147.488L6.88476 150.408L8.8916 150.408L8.8916 146.995L10 146.995L10 151.785L2.89062 151.785L2.89062 147.01L4.00879 147.01L4.00879 150.408L5.80078 150.408L5.80078 147.488L6.88476 147.488ZM8.01269 143.504L2.89062 142.161L2.89062 140.647L10 142.801L10 144.197L2.89062 146.346L2.89062 144.832L8.01269 143.504Z" />
              <line x1="7" y1="34" x2="7" y2="64" strokeWidth="2" />
              <line x1="7" y1="101" x2="7" y2="131" strokeWidth="2" />
            </svg>
          </div>
        </Fade>
        <Fade timeout={750} cascade delay={550}>
          <div className="Home-topInfo">
            <h3>Hi, I’m Santiago</h3>
            <h4>My <strong>creativity</strong> allows me to build <strong className="Home-strongColor">experiences</strong> & <strong className="Home-strongColor">interfaces</strong></h4>
          </div>
        </Fade>
      </div>

      <div className="Home-whatIDo">
        <div className="Home-whatLeft">
          <Fade timeout={750} cascade>
            <h3>What I Do</h3>
          </Fade>
          <Fade timeout={1000} bottom>
            <div style={{ backgroundImage: "url('./img/imgPortada.jpg')" }} className="Home-whatImg"></div>
          </Fade>
        </div>
        <div className="Home-whatRight">
          {stores.uiStore.arrayWhat.map((elem) => {
            let classWhatIDo = (elem.selected) ? "Home-whatItem Home-WhatItemSelected" : "Home-whatItem";
            return (
              <div onClick={(e) => {
                e.preventDefault();
                stores.uiStore.selectWhat(elem.id);
              }} key={elem.id} className={classWhatIDo}>
                <WhatIDoSVG i={elem.id} selected={elem.selected} />
                <Fade timeout={750} cascade>
                  <h3>{elem.data}</h3>
                </Fade>
              </div>
            )
          })}
        </div>
      </div>

      <div className="Home-recentWork">
        <Fade timeout={1000} cascade>
          <h3 className="Home-leftRecent">Recent works</h3>
        </Fade>
        <div className="Home-rightRecent">
          <div className="Home-containerRecent">
            {stores.projectStore.arrayProjects.map((elem, index) => {
              if (index >= 2) {
                return ('');
              }
              return (
                <Fade key={elem.id} top timeout={1250} delay={elem.id * 125}>
                  <ProjectCard project={elem} />
                </Fade>
              )
            })}
          </div>

          <Link to="/projects">
            <Fade timeout={750} cascade>
              <h4 className="Home-moreProjects">see all</h4>
            </Fade>
          </Link>
        </div>
      </div>

      <div className="Home-contact">
        <div className="Home-leftContact">

          <Fade timeout={1000} top>
            <div style={{ backgroundImage: "url('./img/ContactImg.png')" }} className="Home-contactImg"></div>
          </Fade>
          <Fade timeout={1000} delay={50} bottom>
            <h5>Let’s <strong> work </strong> together!</h5>
          </Fade>
          <Fade timeout={1500} delay={350} bottom>
            <h3>sdot.about@gmail.com</h3>
          </Fade>
        </div>
        <div className="Home-rightContact">
          <div className="Home-containerContact">
            <h3>More</h3>
            <h5>About me</h5>
            <a target='_blank' rel='noopener noreferrer' href="./file/CV.pdf" className="Home-cv">Download CV</a>
          </div>
        </div>
      </div>

      <footer className="footer">
        <h4>© 2019 Santiago Ortiz Guevara.</h4>
        <h4>All rights reserved.</h4>
      </footer>

    </div>
  )
}

export default observer(Home);
