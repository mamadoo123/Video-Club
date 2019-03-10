import _ from 'lodash';

export default function paginate(items, startPage, pageSize){
const startIndex = (startPage - 1) * pageSize;
return _(items).slice(startIndex).take(pageSize).value();
}