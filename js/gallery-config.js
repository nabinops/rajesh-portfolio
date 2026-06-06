/**
 * GALLERY CONFIGURATION
 * ─────────────────────
 * How to add new photos:
 *   1. Drop the image file into the matching folder:
 *        assets/images/gallery/nepal/
 *        assets/images/gallery/dubai/
 *        assets/images/gallery/hotel/
 *        assets/images/gallery/food/
 *   2. Add an entry to the images array below:
 *        { file: 'your-photo.jpg', caption: 'Optional caption' }
 *   3. Save this file and refresh the browser — done!
 *
 * Supported formats: .jpg  .jpeg  .png  .webp  .avif
 */

const GALLERY_CONFIG = {

  nepal: {
    label:       'Nepal Life',
    description: 'Mountains, culture &amp; festivals from home',
    icon:        'fa-mountain-sun',
    accentColor: '#b43c0a',
    basePath:    'assets/images/gallery/nepal/',
    images: [
      // { file: 'mountains.jpg',  caption: 'Annapurna Base Camp' },
      // { file: 'festival.jpg',   caption: 'Dashain celebrations' },
      // { file: 'village.jpg',    caption: 'My hometown in the hills' },
    ],
  },

  dubai: {
    label:       'Dubai Adventures',
    description: 'Skylines, desert &amp; experiences in the UAE',
    icon:        'fa-city',
    accentColor: '#025a8e',
    basePath:    'assets/images/gallery/dubai/',
    images: [
      // { file: 'burj.jpg',    caption: 'Burj Khalifa at sunset' },
      // { file: 'desert.jpg',  caption: 'Desert safari evening' },
      // { file: 'marina.jpg',  caption: 'Dubai Marina walk' },
    ],
  },

  hotel: {
    label:       'Hotel Moments',
    description: 'Behind the scenes of 5-star service',
    icon:        'fa-concierge-bell',
    accentColor: '#046e50',
    basePath:    'assets/images/gallery/hotel/',
    images: [
      // { file: 'lobby.jpg',   caption: 'Hotel lobby setup' },
      // { file: 'service.jpg', caption: 'Fine dining service' },
      // { file: 'team.jpg',    caption: 'Our amazing team' },
    ],
  },

  food: {
    label:       'Food &amp; Culture',
    description: 'Dal bhat to shawarma — culinary life',
    icon:        'fa-utensils',
    accentColor: '#6d28d9',
    basePath:    'assets/images/gallery/food/',
    images: [
      // { file: 'dalbhat.jpg',   caption: 'Dal Bhat — the power set' },
      // { file: 'shawarma.jpg',  caption: 'Late-night shawarma, Dubai' },
      // { file: 'momo.jpg',      caption: 'Homemade momo session' },
    ],
  },

};
