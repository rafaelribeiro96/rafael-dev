/**
 * Optimizes an image file on the client-side using HTML5 Canvas.
 * Resizes the image to keep it under maxWidth/maxHeight and compresses it to WebP/JPEG
 * to ensure small file sizes before uploading.
 *
 * @param {File} file - The raw File object from the input.
 * @param {number} maxWidth - Maximum width of the optimized image.
 * @param {number} maxHeight - Maximum height of the optimized image.
 * @param {number} quality - Compression quality (0 to 1).
 * @returns {Promise<{ base64: string, format: string, width: number, height: number }>}
 */
export function optimizeImage(
  file,
  maxWidth = 1200,
  maxHeight = 1200,
  quality = 0.82
) {
  return new Promise((resolve, reject) => {
    // Check if the file is an image
    if (!file.type.startsWith('image/')) {
      return reject(new Error('Por favor, envie apenas arquivos de imagem.'));
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        // Calculate optimized dimensions maintaining aspect ratio
        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }
        if (height > maxHeight) {
          width = Math.round((width * maxHeight) / height);
          height = maxHeight;
        }

        // Draw to offscreen canvas
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        // Try converting to webp first, fallback to jpeg
        let dataUrl = canvas.toDataURL('image/webp', quality);
        let format = 'webp';

        if (!dataUrl.startsWith('data:image/webp')) {
          dataUrl = canvas.toDataURL('image/jpeg', quality);
          format = 'jpeg';
        }

        const base64 = dataUrl.split(',')[1];
        resolve({
          base64,
          format,
          width,
          height
        });
      };
      img.onerror = () => reject(new Error('Erro ao ler dados da imagem.'));
    };
    reader.onerror = () => reject(new Error('Erro ao carregar o arquivo.'));
  });
}

/**
 * Sanitizes a filename for URL compatibility.
 * Removes special characters and adds a timestamp to avoid name collisions.
 *
 * @param {string} originalName - Original filename (e.g. "Foto Minha.png").
 * @param {string} extension - Desired extension (e.g. "webp").
 * @returns {string} Sanitized filename.
 */
export function sanitizeFilename(originalName, extension) {
  const base =
    originalName.substring(0, originalName.lastIndexOf('.')) || originalName;
  const cleanBase = base
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove accents
    .replace(/[^a-z0-9]+/g, '-') // replace non-alphanumeric with dashes
    .replace(/^-+|-+$/g, ''); // trim dashes

  return `${cleanBase}-${Date.now()}.${extension}`;
}
