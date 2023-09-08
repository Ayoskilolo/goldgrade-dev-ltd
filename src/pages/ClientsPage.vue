<template>
  <q-page class="section">
    <div class="space">
      <div class="cont">
        <section class="hero-text">
          <h4>OUR CLIENTS</h4>
          <p>
            At Goldgrade, we're proud of our diverse client base, trusting us to
            boost their performance and success. We serve organizations of all
            sizes, adapting our expertise to their unique needs. We stand out
            with a comprehensive approach to performance improvement, focusing
            on organizational, team, and individual levels. Our seasoned experts
            collaborate closely with clients, delivering practical solutions in
            strategy, implementation, processes, and skill development.
          </p>
          <p>
            Choose Goldgrade for a dedicated partner in your journey to success.
            Join our satisfied clients who've witnessed remarkable
            transformations. Together, we'll elevate your performance and secure
            a prosperous future.
          </p>
          <p>Some of our clients include:</p>
        </section>
        <section class="customer-grid">
          <div class="grid">
            <div class="customer">
              <q-img
                :no-spinner="true"
                src="/swipha-customer.png"
                img-class="cus-img"
                fit="contain"
                style="width: 100%; height: auto; max-height: 150px"
              />
              <span>SWIPHA</span>
            </div>

            <div class="customer">
              <q-img
                :no-spinner="true"
                src="/county-customer.png"
                img-class="cus-img"
                fit="contain"
                style="width: 100%; height: auto; max-height: 150px"
              />
              <span>County Choice Farms</span>
            </div>
            <div class="customer">
              <q-img
                :no-spinner="true"
                src="/kimberly-customer.png"
                img-class="cus-img"
                fit="contain"
                style="width: 100%; height: auto; max-height: 150px"
              />
              <span>Kimberly Clark</span>
            </div>
            <div class="customer">
              <q-img
                :no-spinner="true"
                src="/lirs-customer.png"
                img-class="cus-img"
                fit="contain"
                style="width: 100%; height: auto; max-height: 150px"
              />
              <span>Lagos IRS</span>
            </div>
            <div class="customer">
              <q-img
                :no-spinner="true"
                src="/harvestfield-customer.png"
                img-class="cus-img"
                fit="contain"
                style="width: 100%; height: auto; max-height: 150px"
              />
              <span>Harvestfield Industries</span>
            </div>
            <div class="customer">
              <q-img
                :no-spinner="true"
                src="/saro-customer.png"
                img-class="cus-img"
                fit="contain"
                style="width: 100%; height: auto; max-height: 150px"
              />
              <span>Saro Lifecare</span>
            </div>
            <div class="customer">
              <q-img
                :no-spinner="true"
                src="/fmn-customer.png"
                img-class="cus-img"
                fit="contain"
                style="width: 100%; height: auto; max-height: 150px"
              />
              <span>FMN</span>
            </div>
            <div class="customer">
              <q-img
                :no-spinner="true"
                src="/polaris-customer.png"
                img-class="cus-img"
                fit="contain"
                style="width: 100%; height: auto; max-height: 150px"
              />
              <span>Polaris Bank</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
.hero-text {
  padding: 2%;
  color: #c19f62;
}
.hero-text > p {
  font-size: 1.3em;
}
.space {
  display: flex;
  align-items: center;
  justify-content: center;
}
.cont {
  /* padding: 5rem; */
  width: 90%;
  /* background-color: green; */
}

.customer {
  position: relative;
  overflow: hidden;
  font-size: 30px;
  text-align: center;
  transition: 0.3s;
}

.customer img {
  max-width: 100%;
  /* transition: all 0.2s; */
  display: block;
  width: 100%;
  /* transform: scale(1); */
}

.customer img:hover {
  transform: scale(1.2);
}

.customer-grid {
  padding: 0%;
  margin-bottom: 10%;
}

.customer-grid > .grid {
  width: 100%;
  /* background-color: pink; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  column-gap: 20px;
  row-gap: 15px;
}

.grid > .customer {
  min-height: 300px;
  color: #c19f62;
  /* border: 1px solid #c19f62; */
  /* background-color: #fff; */
}
.customer > p {
  padding: 4%;
}

.customer:hover {
  color: #681c26;
  background-color: #fff;
  transform: scale(1.1);
  /* border: 2px solid #c19f62; */
}
</style>
