import React from "react";
import aboutImg from "../images/about.jpg";
import Title from "./Title";

const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            CloudTrail କୁ ସ୍ Welcome ାଗତ, ଯେଉଁଠାରେ ଅବିସ୍ମରଣୀୟ ଯାତ୍ରା ଅପେକ୍ଷା
            କରିଥାଏ! ଆମେ ମାନେ କେବଳ ଏକ ଟୁର୍ କମ୍ପାନୀଠାରୁ ଅଧିକ; ଆମେ ଆବିଷ୍କାର କରିବା
            ପାଇଁ ତୁମର ଗେଟୱେ | ଦୁନିଆର ସବୁଠାରୁ ଆକର୍ଷଣୀୟ ଗନ୍ତବ୍ୟସ୍ଥଳ ଏବଂ ସ୍ଥାୟୀ
            ସୃଷ୍ଟି | ସ୍ମୃତି ଭ୍ରମଣ ପାଇଁ ଏକ ଉତ୍ସାହ ଏବଂ ଏକ ପ୍ରତିବଦ୍ଧତା ସହିତ
            ପ୍ରତିଷ୍ଠିତ | ଉତ୍କର୍ଷତା, କ୍ଲାଉଡ୍ ଟ୍ରେଲ୍ ଆପଣଙ୍କୁ ଯୋଗାଇବା ପାଇଁ
            ଉତ୍ସର୍ଗୀକୃତ | ଅସାଧାରଣ ଅନୁଭୂତି ଯାହା ଆପଣଙ୍କୁ ପ୍ରେରଣା ଯୋଗାଇବ ଏବଂ ଆଗ୍ରହୀ
            କରିବ | ଅଧିକ
          </p>
          <a href="#about" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
