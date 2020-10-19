import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import styled, { ThemeProvider } from 'styled-components';

import Loading from './Loading';

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

	return (
		<Wrapper>
			<AnimatePresence>
				{isLoading && (
					<Loading
						onComplete={() => {
							setIsLoading(false);
						}}
					/>
				)}
			</AnimatePresence>
		</Wrapper>
	);
};

export default App;
