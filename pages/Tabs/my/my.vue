<template>
<view>
	<view class="bg-00AA00 top-title">
		<view class="touxiang">
			<image src="../../../static/images/Tabs/touxiang.png" mode="aspectFit" class="touxiang-img"></image>
			<text class="name">名称是啥呢</text>
			  <view class="caidan">
			       <navigator url=""> <text class="caidan-detal">关注：16</text> </navigator>
				   <navigator url=""> <text class="caidan-detal">粉丝：12</text> </navigator>
				   <navigator url=""> <text class="caidan-detal">获赞数：10</text> </navigator>
			    </view>
				<view class="caidan-contant">
					因为有个性，所以不签名。
				</view>
				<view class="caidan-edit">
					<navigator url=""> <text class="caidan-edit-detal">编辑资料</text> </navigator>
				</view>
		</view>
		<view class="titile-content">
			<navigator url=""> <text class="titile-content-detal">动态</text> </navigator>
			<navigator url=""> <text class="titile-content-detal">收藏</text> </navigator>
			<navigator url=""> <text class="titile-content-detal">赞过</text> </navigator>
		</view>
	</view>
	<!-- 图片 -->
	<view class="show-images">
		<view class="" v-for="(item, index) in myImgList" :key="index">
			<image :src="item.image" mode="aspectFill" style="width: 300rpx; height: 220rpx;" class="show-images-detal"></image>
			<image :src="item.image" mode="aspectFill" style="width: 300rpx; height: 220rpx;" class="show-images-detal"></image>
		</view>
	</view>
	
</view>
</template>

<script>
	import dataText from "@/common/dataText.js";		//数据
	export default {
		data() {
			return {
				myImgList:[],
			}
		},
		methods: {
			
		},
		onLoad(){
			const dataTexts = new dataText();
			this.myImgList = dataTexts.myImgList();
			console.log(this.myImgList)
		},
	}
</script>

<style>
	.top-title{
		height: 273px;
	}
	.touxiang{
	}		
	.touxiang-img{
		width: 77px;
		height:80px;
		margin: 50px 50px 0px 125px;
		border-radius:30px;
	}
	.name{
		margin: 2px 50px 0px 125px;
		color: #E6E6E6;
		font-size: 13px;
		font-family: Georgia;
	}
	.caidan{
		 display: flex;
		 margin: 10px 50px 0px 60px;
  		 color: #E6E6E6;
 		 font-size: 13px;
		 font-family: Georgia;
		 height: 25px;
		 width: 250px;
	}
	.caidan-detal{
		padding-right: 20px;
	}
	.caidan-contant{
		margin: 2px 10px 0px 40px;
		color: #E6E6E6;
		font-size: 13px;
		font-family: Georgia;
	}
	.caidan-edit{
		width: 60px;
		height: 20px;
		border: 1px solid #E6E6E6;
		border-radius:25px;
		color: #E6E6E6;
		float: right;
		font-size: 13px;
		}
	.caidan-edit-detal{
		padding: 2px 0 0 4px;
	}	
	.titile-content{
		background-color: #FAFAFA;
		display: flex;
		font-size: 15px;
		font-family: Georgia;
		color: #00AA00;
		margin: 25px 0 0 0;
		height:40px;
		border-radius: 20px 20px 0 0;
		}
		.titile-content-detal{
			margin: 1px 2px 3px 11px;
			padding: 10px 0 0 47px;
			height:40px ;
			line-height: 45px;
			font-weight:bold;
		}
		.show-images{
			background-color: #FAFAFA;
		}
		.show-images-detal{
			margin: 0px 0px 10px 22px;
			float: left; 
			border-radius: 20rpx;
		}
</style>
