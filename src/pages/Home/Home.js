import React from 'react'
import './home.scss'
import EachNote from '../../components/EachNote/EachNote'
import CreateBtn from '../../components/Btns/CreateBtn'
import AddNote from '../../components/AddNote/AddNote'
import Buttons from '../../components/Btns/Buttons'

function Home() {

    const note=[{
        title:"Title 1",
        desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ea, consectetur sed perspiciatis possimus totam veniam odio quia aliquid quod!ipsum dolor sit amet consectetur, adipisicing elit. Natus ea, consectetur sed perspiciatis possimus totam veniam odio quia aliquid quod!ipsum dolor sit amet consectetur, adipisicing elit. Natus ea, consectetur sed perspiciatis possimus totam veniam odio quia aliquid quod!"

    },
    
    {
        title:"Title 1",
        desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ea, consectetur sed perspiciatis possimus totam veniam odio quia aliquid quod!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ea, consectetur sed perspiciatis possimus totam veniam odio quia aliquid quod!"

    },
    {
        title:"Title 1",
        desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ea, consectetur sed perspiciatis possimus totam veniam odio quia aliquid quod!  Natus ea, consectetur sed perspiciatis possimus totam veniam odio quia aliquid quod "

    },
    
    {
        title:"Title 1",
        desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ea, consectetur sed perspiciatis possimus totam veniam odio quia aliquid quod!"

    },
    {
        title:"Title 1",
        desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ea, consectetur sed perspiciatis possimus totam veniam odio quia aliquid quod!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ea, consectetur sed perspiciatis possimus totam veniam odio quia aliquid quod!"

    },
    {
        title:"Title 1",
        desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ea, consectetur sed perspiciatis possimus totam veniam odio quia aliquid quod!  Natus ea, consectetur sed perspiciatis possimus totam veniam odio quia aliquid quod "

    },
]

    return (

        <div className='home'>
            <AddNote/>
            <div className="container">
                <div className="content">

                    <div className="top center">
                        <CreateBtn/>
                        <input placeholder='Search' type="text" />
                        <i className="uil2 uil-search btn"></i>
                    </div>

                    <div className="bottom flex">
                        {
                            note.map((item,i)=>{
                                return <EachNote note={item} key={i} />
                            })
                            }
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Home
