import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const Home = props => {
	const { store, actions } = useContext(Context);
	//const params = useParams();
	return <div className="d-flex flex-column h-100" />;
};

/*<div classNameNameNameName="jumbotron">
			<h1 classNameNameNameName="display-4">This will show the demo element: {store.demo[params.theid].title}</h1>

			<hr classNameNameNameName="my-4" />

			<Link to="/">
				<span classNameNameNameName="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div> */
