import axios from 'axios'
import { KEY_ACCESS_TOKEN, getItem, removeItem, setItem } from "../loacalStorageManager"
import { TOAST_FAILURE } from '../App'
import store from '../redux/store'
import { setLoader, showToast } from '../redux/slices/toastSlice'


export const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_SERVER_BASE_URL,
    withCredentials: true

})

axiosClient.interceptors.request.use(

    (request) => {
        const accessToken = getItem(KEY_ACCESS_TOKEN);
        request.headers['Authorization'] = `Bearer ${accessToken}`;
        store.dispatch(setLoader(true))
        return request;
    }
    
    )
    
    axiosClient.interceptors.response.use(
        async(response)=>{
            store.dispatch(setLoader(false))
            const data= response.data;
            if(data.status ==='ok'){
            return data;
        }

        const originalRequest = response.config;
        const statusCode = response.statusCode;
        const error = data.message;
        
        store.dispatch(showToast({
            type:TOAST_FAILURE,
            message: error
        }))



        if(statusCode===401){
            const response = await axios.create({
                withCredentials:true 
            }).get(`${process.env.REACT_APP_SERVER_BASE_URL}/auth/refresh`)



            if(response.data.status==='ok'){
                setItem(KEY_ACCESS_TOKEN,response.data.message.accessToken);

                
                originalRequest.headers['Authorization'] = `Bearer ${response.data.message.accessToken}`;
                return axios(originalRequest);
            }


            else{
                
                removeItem(KEY_ACCESS_TOKEN);
                window.location.replace('/login', '_self')
                return Promise.reject(error);
            }
        }
        return Promise.reject(error)
    },async (e)=>{
        



        return Promise.reject(e);
    }
)