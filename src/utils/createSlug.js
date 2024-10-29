const createSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/ /g, '-')      // Ganti spasi dengan tanda minus
    .replace(/[^\w-]+/g, ''); // Hapus karakter non-alfanumerik
};

export default createSlug;
