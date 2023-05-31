import React, { useEffect, useState } from 'react'
import './home.scss'
import EachNote from '../../components/EachNote/EachNote'
import CreateBtn from '../../components/Btns/CreateBtn'
import AddNote from '../../components/AddNote/AddNote'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProfile } from '../../redux/slices/appConfigSlice'
import { KEY_ACCESS_TOKEN, getItem } from '../../utils/loacalStorageManager'
import { showToast } from '../../redux/slices/toastSlice'
import { TOAST_WARNING } from '../../App'
function Home() {
    const [search, setSearch] = useState("");

    const [creatingNote, setCreatingNote] = useState(false)
    let myData = useSelector(s => s.appConfigReducer.myProfile).tasks

    const dispatch = useDispatch()


    function handleCreate() {
        const user = getItem(KEY_ACCESS_TOKEN);
        if (!user) {
            dispatch(showToast({
                type: TOAST_WARNING,
                message: "Login to create note"
            }))
            return;
        }

        setCreatingNote(true);

    }
    useEffect(() => {
        dispatch(fetchProfile())
    }, [dispatch])
    // useEffect(()=>{
    //     console.log(myData?.length);
    //     console.log(myData);
    //     if(myData?.length===1){
    //         myData =[{
    //             subject:"Welcome!",
    //             description:"Hi, welcome to the best note app present on the blue planet. You can keep you notes safe and secure here till apocalypse!\nCreate your first note now!",
    //             hslCol:240
    //         }]
    //         console.log("hi");
    //     }

    // })




    return (

        <div className='home'>
            {creatingNote &&
                <AddNote handlePage={setCreatingNote} />}
            <div className="container">
                <div className="content">

                    <div className="top center">
                        <div onClick={handleCreate} className="createbtn">

                            <CreateBtn />
                        </div>
                        <input onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder='Search' type="text" />
                        <i className="uil2 uil-search btn"></i>
                    </div>

                    <div className="bottom">
                        {

                            search === "" ?
                                myData?.map((item, i) => {
                                    return <EachNote note={item} key={i} />
                                }) :
                                myData?.filter((item) => {
                                    if (item.subject.toLowerCase().includes(search) || item.description.toLowerCase().includes(search)) {
                                        return item;
                                    }
                                    return null;

                                }).map((item, i) => {
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
