# Adding Media for New Programs

## 📋 Instructions for Adding Images and Videos

### 1. Emergency Safety Training Program (January 2025)

**Program Title:** आपत्कालीन सुरक्षा प्रशिक्षण व सेफ्टी किट वाटप - जानेवारी 2025

**To add 3 images:**

1. Copy your 3 images to: `src/assets/images/`
2. Name them: `emergency-training-1.jpeg`, `emergency-training-2.jpeg`, `emergency-training-3.jpeg`
3. Add them to `src/assets/images/images.ts` (import statements)
4. Update `src/data/programs.ts` - find the first program and add the image names to the `images` array

### 2. Health Training Camp (June 2025)

**Program Title:** आरोग्य विषयी प्राथमिक प्रशिक्षण शिबिर - जून 2025

**To add 2 images and 1 video:**

1. Copy your 2 images to: `src/assets/images/`
2. Name them: `health-training-1.jpeg`, `health-training-2.jpeg`
3. Add them to `src/assets/images/images.ts` (import statements)
4. For the video: Get the embed URL from YouTube/other platform
5. Update `src/data/programs.ts` - find the second program and:
   - Add image names to the `images` array
   - Add video embed URL to the `videoUrl` field

## 🔧 How to Update the Files

### Step 1: Add Images to images.ts

Open `src/assets/images/images.ts` and add import statements:

```typescript
// Emergency Training Images
export { default as emergencyTraining1 } from "./emergency-training-1.jpeg";
export { default as emergencyTraining2 } from "./emergency-training-2.jpeg";
export { default as emergencyTraining3 } from "./emergency-training-3.jpeg";

// Health Training Images
export { default as healthTraining1 } from "./health-training-1.jpeg";
export { default as healthTraining2 } from "./health-training-2.jpeg";
```

### Step 2: Update programs.ts

Open `src/data/programs.ts` and:

1. Import the new images at the top:

```typescript
import {
  // ... existing imports
  emergencyTraining1,
  emergencyTraining2,
  emergencyTraining3,
  healthTraining1,
  healthTraining2,
} from "../assets/images/images";
```

2. Update the first program (Emergency Training):

```typescript
{
  title: 'आपत्कालीन सुरक्षा प्रशिक्षण व सेफ्टी किट वाटप - जानेवारी 2025',
  // ... existing content
  images: [emergencyTraining1, emergencyTraining2, emergencyTraining3],
  // ... rest of the program
}
```

3. Update the second program (Health Training):

```typescript
{
  title: 'आरोग्य विषयी प्राथमिक प्रशिक्षण शिबिर - जून 2025',
  // ... existing content
  images: [healthTraining1, healthTraining2],
  videoUrl: 'YOUR_VIDEO_EMBED_URL_HERE', // Replace with actual embed URL
  // ... rest of the program
}
```

## 📺 Video Embed URL Format

For YouTube videos, use the embed format:

- Original: `https://www.youtube.com/watch?v=VIDEO_ID`
- Embed: `https://www.youtube.com/embed/VIDEO_ID`

For other platforms, use their respective embed URLs.

## ✅ After Making Changes

1. Run `npm run dev` to test locally
2. Check that images load correctly
3. Verify video plays properly
4. Run `npm run build` to build for production

## 🎯 Current Status

✅ Program structure created
✅ Component support for images and videos added
✅ TypeScript interfaces updated
✅ Programs page enhanced with new features
⏳ **PENDING:** Add actual images and video URLs

The programs are now ready to display your media content!
