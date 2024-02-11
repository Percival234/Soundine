export default function validateImage(image) {
  const allowedExtensions = ['jpg', 'jpeg'];
  const imageSizeValid = image.size <= 2 * 1024 * 1024;
  const imageExtension = image.name.split('.').pop().toLowerCase();
  const isAllowedExtension = allowedExtensions.includes(imageExtension);

  return imageSizeValid && isAllowedExtension;
}
