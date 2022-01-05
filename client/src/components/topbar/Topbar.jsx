import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { Redirect, useHistory } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { logout } from "../../context/AuthActions";

export default function Topbar() {
	const { user, dispatch } = useContext(AuthContext);
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;
	// const history = useHistory();

	// const handleClick = () => {
	// 	dispatch({ type: "LOGOUT" });
	// 	logout(dispatch); //call the logout action
	// 	history.push("/login"); //navigate to logout page on logout
	// };

	return (
		<div className="topbarContainer">
			<div className="topbarLeft">
				<Link to="/" style={{ textDecoration: "none" }}>
					<span className="logo">CollegeBook</span>
				</Link>
			</div>
			<div className="topbarCenter">
				<div className="searchbar">
					<Search className="searchIcon" />
					<input
						placeholder="Search for friend, post or video"
						className="searchInput"
					/>
				</div>
			</div>
			<div className="topbarRight">
				<div className="topbarLinks">
					<Link to="/" style={{ textDecoration: "none" }}>
						<span className="topbarLink">Homepage</span>
					</Link>
					<Link
						to={"/profile/" + user?.username}
						style={{ textDecoration: "none" }}
					>
						<span className="topbarLink">Timeline</span>
					</Link>
					{/* <button onClick={handleClick}>
						<Redirect
							to="/login"
							style={{ textDecoration: "none" }}
						>
							<span className="topbarLink">Logout</span>
						</Redirect>
					</button> */}
				</div>
				<div className="topbarIcons">
					<div className="topbarIconItem">
						<Person />
						<span className="topbarIconBadge">1</span>
					</div>
					<div className="topbarIconItem">
						<Chat />
						<span className="topbarIconBadge">2</span>
					</div>
					<div className="topbarIconItem">
						<Notifications />
						<span className="topbarIconBadge">1</span>
					</div>
				</div>
				<Link to={`/profile/${user?.username}`}>
					<img
						src={
							user?.profilePicture
								? PF + user?.profilePicture
								: PF + "person/noAvatar.png"
						}
						alt=""
						className="topbarImg"
					/>
				</Link>
			</div>
		</div>
	);
}
