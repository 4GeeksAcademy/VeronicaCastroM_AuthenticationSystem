import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Private = (...props) => {
  const { store, actions } = useContext(Context);
	useEffect(()=>{
		actions.private()
		
	},[])

  store.hiddenLogout ? actions.changeLogoutButton(false): null 

  if (store.isloged) {
		return (
			<div className="container private mt-5 text-white">
				<img src="https://www.kingsfield.staffs.sch.uk/wp-content/uploads/2017/08/welcome-pic.jpg"/>
				<h1 className="fw-bold fs-1 text-center mt-2">{store.user_loged.first_name} {store.user_loged.last_name}</h1>
				<h3 className="">Your id is: {store.user_loged.id}</h3>
				<h3 className="">Your username is: {store.user_loged.username}</h3>
			</div>
		);
	}


  else{
    return (
			<div className="container not-private mt-5">
				<img src="https://static.fjcdn.com/pictures/You_41af71_867945.jpg"></img>
			</div>
		)
  }




};

