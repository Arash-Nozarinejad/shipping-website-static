import { HeaderType } from "./header.types";
import headerData from "./header.data.json";

export const getHeaderData = (): HeaderType => {
    return headerData as HeaderType;
}