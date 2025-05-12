import { taxCalculation } from "./tax";
import * as _ from 'lodash';

let tax = taxCalculation(10_000);
console.log(tax);

_.clone([1,2,3]);