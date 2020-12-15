<template>
	<view>
		<view class="top-line">
			<image src="../../../static/images/Tabs/air.png" mode="aspectFit" class="top-icon"></image>
			<view class="flex-item top-line-style">关注</view>
			<view class="flex-item top-line-style">推荐</view>
			<view class="flex-item top-line-style">同城</view>
		</view>
	<!-- 搜索 -->
	<view class="pa24">
		<view class="bg-efefef pa14 flex search fs26">
			<image src="../../../static/images/Tabs/search.png" mode="aspectFit" class="search-icon mlf14"></image>
			<input type="text" value="" placeholder="今天想去哪儿玩？" />
		</view>
	</view>
		<!-- 轮播图 -->
					<mosoweSwiper 
						:lists="banner"
						:touchable="false"
						indicator="dots"
						imageKey="image"
						previewImage
						pyramid
						pyramidMargin="90rpx"/>
		
		<!-- 分类 -->
		<view class="fenlei-title">
			分类
		</view>
		<view class="fenlei-div1">
			<view class="fenlei-div-demo">游玩景点</view>
			<view class="fenlei-div-demo">娱乐景点</view>
		</view>
		<!-- 分类轮播图 -->
		<view>
		<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120">
			<view class="scroll-view-item_H" ><image src="../../../static/images/banner1.png" mode=""></image>
				<view class="scroll-view-item_name">金沙角</view>
			</view>
			<view class="scroll-view-item_H"> <image src="../../../static/images/banner2.png" mode=""></image>
				<view class="scroll-view-item_name">金沙角</view>
			</view>
			<view class="scroll-view-item_H"><image src="../../../static/images/banner3.png" mode=""></image>
				<view class="scroll-view-item_name">金沙角</view>
			</view>
		</scroll-view>
		<view class="fenlei-dital">
			<view class="fenlei-dital-word">柳州游玩</view>
			<view class="fenlei-dital-number"><image src="../../../static/images/Tabs/see.png" mode="aspectFit" class="see-icon"></image>15600</view>
			<view class="fenlei-dital-day">2020-12-12</view>
		</view>
	</view>
	  <!-- 内容介绍1 -->
	  <view class="content">
		  <view class="content-word">柳州必玩景点，你值得拥有</view>
		  <view class="content-numbAndDay">
		  <view class="fenlei-dital-number"><image src="../../../static/images/Tabs/see.png" mode="aspectFit" class="see-icon"></image>13897</view>
		  <view class="content-dital-day">2020-12-25</view>
		  </view>
	  </view>
	  <!-- 内容介绍2 -->
	  <view class="content">
	  		  <view class="content-word">柳州h好漂亮，你值得去看一看</view>
	  		  <view class="content-numbAndDay">
	  		  <view class="fenlei-dital-number"><image src="../../../static/images/Tabs/see.png" mode="aspectFit" class="see-icon"></image>13897</view>
	  		  <view class="content-dital-day">2020-12-25</view>
	  		  </view>
	  </view>
	  <!-- 内容介绍3 -->
	  <view class="content">
	  		  <view class="content-word">柳州h好漂亮，你值得去看一看</view>
	  		  <view class="content-numbAndDay">
	  		  <view class="fenlei-dital-number"><image src="../../../static/images/Tabs/see.png" mode="aspectFit" class="see-icon"></image>13897</view>
	  		  <view class="content-dital-day">2020-12-25</view>
	  		  </view>
	  </view>
	  <!-- 内容介绍6 -->
	  <view class="content">
	  		  <view class="content-word">柳州h好漂亮，你值得去看一看</view>
	  		  <view class="content-numbAndDay">
	  		  <view class="fenlei-dital-number"><image src="../../../static/images/Tabs/see.png" mode="aspectFit" class="see-icon"></image>13897</view>
	  		  <view class="content-dital-day">2020-12-25</view>
	  		  </view>
	  </view>
	  <!-- 内容介绍5 -->
	  <view class="content">
	  		  <view class="content-word">柳州h好漂亮，你值得去看一看</view>
	  		  <view class="content-numbAndDay">
	  		  <view class="fenlei-dital-number"><image src="../../../static/images/Tabs/see.png" mode="aspectFit" class="see-icon"></image>13897</view>
	  		  <view class="content-dital-day">2020-12-25</view>
	  		  </view>
	  </view>
	</view>
</template>

<script>
	import mosoweSwiper from "@/components/mosowe-swiper/mosowe-swiper.vue";		//轮播图
	import dataText from "@/common/dataText.js";		//数据
	export default {
		components:{mosoweSwiper},
		data() {
			return {
				banner:[]
			}
		},
		onLoad(){
			const dataTexts = new dataText();
			this.banner = dataTexts.bannerList();		//轮播图数据
			console.log('轮播图数据');
			console.log(this.banner);
		},
		methods: {	
	
			    }
		}
</script>

<style>
	page {
			background-color: #f5f5f5;
		}
      .search{
		  border-radius: 50rpx;
		  display: flex;
	  }
	  .top-icon{
		 width: 75rpx;
		 height: 60rpx; 
		 padding: 4px 0 0 15px;
	  }
	  .search-icon{
	  		  width: 25rpx;
			  height: 40rpx;	  
	  }
	  .see-icon{
		  width: 40rpx;
		  height: 35rpx;
	  }
	  .list {
	  		padding: 9rpx;
	  	}
	 .top-line{
	 		  background-color: #00AA00;
	 		  display: flex;
	 }
	 .top-line-style{
		 margin: 5px;
		 padding-left:30px;
		 font-size: 17px;
		 color: #FFFFFF;
	 }
	 .fenlei-title{
		 margin: 15px 20px 0 20px;
		 padding-top: 10px;
		 font-weight:bold;
		 font-size: 18px;
		 color: #808080;
		 border-top: 1px solid #C8C7CC;
	 }
	 .fenlei-div1{
		  border: 1px ridge #C8C7CC;
		  margin: 10px 20px 0 20px;  
		  padding: 8px;
		  display: flex;
	 }
	 .fenlei-div-demo{
		 margin: 2px 20px 2px 40px;
		 color: #808080;
	 }
	 .scroll-view_H{
		    margin-top: 12px;
			width: 100%;
		  	height: auto;
		  	overflow: hidden;
		   	white-space: nowrap; 
	 }
	 .scroll-view-item_H{
		   display: inline-block;
			height: 120px;
			border: 2px solid #F1F1F1;
	 }
	 .scroll-view-item_name{
		 text-align: center;
		  color: #808080;
		  font-size: 13px;
		  font-weight: bold;
	 }
	 .fenlei-dital{
		  display: flex;
		  margin: 15px 20px 0 20px;
		  padding-bottom: 8px;
		  font-size: 11px;
		  color: #808080;	
		  border-bottom: 2px solid #e6e6e6;
	 }
	 .fenlei-dital-word{
		 margin-right: 10px;
		 background-color: #e6e6e6;
		 border-radius: 50rpx;
		 padding: 2px 5px 0 5px;
	 }
	 .fenlei-dital-number{
		 margin:0 10px 0 0;
	 }
	 .fenlei-dital-day{
		 padding: 0 0 0 92px;
		 text-align: right;
	 }
	 .content{
		 margin: 15px 20px 0 20px;
		 padding-bottom: 8px;
		 font-size: 15px;
		 color: #808080;	
		 border-bottom: 2px solid #e6e6e6;
		 }
		 .content-numbAndDay{
		padding: 2px 0 2px 15px;
		display: flex;
		 }
		 .content-dital-day{
		float: right;
		padding: 0 0 0 110px;
		}
	</style>
