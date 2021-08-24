import React,{Component} from 'react';
import './Visual.css';
import BubbleSort,{BubbleSortDesc} from '../Algos/BubbleSort';
import MergeSort,{MergeSortDesc} from '../Algos/MergeSort';
import InsertionSort,{InsertionSortDesc} from '../Algos/InsertionSort';
import SelectionSort,{SelectionSortDesc} from '../Algos/SelectionSort';
import QuickSort,{QuickSortDesc} from '../Algos/QuickSort';
import DisplayDetails from './DisplayDetails';
import './SortInfo.css';
import Nav  from './Navbar';
import Navbar from "reactjs-navbar";
import logo from "../logo.svg";
import sv from "../sv.PNG";
import Loader from "react-loader-spinner";

const fast = 0.5 ;

export default class SortingVisualizer extends Component{
    constructor(props){
        super(props);


        this.state={
            array:[],
            highlight: false,
            desc:'',
            curr_algo:''
        };
        
    }



    componentDidMount(){
        this.resetArray();
    }

     

    

    resetArray=()=>{
        const array = [];
        for(let i = 0; i<15; i++){
            array.push(Math.floor(Math.random() * (50 - 5)) + 5);
        }
        this.setState({array:array});
        console.log(array);
    }



    CallMergeSort(){
        
    }

    CallQuickSort(){

      const descr = QuickSortDesc;

        this.setState({desc:descr})
        this.setState({curr_algo:'Quick Sort'})

        const animations = QuickSort(this.state.array)
        
        const arrayBars = document.getElementsByClassName('array-bar');

        for(let i=0;i<animations.length;i++){

          if (animations[i][0].length===2){
            const comparison = animations[i][0];


            setTimeout(()=>{

              arrayBars[comparison[0]].style.backgroundColor = 'red';
              arrayBars[comparison[1]].style.backgroundColor = 'red';

              

              setTimeout(() => {

                const temp_height=arrayBars[comparison[0]].style.height;
                arrayBars[comparison[0]].style.height=arrayBars[comparison[1]].style.height;
                arrayBars[comparison[1]].style.height=temp_height;

                        },320/fast);

                        if (comparison[0]===comparison[1]){

                          setTimeout(() => {

                            // arrayBars[comparison[1]].style.backgroundColor = 'darkorchid';
                            arrayBars[comparison[0]].style.backgroundColor = 'yellowgreen';
            
                                        },300/fast) ;
                
                        }

                        setTimeout(() => {

                          arrayBars[comparison[1]].style.backgroundColor = 'darkorchid';
                          arrayBars[comparison[0]].style.backgroundColor = 'yellowgreen';
          
                                      },300/fast) ;
                

            },(i)*1500/fast)

          }


          else
          {

            const comparison = animations[i][0];
            const swap = animations[i][1];
            
            setTimeout(()=>{
                
                arrayBars[comparison[0]].style.backgroundColor = 'red';
                arrayBars[comparison[1]].style.backgroundColor = 'red';
                arrayBars[comparison[2]].style.backgroundColor = 'pink';

                
                
                if(swap){
                setTimeout(() => {

                        const temp_height=arrayBars[comparison[0]].style.height;
                        arrayBars[comparison[0]].style.height=arrayBars[comparison[2]].style.height;
                        arrayBars[comparison[2]].style.height=temp_height;

                                },320/fast);
                        }
            setTimeout(() => {

                arrayBars[comparison[0]].style.backgroundColor = 'darkorchid';
                arrayBars[comparison[1]].style.backgroundColor = 'darkorchid';
                arrayBars[comparison[2]].style.backgroundColor = 'darkorchid';

                            },300/fast) ;
            
            
            
            },(i)*1500/fast);
            
        }
      }


    }

    CallBubbleSort(){

        const descr = BubbleSortDesc;

        this.setState({desc:descr})
        this.setState({curr_algo:'Bubble Sort'})

        const animations = BubbleSort(this.state.array)
        
        const arrayBars = document.getElementsByClassName('array-bar');

        for(let i=0;i<animations.length;i++){

            const comparison = animations[i][0];
            const swap = animations[i][1];
            const last = animations[i][2];
            
            setTimeout(()=>{
                
                arrayBars[comparison[0]].style.backgroundColor = 'red';
                arrayBars[comparison[1]].style.backgroundColor = 'red';
                
                
                if(swap){
                setTimeout(() => {

                        const temp_height=arrayBars[comparison[0]].style.height;
                        arrayBars[comparison[0]].style.height=arrayBars[comparison[1]].style.height;
                        arrayBars[comparison[1]].style.height=temp_height;

                                },320/fast);
                        }

                        if(last){

                          if(i===animations.length-1){

                            setTimeout(() => {

                              arrayBars[comparison[0]].style.backgroundColor = 'yellowgreen';
                              arrayBars[comparison[1]].style.backgroundColor = 'yellowgreen';
              
                                          },300/fast) ;

                          }
                          else{

                            setTimeout(() => {

                              arrayBars[comparison[0]].style.backgroundColor = 'darkorchid';
                              arrayBars[comparison[1]].style.backgroundColor = 'yellowgreen';
              
                                          },300/fast) ;

                          }

                          

                        }
                        else{

                          setTimeout(() => {

                            arrayBars[comparison[0]].style.backgroundColor = 'darkorchid';
                            arrayBars[comparison[1]].style.backgroundColor = 'darkorchid';
            
                                        },300/fast) ;

                        }
            
            
            
            
            },(i)*1500/fast);
            
        }


    }

