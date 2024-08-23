export const getSpentPerc = (item:any) => {
    if (item?.amountSpent > item?.amountAllocated) return 100
    const spentPerc = (item?.amountSpent / item?.amountAllocated) * 100
    return spentPerc
  }