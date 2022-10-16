import React, { useState, useRef } from "react";


const Semaforo = (props) => {
	return <>
		<div className="container d-flex flex-column" style={{backgroundColor: "Black",width: "40px",height: "70px"}}></div>
		<div className="container d-flex flex-column" style={{backgroundColor: "Black",width: "150px",height: "370px"}}>
			<div id="luzRed" className="w-100 h-50 rounded-circle mt-1" onClick={()=>props.onChange("red")} style={{backgroundColor: props.colors["red"] }}></div>
			<div id="luzYellow" className="w-100 h-50 rounded-circle mt-1" onClick={()=>props.onChange("yellow")} style={{backgroundColor: props.colors["yellow"]}}></div>
			<div id="luzGreen" className="w-100 h-50 rounded-circle mt-1 mb-1" onClick={()=>props.onChange("green")} style={{backgroundColor: props.colors["green"]}}></div>
			<div id="luzPurple" className="w-100 h-50 rounded-circle mt-1 mb-1" onClick={()=>props.onChange("purple")} style={{backgroundColor: props.colors["purple"]}}></div>
		</div>
	</>
}

//create your first component
const Home = () => {
	let index = 0
	const timer = useRef(null);
	const defaultColors = {red: "gray", yellow: "gray", green :"gray", purple:"gray"}
	const [colors, setColors] = useState({...defaultColors});
	const switchRed = (newColor) => {
		const color = colors[newColor] == newColor ? "gray" : newColor ;
		const aux = {...defaultColors};
		aux[newColor] = color;
		setColors(aux);
		const luzColor = color;
	
	};

	const cambiarColor = () => {
		let color = ""
		if (index === 0) {
			color = "red"
			let rojo = document.getElementById("luzRed").classList.add("redLight");
			let purple = document.getElementById("luzPurple").classList.remove("purpleLight");
		} else if (index === 1) {
			color = "yellow"
			let amarillo = document.getElementById("luzYellow").classList.add("yellowLight");
			let rojo = document.getElementById("luzRed").classList.remove("redLight");
		} else if (index === 2) {
			color = "green"
			let verde = document.getElementById("luzGreen").classList.add("greenLight");
			let amarillo = document.getElementById("luzYellow").classList.remove("yellowLight");
		} else if (index === 3) {
			color = "purple"
			let purple = document.getElementById("luzPurple").classList.add("purpleLight");
			let verde = document.getElementById("luzGreen").classList.remove("greenLight");
		}
		switchRed(color)
		const sizeDefaultColors = Object.keys(defaultColors).length
		index = (index + 1 >= sizeDefaultColors) ? 0 : (index + 1)
	}

	const interval = () => {
		if (timer.current === null) {
			timer.current = setInterval(cambiarColor, 1000)
		}
	}

	return (
		<div>
		<Semaforo onChange={switchRed} colors={colors} />
		<div className="container d-flex flex-column w-25 mt-3"><button id="botonColor" type="button" className="btn btn-outline-info" onClick={interval}>Cambiar color</button></div>
		</div>
	);
};

export default Home ;
