import React from "react";
import style from "./search.module.css";
import {
	Checkbox,
	FormGroup,
	FormControl,
	FormControlLabel,
} from "@mui/material";

function SearchBar() {
	return (
		<div className={style.search}>
			<input type="search" name="Ingridents" id="" />
			<FormGroup>
				<FormControlLabel control={<Checkbox />} label="Label" />
				<FormControlLabel control={<Checkbox />} label="Disabled" />
			</FormGroup>
		</div>
	);
}

export default SearchBar;
