export function getReac (id) {
  return {
    top: document.getElementById(id).getBoundingClientRect().top,
    bottom: document.getElementById(id).getBoundingClientRect().bottom,
    left: document.getElementById(id).getBoundingClientRect().left,
    right: document.getElementById(id).getBoundingClientRect().right,
    height: document.getElementById(id).getBoundingClientRect().height
  }
}
