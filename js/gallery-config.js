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
      { file: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop', caption: 'Himalayan peaks at sunrise' },
      { file: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=400&fit=crop', caption: 'Traditional Nepali temple' },
      { file: 'https://images.unsplash.com/photo-1504681869696-d977e3ee0b41?w=500&h=400&fit=crop', caption: 'Mountain village life' },
      { file: 'https://images.unsplash.com/photo-1511316695145-4992006ffddb?w=500&h=400&fit=crop', caption: 'Pokhara lakeside beauty' },
    ],
  },

  dubai: {
    label:       'Dubai Adventures',
    description: 'Skylines, desert &amp; experiences in the UAE',
    icon:        'fa-city',
    accentColor: '#025a8e',
    basePath:    'assets/images/gallery/dubai/',
    images: [
      { file: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&h=400&fit=crop', caption: 'Dubai skyline glow' },
      { file: 'https://images.unsplash.com/photo-1494525548252-8c8c51131f14?w=500&h=400&fit=crop', caption: 'Desert safari adventure' },
      { file: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=500&h=400&fit=crop', caption: 'Dubai Marina vibes' },
      { file: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=400&fit=crop', caption: 'Arabian Gulf sunset' },
    ],
  },

  hotel: {
    label:       'Hotel Moments',
    description: 'Behind the scenes of 5-star service',
    icon:        'fa-concierge-bell',
    accentColor: '#046e50',
    basePath:    'assets/images/gallery/hotel/',
    images: [
      { file: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=400&fit=crop', caption: 'Luxury hotel lobby elegance' },
      { file: 'https://images.unsplash.com/photo-1512369541501-4d8e9209454d?w=500&h=400&fit=crop', caption: 'Fine dining experience' },
      { file: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&h=400&fit=crop', caption: 'Professional hospitality service' },
      { file: 'https://images.unsplash.com/photo-1578512521995-87d7bef1d0b2?w=500&h=400&fit=crop', caption: 'Elegant room ambiance' },
    ],
  },

  food: {
    label:       'Food &amp; Culture',
    description: 'Dal bhat to shawarma — culinary life',
    icon:        'fa-utensils',
    accentColor: '#6d28d9',
    basePath:    'assets/images/gallery/food/',
    images: [
      { file: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=400&fit=crop', caption: 'Dal Bhat — comfort in a bowl' },
      { file: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=400&fit=crop', caption: 'Street food flavors' },
      { file: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=400&fit=crop', caption: 'Culinary art on plate' },
      { file: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=400&fit=crop', caption: 'Fusion dining experience' },
    ],
  },

};
