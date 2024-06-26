
export const getTotalStats = listData => listData.reduce((totalStats, listItem)=> {
    if(!listItem.disabled){
    totalStats.totalStoreValue +=  +listItem.value.replace('$', '')
    totalStats.totalProducts +=  1;
    totalStats.categorySet.add(listItem.category)
    totalStats.noOfCategory = totalStats.categorySet.size;
    if(listItem.quantity === 0){
        totalStats.outOfStocks += 1;
    }
}
    return totalStats;
},{
    totalProducts: 0,
    totalStoreValue:0,
    outOfStocks:0,
    noOfCategory:0,
    categorySet: new Set()
})

export const getStats = ({
  totalProducts,
  totalStoreValue,
  outOfStocks,
  noOfCategory,
}) => [
  {
    label: "Total Product",
    value: totalProducts,
  },
  {
    label: "Total Store Value",
    value: totalStoreValue,
  },
  {
    label: "Out of stocks",
    value: outOfStocks,
  },
  {
    label: "No of Category",
    value: noOfCategory,
  },
];
