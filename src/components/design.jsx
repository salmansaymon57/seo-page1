import React from 'react';




import person1 from "./Images/person1.jpg";
import person2 from "./Images/person2.png";
import person3 from "./Images/person3.jpeg";
import person4 from "./Images/person4.jpg";

import styles from './mystyle.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMound } from '@fortawesome/free-solid-svg-icons'
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { faPaperclip } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'


import "../App.css";

import Modal from './Modal';

import  { useState } from "react";





function FrontDesign() {
    
    const [modalOpen, setModalOpen] = useState(false);
    const myComponent = {
        width: '100vw',
        height: '100vh',
        overflowX: 'hidden',
        overflowY: 'scroll'
    };
    


        return (
        <>
        <div className={styles.flexstyle}> 
        <div className={styles.background}>
            <header  className={styles.divstyle}>
            <FontAwesomeIcon icon={faMound} rotation={270} size="2xl" style={{color: "#f10909",}} />
            <span style={{color: "#666666", fontWeight: "bold"}}>Incomplete</span>  

            <span className={styles.margin}>0</span>
            </header>
            
            <div className={styles.bodystyle}>
                
               
                <div className={styles.profile}>
                <img src={person1} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Client Name</span>

                <img src={person2} style={{marginLeft: "5rem"}} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Sadik Istiak</span>
                </div>

                <div className={styles.profile}>
                    <FontAwesomeIcon icon={faLayerGroup} style={{color: "#666666",}} />

                    <span style={{marginLeft: "5px"}}>Lorem ipsum dolor sit....</span>

                    <span className={styles.margin} style={{marginLeft: "6rem"}}>
                    <FontAwesomeIcon icon={faBook} style={{color: "#666666",}} />
                    1/2
                    </span>
                </div>

                <div className={styles.profile} style={{paddingBottom:"0.5rem"}}>
                <img src={person3} className={styles.imgstyle} alt="" />

                <img src={person4} style={{marginLeft: "10px"}} className={styles.imgstyle} alt="" />

                <span style={{backgroundColor: "#d0d6e2", padding: "6px", borderRadius:"2rem", marginLeft: "10px", fontWeight:"bold"}}>12+</span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faComments} />
                15
                </span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", cursor: "pointer" }}>
                    <button className="openModalBtn" onClick={() => {setModalOpen(true);}} style={{cursor: "pointer" }}>
                    <FontAwesomeIcon icon={faPaperclip} />
                    </button>
                    {modalOpen && <Modal setOpenModal={setModalOpen} />}  

                               
               
                </span>
                <span>
                
                </span>


                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faCalendarDays} />
                30-12-2022
                </span>
                </div>
                
            </div>


            <div className={styles.bodystyle}>
                
               
                <div className={styles.profile}>
                <img src={person1} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Client Name</span>

                <img src={person2} style={{marginLeft: "5rem"}} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Sadik Istiak</span>
                </div>

                <div className={styles.profile}>
                    <FontAwesomeIcon icon={faLayerGroup} style={{color: "#666666",}} />

                    <span style={{marginLeft: "5px"}}>Lorem ipsum dolor sit....</span>

                    <span className={styles.margin} style={{marginLeft: "6rem"}}>
                    <FontAwesomeIcon icon={faBook} style={{color: "#666666",}} />
                    1/2
                    </span>
                </div>

                <div className={styles.profile} style={{paddingBottom:"0.5rem"}}>
                <img src={person3} className={styles.imgstyle} alt="" />

                <img src={person4} style={{marginLeft: "10px"}} className={styles.imgstyle} alt="" />

                <span style={{backgroundColor: "#d0d6e2", padding: "6px", borderRadius:"2rem", marginLeft: "10px", fontWeight:"bold"}}>12+</span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faComments} />
                15
                </span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", cursor: "pointer" }}>
                    <button className="openModalBtn" onClick={() => {setModalOpen(true);}} style={{cursor: "pointer" }}>
                    <FontAwesomeIcon icon={faPaperclip} />
                    </button>
                     

                               
               
                </span>
                <span>
                
                </span>


                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faCalendarDays} />
                30-12-2022
                </span>
                </div>
                
            </div>


            <div className={styles.bodystyle}>
                
               
                <div className={styles.profile}>
                <img src={person1} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Client Name</span>

                <img src={person2} style={{marginLeft: "5rem"}} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Sadik Istiak</span>
                </div>

                <div className={styles.profile}>
                    <FontAwesomeIcon icon={faLayerGroup} style={{color: "#666666",}} />

                    <span style={{marginLeft: "5px"}}>Lorem ipsum dolor sit....</span>

                    <span className={styles.margin} style={{marginLeft: "6rem"}}>
                    <FontAwesomeIcon icon={faBook} style={{color: "#666666",}} />
                    1/2
                    </span>
                </div>

                <div className={styles.profile} style={{paddingBottom:"0.5rem"}}>
                <img src={person3} className={styles.imgstyle} alt="" />

                <img src={person4} style={{marginLeft: "10px"}} className={styles.imgstyle} alt="" />

                <span style={{backgroundColor: "#d0d6e2", padding: "6px", borderRadius:"2rem", marginLeft: "10px", fontWeight:"bold"}}>12+</span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faComments} />
                15
                </span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", cursor: "pointer" }}>
                    <button className="openModalBtn" onClick={() => {setModalOpen(true);}} style={{cursor: "pointer" }}>
                    <FontAwesomeIcon icon={faPaperclip} />
                    </button>
                     

                               
               
                </span>
                <span>
                
                </span>


                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faCalendarDays} />
                30-12-2022
                </span>
                </div>
                
            </div>


            <div className={styles.bodystyle}>
                
               
                <div className={styles.profile}>
                <img src={person1} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Client Name</span>

                <img src={person2} style={{marginLeft: "5rem"}} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Sadik Istiak</span>
                </div>

                <div className={styles.profile}>
                    <FontAwesomeIcon icon={faLayerGroup} style={{color: "#666666",}} />

                    <span style={{marginLeft: "5px"}}>Lorem ipsum dolor sit....</span>

                    <span className={styles.margin} style={{marginLeft: "6rem"}}>
                    <FontAwesomeIcon icon={faBook} style={{color: "#666666",}} />
                    1/2
                    </span>
                </div>

                <div className={styles.profile} style={{paddingBottom:"0.5rem"}}>
                <img src={person3} className={styles.imgstyle} alt="" />

                <img src={person4} style={{marginLeft: "10px"}} className={styles.imgstyle} alt="" />

                <span style={{backgroundColor: "#d0d6e2", padding: "6px", borderRadius:"2rem", marginLeft: "10px", fontWeight:"bold"}}>12+</span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faComments} />
                15
                </span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", cursor: "pointer" }}>
                    <button className="openModalBtn" onClick={() => {setModalOpen(true);}} style={{cursor: "pointer" }}>
                    <FontAwesomeIcon icon={faPaperclip} />
                    </button>
                     

                               
               
                </span>
                <span>
                
                </span>


                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faCalendarDays} />
                30-12-2022
                </span>
                </div>
                
            </div>


            <div className={styles.bodystyle}>
                
               
                <div className={styles.profile}>
                <img src={person1} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Client Name</span>

                <img src={person2} style={{marginLeft: "5rem"}} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Sadik Istiak</span>
                </div>

                <div className={styles.profile}>
                    <FontAwesomeIcon icon={faLayerGroup} style={{color: "#666666",}} />

                    <span style={{marginLeft: "5px"}}>Lorem ipsum dolor sit....</span>

                    <span className={styles.margin} style={{marginLeft: "6rem"}}>
                    <FontAwesomeIcon icon={faBook} style={{color: "#666666",}} />
                    1/2
                    </span>
                </div>

                <div className={styles.profile} style={{paddingBottom:"0.5rem"}}>
                <img src={person3} className={styles.imgstyle} alt="" />

                <img src={person4} style={{marginLeft: "10px"}} className={styles.imgstyle} alt="" />

                <span style={{backgroundColor: "#d0d6e2", padding: "6px", borderRadius:"2rem", marginLeft: "10px", fontWeight:"bold"}}>12+</span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faComments} />
                15
                </span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", cursor: "pointer" }}>
                    <button className="openModalBtn" onClick={() => {setModalOpen(true);}} style={{cursor: "pointer" }}>
                    <FontAwesomeIcon icon={faPaperclip} />
                    </button>
                     

                               
               
                </span>
                <span>
                
                </span>


                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faCalendarDays} />
                30-12-2022
                </span>
                </div>
                
            </div>


            <div className={styles.bodystyle}>
                
               
                <div className={styles.profile}>
                <img src={person1} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Client Name</span>

                <img src={person2} style={{marginLeft: "5rem"}} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Sadik Istiak</span>
                </div>

                <div className={styles.profile}>
                    <FontAwesomeIcon icon={faLayerGroup} style={{color: "#666666",}} />

                    <span style={{marginLeft: "5px"}}>Lorem ipsum dolor sit....</span>

                    <span className={styles.margin} style={{marginLeft: "6rem"}}>
                    <FontAwesomeIcon icon={faBook} style={{color: "#666666",}} />
                    1/2
                    </span>
                </div>

                <div className={styles.profile} style={{paddingBottom:"0.5rem"}}>
                <img src={person3} className={styles.imgstyle} alt="" />

                <img src={person4} style={{marginLeft: "10px"}} className={styles.imgstyle} alt="" />

                <span style={{backgroundColor: "#d0d6e2", padding: "6px", borderRadius:"2rem", marginLeft: "10px", fontWeight:"bold"}}>12+</span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faComments} />
                15
                </span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", cursor: "pointer" }}>
                    <button className="openModalBtn" onClick={() => {setModalOpen(true);}} style={{cursor: "pointer" }}>
                    <FontAwesomeIcon icon={faPaperclip} />
                    </button>
                     

                               
               
                </span>
                <span>
                
                </span>


                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faCalendarDays} />
                30-12-2022
                </span>
                </div>
                
            </div>

            
                
            </div>


            <div className={styles.background}>
            <header  className={styles.divstyle}>
            <FontAwesomeIcon icon={faMound} rotation={270} size="2xl" style={{color: "#18ADEC",}} />

            <span style={{color: "#666666", fontWeight: "bold"}}>ToDo</span>  

            <span className={styles.margin}>0</span>
            </header>
            
            <div className={styles.bodystyle}>
                
               
                <div className={styles.profile}>
                <img src={person1} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Client Name</span>

                <img src={person2} style={{marginLeft: "5rem"}} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Sadik Istiak</span>
                </div>

                <div className={styles.profile}>
                    <FontAwesomeIcon icon={faLayerGroup} style={{color: "#666666",}} />

                    <span style={{marginLeft: "5px"}}>Lorem ipsum dolor sit....</span>

                    <span className={styles.margin} style={{marginLeft: "6rem"}}>
                    <FontAwesomeIcon icon={faBook} style={{color: "#666666",}} />
                    1/2
                    </span>
                </div>

                <div className={styles.profile} style={{paddingBottom:"0.5rem"}}>
                <img src={person3} className={styles.imgstyle} alt="" />

                <img src={person4} style={{marginLeft: "10px"}} className={styles.imgstyle} alt="" />

                <span style={{backgroundColor: "#d0d6e2", padding: "6px", borderRadius:"2rem", marginLeft: "10px", fontWeight:"bold"}}>12+</span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faComments} />
                15
                </span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", cursor: "pointer" }}>
                    <button className="openModalBtn" onClick={() => {setModalOpen(true);}} style={{cursor: "pointer" }}>
                    <FontAwesomeIcon icon={faPaperclip} />
                    </button>
                    

                               
               
                </span>
                <span>
                
                </span>


                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faCalendarDays} />
                30-12-2022
                </span>
                </div>
                
            </div>


            <div className={styles.bodystyle}>
                
               
                <div className={styles.profile}>
                <img src={person1} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Client Name</span>

                <img src={person2} style={{marginLeft: "5rem"}} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Sadik Istiak</span>
                </div>

                <div className={styles.profile}>
                    <FontAwesomeIcon icon={faLayerGroup} style={{color: "#666666",}} />

                    <span style={{marginLeft: "5px"}}>Lorem ipsum dolor sit....</span>

                    <span className={styles.margin} style={{marginLeft: "6rem"}}>
                    <FontAwesomeIcon icon={faBook} style={{color: "#666666",}} />
                    1/2
                    </span>
                </div>

                <div className={styles.profile} style={{paddingBottom:"0.5rem"}}>
                <img src={person3} className={styles.imgstyle} alt="" />

                <img src={person4} style={{marginLeft: "10px"}} className={styles.imgstyle} alt="" />

                <span style={{backgroundColor: "#d0d6e2", padding: "6px", borderRadius:"2rem", marginLeft: "10px", fontWeight:"bold"}}>12+</span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faComments} />
                15
                </span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", cursor: "pointer" }}>
                    <button className="openModalBtn" onClick={() => {setModalOpen(true);}} style={{cursor: "pointer" }}>
                    <FontAwesomeIcon icon={faPaperclip} />
                    </button>
                     

                               
               
                </span>
                <span>
                
                </span>


                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faCalendarDays} />
                30-12-2022
                </span>
                </div>
                
            </div>


            <div className={styles.bodystyle}>
                
               
                <div className={styles.profile}>
                <img src={person1} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Client Name</span>

                <img src={person2} style={{marginLeft: "5rem"}} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Sadik Istiak</span>
                </div>

                <div className={styles.profile}>
                    <FontAwesomeIcon icon={faLayerGroup} style={{color: "#666666",}} />

                    <span style={{marginLeft: "5px"}}>Lorem ipsum dolor sit....</span>

                    <span className={styles.margin} style={{marginLeft: "6rem"}}>
                    <FontAwesomeIcon icon={faBook} style={{color: "#666666",}} />
                    1/2
                    </span>
                </div>

                <div className={styles.profile} style={{paddingBottom:"0.5rem"}}>
                <img src={person3} className={styles.imgstyle} alt="" />

                <img src={person4} style={{marginLeft: "10px"}} className={styles.imgstyle} alt="" />

                <span style={{backgroundColor: "#d0d6e2", padding: "6px", borderRadius:"2rem", marginLeft: "10px", fontWeight:"bold"}}>12+</span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faComments} />
                15
                </span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", cursor: "pointer" }}>
                    <button className="openModalBtn" onClick={() => {setModalOpen(true);}} style={{cursor: "pointer" }}>
                    <FontAwesomeIcon icon={faPaperclip} />
                    </button>
                     

                               
               
                </span>
                <span>
                
                </span>


                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faCalendarDays} />
                30-12-2022
                </span>
                </div>
                
            </div>


            <div className={styles.bodystyle}>
                
               
                <div className={styles.profile}>
                <img src={person1} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Client Name</span>

                <img src={person2} style={{marginLeft: "5rem"}} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Sadik Istiak</span>
                </div>

                <div className={styles.profile}>
                    <FontAwesomeIcon icon={faLayerGroup} style={{color: "#666666",}} />

                    <span style={{marginLeft: "5px"}}>Lorem ipsum dolor sit....</span>

                    <span className={styles.margin} style={{marginLeft: "6rem"}}>
                    <FontAwesomeIcon icon={faBook} style={{color: "#666666",}} />
                    1/2
                    </span>
                </div>

                <div className={styles.profile} style={{paddingBottom:"0.5rem"}}>
                <img src={person3} className={styles.imgstyle} alt="" />

                <img src={person4} style={{marginLeft: "10px"}} className={styles.imgstyle} alt="" />

                <span style={{backgroundColor: "#d0d6e2", padding: "6px", borderRadius:"2rem", marginLeft: "10px", fontWeight:"bold"}}>12+</span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faComments} />
                15
                </span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", cursor: "pointer" }}>
                    <button className="openModalBtn" onClick={() => {setModalOpen(true);}} style={{cursor: "pointer" }}>
                    <FontAwesomeIcon icon={faPaperclip} />
                    </button>
                     

                               
               
                </span>
                <span>
                
                </span>


                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faCalendarDays} />
                30-12-2022
                </span>
                </div>
                
            </div>


            <div className={styles.bodystyle}>
                
               
                <div className={styles.profile}>
                <img src={person1} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Client Name</span>

                <img src={person2} style={{marginLeft: "5rem"}} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Sadik Istiak</span>
                </div>

                <div className={styles.profile}>
                    <FontAwesomeIcon icon={faLayerGroup} style={{color: "#666666",}} />

                    <span style={{marginLeft: "5px"}}>Lorem ipsum dolor sit....</span>

                    <span className={styles.margin} style={{marginLeft: "6rem"}}>
                    <FontAwesomeIcon icon={faBook} style={{color: "#666666",}} />
                    1/2
                    </span>
                </div>

                <div className={styles.profile} style={{paddingBottom:"0.5rem"}}>
                <img src={person3} className={styles.imgstyle} alt="" />

                <img src={person4} style={{marginLeft: "10px"}} className={styles.imgstyle} alt="" />

                <span style={{backgroundColor: "#d0d6e2", padding: "6px", borderRadius:"2rem", marginLeft: "10px", fontWeight:"bold"}}>12+</span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faComments} />
                15
                </span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", cursor: "pointer" }}>
                    <button className="openModalBtn" onClick={() => {setModalOpen(true);}} style={{cursor: "pointer" }}>
                    <FontAwesomeIcon icon={faPaperclip} />
                    </button>
                     

                               
               
                </span>
                <span>
                
                </span>


                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faCalendarDays} />
                30-12-2022
                </span>
                </div>
                
            </div>


            <div className={styles.bodystyle}>
                
               
                <div className={styles.profile}>
                <img src={person1} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Client Name</span>

                <img src={person2} style={{marginLeft: "5rem"}} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Sadik Istiak</span>
                </div>

                <div className={styles.profile}>
                    <FontAwesomeIcon icon={faLayerGroup} style={{color: "#666666",}} />

                    <span style={{marginLeft: "5px"}}>Lorem ipsum dolor sit....</span>

                    <span className={styles.margin} style={{marginLeft: "6rem"}}>
                    <FontAwesomeIcon icon={faBook} style={{color: "#666666",}} />
                    1/2
                    </span>
                </div>

                <div className={styles.profile} style={{paddingBottom:"0.5rem"}}>
                <img src={person3} className={styles.imgstyle} alt="" />

                <img src={person4} style={{marginLeft: "10px"}} className={styles.imgstyle} alt="" />

                <span style={{backgroundColor: "#d0d6e2", padding: "6px", borderRadius:"2rem", marginLeft: "10px", fontWeight:"bold"}}>12+</span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faComments} />
                15
                </span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", cursor: "pointer" }}>
                    <button className="openModalBtn" onClick={() => {setModalOpen(true);}} style={{cursor: "pointer" }}>
                    <FontAwesomeIcon icon={faPaperclip} />
                    </button>
                     

                               
               
                </span>
                <span>
                
                </span>


                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faCalendarDays} />
                30-12-2022
                </span>
                </div>
                
            </div>

            
                
            </div>


            <div className={styles.background}>
            <header  className={styles.divstyle}>
            <FontAwesomeIcon icon={faMound} rotation={270} size="2xl" style={{color: "#E0ED0D",}} />

            <span style={{color: "#666666", fontWeight: "bold"}}>Doing</span>  

            <span className={styles.margin}>0</span>
            </header>
            
            <div className={styles.bodystyle}>
                
               
                <div className={styles.profile}>
                <img src={person1} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Client Name</span>

                <img src={person2} style={{marginLeft: "5rem"}} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Sadik Istiak</span>
                </div>

                <div className={styles.profile}>
                    <FontAwesomeIcon icon={faLayerGroup} style={{color: "#666666",}} />

                    <span style={{marginLeft: "5px"}}>Lorem ipsum dolor sit....</span>

                    <span className={styles.margin} style={{marginLeft: "6rem"}}>
                    <FontAwesomeIcon icon={faBook} style={{color: "#666666",}} />
                    1/2
                    </span>
                </div>

                <div className={styles.profile} style={{paddingBottom:"0.5rem"}}>
                <img src={person3} className={styles.imgstyle} alt="" />

                <img src={person4} style={{marginLeft: "10px"}} className={styles.imgstyle} alt="" />

                <span style={{backgroundColor: "#d0d6e2", padding: "6px", borderRadius:"2rem", marginLeft: "10px", fontWeight:"bold"}}>12+</span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faComments} />
                15
                </span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", cursor: "pointer" }}>
                    <button className="openModalBtn" onClick={() => {setModalOpen(true);}} style={{cursor: "pointer" }}>
                    <FontAwesomeIcon icon={faPaperclip} />
                    </button>
                    

                               
               
                </span>
                <span>
                
                </span>


                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faCalendarDays} />
                30-12-2022
                </span>
                </div>
                
            </div>


            <div className={styles.bodystyle}>
                
               
                <div className={styles.profile}>
                <img src={person1} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Client Name</span>

                <img src={person2} style={{marginLeft: "5rem"}} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Sadik Istiak</span>
                </div>

                <div className={styles.profile}>
                    <FontAwesomeIcon icon={faLayerGroup} style={{color: "#666666",}} />

                    <span style={{marginLeft: "5px"}}>Lorem ipsum dolor sit....</span>

                    <span className={styles.margin} style={{marginLeft: "6rem"}}>
                    <FontAwesomeIcon icon={faBook} style={{color: "#666666",}} />
                    1/2
                    </span>
                </div>

                <div className={styles.profile} style={{paddingBottom:"0.5rem"}}>
                <img src={person3} className={styles.imgstyle} alt="" />

                <img src={person4} style={{marginLeft: "10px"}} className={styles.imgstyle} alt="" />

                <span style={{backgroundColor: "#d0d6e2", padding: "6px", borderRadius:"2rem", marginLeft: "10px", fontWeight:"bold"}}>12+</span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faComments} />
                15
                </span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", cursor: "pointer" }}>
                    <button className="openModalBtn" onClick={() => {setModalOpen(true);}} style={{cursor: "pointer" }}>
                    <FontAwesomeIcon icon={faPaperclip} />
                    </button>
                     

                               
               
                </span>
                <span>
                
                </span>


                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faCalendarDays} />
                30-12-2022
                </span>
                </div>
                
            </div>


            <div className={styles.bodystyle}>
                
               
                <div className={styles.profile}>
                <img src={person1} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Client Name</span>

                <img src={person2} style={{marginLeft: "5rem"}} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Sadik Istiak</span>
                </div>

                <div className={styles.profile}>
                    <FontAwesomeIcon icon={faLayerGroup} style={{color: "#666666",}} />

                    <span style={{marginLeft: "5px"}}>Lorem ipsum dolor sit....</span>

                    <span className={styles.margin} style={{marginLeft: "6rem"}}>
                    <FontAwesomeIcon icon={faBook} style={{color: "#666666",}} />
                    1/2
                    </span>
                </div>

                <div className={styles.profile} style={{paddingBottom:"0.5rem"}}>
                <img src={person3} className={styles.imgstyle} alt="" />

                <img src={person4} style={{marginLeft: "10px"}} className={styles.imgstyle} alt="" />

                <span style={{backgroundColor: "#d0d6e2", padding: "6px", borderRadius:"2rem", marginLeft: "10px", fontWeight:"bold"}}>12+</span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faComments} />
                15
                </span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", cursor: "pointer" }}>
                    <button className="openModalBtn" onClick={() => {setModalOpen(true);}} style={{cursor: "pointer" }}>
                    <FontAwesomeIcon icon={faPaperclip} />
                    </button>
                     

                               
               
                </span>
                <span>
                
                </span>


                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faCalendarDays} />
                30-12-2022
                </span>
                </div>
                
            </div>


            <div className={styles.bodystyle}>
                
               
                <div className={styles.profile}>
                <img src={person1} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Client Name</span>

                <img src={person2} style={{marginLeft: "5rem"}} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Sadik Istiak</span>
                </div>

                <div className={styles.profile}>
                    <FontAwesomeIcon icon={faLayerGroup} style={{color: "#666666",}} />

                    <span style={{marginLeft: "5px"}}>Lorem ipsum dolor sit....</span>

                    <span className={styles.margin} style={{marginLeft: "6rem"}}>
                    <FontAwesomeIcon icon={faBook} style={{color: "#666666",}} />
                    1/2
                    </span>
                </div>

                <div className={styles.profile} style={{paddingBottom:"0.5rem"}}>
                <img src={person3} className={styles.imgstyle} alt="" />

                <img src={person4} style={{marginLeft: "10px"}} className={styles.imgstyle} alt="" />

                <span style={{backgroundColor: "#d0d6e2", padding: "6px", borderRadius:"2rem", marginLeft: "10px", fontWeight:"bold"}}>12+</span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faComments} />
                15
                </span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", cursor: "pointer" }}>
                    <button className="openModalBtn" onClick={() => {setModalOpen(true);}} style={{cursor: "pointer" }}>
                    <FontAwesomeIcon icon={faPaperclip} />
                    </button>
                     

                               
               
                </span>
                <span>
                
                </span>


                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faCalendarDays} />
                30-12-2022
                </span>
                </div>
                
            </div>


            <div className={styles.bodystyle}>
                
               
                <div className={styles.profile}>
                <img src={person1} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Client Name</span>

                <img src={person2} style={{marginLeft: "5rem"}} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Sadik Istiak</span>
                </div>

                <div className={styles.profile}>
                    <FontAwesomeIcon icon={faLayerGroup} style={{color: "#666666",}} />

                    <span style={{marginLeft: "5px"}}>Lorem ipsum dolor sit....</span>

                    <span className={styles.margin} style={{marginLeft: "6rem"}}>
                    <FontAwesomeIcon icon={faBook} style={{color: "#666666",}} />
                    1/2
                    </span>
                </div>

                <div className={styles.profile} style={{paddingBottom:"0.5rem"}}>
                <img src={person3} className={styles.imgstyle} alt="" />

                <img src={person4} style={{marginLeft: "10px"}} className={styles.imgstyle} alt="" />

                <span style={{backgroundColor: "#d0d6e2", padding: "6px", borderRadius:"2rem", marginLeft: "10px", fontWeight:"bold"}}>12+</span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faComments} />
                15
                </span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", cursor: "pointer" }}>
                    <button className="openModalBtn" onClick={() => {setModalOpen(true);}} style={{cursor: "pointer" }}>
                    <FontAwesomeIcon icon={faPaperclip} />
                    </button>
                     

                               
               
                </span>
                <span>
                
                </span>


                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faCalendarDays} />
                30-12-2022
                </span>
                </div>
                
            </div>


            <div className={styles.bodystyle}>
                
               
                <div className={styles.profile}>
                <img src={person1} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Client Name</span>

                <img src={person2} style={{marginLeft: "5rem"}} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Sadik Istiak</span>
                </div>

                <div className={styles.profile}>
                    <FontAwesomeIcon icon={faLayerGroup} style={{color: "#666666",}} />

                    <span style={{marginLeft: "5px"}}>Lorem ipsum dolor sit....</span>

                    <span className={styles.margin} style={{marginLeft: "6rem"}}>
                    <FontAwesomeIcon icon={faBook} style={{color: "#666666",}} />
                    1/2
                    </span>
                </div>

                <div className={styles.profile} style={{paddingBottom:"0.5rem"}}>
                <img src={person3} className={styles.imgstyle} alt="" />

                <img src={person4} style={{marginLeft: "10px"}} className={styles.imgstyle} alt="" />

                <span style={{backgroundColor: "#d0d6e2", padding: "6px", borderRadius:"2rem", marginLeft: "10px", fontWeight:"bold"}}>12+</span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faComments} />
                15
                </span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", cursor: "pointer" }}>
                    <button className="openModalBtn" onClick={() => {setModalOpen(true);}} style={{cursor: "pointer" }}>
                    <FontAwesomeIcon icon={faPaperclip} />
                    </button>
                     

                               
               
                </span>
                <span>
                
                </span>


                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faCalendarDays} />
                30-12-2022
                </span>
                </div>
                
            </div>

            
                
            </div>


            <div className={styles.background}>
            <header  className={styles.divstyle}>
            <FontAwesomeIcon icon={faMound} rotation={270} size="2xl" style={{color: "#f10909",}} />

            <span style={{color: "#666666", fontWeight: "bold"}}>UnderReview</span>  

            <span className={styles.margin}>0</span>
            </header>
            
            <div className={styles.bodystyle}>
                
               
                <div className={styles.profile}>
                <img src={person1} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Client Name</span>

                <img src={person2} style={{marginLeft: "5rem"}} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Sadik Istiak</span>
                </div>

                <div className={styles.profile}>
                    <FontAwesomeIcon icon={faLayerGroup} style={{color: "#666666",}} />

                    <span style={{marginLeft: "5px"}}>Lorem ipsum dolor sit....</span>

                    <span className={styles.margin} style={{marginLeft: "6rem"}}>
                    <FontAwesomeIcon icon={faBook} style={{color: "#666666",}} />
                    1/2
                    </span>
                </div>

                <div className={styles.profile} style={{paddingBottom:"0.5rem"}}>
                <img src={person3} className={styles.imgstyle} alt="" />

                <img src={person4} style={{marginLeft: "10px"}} className={styles.imgstyle} alt="" />

                <span style={{backgroundColor: "#d0d6e2", padding: "6px", borderRadius:"2rem", marginLeft: "10px", fontWeight:"bold"}}>12+</span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faComments} />
                15
                </span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", cursor: "pointer" }}>
                    <button className="openModalBtn" onClick={() => {setModalOpen(true);}} style={{cursor: "pointer" }}>
                    <FontAwesomeIcon icon={faPaperclip} />
                    </button>
                    

                               
               
                </span>
                <span>
                
                </span>


                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faCalendarDays} />
                30-12-2022
                </span>
                </div>
                
            </div>


            <div className={styles.bodystyle}>
                
               
                <div className={styles.profile}>
                <img src={person1} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Client Name</span>

                <img src={person2} style={{marginLeft: "5rem"}} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Sadik Istiak</span>
                </div>

                <div className={styles.profile}>
                    <FontAwesomeIcon icon={faLayerGroup} style={{color: "#666666",}} />

                    <span style={{marginLeft: "5px"}}>Lorem ipsum dolor sit....</span>

                    <span className={styles.margin} style={{marginLeft: "6rem"}}>
                    <FontAwesomeIcon icon={faBook} style={{color: "#666666",}} />
                    1/2
                    </span>
                </div>

                <div className={styles.profile} style={{paddingBottom:"0.5rem"}}>
                <img src={person3} className={styles.imgstyle} alt="" />

                <img src={person4} style={{marginLeft: "10px"}} className={styles.imgstyle} alt="" />

                <span style={{backgroundColor: "#d0d6e2", padding: "6px", borderRadius:"2rem", marginLeft: "10px", fontWeight:"bold"}}>12+</span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faComments} />
                15
                </span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", cursor: "pointer" }}>
                    <button className="openModalBtn" onClick={() => {setModalOpen(true);}} style={{cursor: "pointer" }}>
                    <FontAwesomeIcon icon={faPaperclip} />
                    </button>
                     

                               
               
                </span>
                <span>
                
                </span>


                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faCalendarDays} />
                30-12-2022
                </span>
                </div>
                
            </div>


            <div className={styles.bodystyle}>
                
               
                <div className={styles.profile}>
                <img src={person1} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Client Name</span>

                <img src={person2} style={{marginLeft: "5rem"}} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Sadik Istiak</span>
                </div>

                <div className={styles.profile}>
                    <FontAwesomeIcon icon={faLayerGroup} style={{color: "#666666",}} />

                    <span style={{marginLeft: "5px"}}>Lorem ipsum dolor sit....</span>

                    <span className={styles.margin} style={{marginLeft: "6rem"}}>
                    <FontAwesomeIcon icon={faBook} style={{color: "#666666",}} />
                    1/2
                    </span>
                </div>

                <div className={styles.profile} style={{paddingBottom:"0.5rem"}}>
                <img src={person3} className={styles.imgstyle} alt="" />

                <img src={person4} style={{marginLeft: "10px"}} className={styles.imgstyle} alt="" />

                <span style={{backgroundColor: "#d0d6e2", padding: "6px", borderRadius:"2rem", marginLeft: "10px", fontWeight:"bold"}}>12+</span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faComments} />
                15
                </span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", cursor: "pointer" }}>
                    <button className="openModalBtn" onClick={() => {setModalOpen(true);}} style={{cursor: "pointer" }}>
                    <FontAwesomeIcon icon={faPaperclip} />
                    </button>
                     

                               
               
                </span>
                <span>
                
                </span>


                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faCalendarDays} />
                30-12-2022
                </span>
                </div>
                
            </div>


            <div className={styles.bodystyle}>
                
               
                <div className={styles.profile}>
                <img src={person1} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Client Name</span>

                <img src={person2} style={{marginLeft: "5rem"}} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Sadik Istiak</span>
                </div>

                <div className={styles.profile}>
                    <FontAwesomeIcon icon={faLayerGroup} style={{color: "#666666",}} />

                    <span style={{marginLeft: "5px"}}>Lorem ipsum dolor sit....</span>

                    <span className={styles.margin} style={{marginLeft: "6rem"}}>
                    <FontAwesomeIcon icon={faBook} style={{color: "#666666",}} />
                    1/2
                    </span>
                </div>

                <div className={styles.profile} style={{paddingBottom:"0.5rem"}}>
                <img src={person3} className={styles.imgstyle} alt="" />

                <img src={person4} style={{marginLeft: "10px"}} className={styles.imgstyle} alt="" />

                <span style={{backgroundColor: "#d0d6e2", padding: "6px", borderRadius:"2rem", marginLeft: "10px", fontWeight:"bold"}}>12+</span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faComments} />
                15
                </span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", cursor: "pointer" }}>
                    <button className="openModalBtn" onClick={() => {setModalOpen(true);}} style={{cursor: "pointer" }}>
                    <FontAwesomeIcon icon={faPaperclip} />
                    </button>
                     

                               
               
                </span>
                <span>
                
                </span>


                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faCalendarDays} />
                30-12-2022
                </span>
                </div>
                
            </div>


            <div className={styles.bodystyle}>
                
               
                <div className={styles.profile}>
                <img src={person1} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Client Name</span>

                <img src={person2} style={{marginLeft: "5rem"}} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Sadik Istiak</span>
                </div>

                <div className={styles.profile}>
                    <FontAwesomeIcon icon={faLayerGroup} style={{color: "#666666",}} />

                    <span style={{marginLeft: "5px"}}>Lorem ipsum dolor sit....</span>

                    <span className={styles.margin} style={{marginLeft: "6rem"}}>
                    <FontAwesomeIcon icon={faBook} style={{color: "#666666",}} />
                    1/2
                    </span>
                </div>

                <div className={styles.profile} style={{paddingBottom:"0.5rem"}}>
                <img src={person3} className={styles.imgstyle} alt="" />

                <img src={person4} style={{marginLeft: "10px"}} className={styles.imgstyle} alt="" />

                <span style={{backgroundColor: "#d0d6e2", padding: "6px", borderRadius:"2rem", marginLeft: "10px", fontWeight:"bold"}}>12+</span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faComments} />
                15
                </span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", cursor: "pointer" }}>
                    <button className="openModalBtn" onClick={() => {setModalOpen(true);}} style={{cursor: "pointer" }}>
                    <FontAwesomeIcon icon={faPaperclip} />
                    </button>
                     

                               
               
                </span>
                <span>
                
                </span>


                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faCalendarDays} />
                30-12-2022
                </span>
                </div>
                
            </div>


            <div className={styles.bodystyle}>
                
               
                <div className={styles.profile}>
                <img src={person1} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Client Name</span>

                <img src={person2} style={{marginLeft: "5rem"}} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Sadik Istiak</span>
                </div>

                <div className={styles.profile}>
                    <FontAwesomeIcon icon={faLayerGroup} style={{color: "#666666",}} />

                    <span style={{marginLeft: "5px"}}>Lorem ipsum dolor sit....</span>

                    <span className={styles.margin} style={{marginLeft: "6rem"}}>
                    <FontAwesomeIcon icon={faBook} style={{color: "#666666",}} />
                    1/2
                    </span>
                </div>

                <div className={styles.profile} style={{paddingBottom:"0.5rem"}}>
                <img src={person3} className={styles.imgstyle} alt="" />

                <img src={person4} style={{marginLeft: "10px"}} className={styles.imgstyle} alt="" />

                <span style={{backgroundColor: "#d0d6e2", padding: "6px", borderRadius:"2rem", marginLeft: "10px", fontWeight:"bold"}}>12+</span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faComments} />
                15
                </span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", cursor: "pointer" }}>
                    <button className="openModalBtn" onClick={() => {setModalOpen(true);}} style={{cursor: "pointer" }}>
                    <FontAwesomeIcon icon={faPaperclip} />
                    </button>
                     

                               
               
                </span>
                <span>
                
                </span>


                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faCalendarDays} />
                30-12-2022
                </span>
                </div>
                
            </div>

            
                
            </div>


            <div className={styles.background}>
            <header  className={styles.divstyle}>
            <FontAwesomeIcon icon={faMound} rotation={270} size="2xl" style={{color: "#f10909",}} />

            <span style={{color: "#666666", fontWeight: "bold"}}>Completed</span>  

            <span className={styles.margin}>0</span>
            </header>
            
            <div className={styles.bodystyle}>
                
               
                <div className={styles.profile}>
                <img src={person1} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Client Name</span>

                <img src={person2} style={{marginLeft: "5rem"}} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Sadik Istiak</span>
                </div>

                <div className={styles.profile}>
                    <FontAwesomeIcon icon={faLayerGroup} style={{color: "#666666",}} />

                    <span style={{marginLeft: "5px"}}>Lorem ipsum dolor sit....</span>

                    <span className={styles.margin} style={{marginLeft: "6rem"}}>
                    <FontAwesomeIcon icon={faBook} style={{color: "#666666",}} />
                    1/2
                    </span>
                </div>

                <div className={styles.profile} style={{paddingBottom:"0.5rem"}}>
                <img src={person3} className={styles.imgstyle} alt="" />

                <img src={person4} style={{marginLeft: "10px"}} className={styles.imgstyle} alt="" />

                <span style={{backgroundColor: "#d0d6e2", padding: "6px", borderRadius:"2rem", marginLeft: "10px", fontWeight:"bold"}}>12+</span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faComments} />
                15
                </span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", cursor: "pointer" }}>
                    <button className="openModalBtn" onClick={() => {setModalOpen(true);}} style={{cursor: "pointer" }}>
                    <FontAwesomeIcon icon={faPaperclip} />
                    </button>
                    

                               
               
                </span>
                <span>
                
                </span>


                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faCalendarDays} />
                30-12-2022
                </span>
                </div>
                
            </div>


            <div className={styles.bodystyle}>
                
               
                <div className={styles.profile}>
                <img src={person1} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Client Name</span>

                <img src={person2} style={{marginLeft: "5rem"}} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Sadik Istiak</span>
                </div>

                <div className={styles.profile}>
                    <FontAwesomeIcon icon={faLayerGroup} style={{color: "#666666",}} />

                    <span style={{marginLeft: "5px"}}>Lorem ipsum dolor sit....</span>

                    <span className={styles.margin} style={{marginLeft: "6rem"}}>
                    <FontAwesomeIcon icon={faBook} style={{color: "#666666",}} />
                    1/2
                    </span>
                </div>

                <div className={styles.profile} style={{paddingBottom:"0.5rem"}}>
                <img src={person3} className={styles.imgstyle} alt="" />

                <img src={person4} style={{marginLeft: "10px"}} className={styles.imgstyle} alt="" />

                <span style={{backgroundColor: "#d0d6e2", padding: "6px", borderRadius:"2rem", marginLeft: "10px", fontWeight:"bold"}}>12+</span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faComments} />
                15
                </span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", cursor: "pointer" }}>
                    <button className="openModalBtn" onClick={() => {setModalOpen(true);}} style={{cursor: "pointer" }}>
                    <FontAwesomeIcon icon={faPaperclip} />
                    </button>
                     

                               
               
                </span>
                <span>
                
                </span>


                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faCalendarDays} />
                30-12-2022
                </span>
                </div>
                
            </div>


            <div className={styles.bodystyle}>
                
               
                <div className={styles.profile}>
                <img src={person1} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Client Name</span>

                <img src={person2} style={{marginLeft: "5rem"}} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Sadik Istiak</span>
                </div>

                <div className={styles.profile}>
                    <FontAwesomeIcon icon={faLayerGroup} style={{color: "#666666",}} />

                    <span style={{marginLeft: "5px"}}>Lorem ipsum dolor sit....</span>

                    <span className={styles.margin} style={{marginLeft: "6rem"}}>
                    <FontAwesomeIcon icon={faBook} style={{color: "#666666",}} />
                    1/2
                    </span>
                </div>

                <div className={styles.profile} style={{paddingBottom:"0.5rem"}}>
                <img src={person3} className={styles.imgstyle} alt="" />

                <img src={person4} style={{marginLeft: "10px"}} className={styles.imgstyle} alt="" />

                <span style={{backgroundColor: "#d0d6e2", padding: "6px", borderRadius:"2rem", marginLeft: "10px", fontWeight:"bold"}}>12+</span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faComments} />
                15
                </span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", cursor: "pointer" }}>
                    <button className="openModalBtn" onClick={() => {setModalOpen(true);}} style={{cursor: "pointer" }}>
                    <FontAwesomeIcon icon={faPaperclip} />
                    </button>
                     

                               
               
                </span>
                <span>
                
                </span>


                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faCalendarDays} />
                30-12-2022
                </span>
                </div>
                
            </div>


            <div className={styles.bodystyle}>
                
               
                <div className={styles.profile}>
                <img src={person1} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Client Name</span>

                <img src={person2} style={{marginLeft: "5rem"}} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Sadik Istiak</span>
                </div>

                <div className={styles.profile}>
                    <FontAwesomeIcon icon={faLayerGroup} style={{color: "#666666",}} />

                    <span style={{marginLeft: "5px"}}>Lorem ipsum dolor sit....</span>

                    <span className={styles.margin} style={{marginLeft: "6rem"}}>
                    <FontAwesomeIcon icon={faBook} style={{color: "#666666",}} />
                    1/2
                    </span>
                </div>

                <div className={styles.profile} style={{paddingBottom:"0.5rem"}}>
                <img src={person3} className={styles.imgstyle} alt="" />

                <img src={person4} style={{marginLeft: "10px"}} className={styles.imgstyle} alt="" />

                <span style={{backgroundColor: "#d0d6e2", padding: "6px", borderRadius:"2rem", marginLeft: "10px", fontWeight:"bold"}}>12+</span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faComments} />
                15
                </span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", cursor: "pointer" }}>
                    <button className="openModalBtn" onClick={() => {setModalOpen(true);}} style={{cursor: "pointer" }}>
                    <FontAwesomeIcon icon={faPaperclip} />
                    </button>
                     

                               
               
                </span>
                <span>
                
                </span>


                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faCalendarDays} />
                30-12-2022
                </span>
                </div>
                
            </div>


            <div className={styles.bodystyle}>
                
               
                <div className={styles.profile}>
                <img src={person1} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Client Name</span>

                <img src={person2} style={{marginLeft: "5rem"}} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Sadik Istiak</span>
                </div>

                <div className={styles.profile}>
                    <FontAwesomeIcon icon={faLayerGroup} style={{color: "#666666",}} />

                    <span style={{marginLeft: "5px"}}>Lorem ipsum dolor sit....</span>

                    <span className={styles.margin} style={{marginLeft: "6rem"}}>
                    <FontAwesomeIcon icon={faBook} style={{color: "#666666",}} />
                    1/2
                    </span>
                </div>

                <div className={styles.profile} style={{paddingBottom:"0.5rem"}}>
                <img src={person3} className={styles.imgstyle} alt="" />

                <img src={person4} style={{marginLeft: "10px"}} className={styles.imgstyle} alt="" />

                <span style={{backgroundColor: "#d0d6e2", padding: "6px", borderRadius:"2rem", marginLeft: "10px", fontWeight:"bold"}}>12+</span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faComments} />
                15
                </span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", cursor: "pointer" }}>
                    <button className="openModalBtn" onClick={() => {setModalOpen(true);}} style={{cursor: "pointer" }}>
                    <FontAwesomeIcon icon={faPaperclip} />
                    </button>
                     

                               
               
                </span>
                <span>
                
                </span>


                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faCalendarDays} />
                30-12-2022
                </span>
                </div>
                
            </div>


            <div className={styles.bodystyle}>
                
               
                <div className={styles.profile}>
                <img src={person1} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Client Name</span>

                <img src={person2} style={{marginLeft: "5rem"}} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Sadik Istiak</span>
                </div>

                <div className={styles.profile}>
                    <FontAwesomeIcon icon={faLayerGroup} style={{color: "#666666",}} />

                    <span style={{marginLeft: "5px"}}>Lorem ipsum dolor sit....</span>

                    <span className={styles.margin} style={{marginLeft: "6rem"}}>
                    <FontAwesomeIcon icon={faBook} style={{color: "#666666",}} />
                    1/2
                    </span>
                </div>

                <div className={styles.profile} style={{paddingBottom:"0.5rem"}}>
                <img src={person3} className={styles.imgstyle} alt="" />

                <img src={person4} style={{marginLeft: "10px"}} className={styles.imgstyle} alt="" />

                <span style={{backgroundColor: "#d0d6e2", padding: "6px", borderRadius:"2rem", marginLeft: "10px", fontWeight:"bold"}}>12+</span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faComments} />
                15
                </span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", cursor: "pointer" }}>
                    <button className="openModalBtn" onClick={() => {setModalOpen(true);}} style={{cursor: "pointer" }}>
                    <FontAwesomeIcon icon={faPaperclip} />
                    </button>
                     

                               
               
                </span>
                <span>
                
                </span>


                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faCalendarDays} />
                30-12-2022
                </span>
                </div>
                
            </div>

            
                
            </div>


            <div className={styles.background}>
            <header  className={styles.divstyle}>
            <FontAwesomeIcon icon={faMound} rotation={270} size="2xl" style={{color: "#f10909",}} />

            <span style={{color: "#666666", fontWeight: "bold"}}>Overdue</span>  

            <span className={styles.margin}>0</span>
            </header>
            
            <div className={styles.bodystyle}>
                
               
                <div className={styles.profile}>
                <img src={person1} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Client Name</span>

                <img src={person2} style={{marginLeft: "5rem"}} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Sadik Istiak</span>
                </div>

                <div className={styles.profile}>
                    <FontAwesomeIcon icon={faLayerGroup} style={{color: "#666666",}} />

                    <span style={{marginLeft: "5px"}}>Lorem ipsum dolor sit....</span>

                    <span className={styles.margin} style={{marginLeft: "6rem"}}>
                    <FontAwesomeIcon icon={faBook} style={{color: "#666666",}} />
                    1/2
                    </span>
                </div>

                <div className={styles.profile} style={{paddingBottom:"0.5rem"}}>
                <img src={person3} className={styles.imgstyle} alt="" />

                <img src={person4} style={{marginLeft: "10px"}} className={styles.imgstyle} alt="" />

                <span style={{backgroundColor: "#d0d6e2", padding: "6px", borderRadius:"2rem", marginLeft: "10px", fontWeight:"bold"}}>12+</span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faComments} />
                15
                </span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", cursor: "pointer" }}>
                    <button className="openModalBtn" onClick={() => {setModalOpen(true);}} style={{cursor: "pointer" }}>
                    <FontAwesomeIcon icon={faPaperclip} />
                    </button>
                     

                               
               
                </span>
                <span>
                
                </span>


                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faCalendarDays} />
                30-12-2022
                </span>
                </div>
                
            </div>


            <div className={styles.bodystyle}>
                
               
                <div className={styles.profile}>
                <img src={person1} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Client Name</span>

                <img src={person2} style={{marginLeft: "5rem"}} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Sadik Istiak</span>
                </div>

                <div className={styles.profile}>
                    <FontAwesomeIcon icon={faLayerGroup} style={{color: "#666666",}} />

                    <span style={{marginLeft: "5px"}}>Lorem ipsum dolor sit....</span>

                    <span className={styles.margin} style={{marginLeft: "6rem"}}>
                    <FontAwesomeIcon icon={faBook} style={{color: "#666666",}} />
                    1/2
                    </span>
                </div>

                <div className={styles.profile} style={{paddingBottom:"0.5rem"}}>
                <img src={person3} className={styles.imgstyle} alt="" />

                <img src={person4} style={{marginLeft: "10px"}} className={styles.imgstyle} alt="" />

                <span style={{backgroundColor: "#d0d6e2", padding: "6px", borderRadius:"2rem", marginLeft: "10px", fontWeight:"bold"}}>12+</span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faComments} />
                15
                </span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", cursor: "pointer" }}>
                    <button className="openModalBtn" onClick={() => {setModalOpen(true);}} style={{cursor: "pointer" }}>
                    <FontAwesomeIcon icon={faPaperclip} />
                    </button>
                     

                               
               
                </span>
                <span>
                
                </span>


                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faCalendarDays} />
                30-12-2022
                </span>
                </div>
                
            </div>


            <div className={styles.bodystyle}>
                
               
                <div className={styles.profile}>
                <img src={person1} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Client Name</span>

                <img src={person2} style={{marginLeft: "5rem"}} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Sadik Istiak</span>
                </div>

                <div className={styles.profile}>
                    <FontAwesomeIcon icon={faLayerGroup} style={{color: "#666666",}} />

                    <span style={{marginLeft: "5px"}}>Lorem ipsum dolor sit....</span>

                    <span className={styles.margin} style={{marginLeft: "6rem"}}>
                    <FontAwesomeIcon icon={faBook} style={{color: "#666666",}} />
                    1/2
                    </span>
                </div>

                <div className={styles.profile} style={{paddingBottom:"0.5rem"}}>
                <img src={person3} className={styles.imgstyle} alt="" />

                <img src={person4} style={{marginLeft: "10px"}} className={styles.imgstyle} alt="" />

                <span style={{backgroundColor: "#d0d6e2", padding: "6px", borderRadius:"2rem", marginLeft: "10px", fontWeight:"bold"}}>12+</span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faComments} />
                15
                </span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", cursor: "pointer" }}>
                    <button className="openModalBtn" onClick={() => {setModalOpen(true);}} style={{cursor: "pointer" }}>
                    <FontAwesomeIcon icon={faPaperclip} />
                    </button>
                     

                               
               
                </span>
                <span>
                
                </span>


                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faCalendarDays} />
                30-12-2022
                </span>
                </div>
                
            </div>


            <div className={styles.bodystyle}>
                
               
                <div className={styles.profile}>
                <img src={person1} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Client Name</span>

                <img src={person2} style={{marginLeft: "5rem"}} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Sadik Istiak</span>
                </div>

                <div className={styles.profile}>
                    <FontAwesomeIcon icon={faLayerGroup} style={{color: "#666666",}} />

                    <span style={{marginLeft: "5px"}}>Lorem ipsum dolor sit....</span>

                    <span className={styles.margin} style={{marginLeft: "6rem"}}>
                    <FontAwesomeIcon icon={faBook} style={{color: "#666666",}} />
                    1/2
                    </span>
                </div>

                <div className={styles.profile} style={{paddingBottom:"0.5rem"}}>
                <img src={person3} className={styles.imgstyle} alt="" />

                <img src={person4} style={{marginLeft: "10px"}} className={styles.imgstyle} alt="" />

                <span style={{backgroundColor: "#d0d6e2", padding: "6px", borderRadius:"2rem", marginLeft: "10px", fontWeight:"bold"}}>12+</span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faComments} />
                15
                </span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", cursor: "pointer" }}>
                    <button className="openModalBtn" onClick={() => {setModalOpen(true);}} style={{cursor: "pointer" }}>
                    <FontAwesomeIcon icon={faPaperclip} />
                    </button>
                     

                               
               
                </span>
                <span>
                
                </span>


                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faCalendarDays} />
                30-12-2022
                </span>
                </div>
                
            </div>


            <div className={styles.bodystyle}>
                
               
                <div className={styles.profile}>
                <img src={person1} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Client Name</span>

                <img src={person2} style={{marginLeft: "5rem"}} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Sadik Istiak</span>
                </div>

                <div className={styles.profile}>
                    <FontAwesomeIcon icon={faLayerGroup} style={{color: "#666666",}} />

                    <span style={{marginLeft: "5px"}}>Lorem ipsum dolor sit....</span>

                    <span className={styles.margin} style={{marginLeft: "6rem"}}>
                    <FontAwesomeIcon icon={faBook} style={{color: "#666666",}} />
                    1/2
                    </span>
                </div>

                <div className={styles.profile} style={{paddingBottom:"0.5rem"}}>
                <img src={person3} className={styles.imgstyle} alt="" />

                <img src={person4} style={{marginLeft: "10px"}} className={styles.imgstyle} alt="" />

                <span style={{backgroundColor: "#d0d6e2", padding: "6px", borderRadius:"2rem", marginLeft: "10px", fontWeight:"bold"}}>12+</span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faComments} />
                15
                </span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", cursor: "pointer" }}>
                    <button className="openModalBtn" onClick={() => {setModalOpen(true);}} style={{cursor: "pointer" }}>
                    <FontAwesomeIcon icon={faPaperclip} />
                    </button>
                     

                               
               
                </span>
                <span>
                
                </span>


                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faCalendarDays} />
                30-12-2022
                </span>
                </div>
                
            </div>


            <div className={styles.bodystyle}>
                
               
                <div className={styles.profile}>
                <img src={person1} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Client Name</span>

                <img src={person2} style={{marginLeft: "5rem"}} className={styles.imgstyle} alt="" />
                <span className={styles.textstyle}>Sadik Istiak</span>
                </div>

                <div className={styles.profile}>
                    <FontAwesomeIcon icon={faLayerGroup} style={{color: "#666666",}} />

                    <span style={{marginLeft: "5px"}}>Lorem ipsum dolor sit....</span>

                    <span className={styles.margin} style={{marginLeft: "6rem"}}>
                    <FontAwesomeIcon icon={faBook} style={{color: "#666666",}} />
                    1/2
                    </span>
                </div>

                <div className={styles.profile} style={{paddingBottom:"0.5rem"}}>
                <img src={person3} className={styles.imgstyle} alt="" />

                <img src={person4} style={{marginLeft: "10px"}} className={styles.imgstyle} alt="" />

                <span style={{backgroundColor: "#d0d6e2", padding: "6px", borderRadius:"2rem", marginLeft: "10px", fontWeight:"bold"}}>12+</span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faComments} />
                15
                </span>

                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", cursor: "pointer" }}>
                    <button className="openModalBtn" onClick={() => {setModalOpen(true);}} style={{cursor: "pointer" }}>
                    <FontAwesomeIcon icon={faPaperclip} />
                    </button>
                     

                               
               
                </span>
                <span>
                
                </span>


                <span style={{marginLeft:"0.8rem", color: "#666666", fontWeight:"bold", }}>
                <FontAwesomeIcon icon={faCalendarDays} />
                30-12-2022
                </span>
                </div>
                
            </div>

            
                
            </div>

            
        </div>
           
        </>

        
        );


        
    
}
 
export default FrontDesign;