    CallSelectionSort(){

      const descr = SelectionSortDesc;

        this.setState({desc:descr})
        this.setState({curr_algo:'Selection Sort'})

        const animations = SelectionSort(this.state.array)
        
        const arrayBars = document.getElementsByClassName('array-bar');

        for(let i=0;i<animations.length;i++){

            const comparison = animations[i][0];
            const swap = animations[i][1];
            
            setTimeout(()=>{
                
                arrayBars[comparison[0]].style.backgroundColor = 'red';
                arrayBars[comparison[1]].style.backgroundColor = 'red';
                
                
                if(swap){
                setTimeout(() => {

                        const temp_height=arrayBars[comparison[0]].style.height;
                        arrayBars[comparison[0]].style.height=arrayBars[comparison[1]].style.height;
                        arrayBars[comparison[1]].style.height=temp_height;
                        arrayBars[comparison[1]].style.backgroundColor = 'yellowgreen';

                                },320/fast);
                        }
            setTimeout(() => {

                arrayBars[comparison[0]].style.backgroundColor = 'darkorchid';
                arrayBars[comparison[1]].style.backgroundColor = 'darkorchid';

                            },300/fast) ;
            
            
            
            },(i)*1500/fast);
            
        }


    }

    CallInsertionSort(){

    
        const descr = InsertionSortDesc;

        this.setState({desc:descr})
        this.setState({curr_algo:'Insertion Sort'})

        
        const animations = InsertionSort(this.state.array)
        const arrayBars = document.getElementsByClassName('array-bar');

        for(let i=0;i<animations.length;i++){

            const comparison = animations[i][0];
            const swap = animations[i][1];
            
            setTimeout(()=>{
                
                arrayBars[comparison[0]].style.backgroundColor = 'red';
                arrayBars[comparison[1]].style.backgroundColor = 'red';
                
                
                if(swap){
                setTimeout(() => {

                        const temp_height=arrayBars[comparison[0]].style.height;
                        arrayBars[comparison[0]].style.height=arrayBars[comparison[1]].style.height;
                        arrayBars[comparison[1]].style.height=temp_height;

                                },320/fast);
                        }
            setTimeout(() => {

                arrayBars[comparison[0]].style.backgroundColor = 'yellowgreen';
                arrayBars[comparison[1]].style.backgroundColor = 'yellowgreen';

                            },300/fast) ;
            
            
            
            },(i)*1500/fast);
            
        }

    }

        
    render(){

        // const sty={
            
        //     width:30
            

        // };
       
        return(
            
            <div>
              
            <Navbar
        logo={sv}
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
            onClick: () => this.resetArray()
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
                onClick: () => this.CallBubbleSort()
              },
              {
                title: "Selection Sort",
                isAuth: true,
                onClick: () => this.CallSelectionSort()
                
              },
              {
                title: "Insertion Sort",
                isAuth: true,
                onClick:() => this.CallInsertionSort()
              },

              {
                title: "Merge Sort",
                isAuth: true,
                onClick:() => this.CallMergeSort()
              },

              {
                title: "Quick Sort",
                isAuth: true,
                onClick:() => this.CallQuickSort()
              },

              {
                title: "Heap Sort",
                isAuth: true,
              },
            ],
          },
          {
            title:this.state.curr_algo,
            isAuth: true,
          },
        ]}
      />
            <div className="body">
              {/* <p align="left" style={{backgroundColor:"white"}}>comparing      swapping</p> */}
            <div className="container">
            {this.state.array.map((value,ids) => (

                <div className="array-bar" key={ids} style={{height:`${value*5}px`}}>
                    
                    
                    
                </div>
            ))}
            </div>
            </div>
            <DisplayDetails {...this.state.desc} />
            {/* <div className="app-footer"></div> */}
            </div>
            
            
                
            
            
        
            
                
            
            
            
        )
    }
}