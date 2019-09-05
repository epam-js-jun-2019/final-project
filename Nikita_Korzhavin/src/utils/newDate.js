const newDate = () => {
  const rightNow = new Date();
  return rightNow.toISOString().slice(0,10)
}

export default newDate;