export function searchByMemoryDetails(previews, query) {
 if (query.length === 0) return previews;

 return previews.filter((preview) => {
  let serachStr = `${preview.title} ${preview.year} ${preview.location.reigon} ${preview.location.country}`;
  let regex = new RegExp(query, "i");

  return regex.test(serachStr);
 });
}
