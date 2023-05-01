export const useEditLists = (preLists) => {
  const editList = [...preLists]
  const editListshift = editList.shift()
  editList.push(editListshift)
  return [editList]
}