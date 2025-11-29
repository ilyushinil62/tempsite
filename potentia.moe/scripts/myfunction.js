function copySiteButton() {
  const htmlToCopy = `<a href='https://potentia.moe'><img src='https://potentia.moe/img/tm.gif' title='potentia.moe'></a>`;
  navigator.clipboard.writeText(htmlToCopy)
    .then(() => alert("it's on your clickboard now !"))
    .catch(err => alert("Failed to copy: " + err));
}