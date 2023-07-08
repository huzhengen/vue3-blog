export const friendlyDate = (dateStr) => {
  const date = new Date(dateStr)
  const diff = Date.now() - date.getTime()
  const minute = 1000 * 60
  const hour = minute * 60
  const day = hour * 24
  let unit = ''
  if (diff < minute) {
    unit = parseInt(diff / second) + '秒钟前'
  } else if (diff < hour) {
    unit = parseInt(diff / minute) + '分钟前'
  } else if (diff < day) {
    unit = parseInt(diff / hour) + '小时前'
  } else {
    unit = parseInt(diff / day) + '天前'
  }
  return unit
}