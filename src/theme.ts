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
    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }
    html {
        box-sizing: border-box;
        font-size: 16px;
        margin: 0;
        padding: 0;
    }
`;
