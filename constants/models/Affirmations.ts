export interface AffirmationCategory {
  title: string;
  previews: GalleryPreview[];
}

export interface GalleryPreview {
  id: number;
  text: string;
  image: any;
}
