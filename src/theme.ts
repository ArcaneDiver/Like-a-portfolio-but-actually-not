import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
	colors: {
		text: '#fff',
		background: '#000',
		primary: '#70f',
		primaryLight: '#91f',
		secondary: '#dd00ee',
		secondaryLight: '#ff0088',
	},
};

export const GlobalStyles = createGlobalStyle`    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    body {
        font-size: 16px;
    }
`;
