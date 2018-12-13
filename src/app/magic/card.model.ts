import {color} from './color.model';
import {type} from './type.model';
import {subtype} from './subtype.model';
import {ruling} from './rulings.model';
import {printing} from './printing.model';

export interface Card {

  name: string;
  manaCost: string;
  cmc: number;
  colors: color[];
  colorIdentity: color[];
  type: string;
  types: type[];
  subtypes: subtype[];
  rarity: string;
  set: string;
  setName: string;
  text: string;
  artist: string;
  number: string;
  power: string;
  toughness: string;
  layout: string;
  multiverseid: number;
  imageUrl: string;
  rulings: ruling[];
  printings: printing[];
  originalText: string;
  originalType: string;
  id: string;
}
