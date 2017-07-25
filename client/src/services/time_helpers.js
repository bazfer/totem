export const transformToHMS = (rawDate) => {
  const startTime = new Date(rawDate)
  const milliseconds = new Date() - startTime
        
  var seconds = Math.floor(milliseconds/1000)
  var hours = Math.floor(seconds/3600)
  var remSeconds = seconds % 3600
  var minutes = Math.floor(remSeconds/60)
  seconds = remSeconds % 60
        
  const time = hours + " : " + minutes + " : " + seconds
  console.log(time)
  return time
}