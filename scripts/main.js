console.log('you rock')
import { useFish } from './FishDataProvider.js';

const allTheFish = useFish();
console.log("list all the fishies", allTheFish);

for (const fish of allTheFish) {
    console.log(fish)
}