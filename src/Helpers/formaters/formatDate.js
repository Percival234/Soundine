export default function formatDate(date) {
  const d = new Date(date);

  const day = (d.getUTCDate() < 10 ? '0' : '') + d.getUTCDate();
  const month = (d.getUTCMonth() + 1 < 10 ? '0' : '') + (d.getUTCMonth() + 1);
  const year = d.getUTCFullYear();

  const formattedDate = `${month}.${day}.${year}`;

  return formattedDate;
}
