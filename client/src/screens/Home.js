import React, { useCallback } from "react";
import { withRouter } from "react-router-dom";

function Home({ history }) {
	const click = useCallback(() => {
		const streamId = document.getElementById("stream-id").value;
		history.push(`/${streamId}`);
	}, [history]);
	return (
		<div className="flex flex-col items-center pt-24 space-y-4">
			<div className="space-y-1">
				<p className="text-xs">Stream ID</p>
				<input
					className="border-2 text-sm border-solid rounded-lg focus:outline-none px-2 py-1 font-mono"
					style={{
						color: "#00000090",
					}}
					id="stream-id"
					value={"kunal"}
				/>
			</div>
			<button
				onClick={click}
				className="border-2 border-dashed border-green focus:outline-none px-8 py-2 rounded-lg shadow-lg"
			>
				Live
			</button>
		</div>
	);
}

export default withRouter(Home);
