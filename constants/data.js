import React, { useState, useEffect } from "react";

import {Dimensions} from "react-native";

export const useScreenDimensions = () => {
    const [screenData, setScreenData] = useState(Dimensions.get('screen'));

    useEffect(() => {
        const onChange = (result) => {
            setScreenData(result.screen);
        };

        Dimensions.addEventListener('change', onChange);

        return () => Dimensions.removeEventListener('change', onChange);
    });

    return {
        ...screenData,
        isLandscape: screenData.width > screenData.height,
    };
};

export const AppTheme = {
    dark: false,
    colors: {
        primary: '#4A3939',
        background: 'rgb(242, 242, 242)',
        card: '#4A3939',
        text: 'rgb(28, 28, 30)',
        border: 'rgb(199, 199, 204)',
        notification: 'rgb(255, 69, 58)',
    },
};

export const AppBarTheme = {
    dark: false,
    colors: {
        primary: '#799C94',
        background: 'rgb(242, 242, 242)',
        card: '#799C94',
        text: 'rgb(28, 28, 30)',
        border: 'rgb(199, 199, 204)',
        notification: 'rgb(255, 69, 58)',
    },
};

export const getBookImage = (obj) => {
    switch (obj) {
        case 'Image_01.png':
            return require('../assets/books/Image_01.png');
        case 'Image_02.png':
            return require('../assets/books/Image_02.png');
        case 'Image_03.png':
            return require('../assets/books/Image_03.png');
        case 'Image_05.png':
            return require('../assets/books/Image_05.png');
        case 'Image_06.png':
            return require('../assets/books/Image_06.png');
        case 'Image_07.png':
            return require('../assets/books/Image_07.png');
        case 'Image_08.png':
            return require('../assets/books/Image_08.png');
        case 'Image_10.png':
            return require('../assets/books/Image_10.png');
        default:
            return require('../assets/404.png');
    }
};


export const data = [0, 1, 0, 1, 0, 1, 0, 1, 0];
export const labels =
    [
        '-2п', '', "", "", "", "-п", "", "", "", "", "", 0, "", "", "", "", "", 'п', "", "", "", "", '2п'
    ];

