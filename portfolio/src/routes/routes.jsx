import App from "../App";
import ErrorPage from "../Components/ErrorPage";
import Homepage from "../Components/Home/Homepage";
import ProjectDetailPage from "../Components/Project/ProjectDetailPage";
import ProjectPage from "../Components/Project/ProjectPage";

export const routes = [
	{
		path: "/",
		element: <App />,
		// errorElement: <ErrorPage/>,

		children: [
			{
				index: true,
				element: <Homepage />,
			},

			{
				path: "project/:projectName",
				element: <ProjectDetailPage />,
			},
			{
				path: "*",
				element: <ErrorPage/>,
			},
		],
	},
];

// solve the problem of comment issue nvim.
