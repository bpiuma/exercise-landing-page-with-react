import React from "react";

export function NavBar() {
	return (
		<div className="container-fluid bg-dark">
			<div className="container col-8">
				<nav className="navbar navbar-expand-lg text-white navbar-light">
					<a className="text-white" href="#">
						StartBoostrap
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse  navbar-collapse justify-content-end "
						id="navbarNav">
						<div className="navbar-nav ">
							<a className="nav-link active text-white" href="#">
								Home <span className="sr-only">(current)</span>
							</a>
							<a className="nav-link text-white" href="#">
								Features
							</a>
							<a className="nav-link text-white" href="#">
								Pricing
							</a>
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
}
