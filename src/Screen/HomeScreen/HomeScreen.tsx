import React, { useContext, useEffect, useState } from 'react'
import {Product} from '../../interface/Product'
import axios from 'axios'
import { ROUTES, URLS } from '../../enum/urls'
import TextField from '@mui/material/TextField';
import Styled from './HomeScreen.style'
import useFetch from '../../hooks/useFetch';
import Spinner from '../../Components/Spinner/Spinner';
import { Link } from 'react-router-dom';
import { METHODS } from '../../enum/methos';
import Card from '../../Components/Card/Card';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import {v4 as uuidv4} from 'uuid';

const HomeScreen = () => {
  
  const [filterUser,setFilterUser] = useState<any[]>([])
  const [isLoading,setIsLoading] = useState(false)
  const [allusers,setAllUsers] = useState<any[]>([]) 
  const [isDisabled,setIsDisabled] = useState(false)

  
  useEffect(()=>{
    fetchData()  
  },[])
  
  const fetchData = async () =>{
    console.log("gggg")
    setIsLoading(true)
    const {data} = await axios.get('https://randomuser.me/api/?results=9')
    const newUsers = convertData(data)
    setAllUsers(newUsers)
    setFilterUser(newUsers)
    setIsLoading(false)
  }
  
  const makeFilter =(text:string)=>{
      if(text === ''){
         setIsDisabled(false)
      }else{
        setIsDisabled(true)
      }
     const filterUsers = allusers.filter((el) => {
        return el.name.toLowerCase().startsWith(text.toLowerCase())
     })

     setFilterUser(filterUsers)


  }
  
  const convertData =(data:any)=>{
    const usersData = data.results
    const newUsers = usersData.map((user:any) =>{
       const {name,gender,picture,phone,nat,email} = user
       return { 
         id:uuidv4(),
         email, 
         imageUrl:picture.thumbnail,
         name: `${name.first} ${name.last}`,
         gender,
         phone,
         national:nat
       }
    })

    return newUsers
  }

  const loadMore = async()=>{
     setIsLoading(true)
     const {data} = await axios.get('https://randomuser.me/api/?results=9')
     const newUsers = convertData(data)
     setAllUsers((prvStat) => [...prvStat,...newUsers])
     setFilterUser((prvStat) => [...prvStat,...newUsers])
     setIsLoading(false)
  }


  const renderCards =()=>(
      filterUser.map((user:any) => (
           <Card user={user} key={user.id} />
      ))
  )


  if(isLoading){
    return <Spinner />
  }


 
  return (
    <>
     <div className="flex flex-col items-center">
       <Input className={'w-10/12'} onChange={makeFilter} />
       <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-10/12">
        { renderCards() }
       </ul>
       <Button className={'mt-10 mb-10 w-10/12'} onClick={loadMore} disabled={isDisabled}>
           Load More
       </Button>
     </div>
    </>
  );
}

export default HomeScreen