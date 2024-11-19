import data from './header.data.json';
import { HeaderData } from './header.types';

export const fetchHeaderData = async (): Promise<HeaderData> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data as HeaderData);
        }, 0);
    });
};
