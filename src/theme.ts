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
    @font-face {
        font-family: 'GT-Walsheim';
        font-weight: 400;
        src: url(./fonts/GT-Walsheim-Regular.woff2) format('woff');
    }

    @font-face {
        font-family: 'GT-Walsheim';
        font-weight: 500;
        src: url(./fonts/GT-Walsheim-Medium.woff2) format("woff2");
    }

    @font-face {
        font-family: 'GT-Walsheim';
        font-weight: 600;
        src: url(./fonts/GT-Walsheim-Bold.woff2) format("woff2");
    }
    
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
    html {
        box-sizing: border-box;
        font-size: 16px;
    }

    body {
        font-family: 'GT-Walsheim', sans-serif;        
    }
`;
