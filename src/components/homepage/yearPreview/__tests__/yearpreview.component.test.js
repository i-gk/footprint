import React from "react";
import { render, cleanup } from "@testing-library/react";

import YearPreview from "../yearpreview.component";

afterEach(cleanup);

const testPreviewData = {
 title: "Ella Zip Line",
 year: "2020",
 location: {
  reigon: "Ella",
  country: "Sri Lanka",
 },
 captures: [
  {
   img:
    "https://instagram.fcmb2-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/73108061_457812908266773_2015363250357741902_n.jpg?_nc_ht=instagram.fcmb2-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=ITdA1GHsnNsAX8QeiTz&oh=bb2c85911e9adb8e6d9ca5ec25957c0f&oe=5F35F791",
   title: "Breakfast",
  },
  {
   img:
    "https://instagram.fcmb2-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/75362592_445466406344401_5843825975982181800_n.jpg?_nc_ht=instagram.fcmb2-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=BauGkrek8E4AX8TQC95&oh=489376057ec986ad5343428ef96ad73c&oe=5F331E75",
   title: "Tasty burger",
  },
  {
   img:
    "https://instagram.fcmb2-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/59914744_293079241575790_3754566618098631869_n.jpg?_nc_ht=instagram.fcmb2-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=2agzyMYv0UsAX82Jb2v&oh=faadc9bd4c625d63d7fe155708023925&oe=5F35E320",
   title: "Camera",
  },
  {
   img:
    "https://instagram.fcmb2-1.fna.fbcdn.net/v/t51.2885-15/e35/36148982_399692350519771_5182777498970095616_n.jpg?_nc_ht=instagram.fcmb2-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=8km2I9SBbrIAX-v-6lW&oh=266b38443e9c0288d993619d86a9734a&oe=5F3489E8",
   title: "Morning",
  },
 ],
};
describe("Year preview component", () => {
 it("Should render without crashing", () => {
  const { getByText } = render(
   <YearPreview previewDetails={testPreviewData} expanded={false} />
  );
  expect(getByText(testPreviewData.title)).not.toBeNull();
 });
});
