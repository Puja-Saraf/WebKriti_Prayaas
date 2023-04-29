import React, { useEffect, useState } from "react";
import MultiSlider from "../components/MultiSlider";
import { api } from "../api";
// const stories = [
//   {
//     img_url: "",
//     story_name: "Swati’s treatment",
//     story_desc:
//       "Swati Maurya, a student of Prayaas, was suffering from acute anaemia and was admitted in Swaroop Rani Hospital, Allahabad for around 9 days. Besides having other complications, her haemoglobin percentage had dropped down to as low as 5.2%. Her family was not in a position to deal with the situation financially. Prayaas helped the family by providing monetary support and blood units, owing to which the girl was able to recover and got discharged. Swati is one of the best students of Prayaas now and has continued to excel in her examinations.",
//   },
//   {
//     img_url: "",
//     story_name: "Swati’s treatment",
//     story_desc:
//       "Swati Maurya, a student of Prayaas, was suffering from acute anaemia and was admitted in Swaroop Rani Hospital, Allahabad for around 9 days. Besides having other complications, her haemoglobin percentage had dropped down to as low as 5.2%. Her family was not in a position to deal with the situation financially. Prayaas helped the family by providing monetary support and blood units, owing to which the girl was able to recover and got discharged. Swati is one of the best students of Prayaas now and has continued to excel in her examinations.",
//   },
//   {
//     img_url: "",
//     story_name: "Swati’s treatment",
//     story_desc:
//       "Swati Maurya, a student of Prayaas, was suffering from acute anaemia and was admitted in Swaroop Rani Hospital, Allahabad for around 9 days. Besides having other complications, her haemoglobin percentage had dropped down to as low as 5.2%. Her family was not in a position to deal with the situation financially. Prayaas helped the family by providing monetary support and blood units, owing to which the girl was able to recover and got discharged. Swati is one of the best students of Prayaas now and has continued to excel in her examinations.",
//   },
//   {
//     img_url: "",
//     story_name: "Swati’s treatment",
//     story_desc:
//       "Swati Maurya, a student of Prayaas, was suffering from acute anaemia and was admitted in Swaroop Rani Hospital, Allahabad for around 9 days. Besides having other complications, her haemoglobin percentage had dropped down to as low as 5.2%. Her family was not in a position to deal with the situation financially. Prayaas helped the family by providing monetary support and blood units, owing to which the girl was able to recover and got discharged. Swati is one of the best students of Prayaas now and has continued to excel in her examinations.",
//   },
// ];

export default function Stories() {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    let isSubscribed = true;
    const fetchData = async () => {
      const data = await api.getAllStories();

      if (isSubscribed) {
        setStories(data.data);
      }
    };
    fetchData().catch(console.error);

    return () => (isSubscribed = false);
  }, []);
  if (stories.length === 0) {
    return <></>;
  }
  return (
    <section id="stories">
      <div className="mt-16 mb-16 lg:mt-24 lg:mb-24 w-[80%] m-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#2C3734]">
          Our Success Stories
        </h1>
        <div className="m-auto mt-10 hidden lg:block">
          <MultiSlider items={stories} count={3} event={false} />
        </div>
        <div className="m-auto mt-10 block lg:hidden">
          <MultiSlider items={stories} count={2} event={false} />
        </div>

        <div className="flex justify-center mt-12">
          <button className="py-2 px-6 text-center text-base leading-snug hover:opacity-75 bg-[#F7D770] text-[#636363]">
            Add Story
          </button>
        </div>
      </div>
      <div className="border-2 border-solid border-[#636363] w-[90%] opacity-25 m-auto rounded-xl"></div>
    </section>
  );
}
