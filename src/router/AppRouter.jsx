import { Route, Routes } from "react-router-dom";

import { Login } from "../auth/";
import { HeroesRoutes } from "../heroes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path="login" element={
					//Authentication made with a functional component.
					<PublicRoute>
						<Login />
					</PublicRoute>
				} />
				{/* <Route path="login" element={<Login />} /> */}
				<Route
					path="/*"
					element={
						//Authentication made with a functional component.
						<PrivateRoute>
							<HeroesRoutes />
						</PrivateRoute>
					}
				/>
				{/* <Route path="/*" element={<HeroesRoutes />} /> */}
			</Routes>
		</>
	);
};
