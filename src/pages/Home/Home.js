import React, { useEffect, useState } from 'react'
import './home.scss'
import EachNote from '../../components/EachNote/EachNote'
import CreateBtn from '../../components/Btns/CreateBtn'
import AddNote from '../../components/AddNote/AddNote'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProfile } from '../../redux/slices/appConfigSlice'
function Home() {

    const [creatingNote, setCreatingNote] = useState(false)
    const myData = useSelector(s => s.appConfigReducer.myProfile)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProfile())
    }, [dispatch])


    return (

        <div className='home'>
            {creatingNote &&
                <AddNote handlePage={setCreatingNote} />}
            <div className="container">
                <div className="content">

                    <div className="top center">
                        <div onClick={() => setCreatingNote(true)} className="createbtn">

                            <CreateBtn />
                        </div>
                        <input placeholder='Search' type="text" />
                        <i className="uil2 uil-search btn"></i>
                    </div>

                    <div className="bottom flex">
                        {
                            myData?.tasks?.map((item, i) => {
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
