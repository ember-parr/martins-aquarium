console.log('you rock')

import { useFish } from './FishDataProvider.js';
import { fishList } from './FishList.js'

const allTheFish = useFish();
console.log("list all the fishies", allTheFish);


fishList();