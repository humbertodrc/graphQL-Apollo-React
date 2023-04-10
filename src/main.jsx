import {ApolloProvider} from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import client from "./service";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</React.StrictMode>
);
