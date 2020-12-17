<template>
	<view class="ffGeorgia">
		<!-- 顶部文字 -->
		<view class="top-word bg-00AA00 fwBold coE6E6E6">
			<text>畅玩柳州</text>
		</view>
		<!-- 我的动态文字 -->
		<view class="active-line ">
		    <navigator url="../my/my" open-type="switchTab">
			        <image src="../../../static/images/Tabs/backKey.png" mode="aspectFill" style="width: 24px; height: 16px; padding: 8px 0 0 3px;"></image>
			    </navigator>
			<text class="active-word fwBold">我的动态</text>
		</view>
			
		<!-- 动态内容1 -->
		<view class="content-detail bg-fafafa">
			<!-- 用户头像，名称，时间 -->
			<view class="user-content">
				<image src="../../../static/images/Tabs/girlPhoto.png" mode="aspectFill" class="user-photo"></image>
				<view class="nameAndDay ffGeorgia">
					<view class="">
						<text>木春可可</text>
					</view>	
					
					<view>
						<text style="font-size: 13px;margin-left: 10px;">2020-12-16</text>
					</view>
				</view>
			</view>
			<!-- 发表内容 -->
			<view class="">
				<text style="font-size: 15px;padding: 10px 0 2px 33px;line-height: 42px;">柳州夜景真好看 ~  (*^▽^*)</text>
				<image src="../../../static/images/photo/photo1.jpg" mode="aspectFill" style="width: 300px;height: 190px;margin: 0 0 2px 10px;border-radius: 3px;"></image>
			</view>
			<!-- 评论 -->
			<view class="comment-detail">
				<view class="comment-item1">
					<input type="text" value="" placeholder="发表评论" style="margin-left: 20px;"/>
				</view>
				<view class="comment-item2">
						<view class="comment-count" style="width: 50px;">
							<image src="../../../static/images/Tabs/comImg.png" mode="aspectFill" style="width: 21px;height: 17px;margin-left: 5px;"></image>
							<view class="">评论10</view>
							
						</view>
						<view class="like-count"  style="width: 40px;">
							<image src="../../../static/images/Tabs/zanImg.png" mode="aspectFill" style="width: 21px;height: 17px;"></image>
							<view>赞 33</view>
						
						</view>
				</view>
			</view>
		</view>
		
			<!-- 动态内容2 -->
		<view class="content-detail bg-fafafa">
			<!-- 用户头像，名称，时间 -->
			<view class="user-content">
				<image src="../../../static/images/Tabs/touxiang1.png" mode="aspectFill" class="user-photo"></image>
				<view class="nameAndDay ffGeorgia">
					<view class="">
						<text>一只很靓的仔</text>
					</view>	
					<view>
						<text style="font-size: 13px;margin-left: 10px;">2020-12-10</text>
					</view>
				</view>
			</view>
			<!-- 发表内容 -->
			<view class="">
				<text style="font-size: 15px;padding: 10px 0 2px 33px;line-height: 42px;">不知道说什么好 ~  </text>
				<image src="../../../static/images/photo/photo4.jpg" mode="aspectFill" style="width: 300px;height: 190px;margin: 0 0 2px 10px;border-radius: 3px;"></image>
			</view>
			<!-- 评论 -->
			<view class="comment-detail">
				<view class="comment-item1">
					<input type="text" value="" placeholder="发表评论" style="margin-left: 20px;"/>
				</view>
				<view class="comment-item2">
						<view class="comment-count" style="width: 50px;">
							<image src="../../../static/images/Tabs/comImg.png" mode="aspectFill" style="width: 21px;height: 17px;margin-left: 5px;"></image>
							<view class="">评论22</view>
							
						</view>
						<view class="like-count"  style="width: 40px;">
							<image src="../../../static/images/Tabs/zanImg.png" mode="aspectFill" style="width: 21px;height: 17px;"></image>
							<view>赞 56</view>
						</view>
				</view>
			</view>
		</view>
		
		<!-- 动态内容3 -->
		<view class="content-detail bg-fafafa">
			<!-- 用户头像，名称，时间 -->
			<view class="user-content">
				<image src="../../../static/images/Tabs/touxiang3.png" mode="aspectFill" class="user-photo"></image>
				<view class="nameAndDay ffGeorgia">
					<view class="">
						<text>我是可爱怪</text>
					</view>	
					<view>
						<text style="font-size: 13px;margin-left: 10px;">2020-11-23</text>
					</view>
				</view>
			</view>
			<!-- 发表内容 -->
			<view class="">
				<text style="font-size: 15px;padding: 10px 0 2px 33px;line-height: 42px;">暖光城市-柳州 ~  </text>
				<image src="../../../static/images/photo/photo2.png" mode="aspectFill" style="width: 300px;height: 190px;margin: 0 0 2px 10px;border-radius: 3px;"></image>
			</view>
			<!-- 评论 -->
			<view class="comment-detail">
				<view class="comment-item1">
					<input type="text" value="" placeholder="发表评论" style="margin-left: 20px;"/>
				</view>
				<view class="comment-item2">
						<view class="comment-count" style="width: 50px;">
							<image src="../../../static/images/Tabs/comImg.png" mode="aspectFill" style="width: 21px;height: 17px;margin-left: 5px;"></image>
							<view class="">评论8</view>
							
						</view>
						<view class="like-count"  style="width: 40px;">
							<image src="../../../static/images/Tabs/zanImg.png" mode="aspectFill" style="width: 21px;height: 17px;"></image>
							<view>赞 66</view>
						</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			// 点击返回箭头 
				backClick :function() {
					console.log("点击了返回图....");
					uni.navigateTo({
						url:'../my/my'
					});
				}
			}
		}
	
</script>

<style>
	.top-word{
		height: 50px;
		font-size: 22px;
		line-height: 50px;
		padding: 0 0 0 113px;
	}
	.active-line{
		display: flex;
		background-color: #C0C0C0;
		height: 32px;
		}
	.active-word{
		color: #333333;
		font-size: 17px;
		line-height: 30px;
		padding: 0 0 0 95px;
	}
	.content-detail{
		border-bottom: 1px solid #C8C7CC;
		padding-bottom: 8px;
	}
	.user-content{
		display: flex;
	}
	.user-photo{
		height: 45px;
		width: 45px;
		border-radius: 20px;
		margin: 15px 0px 2px 8px;
	}
	.nameAndDay{
		margin-left: 5px;
		padding: 17px 0px 2px 3px;
		color: #333333;
	}
	.comment-item1{
		margin: 5px 20px 5px 20px;
		width: 190px;
		height: 25px;
		background-color: #C8C7CC;
		font-size: 13px;
		border-radius: 20px;
		color: #333333;
	}
	.comment-detail{
		display: flex;
	}
	.comment-item2{
		display: flex;
		font-size: 12px;
	}
</style>
