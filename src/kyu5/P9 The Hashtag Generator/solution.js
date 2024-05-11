function generateHashtag(str) {
  if (!str.trim()) {
    return false;
  }
  const hashTag =
    "#" +
    str
      .split(" ")
      .map((x) => x.charAt(0).toUpperCase() + x.substring(1))
      .join("");
  return hashTag.length > 140 ? false : hashTag;
}
