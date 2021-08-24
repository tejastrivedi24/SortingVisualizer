import React, { Component } from "react";
import Navbar from "reactjs-navbar";
import logo from "../logo.svg";
import Loader from "react-loader-spinner";
// import {
//   faUsers,
//   faBookOpen,
//   faGlobe,
//   faChartPie,
//   faCogs /*...*/,
// } from "@fortawesome/free-solid-svg-icons";
 
import "reactjs-navbar/dist/index.css";
 
export default class Nav extends Component {
  state = {
    isLoading: false,
  };
 
  render() {
    return (
      <Navbar
        logo={logo}
        loader={<Loader type="Puff" color="#D85B5B" height={25} width={25} />}
        isLoading={this.state.isLoading}
        // helpCallback={() => {
        //   alert("I need help... and coffee...");
        // }}
        menuItems={[
          {
            title: "Generate New Array",
            // icon: faUsers,
            isAuth: true,
            onClick: () => this.props.resetArray()
          },
          {
            title: "Set size",
            // icon: faBookOpen,
            // isAuth: () => {
            //   // Claim authorization logic...
            //   return false;
            // },
          },
          {
            title: "Set Size",
            // icon: faGlobe,
            // isAuth: true,
          },
          {
            title: "Algorithms",
            // icon: faCogs,
            isAuth: true,
            subItems: [
              {
                title: "Bubble Sort",
                isAuth: true,
                onClick: () => this.props.CallBubbleSort()
              },
              {
                title: "Selection Sort",
                isAuth: true,
                
              },
              {
                title: "Insertion Sort",
                isAuth: true,
                onClick:() => this.props.CallInsertionSort()
              },

              {
                title: "Merge Sort",
                isAuth: true,
              },

              {
                title: "Quick Sort",
                isAuth: true,
              },

              {
                title: "Heap Sort",
                isAuth: true,
              },
            ],
          },
          {
            title: "Reports",
            // icon: faChartPie,
            isAuth: true,
          },
        ]}
      />
    );
  }
}