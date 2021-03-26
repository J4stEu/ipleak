<template>
  <div id="MainPg_wrapper">
    <section id="MainPg_section">
      <div class="mainGlass">
        <div class="area1">
          <p class="ip"><span>IP:</span>{{user.userData.ip}}</p>
          <p class="country"><span>Country:</span>{{user.userData.country}}</p>
          <p class="region"><span>Region:</span>{{user.userData.region}}</p>
          <p class="city"><span>City:</span>{{user.userData.city}}</p>
          <p class="timezone"><span>Timezone:</span>{{user.userData.timezone}}</p>
          <p class="org"><span>Provider:</span>{{user.userData.org}}</p>
        </div>
        <div class="area2">
          <p class="isProxy"><span>isProxy:</span>{{user.userProxy.isProxy}}</p>
          <p class="proxyHeaders"><span>proxyHeaders:</span>{{user.userProxy.proxyHeaders}}</p>
          <p class="realIp"><span>realIp:</span>{{user.userProxy.realIp}}</p>
          <p class="realIpInfo"><span>realIpInfo:</span>{{user.userProxy.realIpInfo}}</p>
        </div>
        <div class="area2">
          <p class="userTOR"><span>userTOR:</span>{{user.userTOR}}</p>
        </div>
        <div class="area3">
          <p class="userVPN"><span>isProxy:</span>{{user.userVPN.isVPN}}</p>
        </div>
        <!--<div class="secondGlass">
          <a v-bind:href="creator.link" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="st0" d="M13.162 18.994c.609 0 .858-.406.851-.915-.031-1.917.714-2.949 2.059-1.604 1.488 1.488 1.796 2.519 3.603 2.519h3.2c.808 0 1.126-.26 1.126-.668 0-.863-1.421-2.386-2.625-3.504-1.686-1.565-1.765-1.602-.313-3.486 1.801-2.339 4.157-5.336 2.073-5.336h-3.981c-.772 0-.828.435-1.103 1.083-.995 2.347-2.886 5.387-3.604 4.922-.751-.485-.407-2.406-.35-5.261.015-.754.011-1.271-1.141-1.539-.629-.145-1.241-.205-1.809-.205-2.273 0-3.841.953-2.95 1.119 1.571.293 1.42 3.692 1.054 5.16-.638 2.556-3.036-2.024-4.035-4.305-.241-.548-.315-.974-1.175-.974h-3.255c-.492 0-.787.16-.787.516 0 .602 2.96 6.72 5.786 9.77 2.756 2.975 5.48 2.708 7.376 2.708z"/></svg></a>
        </div>
        <div class="thirdGlass">
          <p>{{creator.copyright}}</p>
        </div>-->
      </div>
    </section>
  </div>
</template>

<script>
//import { mapState } from 'vuex';

export default {
  data: function () {
    return {
      creator: {
        copyright: '©J4stEu',
        link: 'https://vk.com/id188091326',
      }
    }
  },
  computed: {
    user() {
      return this.$store.getters.data;
    }
    /*localComputed () { 
      
     },
    // смешиваем результат mapState с внешним объектом
    ...mapState({
      user: state => state.data,
    })*/
  },
  created() {
    this.$store.dispatch('initUserData')
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #MainPg_wrapper {
    overflow: hidden;
  }
  #MainPg_section {
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
    z-index: 1;
    background: linear-gradient(
      to right,
      #56CCF2,
      #2F80ED
    );
  } 
  .mainGlass {
    position: relative;
    //width: 40%;
    //min-height: 60vh; 
    display: grid;
    grid-template-columns: repeat(4, $spaceVal * 10 + px);
    grid-auto-rows: #{$spaceVal * 10 + px};
    grid-gap: $spaceVal + px;
    justify-items: center;
    align-items: center;
    //align-items: center;
    //background: white;
    //background: linear-gradient(
      //to right bottom,
      //rgba(255, 255, 255, 0.7),
      //rgba(255, 255, 255, 0.3),
    //);
    //backdrop-filter: blur(2rem);
    //border-radius: $spaceVal + px;
    //z-index: 3;

    @media screen and (min-width:0px) and (max-width:1349px) {
      grid-template-columns: repeat(4, $spaceVal * 8 + px);
      grid-auto-rows: #{$spaceVal * 8 + px};
    }

    div {
      width: calc(100% - 60px);
      height: calc(100% - 60px);
      padding: $spaceVal + px;
      border-radius: $spaceVal + px;
      background: linear-gradient(
        to right bottom,
        rgba(255, 255, 255, 0.7),
        rgba(255, 255, 255, 0.3),
      );
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      overflow: hidden;

      p {
        margin: 5px;
        @media screen and (min-width:0px) and (max-width:1349px) {
          font-size: 0.9em;
        }
        color: green;

        span {
          color: black;
          padding-right: 5px;
        }
      }
    }
  }
  /*.secondGlass, .thirdGlass {
    background: white;
    background: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.1)
    );
    backdrop-filter: blur(2rem);
    height: 8rem;
    width: 8rem;
    position: absolute;
    border-radius: $spaceVal + px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    p {
      font-size: 1.5em;
      font-weight: $fBold;
    }
    svg {
      width: 80px;
      height: 80px;
    }
  }
  .secondGlass {
    top: calc(100% - 4rem);
    right: 30px;
  }
  .thirdGlass {
    top: calc(100% - 4rem);
    right: calc(8rem + 60px);
  }*/
</style>
