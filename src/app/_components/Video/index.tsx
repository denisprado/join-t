import React from "react";
import ReactPlayer from 'react-player'

interface VideoProps {
	fileName: string;
	id: number;
	currentVideoIndex?: number | null
}

function Video({ fileName, id, currentVideoIndex }: VideoProps) {

	return (
		<ReactPlayer
			controls

			url={fileName}
			width='100%'
			height='100%'
			playing={id === currentVideoIndex} // Controla a reprodução com base no índice do slide selecionado
			id={id}
		/>


	);
}

export default Video