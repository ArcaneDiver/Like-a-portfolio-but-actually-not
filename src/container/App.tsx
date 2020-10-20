import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

import Loading from './Loading';
import Name from './Name';

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;

	display: flex;

	background: linear-gradient(
		180deg,
		${prop => prop.theme.colors.primaryLight},
		${prop => prop.theme.colors.primary}
	);

	> * {
		flex-grow: 1;
	}
`;

const App = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [isExited, setIsExited] = useState<boolean>(false);

	return (
		<Wrapper>
			<AnimatePresence
				onExitComplete={() => {
					setIsExited(true);
				}}
			>
				{isLoading && (
					<Loading
						onComplete={() => {
							setIsLoading(false);
						}}
					/>
				)}
			</AnimatePresence>
			{isExited && <Name />}
		</Wrapper>
	);
};

export default App;
