import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import App from './container/App';

import { GlobalStyles, theme } from './theme';

const Root: FC = ({ children }) => (
	<React.Fragment>
		<GlobalStyles />
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.Fragment>
);

export default Root;
