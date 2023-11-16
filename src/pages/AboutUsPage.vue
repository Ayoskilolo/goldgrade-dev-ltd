<template>
  <q-page class="aboutus section">
    <section>
      <div class="hero"><p>Who We Are</p></div>
      <div style="text-align: justify; padding-bottom: 2rem">
        Goldgrade Development Limited is a performance improvement advisory
        company focused on enhancing performance at organisational, team and
        individual levels. We work with our clients to determine precisely where
        and how to prime and leverage their organizations for major improvements
        in market share, revenue and costs optimisation.
      </div>
    </section>
    <section>
      <div></div>

      <div class="row items-center item">
        <p class="col-md-5 col-sm-12"><b>Our Aim</b></p>
        <p class="col-md-7 col-sm-12">
          Our aim is to improve overall business performance by examining and
          providing practical solutions and intervention on strategy and
          implementation, processes and procedures, knowledge, skills and
          competences in our area of focus.
        </p>
      </div>
      <div class="row items-center item">
        <p class="col-md-5 col-sm-12"><b>Our Vision</b></p>
        <p class="col-md-5 col-sm-12">
          To grow the quality and competence of business managers.
        </p>
      </div>
      <div class="row items-center item">
        <p class="col-md-5 col-sm-12"><b>Our Mission</b></p>
        <p class="col-md-5 col-sm-12">
          To improve overall business performance of our client through a team
          of dedicated associates and partners using the best of processes. in
          the most sustainable way, and enjoying ourselves while doing this.
        </p>
      </div>
    </section>
    <section class="director">
      <div
        style="font-family: NeurialRegular; font-size: calc(15px + 0.390625vw)"
      >
        <p>
          Tokunbo Adegboye is an experienced senior business executive. He has
          held several management positions in business strategy development and
          implementation, sales, marketing, customer service and business
          development. He has extensive experience in business start-up and
          capacity development He has work experience in various industry
          sectors including pharmaceutical, agro-allied, Fast Moving Consumer
          Goods, financial services. training and consulting and social
          marketing.
        </p>
      </div>
      <div style="text-align: center">
        <q-img src="/director.jpg" spinner-color="white" style="width: 250px" />

        <p
          style="
            font-family: NeurialRegular;
            font-size: calc(15px + 0.390625vw);
            margin: 0;
          "
        >
          Tokunbo Adegboye
        </p>
        <span>Managing Director</span>
      </div>
    </section>
  </q-page>
</template>

<style scoped>
.aboutus {
  background-color: white;
  color: black;
}

.section {
  padding: 2rem 8%;
  font-size: 20px;
  color: black;
}

.hero {
  padding: 0;
  display: flex;
  height: 20vh;
  color: black;
  background-color: white;
  align-items: center;
  font-size: calc(70px + 0.390625vw);
}

.hero p {
  font-family: Neurial;
}

.item {
  border-bottom: 1px solid #c19f62;
  height: max-content;
  padding: 1rem 3%;
}

.director {
  display: flex;
  gap: 10rem;
  justify-content: space-between;
  margin-top: 4rem;
  text-align: justify;
}

.director span {
  font-size: calc(10px + 0.390625vw);
  font-family: NeurialLight;
}

@media only screen and (max-width: 848px) {
  .director {
    display: flex;
    flex-direction: column-reverse;
    gap: 2rem;
    justify-content: space-between;
    margin-top: 4rem;
    text-align: justify;
  }

  .hero {
    font-size: calc(48px + 0.390625vw);
  }
}
</style>
