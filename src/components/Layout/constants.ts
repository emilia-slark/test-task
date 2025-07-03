import { LABEL } from "../../utils/constants";
import { ILinkItem } from "./types";
import { PrimeIcons } from 'primereact/api';

export const LINK_ITEMS: ILinkItem[] = [
  {
    url: '/',
    title: LABEL.SEARCH,
    icon: PrimeIcons.SEARCH
  },
  {
    url: '/favorites',
    title: LABEL.FAVORITES,
    icon: PrimeIcons.HEART_FILL
  }
]