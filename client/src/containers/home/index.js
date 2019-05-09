import React, { Component} from 'react';
// import { ReactComponent } from '*.svg';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import '../../slider-animation.css';
import '../../styles.css';


const content = [
    {
        title: 'slide one',
        description: 'Here is the slide one.',
        button: 'Read More',
        src: './images/c.png',
        user: 'NewUser' 
    },
    {
        title: 'slide two',
        description: 'Here is the slide two.',
        button: 'Read More',
        src: './images/s.png',
        user: 'NewUser' 
    },
    {
        title: 'slide third',
        description: 'Here is the slide third.',
        button: 'Read More',
        src: './images/c.png',
        user: 'NewUser' 
    }
]

export default class home extends Component  {
    constructor(props) {
        super(props)

        this.state = {
            images: [
                
            ]
        }
    }
 render(){
     return(
        <div>
            <h1>Home page</h1>
            <h6>React Animate Slider</h6>
            <Slider className="slider-wrapper">
                {content.map((item,index) => (
                    <div key={index} className="slider-content" style={{background: `url('${item.src}') no-repeat center center`}}>
                    <div className="inner">
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <button>{item.button}</button>
                    </div>
                    <section>
                        <img src={item.src} alt={item.user}/>
                        <span>
                            posted by <strong>{item.user}</strong>
                        </span>
                    </section>
                    </div>
                ))}
            </Slider>
        </div>
     );
 }
}


