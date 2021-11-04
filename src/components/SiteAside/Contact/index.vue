<template>
  <div class="contact-container">
      <li>
        <a target="_blank" :href="data.github">
          <div class="icon">
            <Icon type="github"/>
          </div>
          <span>{{data.githubName}}</span>
        </a>
      </li>
      <li>
        <a :href="`mailto:${data.mail}`">
          <div class="icon">
            <Icon type="mail"/>
          </div>
          <span>{{data.mail}}</span>
        </a>
      </li>
      <li>
        <a :href="`tencent://message/?Menu=yes&uin=${data.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`">
          <div class="icon">
            <Icon type="qq"/>
          </div>
          <span>{{data.qq}}</span>
        </a>
        <div class="pop">
          <img :src="data.qqQrCode" alt="">
        </div>
      </li>
      <li>
        <a>
          <div class="icon weixin">
            <Icon type="weixin"/>
          </div>
          <span>{{data.weixin}}</span>
        </a>
        <div class="pop">
          <img :src="data.weixinQrCode" alt="">
        </div>
      </li>
  </div>
</template>
<script>
import Icon from "@/components/Icon"
import { mapState } from 'vuex'
export default {
  components:{
    Icon,
  },
  computed:mapState("setting",["data"])
}
</script>
<style scoped lang="less">
@import "~@/styles/var.less";
@import "~@/styles/global.less";
.contact-container{
  color:@gray;
  list-style: none;
  padding:20px;
  margin:0;
  @itemHeight:30px;
  li{
    font-size: 18px;
    height: @itemHeight;
    line-height: @itemHeight;
    margin: 14px 0;
    position: relative;
    &:hover{
      .pop{
        transform:scaleY(1);
      }
    }
  }
  a{
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
  }
  .icon{
    width: 36px;
    font-size: 24px;
  }
  .weixin{
      font-size: 28px;
      text-indent: -2.5px;
  }
  .pop{
      left: 0;
      bottom:@itemHeight + 5px;
      background: #fff;
      position: absolute;
      padding:5px 10px;    
      border-radius: 8px;
      transform: scaleY(0);
      transform-origin: center bottom;
      transition: 0.4s;
      &::after{
        content:"";
        position: absolute;
        left: 50%;
        width: 8px;
        height: 8px;
        transform: translateX(-50%) rotate(45deg);
        background: #fff;
        bottom: -4px;
      }
    img{
      width: 150px;
      height: 150px;
    }
  }
}
</style>